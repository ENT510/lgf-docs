import { Client, IntentsBitField } from 'discord.js';
import { NextApiRequest, NextApiResponse } from 'next';

const Bot = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

Bot.login('MTIyNDI3OTYzODQxOTcwMTg1NA.G5xpMx.bxJabFvBvLEIpT4mPkdApUa_PzSdGlDkBgPBC8');

Bot.once('ready', () => {
    console.log(`Logged in as ${Bot.user.tag}!`);
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { userId, message } = req.body;

        try {
            const user = await Bot.users.fetch(userId);

            if (!user) {
                return res.status(404).json({ error: 'Utente non trovato' });
            }

            const direct = await user.createDM();

            const messages = await direct.messages.fetch({ limit: 100 });

            for (const msg of Array.from(messages.values())) {
                await msg.delete();
            }

            await user.send(message);
            return res.status(200).json({ message: 'Messaggio inviato con successo all\'utente!' });

        } catch (error) {
            return res.status(500).json({ error: 'Errore durante l\'invio del messaggio' });
        }

    } else {
        // Other HTTP method
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

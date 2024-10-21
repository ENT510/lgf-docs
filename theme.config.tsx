import React from 'react';
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs';
import { useRouter } from 'next/router';

import { IconBrandDiscordFilled } from '@tabler/icons-react';

const Copyright = new Date().getFullYear();

function Meta() {
  const { asPath } = useRouter();
  const { frontMatter, title } = useConfig();
  const url = `https://lgf-docs.vercel.app/${asPath}`;
  const description = frontMatter.description || "Documentation for FiveM Legacy's resources";

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=0.8" />
      <link rel="icon" type="image/x-icon" href="/img/Ico.ico" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:url" content={url} />
    </>
  );
}

function Url() {
  const { asPath } = useRouter();
  const arr = asPath.replace(/[-_]/g, ' ').split('/');
  const category = (arr[1][0] !== '#' && arr[1]) || 'Legacy Scripts';
  const rawTitle = arr[arr.length - 1];
  const title = /[a-z]/.test(rawTitle) && /[A-Z]/.test(rawTitle) ? rawTitle : '%s';

  return {
    titleTemplate: `${title} - ${rawTitle === category ? 'Documentation' : category.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())
      }`,
  };
}

const Config: DocsThemeConfig = {
  logo: (
    <div
      style={{
        paddingLeft: '40px',
        lineHeight: '38px',
        background: "url('/img/logo/White.png') no-repeat left",
        backgroundSize: '38px',
        fontWeight: 550,
      }}
    >
      Legacy Scripts
    </div>
  ),
  project: {
    link: 'https://github.com/Ent510',
  },
  chat: {
    link: 'https://discord.gg/wd5PszPA2p',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: `Legacy Scripts ©${Copyright}`,
  },
  primaryHue: { dark: 50, light: 100 },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  editLink: {
    component: null
  },
  feedback: {
    content: null
  },
  banner: {
    key: 'Discord',
    text: (
      <a href="https://discord.gg/wd5PszPA2p" target="_blank">
        <IconBrandDiscordFilled style={{
          position: 'absolute',
          left: '645px'
        }} /> Check News On Discord →
      </a>
    )
  },
  head: Meta,
  useNextSeoProps: Url,
};

export default Config;

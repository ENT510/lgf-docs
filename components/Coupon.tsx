import React from "react";
import { IconCheck, IconCopy } from '@tabler/icons-react';

const Container: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '20px',
    padding: '10px',
    marginTop: '20px'
};

const Card: React.CSSProperties = {
    background: 'rgba(230, 191, 0, 0.2)',
    color: '#fff',
    textAlign: 'center',
    borderRadius: '15px',
    boxShadow: '0 10px 10px 0 rgba(0, 0, 0, 0.15)',
    position: 'relative',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
};

const Logo: React.CSSProperties = {
    width: '50px',
    borderRadius: '8px',
    marginBottom: '15px',
    padding: '0.1px',
    background: 'rgb(230, 191, 0)'
};

const Table: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    margin: '5px auto',
    width: 'fit-content',
};

const Title: React.CSSProperties = {
    fontSize: '27px',
    fontWeight: 'bold'
};

const Percents: React.CSSProperties = {
    fontSize: '0.875rem',
    alignSelf: 'flex-end',
    color: '#f87171',
    fontWeight: 'bold',
    marginTop: '1rem',
};

const Valid: React.CSSProperties = {
    fontSize: '0.875rem',
    alignSelf: 'center',
    color: '#34d399',
    fontWeight: 'bold',
    marginTop: '1rem',
};

const CircleBase: React.CSSProperties = {
    background: 'rgba(17, 17, 17, 1)',
    width: '25px',
    height: '25px',
    borderRadius: '50%',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
};

const Circle1: React.CSSProperties = {
    ...CircleBase,
    left: '-10px',
};

const Circle2: React.CSSProperties = {
    ...CircleBase,
    right: '-10px',
};

interface CouponItem {
    image: string;
    name: string;
    link: string;
    code: string;
    percent: string;
    to: string;
}

interface CouponProps {
    data: CouponItem[];
}

const Coupon: React.FC<CouponProps> = ({ data }) => {
    const [copied, setCopied] = React.useState(false)

    function CopyCode(code: string) {
        setCopied(true)
        navigator.clipboard.writeText(code).then()
        setTimeout(() => setCopied(false), 1500)
    }

    return (
        <div style={Container}>
            {data.map((item, index) => (
                <div style={Card} key={index}>
                    <img src={item.image} style={Logo} />
                    <h1 style={Title}>{item.name}</h1>
                    <div style={Table}>
                        <p>Code: <code>{item.code}</code>
                            {!copied ? <button onClick={() => CopyCode(item.code)}><IconCopy size={16} /></button> : <button><IconCheck size={16} /></button>}
                        </p>
                    </div>
                    <p style={Valid}>Valid Till: {item.to}</p>
                    <p style={Percents}>{item.percent}% off</p>
                    <div style={Circle1}></div>
                    <div style={Circle2}></div>
                </div>
            ))}
        </div>
    );
}

export default Coupon;

import React from 'react';
import { IconBrandGithub, IconTag, IconFileText, IconDownload, IconBrandNpm } from '@tabler/icons-react';

interface Props {
  icon?: React.ReactNode;
  children?: React.ReactNode;
  side?: 'left' | 'right';
  link?: string;
  label?: string;
}

const buttonStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.375rem',
  padding: '0.375rem',
  borderRadius: '0.25rem',
  border: '1px solid black',
  color: 'black',
  textDecoration: 'none',
  transition: 'background-color 0.3s, color 0.3s',
  marginTop: '0.5rem',
  width: 'fit-content',
  backgroundColor: 'rgba(230, 191, 0, 1)',
};

const buttonHoverStyle: React.CSSProperties = {
  backgroundColor: 'rgba(230, 191, 0, 0.3)',
  color: 'white',
};

const darkModeStyle: React.CSSProperties = {
  borderColor: 'white',
  color: 'white',
};

const darkModeHoverStyle: React.CSSProperties = {
  backgroundColor: 'white',
  color: 'black',
};

const Button: React.FC<Props> = ({ side = 'left', children, icon, link }) => {
  return (
    <div style={{ height: 'fit-content', width: 'fit-content' }}>
      <a
        href={link}
        style={buttonStyle}
        onMouseOver={(e) => {
          (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor);
          (e.currentTarget.style.color = buttonHoverStyle.color);
        }}
        onMouseOut={(e) => {
          (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor);
          (e.currentTarget.style.color = buttonStyle.color);
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
          {side === 'left' && <div>{icon}</div>}
          {children}
          {side === 'right' && <div>{icon}</div>}
        </div>
      </a>
    </div>
  );
};

export default Button;

export function GhButton(props: Props) {
  return (
    <Button icon={<IconBrandGithub />} side={props.side} link={props.link}>
      {props.label || "Github"}
    </Button>
  );
}

export function DocButton(props: Props) {
  return (
    <Button icon={<IconFileText />} side={props.side} link={props.link}>
      {props.label || "Documentation"}
    </Button>
  );
}

export function DownloadButton(props: Props) {
  return (
    <Button icon={<IconDownload />} side={props.side} link={props.link}>
      {props.label || "Download"}
    </Button>
  );
}

export function ReleaseButton(props: Props) {
  return (
    <Button icon={<IconTag />} side={props.side} link={props.link}>
      {props.label || "Releases"}
    </Button>
  );
}

export function NpmButton(props: Props) {
  return (
    <Button icon={<IconBrandNpm />} side={props.side} link={props.link}>
      {props.label || "Package"}
    </Button>
  );
}

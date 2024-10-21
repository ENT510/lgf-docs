import { useRouter } from 'next/router';
import React from 'react';
import { IconWorldExclamation } from '@tabler/icons-react';

const Container: React.CSSProperties = {
  display: 'grid',
  justifyContent: 'center',
  justifyItems: 'center',
  alignContent: 'center',
  alignItems: 'center',
  height: '100vh',
  width: '100vw',
  backgroundColor: '#1a202c',
};

const Ico: React.CSSProperties = {
  marginBottom: '3rem',
  color: '#fff'
};

const Heading: React.CSSProperties = {
  fontSize: '4rem',
  color: '#fff',
  top: '-30px',
  position: 'relative'
};

const Subheading: React.CSSProperties = {
  fontSize: '1.25rem',
  color: '#fff',
  top: '-30px',
  position: 'relative'
};

const Error: React.FC = () => {
  const router = useRouter();

  React.useEffect(() => {
    const timeout = setTimeout(() => router.push('/'), 1500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div style={Container}>
      <IconWorldExclamation size={100} style={Ico} />
      <p style={Heading}>404</p>
      <p style={Subheading}>Redirecting...</p>
    </div>
  );
};

export default Error;

import React from 'react';
import { IconBrandTelegram } from '@tabler/icons-react';

const Card: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1rem',
  gap: '0.5rem',
  backgroundColor: '#2c2f33',
  borderRadius: '0.8rem',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  textAlign: 'center',
  color: '#f6f6f6',
  width: '100%',
  maxWidth: '200px',
};

const Img: React.CSSProperties = {
  borderRadius: '0.2rem',
  backgroundColor: '#23272a',
  boxShadow: '0 0 0.3rem rgba(0, 0, 0, 0.5)',
  height: '5rem',
  width: '5rem',
  objectFit: 'cover',
};

const Button: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',
  width: '100%',
  padding: '0.5rem',
  borderRadius: '0.4rem',
  backgroundColor: 'rgba(230, 191, 0, 0.5)',
  color: '#f6f6f6',
  border: 'none',
  fontWeight: '600',
  fontSize: '0.9rem',
  cursor: 'pointer',
};

const Container: React.CSSProperties = {
  marginTop: '2rem',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
  gap: '1.5rem',
  justifyContent: 'center',
  padding: '0 1rem',
};

const NameText: React.CSSProperties = {
  fontSize: '1.1rem',
  fontWeight: '700',
  color: '#f6f6f6',
  margin: '0',
};

const RoleText: React.CSSProperties = {
  fontSize: '0.9rem',
  fontWeight: '500',
  color: '#99aab5',
  margin: '0',
  fontStyle: 'italic',
};

function sendMessage(userId: string) {
  fetch('/api/sendMessage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userId, message: 'Hello!' }),
  })
    .then((response) => {
      if (!response.ok) {
        return response.json().then((error) => {
          throw new Error(error.error || 'Unknown error');
        });
      }
      return response.json().then((result) => {
        alert(result.message);
        return result;
      });
    })
    .catch((error) => {
      alert(error);
    });
}

interface SupportItem {
  image: string;
  name: string;
  role: string;
  id: string;
}

interface SupportProps {
  data: SupportItem[];
}

const Support: React.FC<SupportProps> = ({ data }) => {
  return (
    <div style={Container}>
      {data.map((item, index) => (
        <div style={Card} key={index}>
          <img src={item.image} alt={`${item.name}'s avatar`} style={Img} />
          <p style={NameText}>{item.name}</p>
          <p style={RoleText}>{item.role}</p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            style={{ width: '100%' }}
            onClick={() => sendMessage(item.id)}
          >
            <button style={Button}>
              <IconBrandTelegram size={18} />
              Contact
            </button>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Support;

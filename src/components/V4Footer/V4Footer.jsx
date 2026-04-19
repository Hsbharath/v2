import React from 'react';

const V4Footer = () => {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '2rem 3rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'relative',
      zIndex: 1,
      maxWidth: '1200px',
      margin: '0 auto',
    }}>
      <div style={{
        fontFamily: "'Orbitron', monospace",
        fontSize: '0.8rem',
        color: 'var(--muted)',
        letterSpacing: '3px',
      }}>
        HS.BHARATH // v2.0
      </div>
      <div style={{
        fontFamily: "'Share Tech Mono', monospace",
        fontSize: '0.6rem',
        color: 'var(--muted)',
        letterSpacing: '1px',
        textAlign: 'right',
      }}>
        Built with Next.js + Tailwind · Hosted on Vercel<br />
        Design inspiration:{' '}
        <a
          href='https://www.friendsfromthecity.com/'
          target='_blank'
          rel='noopener noreferrer'
          style={{ color: 'var(--cyan2)', textDecoration: 'none' }}
        >
          friendsfromthecity.com
        </a>
      </div>
    </footer>
  );
};

export default V4Footer;

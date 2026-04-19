'use client';

import Link from 'next/link';
import React from 'react';

const V4Header = ({
  scrollToSkills,
  scrollToExperience,
  scrollToEducation,
  scrollToContact,
}) => {
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        background: 'rgba(5,10,15,0.92)',
        borderBottom: '1px solid var(--border)',
        backdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 3rem',
        height: '60px',
      }}
    >
      <Link
        href='/'
        style={{
          fontFamily: "'Orbitron', monospace",
          fontSize: '1.1rem',
          fontWeight: 900,
          color: 'var(--cyan)',
          letterSpacing: '3px',
          textDecoration: 'none',
        }}
      >
        HS<span style={{ color: 'var(--accent)' }}>.</span>BHARATH
      </Link>

      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
        {[
          { label: 'Bio', action: null, href: '#bio' },
          { label: 'Skills', action: scrollToSkills },
          { label: 'Experience', action: scrollToExperience },
          { label: 'Education', action: scrollToEducation },
          { label: 'Contact', action: scrollToContact },
        ].map(({ label, action, href }) => (
          <li key={label}>
            <a
              href={href || '#'}
              onClick={action ? (e) => { e.preventDefault(); action(); } : undefined}
              className='nav-link'
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontFamily: "'Share Tech Mono', monospace",
          fontSize: '0.65rem',
          color: 'var(--accent)',
          letterSpacing: '1px',
        }}
      >
        <div className='status-dot' />
        SYS ONLINE
      </div>
    </nav>
  );
};

export default V4Header;

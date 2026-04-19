'use client';

import React, { useState, useEffect } from 'react';
import V4Cursor from '../V4Cursor/V4Cursor';
import V4Bio from '../V4Bio/V4Bio';
import V4Skills from '../V4Skills/V4Skills';
import V4Experience from '../V4Experience/V4Experience';
import V4Education from '../V4Education/V4Education';
import V4Contact from '../V4Contact/V4Contact';

const NAV = ['SKILLS', 'EXPERIENCE', 'EDUCATION', 'CONTACT'];

const V4Main = () => {
  const [panel, setPanel] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const openPanel = (name) => { setPanel(name); setMenuOpen(false); };
  const closePanel = () => { setPanel(null); setMenuOpen(false); };

  return (
    <>
      <V4Cursor />

      {/* Fixed nav */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
        background: 'rgba(5,10,15,0.92)',
        borderBottom: '1px solid var(--border)',
        backdropFilter: 'blur(12px)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 1.5rem', height: '60px',
      }}>
        {/* Logo */}
        <button onClick={closePanel} style={{
          background: 'none', border: 'none', padding: 0,
          fontFamily: "'Orbitron', monospace",
          fontSize: isMobile ? '0.85rem' : '1.1rem', fontWeight: 900,
          color: 'var(--cyan)', letterSpacing: isMobile ? '1px' : '3px',
        }}>
          HS<span style={{ color: 'var(--accent)' }}>.</span>BHARATH
        </button>

        {/* Desktop nav links */}
        {!isMobile && (
          <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}>
            <li>
              <button onClick={closePanel} style={{
                background: 'none', border: 'none', padding: '0 0 2px',
                fontFamily: "'Share Tech Mono', monospace",
                fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase',
                color: panel === null ? 'var(--cyan)' : 'var(--muted)',
                borderBottom: panel === null ? '1px solid var(--cyan)' : '1px solid transparent',
                transition: 'color 0.2s',
              }}>BIO</button>
            </li>
            {NAV.map(name => (
              <li key={name}>
                <button onClick={() => openPanel(name)} style={{
                  background: 'none', border: 'none', padding: '0 0 2px',
                  fontFamily: "'Share Tech Mono', monospace",
                  fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase',
                  color: panel === name ? 'var(--cyan)' : 'var(--muted)',
                  borderBottom: panel === name ? '1px solid var(--cyan)' : '1px solid transparent',
                  transition: 'color 0.2s',
                }}>{name}</button>
              </li>
            ))}
          </ul>
        )}

        {/* Desktop status */}
        {!isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: "'Share Tech Mono', monospace", fontSize: '0.65rem', color: 'var(--accent)', letterSpacing: '1px' }}>
            <div className='status-dot' /> SYS ONLINE
          </div>
        )}

        {/* Mobile: status dot + hamburger */}
        {isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: "'Share Tech Mono', monospace", fontSize: '0.6rem', color: 'var(--accent)', letterSpacing: '1px' }}>
              <div className='status-dot' /> ONLINE
            </div>
            <button
              onClick={() => setMenuOpen(o => !o)}
              style={{
                background: 'none', border: '1px solid var(--border)',
                color: 'var(--muted)', width: '36px', height: '36px',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '5px',
                padding: '6px',
              }}
            >
              <span style={{ display: 'block', width: '18px', height: '1.5px', background: menuOpen ? 'var(--cyan)' : 'var(--muted)', transition: 'all 0.2s', transform: menuOpen ? 'translateY(6.5px) rotate(45deg)' : 'none' }} />
              <span style={{ display: 'block', width: '18px', height: '1.5px', background: menuOpen ? 'transparent' : 'var(--muted)', transition: 'all 0.2s' }} />
              <span style={{ display: 'block', width: '18px', height: '1.5px', background: menuOpen ? 'var(--cyan)' : 'var(--muted)', transition: 'all 0.2s', transform: menuOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none' }} />
            </button>
          </div>
        )}
      </nav>

      {/* Mobile dropdown menu */}
      {isMobile && (
        <div style={{
          position: 'fixed', top: '60px', left: 0, right: 0, zIndex: 199,
          background: 'rgba(5,10,15,0.97)',
          borderBottom: '1px solid var(--border)',
          backdropFilter: 'blur(12px)',
          transform: menuOpen ? 'translateY(0)' : 'translateY(-110%)',
          transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          display: 'flex', flexDirection: 'column',
          padding: '0.5rem 0',
        }}>
          {[{ label: 'BIO', action: closePanel }, ...NAV.map(n => ({ label: n, action: () => openPanel(n) }))].map(({ label, action }) => (
            <button key={label} onClick={action} style={{
              background: 'none', border: 'none',
              padding: '0.9rem 1.5rem',
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: '0.8rem', letterSpacing: '3px', textTransform: 'uppercase',
              color: (label === 'BIO' ? panel === null : panel === label) ? 'var(--cyan)' : 'var(--muted)',
              textAlign: 'left',
              borderLeft: (label === 'BIO' ? panel === null : panel === label) ? '2px solid var(--cyan)' : '2px solid transparent',
              transition: 'color 0.2s',
            }}>{label}</button>
          ))}
        </div>
      )}

      {/* Base layer — Bio always mounted, dims when panel open */}
      <div style={{
        position: 'fixed', inset: 0,
        transition: 'opacity 0.4s ease',
        opacity: panel ? 0.15 : 1,
        pointerEvents: panel ? 'none' : 'auto',
      }}>
        <V4Bio scrollAction={(e) => { e.preventDefault(); openPanel('CONTACT'); }} />
      </div>

      {/* Panel overlay — slides in from right */}
      <div style={{
        position: 'fixed', inset: 0,
        zIndex: 100,
        transform: panel ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
        background: 'var(--bg)',
        overflowY: 'auto',
      }}>
        {/* Close button */}
        {panel && (
          <button onClick={closePanel} style={{
            position: 'fixed', top: '16px', right: '3rem',
            zIndex: 300,
            background: 'var(--surface)', border: '1px solid var(--border)',
            color: 'var(--muted)', fontFamily: "'Share Tech Mono', monospace",
            fontSize: '0.65rem', letterSpacing: '2px',
            padding: '6px 14px',
            clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))',
            display: 'flex', alignItems: 'center', gap: '8px',
            transition: 'color 0.2s, border-color 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.color = 'var(--cyan)'; e.currentTarget.style.borderColor = 'var(--cyan)'; }}
          onMouseLeave={e => { e.currentTarget.style.color = 'var(--muted)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
          >
            <svg width='10' height='10' viewBox='0 0 10 10' fill='none'>
              <path d='M1 9L9 1M1 1l8 8' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round'/>
            </svg>
            CLOSE
          </button>
        )}

        {/* Render the active panel */}
        <div style={{ paddingTop: '60px' }}>
          {panel === 'SKILLS'     && <V4Skills />}
          {panel === 'EXPERIENCE' && <V4Experience />}
          {panel === 'EDUCATION'  && <V4Education />}
          {panel === 'CONTACT'    && <V4Contact />}
        </div>
      </div>
    </>
  );
};

export default V4Main;

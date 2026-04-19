'use client';

import React, { useState, useEffect } from 'react';
import V4Cursor from '../V4Cursor/V4Cursor';
import V4Skills from '../V4Skills/V4Skills';
import V4Experience from '../V4Experience/V4Experience';
import V4Education from '../V4Education/V4Education';
import V4Contact from '../V4Contact/V4Contact';
import BotChat from '../BotChat/BotChat';

// Typewriter — loops forever, cursor always visible while cycling
const useTyped = (strings, speed = 80, pause = 1600) => {
  const [display, setDisplay] = useState('');
  const [idx, setIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = strings[idx % strings.length];
    let timeout;
    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx(c => c + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx(c => c - 1), speed / 2);
    } else {
      setDeleting(false);
      setIdx(i => (i + 1) % strings.length);
    }
    setDisplay(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, idx, strings, speed, pause]);

  return { text: display, typing: true };
};

const StatBox = ({ value, label }) => (
  <div style={{
    background: 'var(--surface)',
    border: '1px solid var(--border)',
    padding: '0.85rem 1.2rem',
    clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
    textAlign: 'center',
  }}>
    <div style={{ fontFamily: "'Orbitron', monospace", fontSize: '1.68rem', fontWeight: 900, color: 'var(--cyan)', lineHeight: 1, marginBottom: '5px' }}>{value}</div>
    <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.56rem', color: 'var(--muted)', letterSpacing: '2px', textTransform: 'uppercase' }}>{label}</div>
  </div>
);

const JOURNEY = [
  { label: 'Origin', value: 'Bengaluru, India' },
  { label: 'Prev', value: 'Kent, OH' },
  { label: 'Prev', value: 'Cleveland, OH' },
  { label: 'Now', value: 'Seattle, WA', accent: true },
];

const TYPED_STRINGS = [
  'UI / UX BUILDER',
  'FRONT-END DEVELOPER',
  'BACK-END DEVELOPER',
  'FULL STACK DEVELOPER',
  'AI ENGINEER (FUTURE)',
];

const NAV_ITEMS = ['BIO', 'SKILLS', 'EXPERIENCE', 'EDUCATION', 'CONTACT'];

// Bio content as a stable top-level component — NOT defined inside V4Main
const BioPanelContent = ({ isMobile, onContact, onStack }) => {
  const { text: typed, typing } = useTyped(TYPED_STRINGS);
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      padding: isMobile ? '1.5rem 2.5%' : '2rem 2.5rem 2rem 3rem',
      width: isMobile ? '95%' : '100%',
      margin: isMobile ? '0 auto' : 0,
      minHeight: '100%',
    }}>
      <div style={{ position: 'absolute', top: '10%', left: '5%', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(0,229,255,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

      {/* Status */}
      <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.6rem', color: 'var(--cyan2)', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span style={{ display: 'inline-block', width: '20px', height: '1px', background: 'var(--cyan2)' }} />
        9 YRS // AVAILABLE FOR HIRE
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', color: 'var(--accent)' }}>
          <span className='status-dot' /> ONLINE
        </span>
      </div>

      {/* Name */}
      <h1 style={{ fontFamily: "'Orbitron', monospace", fontWeight: 900, lineHeight: 1.05, color: '#fff', margin: '0 0 0.7rem' }}>
        <span style={{ display: 'block', fontSize: 'clamp(0.75rem, 0.9vw, 0.9rem)', color: 'var(--muted)', fontWeight: 400, letterSpacing: '3px', fontFamily: "'Share Tech Mono', monospace", marginBottom: '0.25rem' }}>I&apos;m</span>
        <span style={{ display: 'block', fontSize: 'clamp(2rem, 3.5vw, 3.5rem)', letterSpacing: '1px' }}>Bharath</span>
        <span style={{ display: 'block', fontSize: 'clamp(1rem, 2vw, 2rem)', letterSpacing: '1px', color: 'var(--cyan)' }}>Hunkunda Sreenivasa</span>
      </h1>

      {/* Typewriter — cursor only shown while actively typing */}
      <div style={{ fontFamily: "'Orbitron', monospace", fontSize: 'clamp(0.7rem, 1.3vw, 1.15rem)', fontWeight: 700, color: 'var(--cyan)', marginBottom: '1rem', minHeight: '1.5rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
        <span style={{ color: 'var(--accent)', opacity: 0.7 }}>_</span>
        {typed}
        {typing && <span style={{ display: 'inline-block', width: '2px', height: '1em', background: 'var(--cyan)', animation: 'blink 1s step-end infinite', verticalAlign: 'middle' }} />}
      </div>

      {/* Stats — 2×2 on mobile, 4-across on desktop */}
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)', gap: '0.55rem', marginBottom: '1rem' }}>
        <StatBox value='9+' label='Years Exp' />
        <StatBox value='3' label='Companies' />
        <StatBox value='25+' label='Technologies' />
        <StatBox value='∞' label='Problems Solved' />
      </div>

      {/* Description */}
      <p style={{ fontSize: '0.92rem', color: '#c8dde8', lineHeight: 1.75, marginBottom: '1rem', borderLeft: '2px solid rgba(0,229,255,0.35)', paddingLeft: '0.9rem' }}>
        Front-end focused, full-stack capable. Building{' '}
        <strong style={{ color: '#00e5ff', fontWeight: 600 }}>responsive web applications</strong>{' '}
        with sharp attention to usability and system design.{' '}
        <strong style={{ color: '#39ff14', fontWeight: 700 }}>Available to Hire.</strong>
      </p>

      {/* CTAs */}
      <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '1.2rem' }}>
        {[
          { label: 'Get In Touch', primary: true, action: onContact },
          { label: 'View Stack', primary: false, action: onStack },
        ].map(({ label, primary, action }) => (
          <button key={label} onClick={action} style={{
            display: 'inline-flex', alignItems: 'center', gap: '7px',
            padding: '0.5rem 1.2rem', background: 'transparent',
            border: `1px solid ${primary ? 'var(--cyan)' : 'var(--border)'}`,
            color: primary ? 'var(--cyan)' : 'var(--muted)',
            fontFamily: "'Share Tech Mono', monospace",
            fontSize: '0.65rem', letterSpacing: '2px', textTransform: 'uppercase',
            transition: 'all 0.2s',
            clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = primary ? 'rgba(0,229,255,0.1)' : 'transparent'; e.currentTarget.style.borderColor = primary ? 'var(--cyan)' : 'var(--muted)'; e.currentTarget.style.color = primary ? 'var(--cyan)' : 'var(--text)'; if (primary) e.currentTarget.style.boxShadow = '0 0 20px rgba(0,229,255,0.15)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = primary ? 'var(--cyan)' : 'var(--border)'; e.currentTarget.style.color = primary ? 'var(--cyan)' : 'var(--muted)'; e.currentTarget.style.boxShadow = 'none'; }}
          >
            {primary && <svg width='10' height='10' viewBox='0 0 12 12' fill='none'><path d='M1 6h10M7 2l4 4-4 4' stroke='currentColor' strokeWidth='1.5'/></svg>}
            {label}
          </button>
        ))}
      </div>

      {/* Journey */}
      <div style={{ background: 'rgba(0,229,255,0.07)', border: '1px solid rgba(0,229,255,0.25)', padding: '0.7rem 1rem', clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))', width: '100%' }}>
        <span style={{ display: 'block', fontFamily: "'Share Tech Mono', monospace", fontSize: '0.55rem', color: '#00e5ff', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 700 }}>PATH</span>
        <div style={{ display: 'flex', alignItems: 'center', flexWrap: isMobile ? 'wrap' : 'nowrap', gap: isMobile ? '6px' : '4px', justifyContent: isMobile ? 'flex-start' : 'space-between' }}>
          {JOURNEY.map((stop, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', flex: isMobile ? '0 0 auto' : '1', justifyContent: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0.3rem 0.8rem', width: '100%', background: stop.accent ? 'rgba(57,255,20,0.15)' : 'rgba(0,229,255,0.08)', border: stop.accent ? '1px solid rgba(57,255,20,0.6)' : '1px solid rgba(0,229,255,0.2)', borderRadius: '2px' }}>
                <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.5rem', color: stop.accent ? '#39ff14' : '#00e5ff', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '2px' }}>{stop.label}</span>
                <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.72rem', color: stop.accent ? '#39ff14' : '#e0f0f8', letterSpacing: '0.5px', fontWeight: stop.accent ? 700 : 500, textShadow: stop.accent ? '0 0 10px rgba(57,255,20,0.7)' : 'none', whiteSpace: 'nowrap' }}>{stop.value}</span>
              </div>
              {i < JOURNEY.length - 1 && !isMobile && (
                <svg width='14' height='8' viewBox='0 0 14 8' fill='none' style={{ opacity: 0.7, margin: '0 4px', flexShrink: 0 }}>
                  <path d='M0 4h10M7 1l4 3-4 3' stroke='#00e5ff' strokeWidth='1.2'/>
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const V4Main = () => {
  const [section, setSection] = useState('BIO');
  const [chatOpen, setChatOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <>
      <V4Cursor />

      {/* Fixed top bar */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
        background: 'rgba(5,10,15,0.92)',
        borderBottom: '1px solid var(--border)',
        backdropFilter: 'blur(12px)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 1.5rem', height: '60px',
      }}>
        <button onClick={() => setSection('BIO')} style={{
          background: 'none', border: 'none', padding: 0,
          fontFamily: "'Orbitron', monospace",
          fontSize: isMobile ? '0.85rem' : '1.1rem', fontWeight: 900,
          color: 'var(--cyan)', letterSpacing: isMobile ? '1px' : '3px',
        }}>
          HS<span style={{ color: 'var(--accent)' }}>.</span>BHARATH
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: "'Share Tech Mono', monospace", fontSize: '0.62rem', color: 'var(--accent)', letterSpacing: '1px' }}>
          <div className='status-dot' /> SYS ONLINE
        </div>
      </nav>

      {/* 2-column layout */}
      <div style={{
        position: 'fixed', inset: 0,
        paddingTop: '60px',
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      }}>
        {/* LEFT COLUMN */}
        <div style={{
          display: 'flex', flexDirection: 'column',
          height: '100%',
          borderRight: isMobile ? 'none' : '1px solid var(--border)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Tab bar */}
          <div style={{
            display: 'flex', overflowX: 'auto', flexShrink: 0,
            borderBottom: '1px solid var(--border)',
            background: 'rgba(5,10,15,0.6)',
          }} className='hide-scrollbar'>
            {NAV_ITEMS.map(name => (
              <button key={name} onClick={() => setSection(name)} style={{
                background: section === name ? 'rgba(0,229,255,0.04)' : 'none',
                border: 'none',
                padding: '0.7rem 1.2rem',
                fontFamily: "'Share Tech Mono', monospace",
                fontSize: '0.68rem', letterSpacing: '2px', textTransform: 'uppercase',
                color: section === name ? 'var(--cyan)' : 'var(--muted)',
                borderBottom: section === name ? '2px solid var(--cyan)' : '2px solid transparent',
                whiteSpace: 'nowrap', flexShrink: 0,
                transition: 'color 0.2s',
              }}>{name}</button>
            ))}
          </div>

          {/* All panels always mounted — shown/hidden via display */}
          <div style={{ flex: 1, overflowY: 'auto', position: 'relative' }}>

            <div style={{ display: section === 'BIO' ? 'block' : 'none', height: '100%' }}>
              <BioPanelContent
                isMobile={isMobile}
                onContact={() => setSection('CONTACT')}
                onStack={() => setSection('SKILLS')}
              />
            </div>

            <div style={{ display: section === 'SKILLS' ? 'block' : 'none' }}>
              <V4Skills />
            </div>

            <div style={{ display: section === 'EXPERIENCE' ? 'block' : 'none' }}>
              <V4Experience />
            </div>

            <div style={{ display: section === 'EDUCATION' ? 'block' : 'none' }}>
              <V4Education />
            </div>

            <div style={{ display: section === 'CONTACT' ? 'block' : 'none' }}>
              <V4Contact />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN — chatbot, desktop only */}
        {!isMobile && (
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
            <BotChat />
          </div>
        )}
      </div>

      {/* Mobile: chatbot overlay */}
      {isMobile && (
        <div style={{
          position: 'fixed', inset: 0,
          zIndex: 400,
          paddingTop: '60px',
          transform: chatOpen ? 'translateY(0)' : 'translateY(100%)',
          transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        }}>
          <BotChat onClose={() => setChatOpen(false)} />
        </div>
      )}

      {/* Mobile: FAB */}
      {isMobile && (
        <button
          onClick={() => setChatOpen(o => !o)}
          style={{
            position: 'fixed', bottom: '24px', right: '20px',
            zIndex: 450,
            width: '54px', height: '54px',
            background: 'rgba(5,10,15,0.95)',
            border: `1.5px solid ${chatOpen ? 'rgba(0,229,255,0.6)' : 'rgba(57,255,20,0.5)'}`,
            borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: chatOpen ? '0 0 18px rgba(0,229,255,0.3)' : '0 0 18px rgba(57,255,20,0.25)',
            transition: 'border-color 0.2s, box-shadow 0.2s',
          }}
        >
          {chatOpen ? (
            <svg width='18' height='18' viewBox='0 0 18 18' fill='none'>
              <path d='M2 16L16 2M2 2l14 14' stroke='var(--cyan)' strokeWidth='2' strokeLinecap='round'/>
            </svg>
          ) : (
            <svg width='28' height='28' viewBox='0 0 32 32' fill='none'>
              <line x1='16' y1='1' x2='16' y2='5' stroke='#39ff14' strokeWidth='1.5' strokeLinecap='round'/>
              <circle cx='16' cy='1' r='1.5' fill='#39ff14'/>
              <rect x='4' y='5' width='24' height='19' rx='3' fill='#0b1520' stroke='#39ff14' strokeWidth='1.2'/>
              <rect x='8' y='10' width='5' height='4' rx='1' fill='#39ff14' opacity='0.9'/>
              <rect x='19' y='10' width='5' height='4' rx='1' fill='#39ff14' opacity='0.9'/>
              <rect x='9' y='17' width='14' height='2.5' rx='1' fill='none' stroke='#39ff14' strokeWidth='1'/>
              <rect x='11' y='17.5' width='2.5' height='1.5' rx='0.3' fill='#39ff14' opacity='0.7'/>
              <rect x='14.75' y='17.5' width='2.5' height='1.5' rx='0.3' fill='#39ff14' opacity='0.7'/>
              <rect x='18.5' y='17.5' width='2.5' height='1.5' rx='0.3' fill='#39ff14' opacity='0.7'/>
            </svg>
          )}
          {!chatOpen && (
            <span style={{
              position: 'absolute', inset: '-4px', borderRadius: '50%',
              border: '1px solid rgba(57,255,20,0.25)',
              animation: 'fabPulse 2s ease-out infinite',
              pointerEvents: 'none',
            }} />
          )}
        </button>
      )}

      <style>{`
        @keyframes blink { 0%,100% { opacity:1; } 50% { opacity:0; } }
        @keyframes fabPulse {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </>
  );
};

export default V4Main;

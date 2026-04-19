'use client';

import React, { useEffect, useState } from 'react';
import BotChat from '../BotChat/BotChat';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return isMobile;
};

const TYPED_STRINGS = [
  'UI / UX BUILDER',
  'FRONT-END DEVELOPER',
  'BACK-END DEVELOPER',
  'FULL STACK DEVELOPER',
  'AI ENGINEER (FUTURE)',
];

const useTyped = (strings, speed = 80, pause = 1600) => {
  const [display, setDisplay] = useState('');
  const [idx, setIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = strings[idx % strings.length];
    let timeout;
    if (!deleting && charIdx <= current.length) {
      timeout = setTimeout(() => setCharIdx(c => c + 1), speed);
    } else if (!deleting && charIdx > current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx(c => c - 1), speed / 2);
    } else {
      setDeleting(false);
      setIdx(i => i + 1);
    }
    setDisplay(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, idx, strings, speed, pause]);

  return display;
};

const StatBox = ({ value, label }) => (
  <div style={{
    background: 'var(--surface)',
    border: '1px solid var(--border)',
    padding: '0.8rem 1.2rem',
    clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
    textAlign: 'center', flex: '1 1 0',
  }}>
    <div style={{ fontFamily: "'Orbitron', monospace", fontSize: '1.6rem', fontWeight: 900, color: 'var(--cyan)', lineHeight: 1, marginBottom: '4px' }}>{value}</div>
    <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.5rem', color: 'var(--muted)', letterSpacing: '2px', textTransform: 'uppercase' }}>{label}</div>
  </div>
);

const JOURNEY = [
  { label: 'Origin', value: 'Bengaluru, India' },
  { label: 'Prev', value: 'Kent, OH' },
  { label: 'Prev', value: 'Cleveland, OH' },
  { label: 'Now', value: 'Seattle, WA', accent: true },
];

const V4Bio = ({ scrollAction }) => {
  const typed = useTyped(TYPED_STRINGS);
  const isMobile = useIsMobile();
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <section style={{
      height: '100vh',
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      paddingTop: '60px',
      overflow: 'hidden',
      position: 'relative',
    }}>
      {/* Ambient glows */}
      <div style={{ position: 'absolute', top: '10%', left: '10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(0,229,255,0.05) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: '10%', right: '55%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(57,255,20,0.04) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />

      {/* LEFT — bio content */}
      <div style={{
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: '2rem 2.5rem 2rem 3rem',
        borderRight: '1px solid var(--border)',
        position: 'relative', zIndex: 1, overflow: 'hidden',
      }}>

        {/* Status tag */}
        <div style={{
          fontFamily: "'Share Tech Mono', monospace", fontSize: '0.62rem',
          color: 'var(--cyan2)', letterSpacing: '3px', textTransform: 'uppercase',
          marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px',
        }}>
          <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'var(--cyan2)' }} />
          9 YRS // AVAILABLE FOR HIRE
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', color: 'var(--accent)' }}>
            <span className='status-dot' /> ONLINE
          </span>
        </div>

        {/* Name */}
        <h1 style={{ fontFamily: "'Orbitron', monospace", fontWeight: 900, lineHeight: 1.05, color: '#fff', margin: 0 }}>
          <span style={{ display: 'block', fontSize: 'clamp(0.8rem, 1vw, 1rem)', color: 'var(--muted)', fontWeight: 400, letterSpacing: '3px', fontFamily: "'Share Tech Mono', monospace", marginBottom: '0.3rem' }}>
            I&apos;m
          </span>
          <span style={{ display: 'block', fontSize: 'clamp(2rem, 3.8vw, 3.8rem)', letterSpacing: '1px' }}>
            Bharath
          </span>
          <span style={{ display: 'block', fontSize: 'clamp(1.1rem, 2.2vw, 2.2rem)', letterSpacing: '1px', color: 'var(--cyan)' }}>
            Hunkunda Sreenivasa
          </span>
        </h1>

        {/* Typewriter */}
        <div style={{
          fontFamily: "'Orbitron', monospace",
          fontSize: 'clamp(0.75rem, 1.5vw, 1.3rem)',
          fontWeight: 700, color: 'var(--cyan)',
          marginTop: '0.7rem', marginBottom: '1.2rem',
          minHeight: '1.6rem', display: 'flex', alignItems: 'center', gap: '6px',
        }}>
          <span style={{ color: 'var(--accent)', opacity: 0.7 }}>_</span>
          {typed}
          <span style={{ display: 'inline-block', width: '2px', height: '1em', background: 'var(--cyan)', animation: 'blink 1s step-end infinite', verticalAlign: 'middle' }} />
        </div>

        {/* Stats */}
        <div style={{ display: 'flex', gap: '0.6rem', marginBottom: '1.2rem' }}>
          <StatBox value='9+' label='Years Exp' />
          <StatBox value='3' label='Companies' />
          <StatBox value='25+' label='Technologies' />
          <StatBox value='∞' label='Problems Solved' />
        </div>

        {/* Description */}
        <p style={{
          fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.75,
          marginBottom: '1.2rem',
          borderLeft: '2px solid var(--border)', paddingLeft: '0.9rem',
        }}>
          Front-end focused, full-stack capable. Building{' '}
          <strong style={{ color: 'var(--cyan)', fontWeight: 600 }}>responsive web applications</strong>{' '}
          with sharp attention to usability and system design. Freelancing since{' '}
          <strong style={{ color: 'var(--cyan)', fontWeight: 600 }}>Mar 2025</strong>.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '1.4rem' }}>
          {[
            { label: 'Get In Touch', primary: true, action: scrollAction },
            { label: 'View Stack', primary: false },
          ].map(({ label, primary, action }) => (
            <button key={label} onClick={action || undefined} style={{
              display: 'inline-flex', alignItems: 'center', gap: '7px',
              padding: '0.55rem 1.4rem', background: 'transparent',
              border: `1px solid ${primary ? 'var(--cyan)' : 'var(--border)'}`,
              color: primary ? 'var(--cyan)' : 'var(--muted)',
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: '0.68rem', letterSpacing: '2px', textTransform: 'uppercase',
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
        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
          <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.5rem', color: 'var(--muted)', letterSpacing: '2px', textTransform: 'uppercase', marginRight: '0.8rem' }}>Journey</span>
          {JOURNEY.map((stop, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 0.5rem' }}>
                <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.45rem', color: 'var(--muted)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '1px' }}>{stop.label}</span>
                <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.6rem', color: stop.accent ? 'var(--accent)' : 'var(--cyan2)', letterSpacing: '0.5px', fontWeight: stop.accent ? 700 : 400 }}>{stop.value}</span>
              </div>
              {i < JOURNEY.length - 1 && (
                <svg width='14' height='8' viewBox='0 0 14 8' fill='none' style={{ opacity: 0.3 }}>
                  <path d='M0 4h10M7 1l4 3-4 3' stroke='var(--cyan)' strokeWidth='1'/>
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT — chatbot, full height (desktop only) */}
      {!isMobile && (
        <div style={{
          display: 'flex', flexDirection: 'column',
          height: '100%', overflow: 'hidden',
          position: 'relative', zIndex: 1,
        }}>
          <BotChat />
        </div>
      )}

      {/* Mobile: BotChat full-screen overlay */}
      {isMobile && (
        <BotChat mobileOpen={chatOpen} onMobileClose={() => setChatOpen(false)} />
      )}

      {/* Mobile: floating chat FAB */}
      {isMobile && !chatOpen && (
        <button
          onClick={() => setChatOpen(true)}
          style={{
            position: 'fixed', bottom: '24px', right: '20px',
            zIndex: 400,
            width: '54px', height: '54px',
            background: 'rgba(5,10,15,0.95)',
            border: '1.5px solid rgba(57,255,20,0.5)',
            borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 0 18px rgba(57,255,20,0.25)',
          }}
        >
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
          {/* Pulse ring */}
          <span style={{
            position: 'absolute', inset: '-4px',
            borderRadius: '50%',
            border: '1px solid rgba(57,255,20,0.25)',
            animation: 'fabPulse 2s ease-out infinite',
            pointerEvents: 'none',
          }} />
        </button>
      )}

      <style>{`
        @keyframes blink { 0%,100% { opacity:1; } 50% { opacity:0; } }
        @keyframes fabPulse {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.6); opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default V4Bio;

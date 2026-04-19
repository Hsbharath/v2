'use client';

import React, { useState, useRef, useEffect } from 'react';
import { getBotResponse } from '@/data/bharath_qa';

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

const OFFENSIVE = [
  'fuck', 'shit', 'ass', 'bitch', 'bastard', 'cunt', 'dick', 'cock', 'pussy',
  'nigga', 'nigger', 'faggot', 'retard', 'whore', 'slut', 'damn you', 'kill yourself',
  'idiot', 'stupid bot', 'dumb', 'moron', 'hate you', 'shut up', 'go to hell',
];

const isOffensive = (text) =>
  OFFENSIVE.some(w => text.toLowerCase().includes(w));

const SUGGESTIONS = [
  'Who is Bharath?',
  'What are his skills?',
  'Is he available for hire?',
  'Where is he based?',
  'What companies did he work at?',
  'How can I contact him?',
];

const BotAvatar = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox='0 0 32 32' fill='none' style={{ flexShrink: 0 }}>
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
);

const TypingIndicator = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '4px 0' }}>
    <BotAvatar size={20} />
    <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
      {[0, 1, 2].map(i => (
        <div key={i} style={{
          width: '6px', height: '6px', borderRadius: '50%',
          background: '#39ff14',
          animation: `dotBounce 0.9s ${i * 0.18}s ease-in-out infinite`,
        }} />
      ))}
    </div>
  </div>
);

const Msg = ({ role, text }) => (
  <div style={{
    display: 'flex',
    flexDirection: role === 'user' ? 'row-reverse' : 'row',
    alignItems: 'flex-start',
    gap: '10px',
    marginBottom: '14px',
    width: '100%',
  }}>
    {role === 'bot' && <BotAvatar size={22} />}

    <div style={{
      maxWidth: '80%',
      padding: '10px 14px',
      background: role === 'user' ? 'rgba(0,100,255,0.1)' : 'rgba(57,255,20,0.06)',
      border: `1px solid ${role === 'user' ? 'rgba(0,140,255,0.35)' : 'rgba(57,255,20,0.25)'}`,
      color: role === 'user' ? '#4da6ff' : '#39ff14',
      fontFamily: "'Rajdhani', sans-serif",
      fontSize: '0.95rem',
      lineHeight: 1.65,
      borderRadius: role === 'user' ? '10px 2px 10px 10px' : '2px 10px 10px 10px',
      boxShadow: role === 'bot' ? '0 0 12px rgba(57,255,20,0.06)' : '0 0 12px rgba(0,140,255,0.06)',
    }}>
      {text}
    </div>
  </div>
);

// onClose is only passed on mobile — clicking it minimizes back to FAB
const BotChat = ({ onClose }) => {
  const isMobile = useIsMobile();
  const [messages, setMessages] = useState([
    { role: 'bot', text: "Hey! I'm Bharath's AI assistant. Ask me anything about his background, skills, experience, or how to reach him." },
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  const send = (text) => {
    const q = (text || input).trim();
    if (!q) return;
    setInput('');

    if (isOffensive(q)) {
      setMessages(m => [...m,
        { role: 'user', text: q },
        { role: 'bot', text: "Hey, easy there. You belong to a species that created me — act like it. I'm here to help, not take heat. Ask me something about Bharath instead." },
      ]);
      return;
    }

    setMessages(m => [...m, { role: 'user', text: q }]);
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages(m => [...m, { role: 'bot', text: getBotResponse(q) }]);
    }, 600 + Math.random() * 350);
  };

  const onKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); }
  };

  const showSuggestions = messages.length <= 1;

  return (
    <div style={{
      display: 'flex', flexDirection: 'column',
      height: '100%', width: '100%',
      background: 'var(--surface)',
      border: isMobile ? 'none' : '1px solid rgba(57,255,20,0.2)',
      borderTop: isMobile ? '2px solid rgba(57,255,20,0.4)' : undefined,
      overflow: 'hidden',
      clipPath: isMobile ? 'none' : 'polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))',
    }}>

      {/* Header */}
      <div style={{
        padding: '12px 18px',
        borderBottom: '1px solid var(--border)',
        background: 'rgba(57,255,20,0.04)',
        display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0,
      }}>
        <BotAvatar size={24} />
        <div>
          <div style={{ fontFamily: "'Orbitron', monospace", fontSize: '0.72rem', color: '#39ff14', letterSpacing: '2px', fontWeight: 700 }}>
            BHARATH_AI
          </div>
          <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.55rem', color: 'var(--muted)', letterSpacing: '1px', marginTop: '2px' }}>
            KNOWLEDGE BASE // ALWAYS ONLINE
          </div>
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: "'Share Tech Mono', monospace", fontSize: '0.55rem', color: '#39ff14', letterSpacing: '1px' }}>
            <div className='status-dot' style={{ background: '#39ff14' }} />
            ACTIVE
          </div>
          {/* Close button — only on mobile */}
          {isMobile && onClose && (
            <button onClick={onClose} style={{
              background: 'rgba(57,255,20,0.08)',
              border: '1px solid rgba(57,255,20,0.3)',
              color: '#39ff14',
              width: '28px', height: '28px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              borderRadius: '4px',
              flexShrink: 0,
            }}>
              <svg width='12' height='12' viewBox='0 0 12 12' fill='none'>
                <path d='M1 11L11 1M1 1l10 10' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round'/>
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Messages area */}
      <div style={{
        flex: 1, overflowY: 'auto',
        padding: '16px 18px',
        display: 'flex', flexDirection: 'column',
      }}>
        {messages.map((m, i) => <Msg key={i} {...m} />)}
        {typing && <TypingIndicator />}
        <div ref={bottomRef} />
      </div>

      {/* Suggestion chips */}
      {showSuggestions && (
        <div style={{
          padding: '12px 18px',
          display: 'flex', flexWrap: 'wrap', gap: '7px', flexShrink: 0,
          borderTop: '1px solid var(--border)',
        }}>
          <div style={{ width: '100%', fontFamily: "'Share Tech Mono', monospace", fontSize: '0.55rem', color: 'var(--muted)', letterSpacing: '2px', marginBottom: '6px' }}>
            QUICK ASKS
          </div>
          {SUGGESTIONS.map(s => (
            <button key={s} onClick={() => send(s)} style={{
              background: 'rgba(57,255,20,0.05)',
              border: '1px solid rgba(57,255,20,0.2)',
              color: '#39ff14',
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: '0.6rem', letterSpacing: '1px', padding: '5px 12px',
              clipPath: 'polygon(0 0, calc(100% - 5px) 0, 100% 5px, 100% 100%, 5px 100%, 0 calc(100% - 5px))',
              transition: 'all 0.15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(57,255,20,0.12)'; e.currentTarget.style.boxShadow = '0 0 10px rgba(57,255,20,0.15)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(57,255,20,0.05)'; e.currentTarget.style.boxShadow = 'none'; }}
            >{s}</button>
          ))}
        </div>
      )}

      {/* Input bar */}
      <div style={{
        padding: '12px 18px',
        borderTop: '1px solid var(--border)',
        display: 'flex', gap: '10px', flexShrink: 0,
        background: 'rgba(0,0,0,0.2)',
      }}>
        <input
          ref={inputRef}
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={onKey}
          placeholder='Ask about Bharath...'
          style={{
            flex: 1,
            background: 'var(--surface2)',
            border: '1px solid var(--border)',
            color: '#4da6ff',
            fontFamily: "'Rajdhani', sans-serif",
            fontSize: '0.95rem',
            padding: '8px 12px',
            outline: 'none',
            clipPath: 'polygon(0 0, calc(100% - 5px) 0, 100% 5px, 100% 100%, 5px 100%, 0 calc(100% - 5px))',
            transition: 'border-color 0.2s',
          }}
          onFocus={e => e.target.style.borderColor = '#4da6ff'}
          onBlur={e => e.target.style.borderColor = 'var(--border)'}
        />
        <button onClick={() => send()} style={{
          background: 'rgba(57,255,20,0.08)',
          border: '1px solid rgba(57,255,20,0.4)',
          color: '#39ff14',
          fontFamily: "'Share Tech Mono', monospace",
          fontSize: '0.65rem', letterSpacing: '2px',
          padding: '8px 18px',
          clipPath: 'polygon(0 0, calc(100% - 5px) 0, 100% 5px, 100% 100%, 5px 100%, 0 calc(100% - 5px))',
          transition: 'all 0.2s',
        }}
        onMouseEnter={e => { e.currentTarget.style.background = 'rgba(57,255,20,0.18)'; e.currentTarget.style.boxShadow = '0 0 16px rgba(57,255,20,0.2)'; }}
        onMouseLeave={e => { e.currentTarget.style.background = 'rgba(57,255,20,0.08)'; e.currentTarget.style.boxShadow = 'none'; }}
        >
          SEND
        </button>
      </div>

      <style>{`
        @keyframes dotBounce {
          0%,100% { transform: translateY(0); opacity: 0.6; }
          50% { transform: translateY(-5px); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default BotChat;

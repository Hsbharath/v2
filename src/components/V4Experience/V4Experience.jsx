'use client';

import React, { forwardRef, useState, useEffect } from 'react';
import { SectionHeader } from '../V4Skills/V4Skills';

const experiences = [
  {
    period: 'MAR 2025 — PRESENT',
    role: 'Full Stack Developer',
    company: 'Freelancer',
    location: 'Seattle, WA — Remote',
    tags: ['React', 'Next.js', 'Node.js', 'TypeScript', 'AWS', 'MongoDB'],
    current: true,
    projects: '15+',
  },
  {
    period: '2016 — 2023',
    role: 'Web Developer',
    company: 'The Tranzonic Companies',
    location: 'Cleveland, OH — USA',
    tags: ['Angular', 'React', 'TypeScript', 'MSSQL', 'Azure', 'Docker'],
    current: false,
    projects: '8+',
  },
  {
    period: '2013 — 2014',
    role: 'Software Engineer II',
    company: 'Dell International Services',
    location: 'Bengaluru, KA — India',
    tags: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'WordPress'],
    current: false,
    projects: '2+',
  },
  {
    period: '2011 — 2013',
    role: 'Network Analyst',
    company: 'Easy Mate Technologies',
    location: 'Bengaluru, KA — India',
    tags: ['HTML', 'CSS', 'JavaScript', 'Nginx'],
    current: false,
    projects: '2+',
  },
];

const useRevealCards = (count) => {
  const [shown, setShown] = useState(0);
  useEffect(() => {
    let i = 0;
    const reveal = () => {
      if (i >= count) return;
      i++;
      setShown(i);
      setTimeout(reveal, 220);
    };
    const t = setTimeout(reveal, 200);
    return () => clearTimeout(t);
  }, [count]);
  return shown;
};

const V4Experience = forwardRef((_props, ref) => {
  const [hovered, setHovered] = useState(null);
  const shown = useRevealCards(experiences.length);

  return (
    <section ref={ref} style={{
      minHeight: '100%',
      padding: '2rem 3rem 2rem',
      position: 'relative',
    }}
    className='exp-section'
    >
      <div style={{ position: 'absolute', top: '30%', right: '0', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(0,191,165,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '900px', width: '100%', position: 'relative', zIndex: 1 }}>
        <SectionHeader num='02 // EXPERIENCE' title='MISSION LOG' />

        <div style={{ position: 'relative', paddingLeft: '2rem' }}>
          {/* Timeline line */}
          <div style={{
            position: 'absolute', left: 0, top: 0, bottom: 0,
            width: '1px',
            background: 'linear-gradient(180deg, var(--accent), var(--cyan), var(--teal), transparent)',
          }} />

          {experiences.map((exp, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                position: 'relative',
                marginBottom: i < experiences.length - 1 ? '1.2rem' : 0,
                background: hovered === i ? 'rgba(0,229,255,0.04)' : 'var(--surface)',
                border: `1px solid ${hovered === i ? 'var(--cyan2)' : exp.current ? 'rgba(57,255,20,0.4)' : 'var(--border)'}`,
                padding: '1.1rem 1.4rem',
                clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))',
                transition: 'all 0.25s, opacity 0.4s, transform 0.4s',
                boxShadow: exp.current ? '0 0 16px rgba(57,255,20,0.07)' : 'none',
                opacity: i < shown ? 1 : 0,
                transform: i < shown ? 'translateX(0)' : 'translateX(-20px)',
                display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem',
              }}
            >
              {/* Timeline dot */}
              <div style={{
                position: 'absolute', left: '-2.55rem', top: '1.25rem',
                width: '12px', height: '12px', borderRadius: '50%',
                background: exp.current ? 'var(--accent)' : 'var(--bg)',
                border: `2px solid ${exp.current ? 'var(--accent)' : 'var(--cyan)'}`,
                boxShadow: exp.current ? '0 0 14px var(--accent)' : '0 0 8px rgba(0,229,255,0.4)',
              }} />

              <div style={{ flex: 1, minWidth: 0 }}>
                {/* Period + active badge */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '4px', flexWrap: 'wrap' }}>
                  <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.65rem', color: exp.current ? 'var(--accent)' : 'var(--cyan)', letterSpacing: '2px' }}>
                    {exp.period}
                  </span>
                  {exp.current && (
                    <span style={{
                      fontFamily: "'Share Tech Mono', monospace", fontSize: '0.55rem',
                      color: 'var(--accent)', letterSpacing: '1px',
                      border: '1px solid var(--accent)', padding: '1px 7px',
                      clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))',
                      animation: 'pulse-accent 2s ease-in-out infinite',
                    }}>ACTIVE</span>
                  )}
                </div>

                {/* Role */}
                <div style={{ fontFamily: "'Orbitron', monospace", fontSize: '0.98rem', fontWeight: 700, color: '#fff', marginBottom: '3px' }}>
                  {exp.role}
                </div>

                {/* Company */}
                <div style={{ fontSize: '0.9rem', color: 'var(--teal)', fontWeight: 600, marginBottom: '4px' }}>{exp.company}</div>

                {/* Location */}
                <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.6rem', color: 'var(--muted)', letterSpacing: '1px', marginBottom: '8px' }}>
                  📍 {exp.location}
                </div>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                  {exp.tags.map(tag => (
                    <span key={tag} style={{
                      fontFamily: "'Share Tech Mono', monospace", fontSize: '0.55rem',
                      color: 'var(--muted)', letterSpacing: '1px',
                      border: '1px solid var(--border)', padding: '2px 8px',
                      clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))',
                      background: 'rgba(255,255,255,0.02)',
                    }}>{tag}</span>
                  ))}
                </div>
              </div>

              {/* Project count badge */}
              <div style={{
                flexShrink: 0,
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                background: exp.current ? 'rgba(57,255,20,0.08)' : 'rgba(0,229,255,0.05)',
                border: `1px solid ${exp.current ? 'rgba(57,255,20,0.3)' : 'rgba(0,229,255,0.18)'}`,
                padding: '0.5rem 0.9rem',
                clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))',
                minWidth: '58px',
              }}>
                <span style={{
                  fontFamily: "'Orbitron', monospace", fontSize: '1.3rem', fontWeight: 900,
                  color: exp.current ? 'var(--accent)' : 'var(--cyan)', lineHeight: 1,
                }}>{exp.projects}</span>
                <span style={{
                  fontFamily: "'Share Tech Mono', monospace", fontSize: '0.45rem',
                  color: 'var(--muted)', letterSpacing: '1px', marginTop: '3px', textTransform: 'uppercase',
                }}>projects</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pulse-accent {
          0%, 100% { opacity: 1; box-shadow: 0 0 6px rgba(57,255,20,0.4); }
          50% { opacity: 0.6; box-shadow: none; }
        }
        @media (max-width: 768px) {
          .exp-section { padding: 1.5rem 5% 2rem !important; }
        }
      `}</style>
    </section>
  );
});

export default V4Experience;

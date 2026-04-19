'use client';

import React, { forwardRef, useState, useEffect, useRef } from 'react';

const CATEGORIES = [
  {
    id: 'frontend',
    label: 'Front-End',
    color: 'var(--cyan)',
    skills: ['React', 'Angular', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Tailwind', 'Bootstrap', 'Bulma', 'jQuery', 'Redux', 'NgRx'],
  },
  {
    id: 'backend',
    label: 'Back-End',
    color: 'var(--teal)',
    skills: ['Node.js', 'Express', 'GraphQL', 'MSSQL', 'MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    id: 'devops',
    label: 'DevOps & Cloud',
    color: 'var(--accent)',
    skills: ['Docker', 'Azure', 'AWS', 'Git', 'Bitbucket'],
  },
  {
    id: 'testing',
    label: 'Testing & Tools',
    color: '#a78bfa',
    skills: ['Jest', 'Jasmine', 'Power BI'],
  },
];

const TOTAL = CATEGORIES.reduce((a, c) => a + c.skills.length, 0);

// Reveal skills one category at a time on load
const useReveal = () => {
  const [revealed, setRevealed] = useState(0);
  const [skillCount, setSkillCount] = useState({});
  const [allDone, setAllDone] = useState(false);

  useEffect(() => {
    let catIdx = 0;
    const revealNext = () => {
      if (catIdx >= CATEGORIES.length) {
        setAllDone(true);
        return;
      }
      const cat = CATEGORIES[catIdx];
      setRevealed(catIdx + 1);
      let sc = 0;
      const skillTimer = setInterval(() => {
        sc++;
        setSkillCount(prev => ({ ...prev, [cat.id]: sc }));
        if (sc >= cat.skills.length) {
          clearInterval(skillTimer);
          catIdx++;
          setTimeout(revealNext, 200);
        }
      }, 60);
    };
    const start = setTimeout(revealNext, 300);
    return () => clearTimeout(start);
  }, []);

  return { revealed, skillCount, allDone };
};

const Tag = ({ name, color, visible }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-block',
        fontFamily: "'Share Tech Mono', monospace",
        fontSize: '0.78rem',
        letterSpacing: '1.5px',
        padding: '6px 14px',
        border: `1px solid ${hovered ? color : 'rgba(255,255,255,0.12)'}`,
        color: hovered ? color : 'rgba(255,255,255,0.7)',
        background: hovered ? `${color}15` : 'rgba(255,255,255,0.03)',
        clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))',
        transition: 'all 0.18s',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(6px) scale(0.95)',
        transitionProperty: 'opacity, transform, color, border-color, background',
        transitionDuration: '0.25s',
        whiteSpace: 'nowrap',
      }}
    >
      {name}
    </span>
  );
};

const V4Skills = forwardRef((_props, ref) => {
  const { revealed, skillCount, allDone } = useReveal();
  const visibleTotal = Object.values(skillCount).reduce((a, b) => a + b, 0);

  return (
    <section ref={ref} style={{
      minHeight: '100%',
      padding: '2rem 3rem 2rem',
      position: 'relative',
    }}
    className='skills-section'
    >
      <div style={{ position: 'absolute', top: '10%', left: '40%', width: '500px', height: '300px', background: 'radial-gradient(ellipse, rgba(0,229,255,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '900px', width: '100%', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', marginBottom: '2rem' }}>
          <div style={{
            fontFamily: "'Share Tech Mono', monospace", fontSize: '0.65rem',
            color: 'var(--cyan)', letterSpacing: '2px',
            background: 'rgba(0,229,255,0.08)', border: '1px solid rgba(0,229,255,0.2)',
            padding: '4px 10px',
            clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))',
          }}>01 // SKILLS</div>
          <h2 style={{ fontFamily: "'Orbitron', monospace", fontSize: '1.8rem', fontWeight: 700, color: '#fff', letterSpacing: '3px' }}>
            TECH STACK
          </h2>
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, var(--border), transparent)' }} />
          {/* Total count — prominent */}
          <div style={{
            fontFamily: "'Orbitron', monospace", fontSize: '1.1rem', fontWeight: 900,
            color: 'var(--cyan)', letterSpacing: '1px',
            transition: 'opacity 0.3s',
          }}>
            {allDone ? TOTAL : visibleTotal}
            {' '}<span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.6rem', color: 'var(--muted)', fontWeight: 400 }}>SKILLS</span>
          </div>
        </div>

        {/* All categories revealed progressively */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {CATEGORIES.map((cat, ci) => {
            const isRevealed = revealed > ci;
            const shownCount = skillCount[cat.id] || 0;
            return (
              <div
                key={cat.id}
                style={{
                  opacity: isRevealed ? 1 : 0,
                  transform: isRevealed ? 'translateY(0)' : 'translateY(12px)',
                  transition: 'opacity 0.4s, transform 0.4s',
                }}
              >
                {/* Category header */}
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '0.8rem',
                  marginBottom: '0.8rem',
                }}>
                  <span style={{
                    display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%',
                    background: cat.color, boxShadow: `0 0 8px ${cat.color}`,
                  }} />
                  <span style={{
                    fontFamily: "'Orbitron', monospace", fontSize: '0.85rem', fontWeight: 700,
                    color: cat.color, letterSpacing: '2px',
                  }}>{cat.label}</span>
                  <span style={{
                    fontFamily: "'Share Tech Mono', monospace", fontSize: '0.58rem',
                    color: 'rgba(255,255,255,0.35)', letterSpacing: '2px',
                  }}>
                    {shownCount}/{cat.skills.length}
                  </span>
                  <div style={{ flex: 1, height: '1px', background: `linear-gradient(90deg, ${cat.color}40, transparent)` }} />
                </div>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {cat.skills.map((skill, si) => (
                    <Tag
                      key={skill}
                      name={skill}
                      color={cat.color}
                      visible={isRevealed && si < shownCount}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom count bar — counts update live, total appears only when all done */}
        <div style={{
          marginTop: '2.5rem',
          paddingTop: '1rem',
          borderTop: '1px solid var(--border)',
          display: 'flex', flexWrap: 'wrap', gap: '1.2rem',
          fontFamily: "'Share Tech Mono', monospace",
          fontSize: '0.62rem', color: 'var(--muted)', letterSpacing: '2px',
        }}>
          {CATEGORIES.map(cat => {
            const shown = skillCount[cat.id] || 0;
            return shown > 0 ? (
              <span key={cat.id} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: cat.color, display: 'inline-block', boxShadow: `0 0 6px ${cat.color}` }} />
                <span style={{ color: cat.color, fontWeight: 700 }}>{shown}</span>
                {' '}{cat.label.toUpperCase()}
              </span>
            ) : null;
          })}
          {allDone && (
            <span style={{ marginLeft: 'auto', color: 'var(--cyan)', fontFamily: "'Orbitron', monospace", fontSize: '0.7rem', fontWeight: 700 }}>
              {TOTAL} TOTAL
            </span>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-section { padding: 1.5rem 5% 2rem !important; }
        }
      `}</style>
    </section>
  );
});

export default V4Skills;

export const SectionHeader = ({ num, title }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', marginBottom: '2.5rem' }}>
    <div style={{
      fontFamily: "'Share Tech Mono', monospace", fontSize: '0.65rem',
      color: 'var(--cyan)', letterSpacing: '2px',
      background: 'rgba(0,229,255,0.08)', border: '1px solid rgba(0,229,255,0.2)',
      padding: '4px 10px',
      clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))',
    }}>{num}</div>
    <h2 style={{ fontFamily: "'Orbitron', monospace", fontSize: '1.8rem', fontWeight: 700, color: '#fff', letterSpacing: '3px' }}>{title}</h2>
    <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, var(--border), transparent)' }} />
  </div>
);

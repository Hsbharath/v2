'use client';

import React, { forwardRef, useState, useEffect } from 'react';

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

const Tag = ({ name, color, delay }) => {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-block',
        fontFamily: "'Share Tech Mono', monospace",
        fontSize: '0.75rem',
        letterSpacing: '1.5px',
        padding: '5px 14px',
        border: `1px solid ${hovered ? color : 'var(--border)'}`,
        color: hovered ? color : 'var(--muted)',
        background: hovered ? `${color}12` : 'var(--surface)',
        clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))',
        transition: 'all 0.18s',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(8px)',
        transitionProperty: 'opacity, transform, color, border-color, background',
        transitionDuration: '0.35s',
        whiteSpace: 'nowrap',
      }}
    >
      {name}
    </span>
  );
};

const V4Skills = forwardRef((_props, ref) => {
  const [activeTab, setActiveTab] = useState('frontend');
  const active = CATEGORIES.find(c => c.id === activeTab);

  return (
    <section ref={ref} style={{
      height: '100vh', display: 'flex', flexDirection: 'column',
      justifyContent: 'center',
      padding: '60px 3rem 2rem',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Glow */}
      <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '300px', background: 'radial-gradient(ellipse, rgba(0,229,255,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>

        {/* Section header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', marginBottom: '2.5rem' }}>
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
        </div>

        {/* Category tabs */}
        <div style={{ display: 'flex', gap: '0.6rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          {CATEGORIES.map(cat => (
            <button key={cat.id} onClick={() => setActiveTab(cat.id)} style={{
              background: activeTab === cat.id ? `${cat.color}18` : 'var(--surface)',
              border: `1px solid ${activeTab === cat.id ? cat.color : 'var(--border)'}`,
              color: activeTab === cat.id ? cat.color : 'var(--muted)',
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: '0.7rem', letterSpacing: '2px', textTransform: 'uppercase',
              padding: '6px 18px',
              clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))',
              transition: 'all 0.2s',
              boxShadow: activeTab === cat.id ? `0 0 14px ${cat.color}30` : 'none',
            }}>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Active category label + count */}
        <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
          <span style={{ fontFamily: "'Orbitron', monospace", fontSize: '1.1rem', fontWeight: 700, color: active.color }}>
            {active.label}
          </span>
          <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.6rem', color: 'var(--muted)', letterSpacing: '2px' }}>
            {active.skills.length} MODULES LOADED
          </span>
        </div>

        {/* Tags */}
        <div key={activeTab} style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', maxWidth: '900px' }}>
          {active.skills.map((skill, i) => (
            <Tag key={skill} name={skill} color={active.color} delay={i * 40} />
          ))}
        </div>

        {/* Total count bar */}
        <div style={{
          marginTop: '3rem',
          display: 'flex', alignItems: 'center', gap: '1.5rem',
          fontFamily: "'Share Tech Mono', monospace",
          fontSize: '0.6rem', color: 'var(--muted)', letterSpacing: '2px',
        }}>
          {CATEGORIES.map(cat => (
            <span key={cat.id} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: cat.color, display: 'inline-block', boxShadow: `0 0 6px ${cat.color}` }} />
              {cat.skills.length} {cat.label.toUpperCase()}
            </span>
          ))}
          <span style={{ marginLeft: 'auto', color: 'var(--cyan)' }}>
            {CATEGORIES.reduce((a, c) => a + c.skills.length, 0)} TOTAL
          </span>
        </div>
      </div>
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

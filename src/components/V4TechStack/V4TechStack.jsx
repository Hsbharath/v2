'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const skillMeta = {
  'JavaScript': { icon: '📜', pct: 92 },
  'TypeScript': { icon: '🔷', pct: 85 },
  'React': { icon: '⚛', pct: 90 },
  'Angular': { icon: '🅰', pct: 80 },
  'HTML': { icon: '🌐', pct: 95 },
  'CSS': { icon: '🎨', pct: 88 },
  'Bootstrap': { icon: '🅱', pct: 82 },
  'Tailwind': { icon: '💨', pct: 88 },
  'Bulma': { icon: '💠', pct: 70 },
  'jQuery': { icon: '⚡', pct: 75 },
  'Node.js': { icon: '🖥', pct: 78 },
  'Express': { icon: '🚂', pct: 76 },
  'Redux': { icon: '🔄', pct: 80 },
  'NgRx': { icon: '🔁', pct: 72 },
  'MSSQL': { icon: '🗄', pct: 75 },
  'MySQL': { icon: '🐬', pct: 75 },
  'GraphQL': { icon: '◈', pct: 68 },
  'PostgreSQL': { icon: '🐘', pct: 72 },
  'MongoDB': { icon: '🍃', pct: 78 },
  'Redis': { icon: '🔴', pct: 65 },
  'Azure': { icon: '☁', pct: 74 },
  'AWS': { icon: '☁', pct: 70 },
  'Git': { icon: '🌿', pct: 90 },
  'Bitbucket': { icon: '🪣', pct: 82 },
  'Docker': { icon: '🐳', pct: 72 },
  'Jest': { icon: '🃏', pct: 78 },
  'Jasmine': { icon: '🌸', pct: 72 },
  'Power BI': { icon: '📊', pct: 65 },
};

const SkillCard = ({ skill }) => {
  const meta = skillMeta[skill.name] || { icon: '⚙', pct: 70 };
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--surface)',
        border: `1px solid ${hovered ? 'var(--cyan2)' : 'var(--border)'}`,
        padding: '1rem',
        textAlign: 'center',
        position: 'relative',
        clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
        transition: 'all 0.2s',
        boxShadow: hovered ? '0 0 20px rgba(0,229,255,0.1)' : 'none',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(16px)',
        transitionProperty: 'opacity, transform, border-color, box-shadow',
        transitionDuration: '0.5s',
        cursor: 'default',
      }}
    >
      {hovered && (
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, rgba(0,229,255,0.05) 0%, transparent 100%)',
          pointerEvents: 'none',
        }} />
      )}
      <div style={{ fontSize: '1.5rem', marginBottom: '6px' }}>{meta.icon}</div>
      <div style={{
        fontFamily: "'Share Tech Mono', monospace",
        fontSize: '0.65rem',
        color: 'var(--muted)',
        letterSpacing: '1px',
        textTransform: 'uppercase',
      }}>
        {skill.name}
      </div>
      <div style={{ marginTop: '8px', height: '2px', background: 'var(--wire)', position: 'relative' }}>
        <div
          className='skill-fill'
          style={{
            height: '100%',
            width: `${meta.pct}%`,
            background: 'linear-gradient(90deg, var(--cyan2), var(--accent))',
            position: 'relative',
            transition: 'width 1s ease',
          }}
        />
      </div>
    </div>
  );
};

const V4TechStack = () => {
  const [skillsData, setSkillsData] = useState([]);

  useEffect(() => {
    fetch('/skills.json')
      .then(r => r.json())
      .then(setSkillsData)
      .catch(console.error);
  }, []);

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
      gap: '12px',
    }}>
      {skillsData.map((skill, i) => (
        <SkillCard key={i} skill={skill} />
      ))}
    </div>
  );
};

export default V4TechStack;

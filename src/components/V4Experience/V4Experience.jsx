'use client';

import React, { forwardRef, useState } from 'react';
import { SectionHeader } from '../V4Skills/V4Skills';

const experiences = [
  {
    period: 'MAR 2025 — PRESENT',
    role: 'Full Stack Developer',
    company: 'Freelancer',
    location: 'Seattle, WA — Remote',
    tags: ['React', 'Next.js', 'Node.js', 'TypeScript', 'AWS', 'MongoDB'],
    current: true,
  },
  {
    period: '2016 — 2023',
    role: 'Web Developer',
    company: 'The Tranzonic Companies',
    location: 'Cleveland, OH — USA',
    tags: ['Angular', 'React', 'TypeScript', 'MSSQL', 'Azure', 'Docker'],
    current: false,
  },
  {
    period: '2013 — 2014',
    role: 'Software Engineer II',
    company: 'Dell International Services',
    location: 'Bengaluru, KA — India',
    tags: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'WordPress'],
    current: false,
  },
  {
    period: '2011 — 2013',
    role: 'Network Analyst',
    company: 'Easy Mate Technologies',
    location: 'Bengaluru, KA — India',
    tags: ['HTML', 'CSS', 'JavaScript', 'Nginx'],
    current: false,
  },
];

const V4Experience = forwardRef((_props, ref) => {
  const [hovered, setHovered] = useState(null);

  return (
    <section ref={ref} style={{
      height: '100vh', display: 'flex', flexDirection: 'column',
      justifyContent: 'center',
      padding: '60px 3rem 2rem',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', top: '30%', right: '0', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(0,191,165,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
        <SectionHeader num='02 // EXPERIENCE' title='MISSION LOG' />

        <div style={{ position: 'relative', paddingLeft: '2rem' }}>
          {/* Timeline line */}
          <div style={{
            position: 'absolute', left: 0, top: 0, bottom: 0,
            width: '1px',
            background: 'linear-gradient(180deg, var(--cyan), var(--wire), transparent)',
          }} />

          {experiences.map((exp, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                position: 'relative',
                marginBottom: i < experiences.length - 1 ? '1.4rem' : 0,
                background: hovered === i ? 'var(--surface2)' : 'var(--surface)',
                border: `1px solid ${hovered === i ? 'var(--cyan2)' : exp.current ? 'rgba(0,229,255,0.3)' : 'var(--border)'}`,
                padding: '1rem 1.2rem',
                clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))',
                transition: 'all 0.2s',
                display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem',
              }}
            >
              {/* Timeline dot */}
              <div style={{
                position: 'absolute', left: '-2.5rem', top: '1.1rem',
                width: '10px', height: '10px', borderRadius: '50%',
                background: exp.current ? 'var(--accent)' : 'var(--surface)',
                border: `2px solid ${exp.current ? 'var(--accent)' : 'var(--cyan)'}`,
                boxShadow: exp.current ? '0 0 10px var(--accent)' : '0 0 8px rgba(0,229,255,0.4)',
              }} />

              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '2px' }}>
                  <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.62rem', color: exp.current ? 'var(--accent)' : 'var(--cyan)', letterSpacing: '2px' }}>
                    {exp.period}
                  </span>
                  {exp.current && (
                    <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.55rem', color: 'var(--accent)', letterSpacing: '1px', border: '1px solid var(--accent)', padding: '1px 6px', clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))' }}>
                      ACTIVE
                    </span>
                  )}
                </div>
                <div style={{ fontFamily: "'Orbitron', monospace", fontSize: '0.95rem', fontWeight: 700, color: '#fff', marginBottom: '2px' }}>
                  {exp.role}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--teal)', fontWeight: 600, marginBottom: '2px' }}>{exp.company}</div>
                <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.6rem', color: 'var(--muted)', letterSpacing: '1px' }}>
                  📍 {exp.location}
                </div>
              </div>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', justifyContent: 'flex-end', maxWidth: '300px' }}>
                {exp.tags.map(tag => (
                  <span key={tag} style={{
                    fontFamily: "'Share Tech Mono', monospace", fontSize: '0.55rem',
                    color: 'var(--muted)', letterSpacing: '1px',
                    border: '1px solid var(--border)', padding: '2px 7px',
                    clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))',
                  }}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default V4Experience;

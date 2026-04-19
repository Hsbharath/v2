'use client';

import React, { forwardRef, useState } from 'react';
import { SectionHeader } from '../V4Skills/V4Skills';

const degrees = [
  {
    degree: 'Master of Science',
    school: 'Kent State University',
    dept: 'School of Digital Sciences — Computer & Information Science',
    meta: '2015 SPRING BATCH // KENT, OH // USA',
    year: '2015',
  },
  {
    degree: 'Bachelor of Engineering',
    school: 'Dr. T. Thimmaiah Institute of Technology',
    dept: 'Department of Information Science',
    meta: '2007 – 2011 BATCH // KGF, KA // INDIA',
    year: '2011',
  },
];

const V4Education = forwardRef((_props, ref) => {
  const [hovered, setHovered] = useState(null);

  return (
    <section ref={ref} style={{
      height: '100vh', display: 'flex', flexDirection: 'column',
      justifyContent: 'center',
      padding: '60px 3rem 2rem',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', bottom: '20%', left: '10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(0,229,255,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
        <SectionHeader num='03 // EDUCATION' title='TRAINING DATA' />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className='edu-grid'>
          {degrees.map((d, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: 'var(--surface)',
                border: `1px solid ${hovered === i ? 'var(--cyan2)' : 'var(--border)'}`,
                padding: '2rem',
                clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))',
                position: 'relative',
                transition: 'all 0.2s',
                boxShadow: hovered === i ? '0 0 30px rgba(0,229,255,0.08)' : 'none',
              }}
            >
              {/* Corner decorations */}
              <div style={{ position: 'absolute', top: '1rem', left: '1rem', width: '18px', height: '18px', borderTop: '1px solid var(--cyan)', borderLeft: '1px solid var(--cyan)', opacity: 0.4 }} />
              <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', width: '18px', height: '18px', borderBottom: '1px solid var(--cyan)', borderRight: '1px solid var(--cyan)', opacity: 0.4 }} />

              {/* Year badge */}
              <div style={{
                position: 'absolute', top: '1.2rem', right: '1.5rem',
                fontFamily: "'Orbitron', monospace", fontSize: '2.5rem',
                fontWeight: 900, color: 'rgba(0,229,255,0.07)', lineHeight: 1,
                userSelect: 'none',
              }}>{d.year}</div>

              <div style={{ fontFamily: "'Orbitron', monospace", fontSize: '0.85rem', fontWeight: 700, color: 'var(--cyan)', marginBottom: '0.6rem', letterSpacing: '1px' }}>
                {d.degree}
              </div>
              <div style={{ fontSize: '1.05rem', fontWeight: 600, color: '#fff', marginBottom: '0.4rem' }}>
                {d.school}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1rem', lineHeight: 1.5 }}>
                {d.dept}
              </div>
              <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.6rem', color: 'var(--cyan2)', letterSpacing: '1.5px' }}>
                {d.meta}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`@media (max-width: 768px) { .edu-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
});

export default V4Education;

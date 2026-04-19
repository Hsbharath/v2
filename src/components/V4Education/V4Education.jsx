'use client';

import React, { forwardRef, useState } from 'react';
import { SectionHeader } from '../V4Skills/V4Skills';

const degrees = [
  {
    degree: 'Master of Science',
    field: 'Computer & Information Science',
    school: 'Kent State University',
    dept: 'School of Digital Sciences',
    meta: 'KENT, OH · USA',
    batch: 'SPRING 2015',
    year: '2015',
    color: 'var(--cyan)',
  },
  {
    degree: 'Bachelor of Engineering',
    field: 'Information Science',
    school: 'Dr. T. Thimmaiah Institute of Technology',
    dept: 'Department of Information Science',
    meta: 'KGF, KA · INDIA',
    batch: '2007 – 2011',
    year: '2011',
    color: 'var(--teal)',
  },
];

const V4Education = forwardRef((_props, ref) => {
  const [hovered, setHovered] = useState(null);

  return (
    <section ref={ref} style={{
      minHeight: '100%',
      padding: '2rem 3rem 2rem',
      position: 'relative',
    }}
    className='edu-section'
    >
      <div style={{ position: 'absolute', bottom: '20%', left: '10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(0,229,255,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '900px', width: '100%', position: 'relative', zIndex: 1 }}>
        <SectionHeader num='03 // EDUCATION' title='TRAINING DATA' />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} className='edu-grid'>
          {degrees.map((d, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: 'var(--surface)',
                border: `1px solid ${hovered === i ? d.color : 'var(--border)'}`,
                padding: '0',
                clipPath: 'polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px))',
                position: 'relative',
                transition: 'all 0.25s',
                boxShadow: hovered === i ? `0 0 30px ${d.color}15` : 'none',
                overflow: 'hidden',
              }}
            >
              {/* Year banner across the top — prominent */}
              <div style={{
                background: `linear-gradient(90deg, ${d.color}22, transparent)`,
                borderBottom: `1px solid ${d.color}30`,
                padding: '0.6rem 1.5rem',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              }}>
                <span style={{
                  fontFamily: "'Orbitron', monospace", fontSize: '1.6rem', fontWeight: 900,
                  color: d.color, letterSpacing: '2px', lineHeight: 1,
                  textShadow: `0 0 20px ${d.color}60`,
                }}>{d.year}</span>
                <span style={{
                  fontFamily: "'Share Tech Mono', monospace", fontSize: '0.62rem',
                  color: d.color, letterSpacing: '2px', opacity: 0.8,
                }}>{d.batch}</span>
              </div>

              {/* Card body */}
              <div style={{ padding: '1.4rem 1.5rem 1.6rem' }}>
                {/* Corner accents */}
                <div style={{ position: 'absolute', top: '52px', left: '0.9rem', width: '16px', height: '16px', borderTop: `1px solid ${d.color}`, borderLeft: `1px solid ${d.color}`, opacity: 0.5 }} />
                <div style={{ position: 'absolute', bottom: '0.9rem', right: '1.2rem', width: '16px', height: '16px', borderBottom: `1px solid ${d.color}`, borderRight: `1px solid ${d.color}`, opacity: 0.5 }} />

                {/* Degree type */}
                <div style={{
                  fontFamily: "'Orbitron', monospace", fontSize: '0.82rem', fontWeight: 700,
                  color: d.color, marginBottom: '0.4rem', letterSpacing: '1px',
                }}>
                  {d.degree}
                </div>

                {/* Field */}
                <div style={{
                  fontFamily: "'Orbitron', monospace", fontSize: '0.95rem', fontWeight: 700,
                  color: '#fff', marginBottom: '0.5rem', lineHeight: 1.3,
                }}>
                  {d.field}
                </div>

                {/* School */}
                <div style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.75)', marginBottom: '0.3rem', fontWeight: 500 }}>
                  {d.school}
                </div>

                {/* Dept */}
                <div style={{ fontSize: '0.78rem', color: 'var(--muted)', marginBottom: '1rem', lineHeight: 1.4 }}>
                  {d.dept}
                </div>

                {/* Meta */}
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  fontFamily: "'Share Tech Mono', monospace", fontSize: '0.6rem',
                  color: d.color, letterSpacing: '1.5px',
                  background: `${d.color}10`, border: `1px solid ${d.color}30`,
                  padding: '3px 10px',
                  clipPath: 'polygon(0 0, calc(100% - 5px) 0, 100% 5px, 100% 100%, 5px 100%, 0 calc(100% - 5px))',
                }}>
                  📍 {d.meta}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .edu-grid { grid-template-columns: 1fr !important; }
          .edu-section { padding: 1.5rem 5% 2rem !important; }
        }
      `}</style>
    </section>
  );
});

export default V4Education;

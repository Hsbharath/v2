'use client';

import React, { useState, forwardRef } from 'react';
import { SectionHeader } from '../V4Skills/V4Skills';

const inputStyle = {
  background: 'var(--surface)',
  border: '1px solid var(--border)',
  color: 'var(--text)',
  padding: '0.55rem 0.8rem',
  fontFamily: "'Rajdhani', sans-serif",
  fontSize: '0.9rem',
  outline: 'none', width: '100%',
  clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))',
  transition: 'border-color 0.2s, box-shadow 0.2s',
};

const labelStyle = {
  fontFamily: "'Share Tech Mono', monospace",
  fontSize: '0.6rem', color: 'var(--cyan)',
  letterSpacing: '2px', textTransform: 'uppercase',
};

const V4Contact = forwardRef((_props, ref) => {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handle = (e) => {
    const { name, value } = e.target;
    setForm(p => ({ ...p, [name]: value }));
    setErrors(p => ({ ...p, [name]: '' }));
  };

  const submit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.firstName.trim()) errs.firstName = 'Required';
    if (!form.lastName.trim()) errs.lastName = 'Required';
    if (!form.email.trim()) errs.email = 'Required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Invalid';
    if (!form.message.trim()) errs.message = 'Required';
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setForm({ firstName: '', lastName: '', email: '', phone: '', message: '' });
    }, 2000);
  };

  const focusStyle = (e) => { e.target.style.borderColor = 'var(--cyan)'; e.target.style.boxShadow = '0 0 12px rgba(0,229,255,0.1)'; };
  const blurStyle = (e) => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none'; };

  return (
    <section ref={ref} style={{
      minHeight: '100%',
      padding: '2rem 3rem 2rem',
      position: 'relative',
    }}
    className='contact-section'
    >
      <div style={{ position: 'absolute', top: '20%', right: '5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(57,255,20,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />

      {/* Sending overlay — only renders when sending=true, no pointer-event interference otherwise */}
      {sending && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 500,
          background: 'rgba(5,10,15,0.88)',
          backdropFilter: 'blur(4px)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          gap: '1.5rem',
        }}>
          {/* Animated radar rings */}
          <div style={{ position: 'relative', width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                position: 'absolute',
                width: `${40 + i * 20}px`, height: `${40 + i * 20}px`,
                borderRadius: '50%',
                border: '1px solid rgba(57,255,20,0.4)',
                animation: `radarPulse 1.6s ${i * 0.4}s ease-out infinite`,
              }} />
            ))}
            <svg width='28' height='28' viewBox='0 0 32 32' fill='none'>
              <path d='M1 6h10M7 2l4 4-4 4' stroke='#39ff14' strokeWidth='1.5'/>
              <rect x='4' y='5' width='24' height='19' rx='3' fill='none' stroke='#39ff14' strokeWidth='1.2'/>
            </svg>
          </div>
          <div style={{ fontFamily: "'Orbitron', monospace", fontSize: '0.85rem', color: '#39ff14', letterSpacing: '3px', animation: 'textBlink 0.8s step-end infinite' }}>
            TRANSMITTING...
          </div>
          <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.6rem', color: 'var(--muted)', letterSpacing: '2px' }}>
            SECURING CHANNEL // PLEASE WAIT
          </div>
        </div>
      )}

      <div style={{ maxWidth: '900px', width: '100%', position: 'relative', zIndex: 1 }}>
        <SectionHeader num='04 // CONTACT' title='TRANSMIT' />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }} className='contact-grid'>

          {/* Form */}
          <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <div className='form-row' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem' }}>
              {[['firstName', 'First Name'], ['lastName', 'Last Name']].map(([name, label]) => (
                <div key={name} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <label style={labelStyle}>{label}</label>
                  <input style={inputStyle} type='text' name={name} value={form[name]} onChange={handle} onFocus={focusStyle} onBlur={blurStyle} />
                  {errors[name] && <span style={{ fontFamily: "'Share Tech Mono'", fontSize: '0.55rem', color: 'var(--accent)' }}>{errors[name]}</span>}
                </div>
              ))}
            </div>
            <div className='form-row' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <label style={labelStyle}>Email</label>
                <input style={inputStyle} type='email' name='email' value={form.email} onChange={handle} onFocus={focusStyle} onBlur={blurStyle} />
                {errors.email && <span style={{ fontFamily: "'Share Tech Mono'", fontSize: '0.55rem', color: 'var(--accent)' }}>{errors.email}</span>}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <label style={labelStyle}>Phone</label>
                <input style={inputStyle} type='tel' name='phone' value={form.phone} onChange={handle} onFocus={focusStyle} onBlur={blurStyle} />
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <label style={labelStyle}>Message</label>
              <textarea style={{ ...inputStyle, minHeight: '90px', resize: 'vertical' }} name='message' value={form.message} onChange={handle} onFocus={focusStyle} onBlur={blurStyle} />
              {errors.message && <span style={{ fontFamily: "'Share Tech Mono'", fontSize: '0.55rem', color: 'var(--accent)' }}>{errors.message}</span>}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.2rem' }}>
              <button type='submit' disabled={sending || sent} style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '0.7rem 1.8rem', background: sent ? 'rgba(57,255,20,0.1)' : 'transparent',
                border: `1px solid ${sent ? 'var(--accent)' : 'var(--accent)'}`,
                color: 'var(--accent)',
                fontFamily: "'Share Tech Mono', monospace",
                fontSize: '0.72rem', letterSpacing: '2px', textTransform: 'uppercase',
                clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
                transition: 'all 0.2s',
                opacity: sending ? 0.5 : 1,
                cursor: sending || sent ? 'not-allowed' : 'pointer',
              }}
              onMouseEnter={e => { if (!sending && !sent) { e.currentTarget.style.background = 'rgba(57,255,20,0.1)'; e.currentTarget.style.boxShadow = '0 0 18px rgba(57,255,20,0.2)'; } }}
              onMouseLeave={e => { if (!sent) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.boxShadow = 'none'; } }}>
                <svg width='12' height='12' viewBox='0 0 12 12' fill='none'><path d='M1 6h10M7 2l4 4-4 4' stroke='currentColor' strokeWidth='1.5'/></svg>
                {sent ? 'TRANSMITTED ✓' : 'TRANSMIT'}
              </button>
            </div>
          </form>

          {/* Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
            {[
              { label: 'Direct Channel', links: [{ href: 'tel:+12342815147', text: '+1 (234) 281-5147' }] },
              { label: 'Email Nodes', links: [{ href: 'mailto:hsbharath01@gmail.com', text: 'hsbharath01@gmail.com' }, { href: 'mailto:bharathh.868@gmail.com', text: 'bharathh.868@gmail.com' }] },
              { label: 'Network Uplinks', links: [{ href: 'https://www.linkedin.com/in/bharathhunkundasreenivasa', text: 'LinkedIn', ext: true }, { href: 'https://www.reddit.com/user/learning-goodlife/', text: 'Reddit', ext: true }] },
            ].map(({ label, links }) => (
              <div key={label}>
                <div className='contact-block-label'>{label}</div>
                {links.map(({ href, text, ext }) => (
                  <a key={href} href={href} target={ext ? '_blank' : undefined} rel={ext ? 'noopener noreferrer' : undefined}
                    style={{ display: 'block', color: 'var(--text)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '3px', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--cyan)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text)'}>{text}</a>
                ))}
              </div>
            ))}
            <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
              <div style={{ fontFamily: "'Orbitron', monospace", fontSize: '0.75rem', color: 'var(--muted)', letterSpacing: '2px', marginBottom: '4px' }}>HS.BHARATH // v2.0</div>
              <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.55rem', color: 'var(--muted)', letterSpacing: '1px' }}>
                Built with Next.js + Tailwind · Hosted on Vercel
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes radarPulse {
          0% { transform: scale(0.6); opacity: 0.8; }
          100% { transform: scale(1.8); opacity: 0; }
        }
        @keyframes textBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .contact-section { padding: 1.5rem 5% 2rem !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
});

export default V4Contact;

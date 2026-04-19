'use client';

import React, { useEffect, useRef } from 'react';

const V4Cursor = () => {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return;

    let currentTarget = null;

    const move = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';

      // Keep ring synced if hovering (element may have scrolled/resized)
      if (currentTarget) updateRing(currentTarget);
    };

    const updateRing = (el) => {
      const r = el.getBoundingClientRect();
      const pad = 4;
      ring.style.left   = (r.left - pad) + 'px';
      ring.style.top    = (r.top - pad) + 'px';
      ring.style.width  = (r.width + pad * 2) + 'px';
      ring.style.height = (r.height + pad * 2) + 'px';
      ring.style.opacity = '1';
    };

    const onEnter = (e) => {
      currentTarget = e.currentTarget;
      cursor.classList.add('is-pointer');
      updateRing(currentTarget);

      // Turn hovered element's text green
      currentTarget.classList.add('cursor-hover-target');
    };

    const onLeave = (e) => {
      currentTarget = null;
      cursor.classList.remove('is-pointer');
      ring.style.opacity = '0';
      e.currentTarget.classList.remove('cursor-hover-target');
    };

    const targets = document.querySelectorAll('a, button, [role="button"]');
    targets.forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    document.addEventListener('mousemove', move);

    return () => {
      document.removeEventListener('mousemove', move);
      targets.forEach(el => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Robot head cursor — tilts on hover via CSS */}
      <div ref={cursorRef} className='custom-cursor'>
        <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <line x1='16' y1='1' x2='16' y2='5' stroke='#00e5ff' strokeWidth='1.5' strokeLinecap='round'/>
          <circle cx='16' cy='1' r='1.5' fill='#39ff14'/>
          <rect x='5' y='5' width='22' height='18' rx='3' fill='#0b1520' stroke='#00e5ff' strokeWidth='1.2'/>
          <rect x='8' y='10' width='5' height='4' rx='1' fill='#00e5ff' opacity='0.9'/>
          <rect x='19' y='10' width='5' height='4' rx='1' fill='#00e5ff' opacity='0.9'/>
          <rect x='9' y='11' width='2' height='1.5' rx='0.5' fill='#ffffff' opacity='0.6'/>
          <rect x='20' y='11' width='2' height='1.5' rx='0.5' fill='#ffffff' opacity='0.6'/>
          <rect x='10' y='17' width='12' height='2.5' rx='1' fill='none' stroke='#00b8d4' strokeWidth='1'/>
          <rect x='12' y='17.5' width='2' height='1.5' rx='0.3' fill='#39ff14' opacity='0.8'/>
          <rect x='15' y='17.5' width='2' height='1.5' rx='0.3' fill='#39ff14' opacity='0.8'/>
          <rect x='18' y='17.5' width='2' height='1.5' rx='0.3' fill='#39ff14' opacity='0.8'/>
          <rect x='2' y='10' width='3' height='6' rx='1' fill='#0b1520' stroke='#1e3d52' strokeWidth='1'/>
          <rect x='27' y='10' width='3' height='6' rx='1' fill='#0b1520' stroke='#1e3d52' strokeWidth='1'/>
          <rect x='12' y='23' width='8' height='3' rx='1' fill='#0b1520' stroke='#1e3d52' strokeWidth='1'/>
          <line x1='5' y1='8' x2='8' y2='5' stroke='#00e5ff' strokeWidth='0.8' opacity='0.5'/>
          <line x1='27' y1='8' x2='24' y2='5' stroke='#00e5ff' strokeWidth='0.8' opacity='0.5'/>
        </svg>
      </div>

      {/* Green highlight ring — wraps the hovered element */}
      <div ref={ringRef} className='cursor-ring' />
    </>
  );
};

export default V4Cursor;

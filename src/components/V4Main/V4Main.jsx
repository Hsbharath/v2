'use client';

import React, { useEffect } from 'react';
import V4Header from '../V4Header/V4Header';
import V4Bio from '../V4Bio/V4Bio';
import V4Cursor from '../V4Cursor/V4Cursor';
import V4Contact from '../V4Contact/V4Contact';
import V4Skills from '../V4Skills/V4Skills';
import V4Experience from '../V4Experience/V4Experience';
import V4Education from '../V4Education/V4Education';
import V4Footer from '../V4Footer/V4Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const V4Main = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <V4Cursor />
      <div className='w-full min-h-screen mx-auto'>
        <V4Header />
        <V4Bio />
        <V4Skills />
        <V4Experience />
        <V4Education />
        <V4Contact />
        <V4Footer />
      </div>
    </>
  );
};

export default V4Main;

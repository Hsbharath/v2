'use client';

import React, { useEffect } from 'react';
import V4Header from '../V4Header/V4Header';
import V4Bio from '../V4Bio/V4Bio';
import V4Cursor from '../V4Cursor/V4Cursor';
import AOS from 'aos';
import 'aos/dist/aos.css';

const V4Main = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <V4Cursor />
      <div className='w-full lg:max-w-screen-2xl md:max-w-screen-xl min-h-screen mx-auto'>
        <V4Header />
        <V4Bio />
      </div>
    </>
  );
};

export default V4Main;

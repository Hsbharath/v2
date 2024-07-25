'use client';

import React, { useEffect } from 'react';
import V4Header from '../V4Header/V4Header';
import V4Bio from '../V4Bio/V4Bio';
import V4Cursor from '../V4Cursor/V4Cursor';
import V4Skills from '../V4Skills/V4Skills';
import AOS from 'aos';
import 'aos/dist/aos.css';

const V4Main = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <V4Cursor />
      <div className='w-full lg:max-w-screen-xl 2xl:max-w-screen-2xl min-h-screen mx-auto'>
        <V4Header />
        <V4Bio />
        <V4Skills />
      </div>
    </>
  );
};

export default V4Main;

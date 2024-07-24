import React from 'react';
import V4Header from '../V4Header/V4Header';
import V4Bio from '../V4Bio/V4Bio';
import V4Cursor from '../V4Cursor/V4Cursor';

const V4Main = () => {
  return (
    <>
      <V4Cursor />
      <div className='w-full md:max-w-screen-2xl min-h-screen mx-auto'>
        <V4Header />
        <V4Bio />
      </div>
    </>
  );
};

export default V4Main;

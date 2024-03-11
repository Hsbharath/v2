import React from 'react';

import { useSelector } from 'react-redux';

import Role from '../Role/page';

const Bio = () => {
  const device = useSelector((state) => state.device.value);
  return (
    <div
      className={`relative w-[100%] min-h-[100vh] flex flex-col items-start justify-center gap-6 mx-auto p-3 transition-all duration-700`}
    >
      <div className='w-[100%]'>
        <hgroup className='flex flex-col text-left mb-6'>
          <span
            className={`'pb-6 text-lg font-medium text-blue-900 dark:text-sky-500`}
          >
            Hello, I am
          </span>
          <h1 className={`font-semibold text-6xl text-black dark:text-white`}>
            Bharath
          </h1>
          <p className={`font-light uppercase text-2xl dark:text-white`}>
            Hunkunda Sreenivasa
          </p>
        </hgroup>
        <address
          className='w-[100%] flex flex-col md:flex-row items-start justify-start md:items-center md:justify-center text-black dark:text-white not-italic  border-y-2 border-slate-900 dark:border-slate-200
          [&_p]:flex
          [&_p]:items-start
          [&_p]:justify-start
          [&_p]:md:items-center
          [&_p]:md:justify-center
          [&_p]:gap-2
          [&_p]:p-3
          [&_p.center]:md:border-x-2
          [&_p.center]:md:border-slate-900
          [&_p.center]:md:dark:border-slate-200
          [&_span]:text-blue-900
          [&_span]:dark:text-sky-500'
        >
          <p>
            <span className='material-symbols-outlined'>location_on</span>
            Seattle, WA
          </p>
          <p className='center'>
            <span className='material-symbols-outlined'>mail</span>
            <a href='mailto:hsbharath01@gmail.com'>hsbharath01@gmail.com</a>
          </p>
          <p>
            <span className='material-symbols-outlined'>phone_android</span>
            <a href='tel:+12342815147'>+1 234-281-5147</a>
          </p>
        </address>
      </div>
      <Role />
    </div>
  );
};

export default Bio;

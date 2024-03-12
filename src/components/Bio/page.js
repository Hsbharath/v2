import React from 'react';

import { useSelector } from 'react-redux';

import Role from '../Role/page';

// Functional component Bio
const Bio = () => {
  // Accessing the 'device' value from the Redux store
  const device = useSelector((state) => state.device.value);

  return (
    // Main container for Bio component
    <div
      // Dynamically setting class names based on device size
      className={`relative flex flex-col items-start justify-center gap-6 mx-auto p-3 transition-all duration-700
      ${device === 'laptop' ? 'min-h-[100vh]' : ''}
      `}
    >
      <div className='w-[100%]'>
        {/* Group of heading elements */}
        <hgroup className='flex flex-col text-left mb-6'>
          {/* Greeting */}
          <span
            className={`'pb-6 text-lg font-medium text-blue-900 dark:text-sky-500`}
          >
            Hello, I am
          </span>
          {/* Name */}
          <h1 className='title font-semibold text-black dark:text-white'>
            Bharath
          </h1>
          {/* Additional info */}
          <p
            className={`subtitle font-light uppercase text-black dark:text-white`}
          >
            Hunkunda Sreenivasa
          </p>
        </hgroup>
        {/* Contact information */}
        <address
          className={`flex text-black dark:text-white not-italic border-y-2 border-slate-900 dark:border-slate-200
          ${
            device === 'laptop'
              ? 'flex-row items-center justify-center [&_p.center]:md:border-x-2 [&_p.center]:md:border-slate-900 [&_p.center]:md:dark:border-slate-200 [&_p]:p-3'
              : 'flex-col items-start justify-start [&_p]:p-2'
          }
          [&_p]:flex
          [&_p]:items-start
          [&_p]:justify-start
          [&_p]:md:items-center
          [&_p]:md:justify-center
          [&_p]:gap-2
          [&_span]:text-blue-900
          [&_span]:dark:text-sky-500`}
        >
          {/* Location */}
          <p>
            <span className='material-symbols-outlined'>location_on</span>
            Seattle, WA
          </p>
          {/* Email */}
          <p className='center'>
            <span className='material-symbols-outlined'>mail</span>
            <a href='mailto:hsbharath01@gmail.com'>hsbharath01@gmail.com</a>
          </p>
          {/* Phone */}
          <p>
            <span className='material-symbols-outlined'>phone_android</span>
            <a href='tel:+12342815147'>+1 234-281-5147</a>
          </p>
        </address>
      </div>
      {/* Rendering the Role component */}
      <Role />
    </div>
  );
};

// Exporting Bio component as default
export default Bio;

import React from 'react';

import { useSelector } from 'react-redux';

import Role from '../Role/page';

const Bio = () => {
  const device = useSelector((state) => state.device.value);

  return (
    <div className='relative w-[100%] xl:max-w-4xl xl:min-h-[100vh] flex flex-col items-start justify-center gap-6 p-4 mx-auto'>
      <hgroup className='flex flex-col text-left'>
        <span className='text-lg font-medium text-blue-900 dark:text-sky-700 pb-6'>
          Hello, I am
        </span>
        <h1
          className={`
          text-black font-semibold
          ${
            device === 'mobile'
              ? 'text-4xl'
              : device === 'tablet'
              ? 'text-5xl'
              : 'text-6xl dark:text-white '
          }
        `}
        >
          Bharath
        </h1>
        <p
          className={`text-black font-light uppercase
          ${
            device === 'mobile'
              ? 'text-lg'
              : device === 'tablet'
              ? 'text-xl'
              : 'text-2xl dark:text-white'
          }
        `}
        >
          Hunkunda Sreenivasa
        </p>
      </hgroup>
      <address className='w-[100%] flex flex-wrap items-start justify-center not-italic text-black dark:text-white border-y-2 border-slate-900 dark:border-slate-200'>
        <p className='xl:w-[33.33%] flex items-center justify-center gap-2 p-3 '>
          <span className='material-symbols-outlined text-blue-900 dark:text-sky-700'>
            location_on
          </span>
          <span>Greater Seattle Area</span>
        </p>
        <p
          className={`xl:w-[33.33%] flex items-center justify-center gap-2 p-3
          ${
            device === 'laptop'
              ? 'border-x-2 border-slate-900 dark:border-slate-200 hover:bg-slate-900/50 transition-all duration-700'
              : ''
          }
        `}
        >
          <span className='material-symbols-outlined text-blue-900 dark:text-sky-700'>
            mail
          </span>
          <span>
            <a href='mailto:hsbharath01@gmail.com'>hsbharath01@gmail.com</a>
          </span>
        </p>
        <p className='xl:w-[33.33%] flex items-center justify-center gap-2 p-3'>
          <span className='material-symbols-outlined text-blue-900 dark:text-sky-700'>
            phone_android
          </span>
          <span>
            <a href='tel:+12342815147'>+1 234-281-5147</a>
          </span>
        </p>
      </address>
      <Role />
    </div>
  );
};

export default Bio;

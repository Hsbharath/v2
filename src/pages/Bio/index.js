import React from 'react';

import { useSelector } from 'react-redux';

import { Role } from '../Role';

export const Bio = () => {
  const device = useSelector((state) => state.device.value);

  return (
    <div className='relative w-[100%] xl:max-w-4xl xl:min-h-[100vh] flex flex-col items-start justify-center gap-6 p-4 mx-auto'>
      <hgroup className='flex flex-col text-left'>
        <span className='text-lg font-medium text-blue-900 dark:text-sky-700 pb-6'>
          Hello, I am
        </span>
        <h1
          className={`
          dark:text-white font-semibold
          ${
            device === 'mobile'
              ? 'text-4xl'
              : device === 'tablet'
              ? 'text-5xl'
              : 'text-6xl'
          }
        `}
        >
          Bharath
        </h1>
        <p
          className={`dark:text-white font-light uppercase
          ${
            device === 'mobile'
              ? 'text-lg'
              : device === 'tablet'
              ? 'text-xl'
              : 'text-2xl'
          }
        `}
        >
          Hunkunda Sreenivasa
        </p>
      </hgroup>
      <address className='flex flex-wrap items-start justify-start gap-3 not-italic'>
        <p className='flex items-start justify-center gap-1'>
          <span className='material-symbols-outlined text-blue-900 dark:text-sky-700'>
            location_on
          </span>
          <span>Greater Seattle Area</span>
        </p>
        <p className='flex items-start justify-center gap-1'>
          <span className='material-symbols-outlined text-blue-900 dark:text-sky-700'>
            mail
          </span>
          <span>
            <a href='mailto:hsbharath01@gmail.com'>hsbharath01@gmail.com</a>
          </span>
        </p>
        <p className='flex items-start justify-center gap-1'>
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

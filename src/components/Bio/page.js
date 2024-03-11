import React from 'react';

import { useSelector } from 'react-redux';

import Role from '../Role/page';

const Bio = () => {
  const device = useSelector((state) => state.device.value);
  return (
    <div
      className={`relative w-[100%] flex flex-col items-start justify-center gap-6 mx-auto p-3 transition-all duration-700
      ${device === 'laptop' ? 'min-h-[100vh]' : 'pt-12'}
      `}
    >
      <div className='w-[100%]'>
        <hgroup className='flex flex-col text-left mb-6'>
          <span
            className={`
          ${
            device === 'mobile' ? 'pb-3' : device === 'tablet' ? 'pb-4' : 'pb-6'
          }
          text-lg font-medium text-blue-900 dark:text-sky-500`}
          >
            Hello, I am
          </span>
          <h1
            className={`font-semibold 
          ${
            device === 'mobile'
              ? 'text-4xl '
              : device === 'tablet'
              ? 'text-5xl'
              : 'text-6xl text-black dark:text-white'
          }
        `}
          >
            Bharath
          </h1>
          <p
            className={`font-light uppercase
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
        <address
          className={`w-[100%] flex flex-wrap items-center justify-center not-italic  border-y-2 border-slate-900 dark:border-slate-200
          ${device === 'laptop' ? 'text-black dark:text-white' : ''}
        `}
        >
          <p
            className={`flex gap-2  
          ${
            device === 'mobile'
              ? 'w-[100%] items-start justify-start py-2'
              : 'w-[30%] items-center justify-center p-3'
          }`}
          >
            <span className='material-symbols-outlined text-blue-900 dark:text-sky-500'>
              location_on
            </span>
            <span>Seattle, WA</span>
          </p>
          <p
            className={`flex gap-2
          ${
            device === 'mobile'
              ? 'w-[100%] items-start justify-start py-2'
              : 'w-[40%] items-center justify-center border-x-2 border-slate-900 dark:border-slate-200 hover:bg-sky-400/40 hover:dark:bg-slate-900/50 p-3'
          }
        `}
          >
            <span className='material-symbols-outlined text-blue-900 dark:text-sky-500'>
              mail
            </span>
            <span>
              <a href='mailto:hsbharath01@gmail.com'>hsbharath01@gmail.com</a>
            </span>
          </p>
          <p
            className={`flex gap-2 
          ${
            device === 'mobile'
              ? 'w-[100%] items-start justify-start py-2'
              : 'w-[30%] items-center justify-center hover:bg-sky-400/40 hover:dark:bg-slate-900/50 p-3'
          }
        `}
          >
            <span className='material-symbols-outlined text-blue-900 dark:text-sky-500'>
              phone_android
            </span>
            <span>
              <a href='tel:+12342815147'>+1 234-281-5147</a>
            </span>
          </p>
        </address>
      </div>
      <Role />
    </div>
  );
};

export default Bio;

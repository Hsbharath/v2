import React from 'react';

import { Profile } from '../Profiles';

export const Tablet = () => {
  return (
    <div className='relative w-screen h-full flex flex-row items-center justify-center space-y-8 mx-auto'>
      <div
        className='relative w-[700px] h-[900px] rounded-[48px] mx-auto border-2 border-gray-600/90 bg-slate-900 dark:bg-black p-4
            before:[&_#power-btn]:absolute
            before:[&_#power-btn]:right-[-7px]
            before:[&_#power-btn]:top-[140px]
            before:[&_#power-btn]:w-2
            before:[&_#power-btn]:h-16
            before:[&_#power-btn]:rounded-r-md
            before:[&_#power-btn]:bg-gradient-to-br 
            before:[&_#power-btn]:from-transparent 
            before:[&_#power-btn]:to-sky-600
            before:[&_#power-btn]:dark:bg-gradient-to-br 
            before:[&_#power-btn]:dark:from-transparent 
            before:[&_#power-btn]:dark:to-blue-900 
            before:[&_#silent-btn]:absolute
            before:[&_#silent-btn]:left-[-7px]
            before:[&_#silent-btn]:top-[60px]
            before:[&_#silent-btn]:w-1
            before:[&_#silent-btn]:h-6
            before:[&_#silent-btn]:rounded-l-md
            before:[&_#silent-btn]:bg-gradient-to-br 
            before:[&_#silent-btn]:from-transparent 
            before:[&_#silent-btn]:to-sky-600
            before:[&_#silent-btn]:dark:bg-gradient-to-br 
            before:[&_#silent-btn]:dark:from-transparent 
            before:[&_#silent-btn]:dark:to-blue-900 
            before:[&_#volup-btn]:absolute
            before:[&_#volup-btn]:left-[-7px]
            before:[&_#volup-btn]:top-[120px]
            before:[&_#volup-btn]:w-1
            before:[&_#volup-btn]:h-8
            before:[&_#volup-btn]:rounded-l-md
            before:[&_#volup-btn]:bg-gradient-to-br 
            before:[&_#volup-btn]:from-transparent 
            before:[&_#volup-btn]:to-sky-600
            before:[&_#volup-btn]:dark:bg-gradient-to-br 
            before:[&_#volup-btn]:dark:from-transparent 
            before:[&_#volup-btn]:dark:to-blue-900 
            before:[&_#voldw-btn]:absolute
            before:[&_#voldw-btn]:left-[-7px]
            before:[&_#voldw-btn]:top-[160px]
            before:[&_#voldw-btn]:w-1
            before:[&_#voldw-btn]:h-8
            before:[&_#voldw-btn]:rounded-l-md
            before:[&_#voldw-btn]:bg-gradient-to-br 
            before:[&_#voldw-btn]:from-transparent 
            before:[&_#voldw-btn]:to-sky-600
            before:[&_#voldw-btn]:dark:bg-gradient-to-br 
            before:[&_#voldw-btn]:dark:from-transparent 
            before:[&_#voldw-btn]:dark:to-blue-900 
        '
      >
        <div id='power-btn'></div>
        <div id='silent-btn'></div>
        <div id='volup-btn'></div>
        <div id='voldw-btn'></div>
        <div className='w-full h-full bg-white dark:bg-slate-600 rounded-[32px]'>
          <Profile />
        </div>
      </div>
    </div>
  );
};

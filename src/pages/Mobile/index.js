'use client';

import React from 'react';

import { Profile } from '../Profiles';

export const Mobile = () => {
  return (
    <div className='relative w-screen h-full flex flex-row items-center justify-center max-w-sm space-y-8 p-3 mx-auto'>
      <div
        className='relative w-[300px] h-[600px] rounded-[48px] flex items-start justify-start border-2 border-gray-800/90 bg-black/80 dark:bg-black p-3 z-40
            before:[&_#power-btn]:absolute
            before:[&_#power-btn]:right-[-7px]
            before:[&_#power-btn]:top-[140px]
            before:[&_#power-btn]:w-2
            before:[&_#power-btn]:h-16
            before:[&_#power-btn]:rounded-r-md
            before:[&_#power-btn]:bg-gradient-to-br 
            before:[&_#power-btn]:from-transparent 
            before:[&_#power-btn]:to-slate-900
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
            before:[&_#silent-btn]:to-slate-900
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
            before:[&_#volup-btn]:to-slate-900
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
            before:[&_#voldw-btn]:to-slate-900
            before:[&_#voldw-btn]:dark:bg-gradient-to-br 
            before:[&_#voldw-btn]:dark:from-transparent 
            before:[&_#voldw-btn]:dark:to-blue-900 
        '
      >
        <div id='power-btn'></div>
        <div id='silent-btn'></div>
        <div id='volup-btn'></div>
        <div id='voldw-btn'></div>
        <div className='w-full h-full flex items-start justify-start bg-white overflow-hidden -z-[60]'>
          <Profile />
        </div>
      </div>
    </div>
  );
};

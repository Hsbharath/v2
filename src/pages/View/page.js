import React from 'react';

import { useSelector } from 'react-redux';

import { Bio } from '../Bio/page';
import { Education } from '../Education/page';
import { Experience } from '../Experience/page';
import { Skills } from '../Skills/page';

export const View = () => {
  const device = useSelector((state) => state.device.value);
  const size = {
    mobile: {
      width: '300px',
      height: '600px',
      border: 2,
      borderColor: 'gray-800/90',
      darkBg: 'black',
      overflow: 'none',
    },
    tablet: {
      width: '700px',
      height: '900px',
      border: 2,
      borderColor: 'gray-800/90',
      darkBg: 'black',
      overflow: 'none',
    },
    laptop: {
      width: '100%',
      height: '100%',
      border: 0,
      borderColor: 'transparent',
      darkBg: 'transparent',
      overflow: 'hidden',
    },
  };
  return (
    <div
      className={`relative
            w-[${size[device].width}]
            h-[${size[device].height}]
            dark:bg-${size[device].darkBg}
            border-${size[device].border}
            border-${size[device].borderColor}
            overflow-${size[device].overflow}
            ${device !== 'tablet' && device !== 'mobile' ? '' : 'bg-black'}
            ${device !== 'tablet' && device !== 'mobile' ? 'p-0' : 'p-3'}
            ${
              device !== 'tablet' && device !== 'mobile' ? '' : 'rounded-[48px]'
            }
            flex
            items-center
            justify-center
            mx-auto
            transition
            duration-700
            after:[&_#power-btn]:absolute
            after:[&_#power-btn]:right-[-11px]
            after:[&_#power-btn]:top-[140px]
            after:[&_#power-btn]:w-2
            after:[&_#power-btn]:h-16
            after:[&_#power-btn]:rounded-r-md
            after:[&_#power-btn]:bg-gradient-to-br
            after:[&_#power-btn]:from-transparent
            after:[&_#power-btn]:to-slate-900
            after:[&_#power-btn]:dark:bg-gradient-to-br
            after:[&_#power-btn]:dark:from-transparent
            after:[&_#power-btn]:dark:to-blue-900
            after:[&_#silent-btn]:absolute
            after:[&_#silent-btn]:left-[-7px]
            after:[&_#silent-btn]:top-[60px]
            after:[&_#silent-btn]:w-1
            after:[&_#silent-btn]:h-6
            after:[&_#silent-btn]:rounded-l-md
            after:[&_#silent-btn]:bg-gradient-to-br
            after:[&_#silent-btn]:from-transparent
            after:[&_#silent-btn]:to-slate-900
            after:[&_#silent-btn]:dark:bg-gradient-to-br
            after:[&_#silent-btn]:dark:from-transparent
            after:[&_#silent-btn]:dark:to-blue-900
            after:[&_#volup-btn]:absolute
            after:[&_#volup-btn]:left-[-7px]
            after:[&_#volup-btn]:top-[120px]
            after:[&_#volup-btn]:w-1
            after:[&_#volup-btn]:h-8
            after:[&_#volup-btn]:rounded-l-md
            after:[&_#volup-btn]:bg-gradient-to-br
            after:[&_#volup-btn]:from-transparent
            after:[&_#volup-btn]:to-slate-900
            after:[&_#volup-btn]:dark:bg-gradient-to-br
            after:[&_#volup-btn]:dark:from-transparent
            after:[&_#volup-btn]:dark:to-blue-900
            after:[&_#voldw-btn]:absolute
            after:[&_#voldw-btn]:left-[-7px]
            after:[&_#voldw-btn]:top-[160px]
            after:[&_#voldw-btn]:w-1
            after:[&_#voldw-btn]:h-8
            after:[&_#voldw-btn]:rounded-l-md
            after:[&_#voldw-btn]:bg-gradient-to-br
            after:[&_#voldw-btn]:from-transparent
            after:[&_#voldw-btn]:to-slate-900
            after:[&_#voldw-btn]:dark:bg-gradient-to-br
            after:[&_#voldw-btn]:dark:from-transparent
            after:[&_#voldw-btn]:dark:to-blue-900
        `}
    >
      <div id='power-btn'></div>
      <div id='silent-btn'></div>
      <div id='volup-btn'></div>
      <div id='voldw-btn'></div>
      <div
        className={`w-[100%] h-full flex items-start justify-start rounded-[36px] ${
          device !== 'tablet' && device !== 'mobile' ? '' : 'bg-white'
        } overflow-hidden overflow-y-scroll transition-all duration-700 group p-3`}
      >
        <div className='w-[100%] h-full flex flex-col items-start justify-start gap-12'>
          <Bio />
          <Skills />
          <Experience />
          <Education />
        </div>
      </div>
    </div>
  );
};

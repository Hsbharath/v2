import React from 'react'; // Importing React library
import { useSelector } from 'react-redux';

import Bio from '../Bio/page'; // Importing Bio component
import Education from '../Education/page';
import Experience from '../Experience/page'; // Importing Experience component
import Skills from '../Skills/page';
import Footer from '../Footer/page';

// Definition of View component
const View = () => {
  const device = useSelector((state) => state.device.value); // Getting device size from Redux state

  return (
    <div
      className={`relative 
        ${
          // Conditional rendering of class names based on device size
          device === 'mobile'
            ? 'mobile bg-slate-800 dark:bg-black border-2 border-slate-900 dark:border-slate-900/90 rounded-[48px] transition-all duration-400 px-2'
            : device === 'tablet'
            ? 'tablet bg-slate-800 dark:bg-black border-2 border-slate-900 dark:border-slate-900/90 rounded-[48px] transition-all duration-400 px-2 my-[50px]'
            : 'laptop border-2 border-transparent transition-all duration-400 p-3'
        }
        flex
        items-center
        justify-center
        mx-auto
        after:[&_#power-btn]:absolute
        after:[&_#power-btn]:right-[-7px]
        after:[&_#power-btn]:top-[140px]
        after:[&_#power-btn]:w-1
        after:[&_#power-btn]:h-16
        after:[&_#power-btn]:rounded-r-md
        after:[&_#power-btn]:bg-gradient-to-br
        after:[&_#power-btn]:from-transparent
        after:[&_#power-btn]:to-slate-900
        after:[&_#power-btn]:dark:bg-gradient-to-br
        after:[&_#power-btn]:dark:from-transparent
        after:[&_#power-btn]:dark:to-yellow-400
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
        after:[&_#silent-btn]:dark:to-yellow-400
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
        after:[&_#volup-btn]:dark:to-yellow-400
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
        after:[&_#voldw-btn]:dark:to-yellow-400
      `}
    >
      {/* Power button */}
      <div id='power-btn'></div>
      {/* Silent button */}
      <div id='silent-btn'></div>
      {/* Volume up button */}
      <div id='volup-btn'></div>
      {/* Volume down button */}
      <div id='voldw-btn'></div>
      {/* Main content area */}
      <div
        className={`
          p-3 max-w-4xl h-full flex flex-col items-start justify-start rounded-[36px] transition-all duration-700 group`}
      >
        {/* Rendering different sections based on device size */}
        <div
          className={`h-full flex flex-col items-start justify-start gap-6 mx-auto rounded-[36px] overflow-hidden overflow-y-scroll
          ${
            device === 'mobile'
              ? 'w-[calc(300px_-_20px)] bg-white dark:bg-slate-900 transition-all duration-400'
              : device === 'tablet'
              ? 'w-[calc(600px_-_20px)] bg-white dark:bg-slate-900 border-2 border-slate-900 dark:border-slate-900/90 transition-all duration-400 p-2'
              : 'max-w-4xl laptop border-2 border-transparent transition-all duration-400 p-3'
          }
        `}
        >
          {/* Bio section */}
          <div id='bio' className='w-[100%]'>
            <Bio />
          </div>
          {/* Skills section */}
          <div id='skills' className='w-[100%]'>
            <Skills />
          </div>
          {/* Experience section */}
          <div id='experience' className='w-[100%]'>
            <Experience />
          </div>
          {/* Education section */}
          <div id='education' className='w-[100%]'>
            <Education />
          </div>
          <div className='w-[100%]'>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default View; // Exporting View component as default

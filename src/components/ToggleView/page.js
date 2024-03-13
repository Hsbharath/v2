import { changeDevice } from '@/store/reducers/deviceReducer';
import { viewSection } from '@/store/reducers/viewSectionReducer';

import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import ThemeSwitch from '../ThemeSwitch/page';

const ToggleView = () => {
  const device = useSelector((state) => state.device.value);
  const dispatch = useDispatch();

  const [dropDown, setDropDown] = useState(false);

  const showDropDown = () => {
    setDropDown(!dropDown);
  };

  return (
    <div className='relative'>
      <div
        className='
    fixed top-[20px] right-[20px] flex flex-row items-start justify-between bg-white dark:bg-blue-600/20 border-2 border-slate-800 rounded-md overflow-hidden z-40
    [&_button]:p-3'
      >
        <div>
          {dropDown && (
            <div
              className='w-[100%] flex flex-col items-start justify-start min-w-[140px] border-r-2 border-slate-800 z-50
            [&_button]:text-black
            [&_button]:dark:text-white'
            >
              <button
                className='w-[100%] flex items-start justify-start border-b-2 border-slate-800 hover:bg-sky-400/40'
                onClick={() => dispatch(viewSection('bio'))}
              >
                Bio
              </button>
              <button
                className='w-[100%] flex items-start justify-start border-b-2 border-slate-800 hover:bg-sky-400/40'
                onClick={() => dispatch(viewSection('skills'))}
              >
                Skills
              </button>
              <button
                className='w-[100%] flex items-start justify-start border-b-2 border-slate-800 hover:bg-sky-400/40'
                onClick={() => dispatch(viewSection('experience'))}
              >
                Experience
              </button>
              <button
                className='w-[100%] flex items-start justify-start hover:bg-sky-400/40'
                onClick={() => dispatch(viewSection('education'))}
              >
                Education
              </button>
            </div>
          )}
        </div>
        <div className='flex flex-col text-black dark:text-white'>
          <button className='w-[60px] h-full flex items-center justify-center border-b-2 border-slate-800 hover:bg-sky-400/40'>
            <ThemeSwitch />
          </button>
          {device !== 'mobile' && (
            <button
              className='w-[60px] h-full flex items-center justify-center border-b-2 border-slate-800 hover:bg-sky-400/40'
              onClick={() => dispatch(changeDevice('mobile'))}
            >
              <span className='material-symbols-outlined'>phone_iphone</span>
            </button>
          )}
          {device !== 'tablet' && (
            <button
              className='w-[60px] h-full flex items-center justify-center border-b-2 border-slate-800 hover:bg-sky-400/40'
              onClick={() => dispatch(changeDevice('tablet'))}
            >
              <span className='material-symbols-outlined'>tablet_mac</span>
            </button>
          )}
          {device !== 'laptop' && (
            <button
              className='w-[60px] h-full flex items-center justify-center border-b-2 border-slate-800 hover:bg-sky-400/40'
              onClick={() => dispatch(changeDevice('laptop'))}
            >
              <span className='material-symbols-outlined '>laptop_mac</span>
            </button>
          )}
          <button
            className='w-[60px] h-full flex items-center justify-center hover:bg-sky-400/40'
            onClick={showDropDown}
          >
            <span className='material-symbols-outlined '>menu</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToggleView;

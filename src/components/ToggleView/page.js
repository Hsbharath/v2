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
        className={`
    ${device === 'laptop' ? '' : 'd-none'}
    fixed top-[20px] right-[20px] flex flex-col items-center justify-between bg-white border-2 border-slate-800 rounded-md overflow-hidden z-40
    [&_button]:p-3`}
      >
        <div className='flex'>
          <button className='w-[60px] h-full flex items-center justify-center border-r-2 border-slate-800 hover:bg-sky-400/40'>
            <ThemeSwitch />
          </button>
          <button
            className='w-[60px] h-full flex items-center justify-center border-r-2 border-slate-800 hover:bg-sky-400/40'
            onClick={() => dispatch(changeDevice('mobile'))}
          >
            <span className='material-symbols-outlined dark:text-slate-800'>
              phone_iphone
            </span>
          </button>
          <button
            className='w-[60px] h-full flex items-center justify-center border-r-2 border-slate-800 hover:bg-sky-400/40'
            onClick={() => dispatch(changeDevice('tablet'))}
          >
            <span className='material-symbols-outlined dark:text-slate-800'>
              tablet_mac
            </span>
          </button>
          <button
            className='w-[60px] h-full flex items-center justify-center border-r-2 border-slate-800 hover:bg-sky-400/40'
            onClick={() => dispatch(changeDevice('laptop'))}
          >
            <span className='material-symbols-outlined dark:text-slate-800'>
              laptop_mac
            </span>
          </button>
          <button
            className='w-[60px] h-full flex items-center justify-center hover:bg-sky-400/40'
            onClick={showDropDown}
          >
            <span className='material-symbols-outlined dark:text-slate-800'>
              menu
            </span>
          </button>
        </div>
        {dropDown && (
          <div className='bg-white w-[100%] min-h-[200px] border-t-2 border-slate-800 z-50'>
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
    </div>
  );
};

export default ToggleView;

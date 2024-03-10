import { changeDevice } from '@/store/reducers/deviceReducer';

import React from 'react';

import { useDispatch } from 'react-redux';

export const ToggleView = () => {
  const dispatch = useDispatch();

  return (
    <div className='absolute top-[20px] right-[20px] flex items-center justify-between w-[180px] h-[50px] bg-white border-2 border-slate-800 rounded-md overflow-hidden z-50'>
      <button
        className='w-[60px] h-full flex items-center justify-center hover:bg-sky-400/40'
        onClick={() => dispatch(changeDevice('mobile'))}
      >
        <span className='material-symbols-outlined dark:text-slate-800'>
          phone_iphone
        </span>
      </button>
      <button
        className='w-[60px] h-full flex items-center justify-center border-x-2 border-slate-800 hover:bg-sky-400/40'
        onClick={() => dispatch(changeDevice('tablet'))}
      >
        <span className='material-symbols-outlined dark:text-slate-800'>
          tablet_mac
        </span>
      </button>
      <button
        className='w-[60px] h-full flex items-center justify-center hover:bg-sky-400/40'
        onClick={() => dispatch(changeDevice('laptop'))}
      >
        <span className='material-symbols-outlined dark:text-slate-800'>
          laptop_mac
        </span>
      </button>
    </div>
  );
};
'use client';

import { changeDevice } from '@/store/reducers/deviceReducer';

import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import ToggleView from '../ToggleView/page';
import View from '../View/page';

const Main = () => {
  const dispatch = useDispatch();
  const selectedSection = useSelector((state) => state.section.value);
  const [deviceSize, setDeviceSize] = useState(null);

  useEffect(() => {
    // If selected section is available in Redux state, scroll to it
    if (selectedSection) {
      const sectionElement = document.getElementById(selectedSection);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

    const getDeviceSize = () => {
      if (typeof window !== 'undefined') {
        if (window.matchMedia('(max-width: 767px)').matches) {
          return 'mobile';
        } else if (window.matchMedia('(max-width: 1023px)').matches) {
          return 'tablet';
        } else {
          return 'laptop';
        }
      }
      return null;
    };

    setDeviceSize(getDeviceSize());

    const handleResize = () => {
      const newSize = getDeviceSize();
      if (newSize !== deviceSize) {
        dispatch(changeDevice(newSize));
        setDeviceSize(newSize);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [deviceSize, dispatch, selectedSection]);

  return (
    <div className='relative w-full min-h-[100vh] flex items-center justify-center'>
      <ToggleView />
      <View />
    </div>
  );
};

export default Main;

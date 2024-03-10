'use client';

import React from 'react';

import ToggleView from '../ToggleView/page';
import View from '../View/page';

const Main = () => {
  return (
    <div className='relative w-full min-h-[100vh] flex items-center justify-center'>
      <ToggleView />
      <View />
    </div>
  );
};

export default Main;

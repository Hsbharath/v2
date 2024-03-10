'use client';

import React, { useState } from 'react';

import { ToggleView } from '../ToggleView';
import { View } from '../View';

export const Main = () => {
  return (
    <div className='relative w-full min-h-[100vh] flex items-center justify-center'>
      <ToggleView />
      <View />
    </div>
  );
};

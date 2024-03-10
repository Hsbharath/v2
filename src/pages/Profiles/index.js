import React from 'react';

import { Bio } from '../Bio';
import { Education } from '../Education';
import { Experience } from '../Experience';
import { Skills } from '../Skills';

export const Profile = () => {
  return (
    <div className='w-full max-h-[100vh] flex flex-col items-start justify-start mx-auto'>
      <Bio />
      {/* <Skills />
      <Experience />
      <Education /> */}
    </div>
  );
};

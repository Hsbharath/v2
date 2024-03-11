import React from 'react';

import { useSelector } from 'react-redux';

const Role = () => {
  const device = useSelector((state) => state.device.value);

  return (
    <div className='w-full flex flex-col items-start justify-start gap-6'>
      <p className='text-blue-900 dark:text-sky-700 text-xl md:text-2xl font-medium uppercase'>
        Web Developer
      </p>
      <p
        className={`dark:text-white text-left font-light
        ${device === 'laptop' ? 'text-xl' : 'text-md'}
      `}
      >
        Experienced web developer with 7 years of expertise in front-end and
        back-end development. Skilled in building responsive websites and web
        applications, with a focus on usability. Strong problem-solving
        abilities and commitment to staying updated with industry trends.
        Passionate about creating user-friendly experiences and contributing to
        project success.
      </p>
    </div>
  );
};

export default Role;

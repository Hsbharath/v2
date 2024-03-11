import React from 'react';

import { useSelector } from 'react-redux';

import PageTitle from '../PageTitle/page';

const Role = () => {
  const device = useSelector((state) => state.device.value);

  return (
    <div
      className='w-full flex flex-col items-start justify-start gap-6
    [&_p]:text-md 
    [&_p]:lg:text-lg
    [&_p]:xl:text-xl
    [&_p]:text-black
    [&_p]:dark:text-white'
    >
      <PageTitle title={'Web Developer'} />
      <p>
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

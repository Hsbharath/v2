import React from 'react'; // Importing React library
import { useSelector } from 'react-redux';

import PageTitle from '../PageTitle/page'; // Importing PageTitle component

// Definition of Role component, responsible for displaying information about a specific role
const Role = () => {
  const device = useSelector((state) => state.device.value); // Getting device size from Redux state

  return (
    <div
      className='w-full flex flex-col items-start justify-start gap-6
    [&_p]:text-md 
    [&_p]:lg:text-lg
    [&_p]:text-black
    [&_p]:dark:text-white
    [&_p]:font-light'
    >
      {/* Displaying the title of the role using PageTitle component */}
      <PageTitle title={'Web Developer'} />
      {/* Description of the role */}
      <p className='paragraph'>
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

export default Role; // Exporting Role component as default

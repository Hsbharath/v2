import React, { useEffect, useState } from 'react';

import Image from 'next/image';

import { useSelector } from 'react-redux';

import PageTitle from '../PageTitle/page';

// Functional component Skills
const Skills = () => {
  // Accessing the 'device' value from the Redux store
  const device = useSelector((state) => state.device.value);

  // State to store skills data
  const [skills, setSkills] = useState([]);

  // Fetching skills data from skills.json file using useEffect hook
  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch('/skills.json');
        const data = await response.json();
        setSkills(data);
      } catch (error) {
        console.error('Error fetching skills data:', error);
      }
    };

    fetchSkills();
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    // Main container for Skills component
    <div
      className={`relative w-[100%] flex flex-col items-start justify-center gap-6 mx-auto p-3 transition-all duration-700
      ${device === 'laptop' ? 'min-h-[100vh]' : ''}`}
    >
      {/* Rendering the PageTitle component with the title 'Skills' */}
      <PageTitle title={'Skills'} />

      {/* Container for displaying skills */}
      <div
        className={`w-full   
        ${
          device === 'mobile'
            ? 'grid gap-2'
            : device === 'tablet'
            ? 'grid grid-cols-3 gap-2'
            : 'grid grid-cols-4 gap-2'
        }
        [&>div]:flex
        [&>div]:items-center
        [&>div]:justify-between
        [&>div]:gap-4
        [&>div]:p-1
        [&>div]:rounded-md
        [&>div]:shadow-inner
        [&>div]:shadow-slate-200/90
        [&>div]:dark:shadow-slate-50
        [&>div>.image]:w-[50px]
        [&>div>.image]:bg-white
        [&>div>.image]:p-1
        [&>div>.image]:rounded-md
        [&>div>p]:w-[calc(100%_-_50px)]
        [&>div>p]:text-white
        [&>div>p]:text-lg
        [&>div>p]:font-medium
        [&>div>p]:text-left
      `}
      >
        {/* Mapping through skills array and rendering each skill */}
        {skills.map((skill, index) => (
          <div
            key={index}
            style={{
              background: skill.colorCode,
            }}
          >
            {/* Container for skill icon */}
            <div className='image'>
              {/* Using the Image component to display skill icon */}
              <Image
                src={'/Icons/' + skill.image}
                width={50}
                height={50}
                alt={skill.name} // Alt attribute for accessibility
                className='mx-auto' // Centering the image horizontally
              />
            </div>
            {/* Displaying skill name */}
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Exporting Skills component as default
export default Skills;

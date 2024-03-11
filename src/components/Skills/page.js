import React, { useEffect, useState } from 'react';

import Image from 'next/image';

import { useSelector } from 'react-redux';

import PageTitle from '../PageTitle/page';

const Skills = () => {
  const device = useSelector((state) => state.device.value);
  const [skills, setSkills] = useState([]);

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
  }, []);

  return (
    <div
      className={`relative w-[100%] min-h-[100vh] flex flex-col items-start justify-center gap-6 mx-auto p-3 transition-all duration-700`}
    >
      <PageTitle title={'Skills'} />
      <div
        className='w-full grid gap-2 md:grid-cols-1 md:gap-2 lg:grid-cols-3 lg:gap-3 xl:grid-cols-4 xl:gap-4
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
      '
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            style={{
              background: skill.colorCode,
            }}
          >
            <div className='image'>
              <Image
                src={'/Icons/' + skill.image}
                width={50}
                height={50}
                alt='skill.name'
                className='mx-auto'
              />
            </div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

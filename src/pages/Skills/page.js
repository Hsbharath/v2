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
    <div className='w-[100%] xl:max-w-4xl flex flex-col items-start justify-center gap-6 mx-auto'>
      <PageTitle title={'Skills'} />
      <div
        className={`w-full grid 
        ${
          device === 'mobile'
            ? 'md:grid-cols-1 gap-2'
            : device === 'tablet'
            ? 'lg:grid-cols-3 gap-3'
            : 'xl:grid-cols-4 gap-4'
        }`}
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            style={{
              background: skill.colorCode,
            }}
            className={`flex items-center justify-between ${
              device === 'mobile'
                ? 'gap-1'
                : device === 'tablet'
                ? 'gap-2'
                : 'gap-4 '
            } p-1 rounded-md shadow-md shadow-slate-600 dark:shadow-cyan-900`}
          >
            <div className='w-[25%] bg-white p-1 rounded-md'>
              <Image
                src={'/Icons/' + skill.image}
                width={50}
                height={50}
                alt='skill.name'
                className='mx-auto'
              />
            </div>
            <p
              className={`w-[75%] text-white font-medium text-left ${
                device === 'mobile'
                  ? 'text-md'
                  : device === 'tablet'
                  ? 'text-lg'
                  : 'text-xl '
              }`}
            >
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

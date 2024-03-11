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
      className={`relative w-[100%] flex flex-col items-start justify-center gap-6 mx-auto p-3 transition-all duration-700
      ${device === 'laptop' ? 'min-h-[100vh]' : ''}
      `}
    >
      <PageTitle title={'Skills'} />
      <div
        className={`w-full grid 
        ${
          device === 'mobile'
            ? 'md:grid-cols-1 gap-1'
            : device === 'tablet'
            ? 'lg:grid-cols-3 gap-2'
            : 'xl:grid-cols-4 gap-3'
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
                ? 'gap-2'
                : device === 'tablet'
                ? 'gap-3'
                : 'gap-4 '
            } p-1 rounded-md shadow-inner shadow-slate-200/30 dark:shadow-slate-50`}
          >
            <div className='w-[50px] bg-white p-1 rounded-md'>
              <Image
                src={'/Icons/' + skill.image}
                width={50}
                height={50}
                alt='skill.name'
                className='mx-auto'
              />
            </div>
            <p
              className={`w-[calc(100%_-_50px)] text-white font-medium text-left ${
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

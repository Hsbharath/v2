import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

import PageTitle from '../PageTitle/page';
const Experience = () => {
  const device = useSelector((state) => state.device.value);
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const data = await fetch('/experience.json');
        const res = await data.json();
        setExperiences(res);
      } catch (error) {
        console.log('Error fetching experiences data', error);
      }
    };

    fetchExperience();
  }, []);

  return (
    <div
      className={`relative w-[100%] flex flex-col items-start justify-center gap-6 mx-auto p-3 transition-all duration-700
      ${device === 'laptop' ? 'min-h-[100vh]' : ''}
      `}
    >
      <PageTitle title={'Experience'} />
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
        {experiences.map((experience, key) => {
          <div
            key={key}
            className={`flex flex-col items-center justify-center gap-2`}
          >
            <p className='w-[50px] h-[50px] flex items-center justify-center rounded-full bg-slate-900 border-2'>
              {experience.end}
            </p>
            <p className='w-[50px] h-[50px] flex items-center justify-center rounded-full bg-slate-900 border-2'>
              {experience.start}
            </p>
          </div>;
        })}
      </div>
    </div>
  );
};

export default Experience;

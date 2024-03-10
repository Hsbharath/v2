import React, { useEffect, useState } from 'react';

import Image from 'next/image';

import Degree from '../Degree/page';
import PageTitle from '../PageTitle/page';

const Education = () => {
  const [degrees, setDegrees] = useState([]);

  useEffect(() => {
    const fetchDegrees = async () => {
      try {
        const data = await fetch('/degrees.json');
        const res = await data.json();
        setDegrees(res);
      } catch (error) {
        console.log('Error fetching degrees data', error);
      }
    };

    fetchDegrees();
  }, []);

  return (
    <div className='w-[100%] xl:max-w-4xl xl:min-h-[100vh] flex flex-col items-start justify-center gap-6 mx-auto'>
      <PageTitle title={'Education'} />
      {degrees.map((degree, key) => (
        <div
          key={key}
          className='w-[100%] flex flex-col xl:flex-row items-start justify-center gap-4 border-t-2 border-slate-200'
        >
          <div className='w-full xl:w-[15%] flex flex-col items-center justify-center gap-1 bg-slate-900/50 p-4 rounded-md shadow-inner shadow-black'>
            <span className='text-sm text-gray-400'>Start</span>
            <p className='text-md xl:text-lg font-medium'>{degree.start}</p>
          </div>
          <div className='w-full xl:w-[50%] flex flex-col items-start justify-start gap-1 bg-slate-900/50 p-4 rounded-md shadow-inner shadow-black'>
            <hgroup>
              <h4 className='text-xl xl:text-2xl font-semibold'>
                {degree.degree}
              </h4>
              <p className='text-md xl:text-lg font-medium'>{degree.stream}</p>
            </hgroup>
            <p className='text-sm text-gray-400'>
              College : <span className='text-white'>{degree.college}</span>
            </p>
            <p className='text-sm text-gray-400'>
              Place : <span className='text-white'>{degree.place}</span>
            </p>
            <p className='text-sm text-gray-400'>
              Grade : <span className='text-white'>{degree.grade}</span>
            </p>
          </div>
          <div className='w-full xl:w-[15%] flex flex-col items-center justify-center gap-1 bg-slate-900/50 p-4 rounded-md shadow-inner shadow-black'>
            <span className='text-sm text-gray-400'>End</span>
            <p className='text-md xl:text-lg font-medium'>{degree.end}</p>
          </div>
          <div className='w-full xl:w-[20%] bg-slate-900/50 p-4 rounded-md shadow-inner shadow-black'>
            <Image
              src={degree.image}
              width='100'
              height='100'
              alt={degree.degree}
              className='mx-auto'
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;

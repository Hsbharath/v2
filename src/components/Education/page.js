import React, { useEffect, useState } from 'react';

import Image from 'next/image';

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
          className='w-[100%] flex flex-col xl:flex-row items-start justify-center gap-4'
        >
          <div className=''></div>
        </div>
      ))}
    </div>
  );
};

export default Education;

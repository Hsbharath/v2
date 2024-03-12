import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

import PageTitle from '../PageTitle/page';

const Education = () => {
  const device = useSelector((state) => state.device.value);
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
    <div
      className={`relative w-[100%] flex flex-col items-start justify-center gap-6 mx-auto p-3 transition-all duration-700
      ${device === 'laptop' ? 'min-h-[100vh]' : ''}`}
    >
      <PageTitle title={'Education'} />
    </div>
  );
};

export default Education;

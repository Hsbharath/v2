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
      ${device === 'laptop' ? 'min-h-[100vh]' : ''}`}
    >
      <PageTitle title={'Experience'} />
    </div>
  );
};

export default Experience;

'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const V4TechStack = () => {
  const [skillsData, setSkillsData] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch('/skills.json');
        const data = await response.json();
        setSkillsData(data);
      } catch (error) {
        console.error('Error fetching skills data:', error);
      }
    };

    fetchSkills();
  }, []);

  return (
    <div className='w-full min-h-[800px]'>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className='w-full text-center p-6 shadow-[0_30px_130px_-65px_rgba(0,0,0,0.73)]'
            data-aos='flip-up'
          >
            <div>
              <Image
                src={'/Icons/' + skill.image}
                width={100}
                height={100}
                alt={skill.name}
                className='mx-auto'
              />
            </div>
            <p className='py-6'>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default V4TechStack;

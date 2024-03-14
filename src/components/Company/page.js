import React from 'react';

import { useSelector } from 'react-redux';

function Company({ skills }) {
  const device = useSelector((state) => state.device.value);
  return (
    <div className='w-full'>
      <hgroup className='w-full mb-4'>
        <h4 className='subtitle font-medium text-black dark:text-gray-200'>
          {skills.company}
        </h4>
        <p className='text-md text-black dark:text-gray-200'>{skills.place}</p>
      </hgroup>
      <p className='paragraph text-black dark:text-gray-200 mb-4'>
        {skills.description}
      </p>
      <ul className='flex flex-wrap items-start justify-start gap-2 mb-[10px]'>
        {skills.skills.map((skill, key) => (
          <li
            key={key}
            className='text-sm bg-blue-300 text-black dark:bg-cyan-400/30 dark:text-gray-200 rounded-full px-4 py-1 shadow-inner shadow-slate-900/30'
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Company;

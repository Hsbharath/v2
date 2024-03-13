import React, { useEffect, useState } from 'react'; // Importing React library and its hooks
import { useSelector } from 'react-redux';

import PageTitle from '../PageTitle/page'; // Importing PageTitle component
import Image from 'next/image';

// Definition of Education component, responsible for displaying education information
const Education = () => {
  const device = useSelector((state) => state.device.value); // Getting device size from Redux state
  const [degrees, setDegrees] = useState([]); // State variable to store degrees data

  useEffect(() => {
    // Effect to fetch degrees data when component mounts
    const fetchDegrees = async () => {
      try {
        const data = await fetch('/degrees.json'); // Fetching degrees data from JSON file
        const res = await data.json(); // Parsing JSON response
        setDegrees(res); // Updating state with fetched degrees data
      } catch (error) {
        console.log('Error fetching degrees data', error); // Logging error if fetching data fails
      }
    };

    fetchDegrees(); // Invoking fetchDegrees function
  }, []); // Empty dependency array to run the effect only once when component mounts

  return (
    <div
      className={`relative w-[100%] flex flex-col items-start justify-center gap-6 mx-auto p-3 transition-all duration-700
      ${device === 'laptop' ? 'min-h-[100vh]' : ''}`} // Dynamic className based on device size
    >
      {/* Displaying the title using PageTitle component */}
      <PageTitle title={'Education'} />

      {/* Displaying degrees list */}
      <div className='w-[100%] flex flex-col items-center justify-start gap-4'>
        {degrees.map((degree, key) => (
          <div
            key={key}
            className={`w-[100%] flex justify-start transition-all duration-700 mb-6
            ${device === 'mobile' ? 'flex-col' : 'flex-row items-center'}`}
          >
            <div
              className={`
            ${
              device === 'mobile'
                ? 'w-[100%] justify-start'
                : 'w-[50%] z-50 justify-start'
            }
            flex flex-col items-start gap-1 text-black dark:text-white
            `}
            >
              <div className='w-[100%] flex items-center justify-end gap-3 p-2 bg-white dark:bg-sky-900 rounded-md shadow-inner shadow-slate-900'>
                <div className={`${device === 'mobile' ? '' : 'text-right'}`}>
                  <p className='heading'>{degree.degree}</p>
                  <p className='text-sm'>{degree.stream}</p>
                </div>
                <Image
                  src={degree.image}
                  width='80'
                  height='80'
                  alt={degree.degree}
                />
              </div>
            </div>
            <div
              className={`
            ${
              device === 'mobile'
                ? 'w-[100%] justify-center'
                : 'w-[60%] z-40 ml-[-10%] pl-[15%] min-h-[200px] justify-center '
            }
            flex flex-col items-start gap-3 p-2 bg-blue-900/20 dark:bg-slate-700/30 rounded-md shadow-inner shadow-slate-900
            [&_span]:text-black
            [&_span]:dark:text-white`}
            >
              <p className='mt-[10px]'>
                <span>{degree.start}</span>
                <span>-</span>
                <span>{degree.end}</span>
              </p>
              <p className='text-md text-black dark:text-gray-300'>
                {degree.college}
              </p>
              <p className='text-sm text-black dark:text-gray-300'>
                {degree.place}
              </p>
              <ul className='flex flex-wrap items-start justify-start gap-2 mb-[10px]'>
                {degree.courses.map((course, key) => (
                  <li
                    key={key}
                    className='text-sm bg-blue-300 text-black dark:bg-cyan-400/30 dark:text-gray-200 rounded-full px-4 py-1'
                  >
                    {course}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education; // Exporting Education component as default

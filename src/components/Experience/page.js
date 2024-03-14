import React, { useEffect, useState } from 'react'; // Importing React library and its hooks
import { useSelector } from 'react-redux';

import PageTitle from '../PageTitle/page'; // Importing PageTitle component
import Company from '../Company/page'; // Importing Company component

// Definition of Experience component, responsible for displaying experience information
const Experience = () => {
  const device = useSelector((state) => state.device.value); // Getting device size from Redux state
  const [experiences, setExperiences] = useState([]); // State variable to store experiences data

  useEffect(() => {
    // Effect to fetch experience data when component mounts
    const fetchExperience = async () => {
      try {
        const data = await fetch('/experience.json'); // Fetching experience data from JSON file
        const res = await data.json(); // Parsing JSON response
        setExperiences(res); // Updating state with fetched experiences data
      } catch (error) {
        console.log('Error fetching experiences data', error); // Logging error if fetching data fails
      }
    };

    fetchExperience(); // Invoking fetchExperience function
  }, []); // Empty dependency array to run the effect only once when component mounts

  return (
    <div
      className={`relative w-[100%] flex flex-col items-start justify-center gap-6 mx-auto p-3 transition-all duration-700
      ${device === 'laptop' ? 'min-h-[100vh]' : ''}`} // Dynamic className based on device size
    >
      {/* Displaying the title using PageTitle component */}
      <PageTitle title={'Experience'} /> {/* Displaying Experience List */}
      <div className='w-full'>
        {experiences.map((experience, index) => (
          <div key={index}>
            {device === 'mobile' && (
              <div className='w-full flex flex-col items-start justify-between  gap-4 mb-12'>
                <div className='w-full flex flex-row items-center justify-between'>
                  <span className='bg-blue-300 text-black dark:bg-sky-900 dark:text-gray-200 px-4 py-1 rounded-full border-2 border-blue-400'>
                    {experience.end}
                  </span>
                  <span className='w-full h-1 border-b-2 border-blue-400'></span>
                  <span className='bg-blue-300 text-black dark:bg-sky-900 dark:text-gray-200 px-4 py-1 rounded-full border-2 border-blue-400'>
                    {experience.start}
                  </span>
                </div>
                <Company skills={experience} />
              </div>
            )}
            {device !== 'mobile' && (
              <div className='w-full flex flex-row items-start justify-between  gap-4 mb-12'>
                <div className='w-[100px] min-h-[100px] flex flex-col items-center justify-between'>
                  <span className='bg-blue-300 text-black dark:bg-sky-900 dark:text-gray-200 px-4 py-1 rounded-full border-2 border-blue-400'>
                    {experience.end}
                  </span>
                  <span className='w-1 h-[50px] border-r-2 border-blue-400'></span>
                  <span className='bg-blue-300 text-black dark:bg-sky-900 dark:text-gray-200 px-4 py-1 rounded-full border-2 border-blue-400'>
                    {experience.start}
                  </span>
                </div>
                <Company skills={experience} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience; // Exporting Experience component as default

{
  /* <div
  key={index}
  className={`w-full flex items-start justify-between  gap-4 mb-12
              ${device === 'mobile' ? 'flex-col' : 'flex-row'}
            `}
>
  {device === 'mobile' && (
    <div className='w-full flex flex-row items-center justify-between'>
      <span className='bg-blue-300 text-black dark:bg-sky-900 dark:text-gray-200 px-4 py-1 rounded-full border-2 border-blue-400'>
        {experience.end}
      </span>
      <span className='w-full h-1 border-b-2 border-blue-400'></span>
      <span className='bg-blue-300 text-black dark:bg-sky-900 dark:text-gray-200 px-4 py-1 rounded-full border-2 border-blue-400'>
        {experience.start}
      </span>
    </div>
  )}
  {device !== 'mobile' && (
    <div className='w-[100px] flex flex-col items-center justify-between'>
      <span className='bg-blue-300 text-black dark:bg-sky-900 dark:text-gray-200 px-4 py-1 rounded-full border-2 border-blue-400'>
        {experience.end}
      </span>
      <span className='bg-blue-300 text-black dark:bg-sky-900 dark:text-gray-200 px-4 py-1 rounded-full border-2 border-blue-400'>
        {experience.start}
      </span>
    </div>
  )}
  <Company skills={experience} />
</div>; */
}

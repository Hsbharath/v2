import React, { useEffect, useState } from 'react'; // Importing React library and its hooks
import { useSelector } from 'react-redux';

import PageTitle from '../PageTitle/page'; // Importing PageTitle component

// Definition of Experience component, responsible for displaying experience information
const Experience = () => {
  const device = useSelector((state) => state.device.value); // Getting device size from Redux state
  const [experiences, setExperiences] = useState([]); // State variable to store experiences data

  useEffect(() => {
    // Effect to fetch experience data when component mounts
    const fetchExperience = async () => {
      try {
        const data = await fetch('/experience.json'); // Fetching experience data from JSON file
        console.log(data);
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
      <div className='w-[100%]'>
        {experiences.map((experience, index) => (
          <div key={index}>
            <span>{experience.start}</span>
            <span>{experience.end}</span>
            <span>{experience.company}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience; // Exporting Experience component as default

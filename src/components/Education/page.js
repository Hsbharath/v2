import React, { useEffect, useState } from 'react'; // Importing React library and its hooks
import { useSelector } from 'react-redux';

import PageTitle from '../PageTitle/page'; // Importing PageTitle component

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
      <div className='w-[100%]'>
        {degrees.map((degree, key) => (
          <div key={key} className='w-[100%]'>
            <span>{degree.start}</span>
            <span>{degree.end}</span>
            <span>{degree.college}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education; // Exporting Education component as default

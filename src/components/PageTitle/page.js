import React from 'react'; // Importing React library
import { useSelector } from 'react-redux'; // Importing useSelector hook from react-redux

// Definition of PageTitle component, responsible for displaying a title
const PageTitle = ({ title }) => {
  const device = useSelector((state) => state.device.value); // Getting device size from Redux state

  return (
    <h4 className='heading text-blue-900 dark:text-sky-500 font-semibold uppercase'>
      {title} {/* Displaying the title */}
    </h4>
  );
};

export default PageTitle; // Exporting PageTitle component as default

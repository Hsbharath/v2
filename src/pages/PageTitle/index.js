import React from 'react';

const PageTitle = ({ title }) => {
  return (
    <p className='text-blue-900 dark:text-sky-700 text-xl md:text-2xl font-medium uppercase'>
      {title}
    </p>
  );
};

export default PageTitle;

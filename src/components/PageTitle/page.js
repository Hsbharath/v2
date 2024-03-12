import React from 'react';

import { useSelector } from 'react-redux';

const PageTitle = ({ title }) => {
  const device = useSelector((state) => state.device.value);

  return (
    <h4 className='heading text-blue-900 dark:text-sky-500 font-semibold uppercase'>
      {title}
    </h4>
  );
};

export default PageTitle;

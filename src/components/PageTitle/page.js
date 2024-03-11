import React from 'react';

import { useSelector } from 'react-redux';

const PageTitle = ({ title }) => {
  const device = useSelector((state) => state.device.value);

  return (
    <p
      className={`text-blue-900 dark:text-sky-500 font-semibold uppercase
    ${device === 'laptop' ? 'text-xl' : 'text-lg'}
    `}
    >
      {title}
    </p>
  );
};

export default PageTitle;

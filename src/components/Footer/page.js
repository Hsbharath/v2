import React from 'react';

import { useSelector } from 'react-redux';

function Footer() {
  const device = useSelector((state) => state.device.value);
  return (
    <div
      className={`W-[100%] flex items-start justify-between gap-2 p-2 mb-6
    [&_p]:text-gray-400
    [&_p]:text-md
    [&_p]:font-light
    [&_p_span]:text-black
    [&_p_span]:dark:text-white
    [&_p_span]:font-medium
    ${device == 'mobile' ? 'w-[100%] flex-col' : 'flex-row'}`}
    >
      <p>
        Designed & Developed by <span> Bharath</span>.
      </p>
      <p>
        Built with
        <span> Next.js, Tailwindcss, Redux Toolkit</span>.
      </p>
    </div>
  );
}

export default Footer;

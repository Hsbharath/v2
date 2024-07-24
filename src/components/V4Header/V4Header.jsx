import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const V4Header = () => {
  return (
    <div className='w-full md:max-w-screen-2xl mx-auto p-6'>
      <Link href='https://hsbharath.dev'>
        <Image
          src='/Icons/bharath.svg'
          width={150}
          height={75}
          alt='Bharath SVG'
        />
      </Link>
    </div>
  );
};

export default V4Header;

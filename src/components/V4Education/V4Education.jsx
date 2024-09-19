import Image from 'next/image';
import React, { forwardRef } from 'react';

const V4Education = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className='w-full lg:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto flex flex-col xl:flex-row justify-start content-center p-6 my-12'
    >
      <div
        className='w-full xl:w-[33%] flex flex-col justify-start items-start'
        data-aos='fade-right'
      >
        <div className='mb-12'>
          <h4 className='text-4xl font-medium'>Education</h4>
          <svg
            width='154'
            height='30'
            viewBox='0 0 154 30'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M2.06599 28C2.05351 27.9965 1.96465 27.9863 2.01566 27.943C2.52788 27.5082 3.63262 27.0892 4.16309 26.8322C11.1268 23.4583 18.1117 20.1383 25.3689 17.2336C32.1147 14.5336 38.9679 12.0219 46.0044 9.91356C49.7342 8.79597 53.608 7.73705 57.53 7.20772C58.597 7.0637 60.5118 6.75549 61.6068 7.0653C63.1811 7.51078 60.9971 10.0511 60.8015 10.3337C58.9264 13.0425 56.5289 15.403 54.3592 17.9314C53.937 18.4233 53.2134 19.0909 53.0254 19.7044C52.8072 20.417 54.7693 19.4907 55.5503 19.1704C63.8854 15.752 71.9899 12.0395 80.531 8.97364C86.0714 6.98488 92.612 4.18166 98.868 4.60156C99.6124 4.65153 100.947 4.84544 101.535 5.38483C102.435 6.20988 101.776 7.69603 101.443 8.55352C101.04 9.59236 100.493 10.553 99.9081 11.5228C99.6381 11.9705 98.9734 12.7431 99.0861 13.2959C99.2647 14.1721 101.225 13.2229 102.19 12.8757C106.124 11.4595 109.922 9.76882 113.833 8.30429C120.467 5.81971 127.488 3.1985 134.712 2.24463C136.394 2.02247 139.636 1.45718 140.088 3.4765C140.662 6.03625 139.815 8.82726 139.803 11.4089C139.801 11.9763 139.714 12.9578 140.6 13.125C141.589 13.3116 142.911 12.8151 143.813 12.5624C145.187 12.1775 146.521 11.6993 147.923 11.3875C149.306 11.0801 150.6 11.0852 152 10.9532'
              stroke='#F3BB44'
              strokeWidth='3'
              strokeLinecap='round'
            />
          </svg>
        </div>
        <h1 className='text-2xl xl:text-4xl font-medium'>
          I have a <span className='text-[#f3bb44]'>master's</span> degree in
          computer and information science and a
          <span className='text-[#f3bb44]'> bachelor's</span> degree in
          information science.
        </h1>
      </div>
      <div
        className='w-full xl:w-[67%] flex flex-col justify-start items-start gap-12'
        data-aos='fade-left'
      >
        <div className='relative w-full min-h-[500px]'>
          <div
            className='w-full xl:w-[65%] h-auto absolute bottom-0 left-0 z-20 xl:mt-[-100px]'
            data-aos='fade-up'
          >
            <Image
              className='w-full h-full grayscale object-cover border-8 border-gray-300'
              src={'/Icons/kent.jpg'}
              width={300}
              height={300}
              alt='Kent State University Image'
            />
          </div>
          <div
            className='w-full xl:w-[45%] min-h-[350px] xl:h-[400px] absolute top-0 right-0 bg-[#f3bb44] flex flex-col justify-start items-end text-right p-6'
            data-aos='fade-left'
          >
            <h1 className='text-2xl xl:text-3xl font-medium mb-6'>
              Master of Science
            </h1>
            <p className='text-xl xl:text-xl text-black font-medium'>
              2015 Spring Batch
            </p>
            <p className='text-xl xl:text-xl text-black font-medium'>
              The School of Digital Sciences
            </p>
            <p className='text-xl xl:text-xl text-black font-light'>
              Kent State University
            </p>
            <p className='text-xl xl:text-xl text-black font-light'>Kent, OH</p>
            <p className='text-xl xl:text-xl text-black font-light'>USA</p>
            <a
              href='https://kent.edu'
              target='_blank'
              className='absolute w-[50px] h-[50px] flex justify-center items-center bg-white rounded-full bottom-6 right-6'
            >
              <span className='material-symbols-outlined'>add</span>
            </a>
          </div>
        </div>
        <div className='relative w-full min-h-[500px]'>
          <div
            className='w-full xl:w-[65%] h-auto xl:h-[250px] absolute bottom-0 left-0 z-20 xl:mt-[-100px]'
            data-aos='fade-up'
          >
            <Image
              className='w-full h-full grayscale object-cover border-8 border-gray-300'
              src={'/Icons/gvit.jpg'}
              width={300}
              height={300}
              alt='Golden Valley Institute Of Technolgy Image'
            />
          </div>
          <div
            className='w-full xl:w-[45%] min-h-[400px] xl:h-[400px] absolute top-0 right-0 bg-[#f3bb44] flex flex-col justify-start items-end text-right p-6'
            data-aos='fade-left'
          >
            <h1 className='text-2xl xl:text-3xl font-medium mb-6'>
              Bachelor of Engineering
            </h1>
            <p className='text-xl xl:text-xl text-black font-medium'>
              2007 - 2011 Batch
            </p>
            <p className='text-xl xl:text-xl text-black font-medium'>
              Department Of Information Science
            </p>
            <p className='text-xl xl:text-xl text-black font-light'>
              Dr. T. Thimmaiah Institute Of Technology
            </p>
            <p className='text-xl xl:text-xl text-black font-light'>KGF, KA</p>
            <p className='text-xl xl:text-xl text-black font-light'>India</p>
            <a
              href='https://drttit.gvet.edu.in/'
              target='_blank'
              className='absolute w-[50px] h-[50px] flex justify-center items-center bg-white rounded-full bottom-6 right-6'
            >
              <span className='material-symbols-outlined'>add</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});

export default V4Education;

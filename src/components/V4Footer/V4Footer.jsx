import Image from 'next/image';
import React from 'react';

const V4Footer = () => {
  return (
    <div className='relative w-full min-h-[400px] bg-black flex flex-col xl:flex-row justify-start items-start p-12'>
      <div className='w-full lg:max-w-screen-xl 2xl:max-w-screen-2xl flex flex-col xl:flex-row justify-start items-start gap-12 mx-auto py-16'>
        <div className='relative w-full xl:w-[20%] flex flex-col justify-start items-start'>
          <Image
            className='w-full xl:mx-auto rounded-2xl'
            src={'/Icons/bharath.jpeg'}
            alt='Bharath Image'
            width={300}
            height={300}
          />
          <div className='absolute bottom-[80px] right-[-80px] -skew-y-12'>
            <Image
              className='w-full xl:mx-auto'
              src={'/Icons/bharath-yellow.svg'}
              alt='Bharath SVG'
              width={100}
              height={100}
              data-aos='fade-up'
            />
          </div>
        </div>
        <div
          className='w-full xl:w-[80%] flex flex-col justify-start items-start ml-[50px]'
          data-aos='fade-up'
        >
          <div className='w-full flex flex-col xl:flex-row justify-start items-start gap-4'>
            <div className='w-[60%]'>
              <h1 className='text-xl text-[#9ca3af] font-medium mt-6'>
                About Website Design:
              </h1>
              <p className='text-white text-lg font-light mt-2'>
                DESIGN CREDITS TO:{' '}
                <a
                  className='text-[#f3bb44] font-medium'
                  href='https://www.friendsfromthecity.com/'
                  target='_blank'
                >
                  friendsfromthecity.com
                </a>
                <br />
                The design of this portfolio was inspired by theirs, with some
                modifications.
              </p>
              <h1 className='text-xl text-[#9ca3af] font-medium mt-6'>
                Built & Deployment:
              </h1>
              <p className='text-white text-lg font-light mt-2'>
                Created using Next.js and tailwindcss, and hosted on Vercel.
              </p>
              <h1 className='text-xl text-[#9ca3af] font-medium mt-6'>
                Pictures, Logos, SVGs:
              </h1>
              <p className='text-white text-lg font-light mt-2'>
                All the images, icons, and SVGs used are free versions sourced
                from Google.
              </p>
            </div>
            <div className='w-[40%]'>
              <h1 className='text-xl text-[#9ca3af] font-medium capitalize'>
                call / text on
              </h1>
              <ul className='w-full mt-4 mb-6'>
                <li>
                  <a
                    href='tel:+12342815147'
                    className='text-lg text-[#f3bb44] flex justify-start items-center gap-6'
                  >
                    <span className='material-symbols-outlined'>
                      phone_iphone
                    </span>
                    <span>+1 (234)-281-5147</span>
                  </a>
                </li>
              </ul>
              <h1 className='text-xl text-[#9ca3af] font-medium capitalize'>
                connect on
              </h1>
              <ul className='w-full my-4 flex justify-start items-center gap-4 mb-6'>
                <li>
                  <a
                    href='tel:+12342815147'
                    className='text-lg text-[#f3bb44] flex justify-start items-center gap-6'
                  >
                    <Image
                      src='/Icons/linkedin.svg'
                      width={50}
                      height={50}
                      alt='LinkedIn SVG'
                    />
                  </a>
                </li>
                <li>
                  <a
                    href='tel:+12342815147'
                    className='text-lg text-[#f3bb44] flex justify-start items-center gap-6'
                  >
                    <Image
                      src='/Icons/reddit.svg'
                      width={50}
                      height={50}
                      alt='Reddit SVG'
                    />
                  </a>
                </li>
              </ul>
              <h1 className='text-lg text-[#9ca3af] font-medium capitalize'>
                email me @
              </h1>
              <ul className='w-full mt-4 mb-6'>
                <li>
                  <a
                    href='mailto:hsbharath01@gmail.com'
                    className='text-lg text-[#f3bb44] flex justify-start items-center gap-6'
                  >
                    <span className='material-symbols-outlined'>mail</span>
                    <span>hsbharath01@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href='mailto:bharathh.868@gmail.com'
                    className='text-lg text-[#f3bb44] flex justify-start items-center gap-6'
                  >
                    <span className='material-symbols-outlined'>mail</span>
                    <span>bharathh.868@gmail.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default V4Footer;

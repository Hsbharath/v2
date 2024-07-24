import React from 'react';

import ThemeSwitch from '../ThemeSwitch/page';

const Navbar = () => {
  return (
    <div>
        <nav class="bg-white border-[#F9DEC9] dark:bg-gray-900 border-b-2">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <ThemeSwitch/>
                <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700
                        [&>li>a]:block
                        [&>li>a]:py-2
                        [&>li>a]:px-3
                        [&>li>a]:text-white
                        [&>li>a]:rounded
                        [&>li>a]:md:bg-transparent
                        [&>li>a]:md:p-0
                        [&>li>span]:text-white">
                    <li>
                    <a href="#" aria-current="page">Bio</a>
                    </li>
                    <li>
                    <a href="#">Skills</a>
                    </li>
                    <li>
                    <a href="#">Experience</a>
                    </li>
                    <li>
                    <a href="#">Education</a>
                    </li>
                    <li>
                    <a href="#">Contact</a>
                    </li>
                    <li>
                    <span className='material-symbols-outlined'>settings</span>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
import React from 'react'

const Banner = () => {
  return (
    <div className='w-[300px] h-[100vh] flex flex-col items-end justify-between ml-auto p-4'>
        <div className='w-full mx-auto'>
              <a href="/" className="flex flex-col items-start justify-start space-y-2 rtl:space-x-reverse">
                <div className='flex items-start justify-start space-x-2'>
                    <span class="text-xl font-light whitespace-nowrap text-white font-In">Hunkunda</span>
                    <span class="text-xl font-light whitespace-nowrap text-white font-In">Sreenivasa</span>
                </div>
                <span className="text-6xl font-semibold whitespace-nowrap text-white font-In">Bharath</span>
            </a>
        </div>
        <div className='w-full min-h-[100px] bg-amber-600 mx-auto'>
            <div className="w-full">World</div>
        </div>
    </div>
  )
}

export default Banner
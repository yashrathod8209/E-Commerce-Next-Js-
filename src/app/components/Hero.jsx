import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'> 
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 ">
        <div className="text-[#414141] ">
            <div className="flex items-center gap-2 ">
                <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
                <p className="text-sm font-medium md:text-base uppercase ">our bestsellers</p>
            </div>
            <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
            <div className="flex items-center gap-2 ">
                <p className="text-sm font-medium md:text-base uppercase ">shop now</p>
                <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
            </div>
        </div>
      </div>
      <img src="assets/images/header_img.png" alt="" className=' w-full sm:w-1/2'/>
    </div>
  )
}

export default Hero

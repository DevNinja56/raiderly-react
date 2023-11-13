import React from 'react'
import RightArrow from '../../icons/RightArrow'

const ApplySection = () => {
  return (
    <div className="w-full h-56 md:h-72 lg:h-96 relative bg-black bg-opacity-95 rounded-xl flex items-center justify-center">
          <img className="h-full w-full absolute left-0 top-0" src="/images/FooterLineImg.svg" />
          <div className="flex flex-col items-center gap-y-8 lg:gap-y-12 w-full px-5 md:px-2 lg:px-20 xl:px-44 lg:w-11/12 z-10">
          <h1 className="text-white text-center font-bold text-xl md:text-3xl lg:text-5xl leading-relaxed md:leading-relaxed lg:leading-relaxed">Let’s discuss make something <span className="text-orange-500 italic">cool</span> together</h1>
          <p className="flex items-center gap-3 text-white font-semibold text-base md:text-lg hover:text-orange-500 transition-all duration-500 cursor-pointer group border-b-2 border-black border-opacity-0 pb-2 hover:border-orange-500">
          Apply For Meeting
          <RightArrow className='fill-white group-hover:fill-orange-500'/>
          </p>
          </div>
    </div>
    )
}

export default ApplySection
import React from 'react'
import RightArrow from '../../icons/RightArrow'

const HomePageApplySection = () => {
  return (
    <div className="max-w-contentSmallScreenWidth md:max-w-none md:w-full lg:max-w-contentLargeScreenWidth mx-auto md:mx-0 lg:mx-auto flex items-end overflow-hidden pl-0 md:pl-4 lg:px-0">
        <div className="w-full md:w-9/12 lg:w-3/5 2xl:w-11/12 h-56 md:h-80 lg:h-96 relative bg-black bg-opacity-95 rounded-none lg:rounded-xl flex items-center justify-center">
          <img className="h-full w-full absolute left-0 top-0" src="/images/FooterLineImg.svg" />
          <img className="absolute right-8 md:right-12 h-7/12 w-7/12 md:h-auto md:w-auto" src="/images/Home/rope.svg" />
          <div className="flex flex-col items-center gap-8 md:gap-y-20 w-full px-5 md:px-2 lg:px-0 lg:w-11/12 z-10">
          <h1 className="text-white text-center font-bold text-xl md:text-3xl lg:text-3xl xl:text-4xl leading-relaxed md:leading-relaxed lg:leading-relaxed xl:leading-relaxed">Let’s discuss make something <span className="text-orange-500 italic">cool</span> together</h1>
          <p className="flex items-center gap-3 text-white font-semibold text-base md:text-lg hover:text-orange-500 transition-all duration-500 cursor-pointer group border-b-2 border-black border-opacity-0 pb-2 hover:border-orange-500">
          Apply For Meeting
          <RightArrow className='fill-white stroke-white group-hover:stroke-mainColor group-hover:fill-mainColor text-mainColor transition-all duration-300'/>
          </p>
          </div>
        </div>
        <div className="hidden items-end  md:flex">
            <img className="w-11/12 lg:w-auto" src="/images/Home/ropeMan.svg" />
        </div>
    </div>
  )
}

export default HomePageApplySection
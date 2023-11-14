import React from 'react'
import RightManImage from '../../components/Auth/RightMan'
import Description from '../../components/TermsAndCondition/Description'

const TermsAndCondition = () => {
  return (
    <>
    
    {/* Main Section Start */}

    <main id="_Main" className="w-full mb-16 md:mb-20 lg:mb-20 2xl:mb-40">
      <div className="w-full relative pt-32 pb-24 lg:py-32 2xl:py-40 flex justify-start 2xl:justify-center flex-col gap-28 md:gap-40 lg:gap-32 2xl:gap-0 h-auto">
      <img alt='t&c' className="absolute top-0 left-0 h-full w-full object-cover" src="/images/FAQ/Faq Main Pattern.svg"/>
      <RightManImage className='absolute left-0 -top-28 md:-top-44 lg:-top-28 xl:-top-20' imgSize='w-7/12 md:w-full' />
      <div className="flex flex-col items-center z-10 max-w-contentSmallScreenWidth md:max-w-contentLargeScreenWidth mx-auto w-full pt-5 2xl:pt-0">
      <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-eightyPixel font-extrabold text-center mb-1 leading-relaxed md:leading-relaxed lg:leading-relaxed w-10/12"><span className="text-mainColor">T</span>erms of <span className="text-mainColor">U</span>se</h1>
      </div>
      </div>
    </main> 

    {/* Main Section End */}

    {/* Text Section Start */}

    <section id='_Description' className='w-full mb-16 md:mb-28 lg:mb-40 2xl:mb-60'>
    <div className="max-w-contentSmallScreenWidth md:max-w-contentLargeScreenWidth mx-auto flex flex-col items-center text-sm md:text-base lg:text-xl 2xl:text-3xl text-mainTextColor">
        <Description />
    </div>
    </section>

    {/* Text Section End */}

    </>
  )
}

export default TermsAndCondition
import React from 'react'
import FaqSection from '../../components/Faq/FaqSection'

const FAQ = () => {
  return (
    <>
    
    {/* Main Section Start */}

    <main id="_Main" className="w-full mb-0 2xl:mb-20">
      <div className="w-full relative pt-28 pb-20 lg:py-32 2xl:py-40 flex justify-start 2xl:justify-center flex-col gap-28 md:gap-40 lg:gap-32 2xl:gap-0 h-auto">
      <img className="absolute top-0 left-0 h-full w-full object-cover" src="/images/FAQ/Faq Main Pattern.svg"/>
      <div className="flex flex-col items-center z-10 max-w-contentSmallScreenWidth md:max-w-contentLargeScreenWidth mx-auto w-full pt-5 2xl:pt-0">
      <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-eightyPixel font-extrabold text-center mb-1 leading-relaxed md:leading-relaxed lg:leading-relaxed w-10/12"><span className="text-mainColor">F</span>requently Asked <span className="text-mainColor">Q</span>uestions</h1>
      </div>
      </div>
    </main> 

    {/* Main Section End */}

    {/* FAQ Section Start */}

    <section id="_faqSection" className="w-full mb-16 md:mb-28 lg:mb-40 2xl:mb-40 pt-20 2xl:pt-0">
      <div className="max-w-contentSmallScreenWidth lg:max-w-contentLargeScreenWidth mx-auto w-full flex justify-center">
        <div className="flex flex-col w-11/12 md:w-11/12 lg:w-4/5">
          <FaqSection />
        </div>
      </div>
    </section>

    {/* FAQ Section End */}

    </>
  )
}

export default FAQ
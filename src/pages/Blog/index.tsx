import React from 'react'
import BlogsCard from '../../components/Blog/BlogsCard'

const Blog = () => {
  return (
    <>

        {/* Main Section Start */}

        <main id="_Main" className="w-full mb-0 2xl:mb-20">
        <div className="w-full relative pt-28 pb-20 lg:py-32 2xl:py-40 flex justify-start 2xl:justify-center flex-col gap-28 md:gap-40 lg:gap-32 2xl:gap-0 h-auto">
        <img className="absolute top-0 left-0 h-full w-full object-cover" src="/images/FAQ/Faq Main Pattern.svg"/>
        <div className="flex flex-col items-center z-10 max-w-contentSmallScreenWidth md:max-w-contentLargeScreenWidth mx-auto w-full pt-5 2xl:pt-0">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-eightyPixel font-extrabold text-center mb-1 leading-relaxed md:leading-relaxed lg:leading-relaxed w-10/12"><span className="text-mainColor">B</span>logs</h1>
        <p className="text-mainTextColor text-base text-center lg:text-2xl font-medium">Founder-friendly pricing. Designed to bring you to success.</p>
        </div>
        </div>
      </main> 
  
      {/* Main Section End */}

      {/* Cards Section Start */}

      <section id="_cardsSection" className="w-full mb-32 lg:mb-40 pt-20 2xl:pt-0">
        <div className="max-w-contentSmallScreenWidth md:max-w-contentLargeScreenWidth mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-8 lg:gap-x-5 xl:gap-x-8">
          <BlogsCard img='/images/Blogs/blogCardImg.svg' text='10 Steps into Your Successful Fundraising' />
          <BlogsCard img='/images/Blogs/blogCardImg2.svg' text='Top VC investors who invest in AI' />
          <BlogsCard img='/images/Blogs/blogCardImg3.svg' text='Top 10 Startup Accelerators in 2023' />
          <BlogsCard img='/images/Blogs/blogCardImg4.svg' text='How to raise money using Raiderly' />
          <BlogsCard img='/images/Blogs/blogCardImg5.svg' text='How to get warm introductions to VCs and Angel investors' />
          <BlogsCard img='/images/Blogs/blogCardImg6.svg' text='10 Steps into Your Successful Fundraising' />
        </div>
      </section>

      {/* Cards Section Start */}

      </>
  )
}

export default Blog
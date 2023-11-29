import React, { useState } from 'react'
import Button from '../../components/Common/Button'
import SearchInvestorsCard from '../../components/Home/SearchInvestorsCard'
import RaisingMoneyCard from '../../components/Home/RaisingMoneyCard'
import ArrowDiv from '../../components/Home/ArrowDiv'
import GeneratedByRaiderly from '../../components/Home/GeneratedByRaiderly'
import MessageInvestorsSection from '../../components/Home/MessageInvestorsSection'
import HomeSlider from '../../components/Sliders/HomeSlider'
import { ROUTES } from '../../constant/route'
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from 'react-router-dom'

const HomePage = () => {

  const [selectedButton, setSelectedButton] = useState("Steve Jobs style")

  return (

    <>

      {/* Home Page Start */}

      {/* Main Section Start */}

      <section id="getStarted" className="w-full mb-5 md:mb-10 2xl:mb-40">
        <div className="w-full relative pt-28 lg:pt-28 2xl:pt-60 flex flex-col">
          <img alt='_home' className="absolute top-0 left-0 w-full object-cover min-h-max h-5/6 md:h-auto lg:h-vh140 2xl:h-v-110" src="/images/Home/HomePagePattern.svg" />
          <div className="px-7 md:px-8 lg:px-12 xl:px-9 flex flex-col items-center z-10 relative mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-eightyPixel font-extrabold text-center capitalize mb-4 lg:mb-1 leading-normal md:leading-relaxed lg:leading-relaxed">Find <span className="text-mainColor">Investors</span> & <span className="text-mainColor">Influencers</span> for your Startup</h1>
            <p className="text-sm md:text-base lg:text-xl 2xl:text-2xl font-medium text-mainTextColor text-center mb-24 lg:mb-32">Founders use Raiderly to find perfect investors & Influencers for their companies</p>
            <NavLink to={ROUTES.SIGN_UP} className="relative">
              <Button padding='py-4 lg:py-5 px-6 lg:px-9' className='hover:bg-mainColor cursor-pointer text-sm md:text-base lg:text-xl bg-mainTextColor text-white' text='Get started for free' icon={<FaArrowRightLong />} />
              <img alt='_home' className="w-6/12 lg:w-auto h-auto absolute inset-x-1/4 -inset-y-12 lg:-inset-y-16" src="/images/Home/menGrabLaptop.svg" />
            </NavLink>
          </div>
          <img alt='_home' className="w-full z-10" src="/images/Home/MainHomeImage.png" />
        </div>
      </section>

      {/* Main Section End */}

      {/* Raising Money Section Start */}

      <section id="raisingMoney" className="w-full mb-12 md:mb-20 lg:mb-20 2xl:mb-60">
        <div className="max-w-contentSmallScreenWidth md:max-w-contentLargeScreenWidth mx-auto w-full flex flex-col lg:flex-row items-center gap-8 md:gap-5">
          <div className="flex flex-col items-center lg:items-start gap-3 md:gap-5 w-full lg:w-3/6">
            <p className="text-orange-500 text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-bold">Raising money?</p>
            <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl xl:text-6xl leading-snug md:leading-snug lg:leading-snug xl:leading-snug 2xl:leading-relaxed text-mainTextColor text-center lg:text-start">Your <span className="text-mainColor">Investors</span> & <span className="text-mainColor">Influencers</span> are in Raiderly.</h1>
            <h2 className="text-mainTextColor text-sm md:text-base lg:text-xl 2xl:text-2xl font-medium text-center lg:text-start">We've pulled data from all public internet resources, personal network, sign up forms, and spiced it up with machine learning.</h2>
          </div>
          <div className="grid grid-cols-2 md:flex items-center justify-between md:justify-center flex-wrap gap-x-2 gap-y-5 md:gap-5 w-full lg:w-3/6 relative px-0 md:px-12 lg:px-0">
            <RaisingMoneyCard img='/images/Home/Gmail.svg' text='TrusteInvestors in our database have email addresses.' />
            <RaisingMoneyCard img='/images/Home/Partnership.svg' text='Only active investors with deals in the past 12 months.' />
            <RaisingMoneyCard img='/images/Home/NEW.svg' text='Up-to-date database and new investor listings every week.' />
            <RaisingMoneyCard img='/images/Home/Check.svg' text='We verified an info by analyzing previous deals made by investors.' />
            <RaisingMoneyCard img='/images/Home/Money Bag.svg' text='No «fake» VCs but real investors with available cash to invest.' />
            <img alt='manClimb' className="absolute bottom-0 right-12 -translate-y-1 md:-translate-y-0 md:right-8 lg:right-10 xl:right-0 2xl:right-0 w-32 md:w-auto h-auto 2xl:h-72 2xl:w-72 manClimb" src="/images/Home/menClimbingImg.svg" />
          </div>
        </div>
      </section>

      {/* Raising Money Section End */}

      {/* Verified Investors Section Start */}

      <section id="verifiedSection" className="w-full mb-12 md:mb-16 lg:mb-48 2xl:mb-60">
        <div className="max-w-contentSmallScreenWidth md:max-w-contentLargeScreenWidth mx-auto w-full flex flex-col gap-12 md:gap-16">
          <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-10 w-full">
            <div className="flex flex-col order-2 lg:order-none gap-11 lg:gap-8 items-center w-full lg:w-auto">
              <div className="flex items-center justify-between gap-1 gap-y-6 md:gap-6 flex-wrap lg:justify-center w-full lg:w-auto">
                <SearchInvestorsCard img='/images/Home/Man.svg' text='Type' className='' />
                <SearchInvestorsCard img='/images/Home/Rainbow.svg' text='Industry' className='' />
                <SearchInvestorsCard img='/images/Home/Global Money.svg' text='Geography' className='' />
                <SearchInvestorsCard img='/images/Home/STAGE.svg' text='Stage' className='hidden md:flex' />
                <SearchInvestorsCard img='/images/Home/MAP PIN.svg' text='From' className='' />
                <SearchInvestorsCard img='/images/Home/Case.svg' text='Leading' className='hidden lg:flex' />
                <SearchInvestorsCard img='/images/Home/DIVERSITY.svg' text='Diversity' className='hidden lg:flex' />
                <SearchInvestorsCard img='/images/Home/TITLE.svg' text='Title' className='hidden lg:flex' />
                <SearchInvestorsCard img='/images/Home/Gmail1 1.svg' text='Other' className='hidden lg:flex' />
              </div>
              <div className="relative">
                <ArrowDiv className='' text="Search investors by any filter" />
                <img alt='_manGrab' className="absolute -inset-x-16 md:-inset-x-32 translate-x-3 md:translate-x-1 -top-1 md:-top-3 w-4/12 md:w-auto" src="/images/Home/manGrabBtn.svg" />
              </div>
            </div>
            <h1 className="text-2xl md:text-4xl lg:text-5xl 2xl:text-6xl leading-snug md:leading-snug lg:leading-snug xl:leading-snug 2xl:leading-snug font-bold text-mainTextColor text-center lg:text-start">52,000+ Verified <span className="text-mainColor">Investors</span>, <span className="text-mainColor">Influencers</span> & <span className="text-mainColor">VC</span> funds</h1>
          </div>
          <div className="w-full flex flex-col items-center gap-12 md:gap-16">
            <img alt='_vc' className="w-full hidden md:block" src="/images/Home/vcFundsImg.svg" />
            <img alt='_mob' className="w-full block md:hidden" src="/images/Home/mobileInvestorsMainImg.svg" />
            <NavLink to={ROUTES.SIGN_UP}>
              <Button className='hover:bg-mainTextColor bg-mainColor text-white cursor-pointer hover:opacity-95 text-sm md:text-base 2xl:text-2xl' padding='px-5 md:px-3 lg:px-9 py-3' text='View all investors & influencers' icon={<FaArrowRightLong />} />
            </NavLink>
          </div>
        </div>
      </section>

      {/* Verified Investors Section End */}

      {/* Craft Your Message Section Start */}

      <section id="craftYourMessage" className="w-full mb-12 md:mb-16 lg:mb-28 2xl:mb-60">
        <div className="max-w-contentSmallScreenWidth md:max-w-contentLargeScreenWidth mx-auto w-full flex flex-col lg:flex-row items-center gap-0 lg:gap-10">
          <div className="flex flex-col gap-8 w-full lg:w-1/3">
            <div className="flex flex-col gap-5">
              <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl xl:text-6xl leading-snug md:leading-snug lg:leading-snug xl:leading-snug 2xl:leading-snug text-center lg:text-start"><span className="text-mainColor">Craft</span> your message</h1>
              <p className="text-sm md:text-base 2xl:text-3xl font-medium text-mainTextColor text-center lg:text-start 2xl:leading-relaxed">Use our built-in AI for message generation, or go the old-fashioned way and write them manually. It's totally up to you.</p>
            </div>
            <NavLink to={ROUTES.SIGN_UP}>
              <Button text='SEND' padding='px-9 py-3' className='hover:bg-mainTextColor bg-mainColor text-white font-medium text-lg 2xl:text-2xl hover:opacity-95 hidden lg:block' icon={""} />
            </NavLink>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 gap-y-24 md:gap-y-32 lg:gap-y-8 w-full md:w-4/5 lg:w-4/6">
            <div className="flex flex-row justify-between lg:justify-start lg:flex-col items-center gap-0 md:gap-10 w-full md:w-full lg:w-1/3">
              <div onClick={() => setSelectedButton("Steve Jobs style")}>
                <Button
                  padding='px-1 md:px-6 py-2 md:py-3'
                  text='Steve Jobs style'
                  className={`bg-white ${selectedButton === "Steve Jobs style" ? "border border-gray-300 shadow-md" : ""} border border-white text-mainTextColor text-xs md:text-sm 2xl:text-2xl rounded-xl min-w-0 md:min-w-max`}
                  icon={""}
                />
              </div>
              <div onClick={() => setSelectedButton("Elon Musk style")}>
                <Button
                  padding='px-1 md:px-6 py-2 md:py-3'
                  text='Elon Musk style'
                  className={`bg-white ${selectedButton === "Elon Musk style" ? "border border-gray-300 shadow-md" : ""} border border-white text-mainTextColor text-xs md:text-sm 2xl:text-2xl rounded-xl min-w-0 md:min-w-max`}
                  icon={""}
                />
              </div>
              <div onClick={() => setSelectedButton("Casual style")}>
                <Button
                  padding='px-1 md:px-6 py-2 md:py-3'
                  text='Casual style'
                  className={`bg-white ${selectedButton === "Casual style" ? "border border-gray-300 shadow-md" : ""} border border-white text-mainTextColor text-xs md:text-sm 2xl:text-2xl rounded-xl min-w-0 md:min-w-max`}
                  icon={""}
                />
              </div>
            </div>
            <div className="flex flex-col gap-6 items-center w-full md:w-11/12 lg:w-auto">
              <GeneratedByRaiderly />
              <Button text='SEND' padding='px-9 py-3' className='bg-mainColor text-white font-medium text-lg hover:opacity-95 block lg:hidden' icon={<FaArrowRightLong />} />
            </div>
          </div>
        </div>
      </section>

      {/* Craft Your Message Section End */}

      {/* Pitch Investors & Influencers Section Start */}

      <section id="pitchInvestors&InfluencersSection" className="w-full mb-16 md:mb-16 lg:mb-28 2xl:mb-60">
        <div className="max-w-contentSmallScreenWidth md:max-w-contentLargeScreenWidth mx-auto w-full flex flex-col items-center gap-8 md:gap-12">
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-2xl md:text-4xl lg:text-6xl leading-snug md:leading-snug lg:leading-snug font-bold text-mainTextColor text-center">Pitch to all relevant <span className="text-mainColor">Investors</span> & <span className="text-mainColor">Influencers</span> in one click</h1>
            <p className="text-mainTextColor font-medium text-sm md:text-base lg:text-xl text-center">Connect your email address and send messages to selected investors & influencer in one click.</p>
          </div>
          <MessageInvestorsSection />
        </div>
      </section>

      {/* Pitch Investors & Influencers Section End */}

      {/* Slider Section Start */}

      <section id="sliderSection" className="w-full mb-16 md:mb-16 lg:mb-28 2xl:mb-60">
        <div className="w-full lg:max-w-contentLargeScreenWidth mx-auto flex flex-col items-center gap-8 md:gap-12 lg:gap-20 px-4 lg:px-0">
          <h1 className="max-w-contentSmallScreenWidth text-center font-bold text-2xl md:text-4xl lg:text-[55px] text-mainTextColor leading-snug md:leading-snug lg:leading-snug">Trusted by 3,000<span className="text-mainColor">+</span> founders from all industries</h1>
          <div className='w-full'>
            <HomeSlider />
          </div>
        </div>
      </section>

      {/* Slider Section End */}

      {/* Work Out Of OutReach Section Start */}

      <section id="workOutOfOutReachSection" className="w-full mb-16 md:mb-28 lg:mb-28 2xl:mb-60">
        <div className="w-full flex flex-col items-center gap-6 relative">
          <img alt='_workOutOf' className="left-0 top-0 w-auto 2xl:w-full" src="/images/Home/workOutOfOutReachSectionImg.svg" />
          <NavLink to={ROUTES.SIGN_UP}>
            <Button padding='py-3 md:py-2 lg:py-3 2xl:py-4 px-6 lg:px-9' className='hover:bg-mainTextColor bg-mainColor text-white text-sm md:text-base lg:text-lg 2xl:text-3xl font-medium static md:absolute bottom-10 lg:bottom-10 xl:bottom-12 2xl:bottom-16 left-2/4 translate-x-0 md:-translate-x-24 xl:-translate-x-32' icon={<FaArrowRightLong />} text='Get started' />
          </NavLink>
        </div>
      </section>

      {/* Work Out Of OutReach Section End */}

      {/* Home Page End */}

    </>

  )
}

export default HomePage
import React from 'react'
import Button from '../../components/Common/Button'
import SubscriptionCard from '../../components/Pricing/SubscriptionCard'
import MoreDetails from '../../components/Pricing/MoreDetailSection'

const Pricing = () => {
  return (

    <>

    {/* Main Section Start */}

    <main id="_main" className="w-full mb-8 2xl:mb-60">
      <div className="max-w-contentSmallScreenWidth md:max-w-contentLargeScreenWidth mx-auto relative pt-28 lg:pt-40 2xl:pt-80 flex flex-col items-center gap-28 md:gap-40 lg:gap-32 2xl:gap-0">
      <div className="flex flex-col items-center z-10">
      <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-eightyPixel font-extrabold text-center mb-1 leading-relaxed md:leading-relaxed lg:leading-relaxed w-4/5">The Right <span className="text-mainColor">P</span>lan For Your <span className="text-mainColor">B</span>usiness</h1>
      <p className="text-sm md:text-base lg:text-xl 2xl:text-3xl font-medium text-mainTextColor text-center mb-12">Founder-friendly pricing. Designed to bring you to success.</p>
      </div>
      </div>
    </main>

    {/* Main Section End */}

    {/* Subscription Section Start */}

    <section id="_subscriptionSection" className="w-full mb-16 md:mb-28 lg:mb-40 2xl:mb-60">
      <div className="max-w-contentSmallScreenWidth md:max-w-contentLargeScreenWidth mx-auto w-full flex flex-col items-center gap-12 lg:gap-20">
      <div className="flex items-center rounded-sixtyThreePixel bg-gray-100 pt-4 md:pt-3 pb-3 md:pb-2 px-6 md:px-4">
        <Button padding='py-3 px-7' className="rounded-sixtyThreePixel bg-mainTextColor shadow-lg text-white font-medium text-sm 2xl:text-2xl" text='Monthly' icon={""} />
        <Button padding='py-3 px-7' className="rounded-sixtyThreePixel text-mainBlackColor font-medium text-sm 2xl:text-2xl" text='Yearly' icon={""}/>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-10 lg:gap-4 xl:gap-6">
        <SubscriptionCard
          subscriptionsImg='/images/Pricing/freepricing_icon.svg'
          levels='Free'
          levelsTextColor='text-mainTextColor'
          price='$0'
          priceTextColor='text-mainTextColor'
          startedTextColor='text-mainTextColor'
          subscriptionsDivBackground='bg-gray-50'
          buttonStyling='bg-mainTextColor hover:bg-mainColor text-white'
          diamondBackground='bg-gray-200'
          requirementTextColor='text-mainTextColor'
          requirements={[
            { text: 'Access to 38K+ investors', checkBg: "fill-mainTextColor opacity-90" },
            { text: '5 results per search', checkBg: "fill-mainTextColor opacity-90" },
            { text: 'Search filtering', checkBg: "fill-mainTextColor opacity-90" },
            { text: 'Investor info', checkBg: "fill-mainTextColor opacity-90" },
          ]} 
        />
        <SubscriptionCard
          subscriptionsImg='/images/Pricing/basicpricing_icon.svg' 
          levels='Basic'
          levelsTextColor='text-white' 
          price='$49' 
          priceTextColor='text-white' 
          startedTextColor='text-white' 
          subscriptionsDivBackground='bg-mainColor/80' 
          buttonStyling='bg-white hover:bg-mainColor text-mainTextColor' 
          diamondBackground='bg-mainColor' 
          requirementTextColor='text-white' 
          requirements={[
              { text: 'Access to 38K+ investors', checkBg: "fill-gray-300" },
              { text: '5 results per search', checkBg: "fill-gray-300" },
              { text: 'Search filtering', checkBg: "fill-gray-300" },
              { text: 'Investor info', checkBg: "fill-gray-300" },
              { text: 'Full contact info', checkBg: "fill-gray-300" },
              { text: 'Export 300 contacts (CSV)', checkBg: "fill-gray-300" },
              { text: '50 outreach messages', checkBg: "fill-gray-300" },
          ]}
        />
        <SubscriptionCard 
          subscriptionsImg='/images/Pricing/propricing_icon.svg' 
          levels='Pro' 
          levelsTextColor='text-mainTextColor' 
          price='$99' 
          priceTextColor='text-mainTextColor' 
          startedTextColor='text-mainTextColor' 
          subscriptionsDivBackground='bg-gray-50' 
          buttonStyling='bg-mainTextColor hover:bg-mainColor text-white' 
          diamondBackground='bg-gray-200'  
          requirementTextColor='text-mainTextColor' 
          requirements={[
              { text: 'Access to 38K+ investors', checkBg: "fill-mainTextColor opacity-90" },
              { text: '5 results per search', checkBg: "fill-mainTextColor opacity-90" },
              { text: 'Search filtering', checkBg: "fill-mainTextColor opacity-90" },
              { text: 'Investor info', checkBg: "fill-mainTextColor opacity-90" },
              { text: 'Full contact info', checkBg: "fill-mainTextColor opacity-90" },
              { text: 'Export 1,000 contacts (CSV)', checkBg: "fill-mainTextColor opacity-90" },
              { text: '150 outreach messages', checkBg: "fill-mainTextColor opacity-90" },
              { text: 'Priority support', checkBg: "fill-mainTextColor opacity-90" },
          ]}
        />
      </div>
      </div>
    </section>

    {/* Subscription Section End */}

    {/* More Detail Section Start */}

    <section id="_moreDetailSection" className="w-full mb-8 md:mb-20 lg:mb-32 2xl:mb-52 hidden lg:block">
      <div className="max-w-contentSmallScreenWidth md:max-w-contentLargeScreenWidth mx-auto w-full flex flex-col items-center gap-12 lg:gap-20">
        <h1 className="text-5xl xl:text-6xl font-bold text-mainTextColor leading-snug md:leading-snug lg:leading-snug">More <span className="text-mainColor">D</span>etails About Our <span className="text-mainColor">P</span>ricing</h1>
        <div className="flex flex-col items-center gap-12 w-full">
          <MoreDetails />
          <p className="text-xl font-medium text-mainTextColor">*You can buy extra export rows & messages anytime you want.</p>
        </div>
      </div>
    </section>

    {/* More Detail Section End */}

    {/* Starting With Raiderly Section Start */}

    <section id="_startingWithRaiderlySection" className="w-full mb-16 md:mb-28 lg:mb-40 2xl:mb-60">
      <div className="max-w-contentSmallScreenWidth md:max-w-contentLargeScreenWidth mx-auto w-full flex flex-col items-center gap-8 lg:gap-12">
        <h1 className="text-2xl lg:text-3xl 2xl:text-5xl font-bold text-mainTextColor text-center">Starting With <span className="text-mainColor">R</span>aiderly Is <span className="text-mainColor">E</span>asy, <span className="text-mainColor">F</span>ast, And <span className="text-mainColor">F</span>ree.</h1>
        <Button padding='py-3 lg:py-4 px-9' className='bg-mainColor text-base lg:text-xl text-white' text='Get Started' icon=""/>
      </div>  
    </section>

    {/* Starting With Raiderly Section End */}

    </>

  )
}

export default Pricing
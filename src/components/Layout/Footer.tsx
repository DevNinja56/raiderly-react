import React from 'react'
import Twitter from './icons/Twitter'
import Instagram from './icons/Instagram'
import Facebook from './icons/Facebook'
import FooterInput from '../Common/FooterInput'
import { ROUTES } from '../../constant/route'
import { useLocation, useNavigate } from 'react-router-dom'
import ApplySection from './components/Footer/ApplySection'
import HomePageApplySection from './components/Footer/HomePageApplySection'

const Footer = () => {
  const location = useLocation()
  const navigate = useNavigate()
  return (

    // footer Start

    <footer id="_footer" className="w-full flex flex-col gap-20">
      <div className={`${location.pathname === ROUTES.HOMEPAGE ? "" : "max-w-contentSmallScreenWidth md:max-w-contentLargeScreenWidth mx-auto"} w-full`}>
      {location.pathname === ROUTES.HOMEPAGE ? 
        <HomePageApplySection />
      : <ApplySection />}
      <div className={`${location.pathname === ROUTES.HOMEPAGE ? "max-w-contentSmallScreenWidth md:max-w-contentLargeScreenWidth mx-auto" : ""}`}>
          <div className="w-full pt-12 md:pt-20">
            <div className="w-full flex flex-wrap lg:flex-nowrap gap-x-4 justify-between gap-y-12 md:gap-y-20">
              <div className="flex flex-col gap-7 w-full lg:w-60 xl:w-72 2xl:w-96">
                <div className="flex flex-col gap-y-5">
                <img className="h-20 w-20 2xl:h-40 2xl:w-40" src="/images/FooterMan.svg" />
                <p className="text-xl 2xl:text-3xl font-medium text-mainTextColor">The best platform for finding investors and influencers.</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-9 w-9 2xl:h-12 2xl:w-12 cursor-pointer rounded-full border-2 border-mainTextColor hover:border-orange-500 flex items-center justify-center">
                    <Twitter />
                  </div>
                  <div className="h-9 w-9 2xl:h-12 2xl:w-12 cursor-pointer rounded-full border-2 border-mainTextColor hover:border-orange-500 flex items-center justify-center">
                    <Instagram />
                  </div>
                  <div className="h-9 w-9 2xl:h-12 2xl:w-12 cursor-pointer rounded-full border-2 border-mainTextColor hover:border-orange-500 flex items-center justify-center">
                    <Facebook />
                  </div>
                </div>
              </div>
              <div className="flex w-full justify-between gap-0 md:gap-20 lg:gap-16 xl:gap-28 2xl:gap-0 lg:w-auto 2xl:w-2/6">
              <div className="gap-5 flex flex-col w-auto md:w-1/5 lg:w-auto">
                <h1 className="text-lg 2xl:text-3xl font-semibold">For Founders</h1>
                <ul className="font-medium flex flex-col gap-4 text-base 2xl:text-2xl">
                  <li onClick={() => navigate(ROUTES.PRICING)} className="text-mainTextColor hover:text-orange-500 cursor-pointer">Pricing</li>
                  <li onClick={() => navigate(ROUTES.FAQ)} className="text-mainTextColor hover:text-orange-500 cursor-pointer">FAQ</li>
                  <li onClick={() => navigate(ROUTES.BLOG)} className="text-mainTextColor hover:text-orange-500 cursor-pointer">Blog</li>
                  <li className="text-mainTextColor hover:text-orange-500 cursor-pointer">Terms of Use</li>
                  <li className="text-mainTextColor hover:text-orange-500 cursor-pointer">Privacy Policy</li>
                </ul>
              </div>
              <div className="gap-5 flex flex-col w-auto md:w-3/5 lg:w-auto">
                <h1 className="text-lg 2xl:text-3xl font-semibold">Contact Us</h1>
                <ul className="gap-4 flex flex-col font-medium text-base 2xl:text-2xl">
                  <li className="text-mainTextColor hover:text-orange-500 cursor-pointer">For Investors</li>
                  <li className="text-mainTextColor hover:text-orange-500 cursor-pointer">For Influencer</li>
                </ul>
              </div>
              </div>
              <div className="gap-5 flex flex-col w-full lg:w-72 xl:w-80 2xl:w-1/4">
                <h1 className="text-lg 2xl:text-3xl font-semibold">Subscribe</h1>
                <FooterInput />
                <div className="gap-5 font-medium">
                  <p className="text-xs md:text-xl 2xl:text-2xl font-medium text-mainTextColor">At vero eos et accusamus et iusto odio as part dignissimos ducimus qui blandit.</p>
                </div>
              </div>
            </div>
          </div>
          </div>
      </div>
      <div className="w-full border-t border-gray-400 py-5 flex justify-center">
        <p className="text-gray-800 text-xs 2xl:text-xl font-medium">© 2023 Raiderly. Walnut, CA. All rights reserved.</p>
      </div>
    </footer>

    // footer End

  )
}

export default Footer
import React, { useEffect, useState } from 'react'
import SideBar from '../Sidebar'
import Logo from '../Common/MainLogo'
import HeaderButton from '../Common/HeaderButton'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../constant/route'
import Menu from './icons/Menu'

const Header = () => {

  const [sideBar,setSideBar] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    setSideBar(false);
  }, [navigate]);

  return (

    // Header Start 

    <header id="_header" className="w-full pt-6 absolute z-40">
      <div className="max-w-NavLargeScreenWidth mx-auto flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Logo className='' />
          <div className="hidden items-center gap-8 text-black font-medium text-base 2xl:text-2xl lg:flex">
            <h1 onClick={() => navigate(ROUTES.PRICING)} className="hover:text-mainColor cursor-pointer">Pricing</h1>
            <h2 onClick={() => navigate(ROUTES.FAQ)} className="hover:text-mainColor cursor-pointer">FAQ</h2>
          </div>
        </div>
        <div onClick={() => navigate(ROUTES.SIGN_UP)}>
        <HeaderButton className="hidden lg:block bg-white hover:bg-mainColor hover:border-mainColor cursor-pointer hover:text-white transition-all duration-200" text='Sign Up' icon="" padding='py-ten 2xl:py-5 px-5 2xl:px-10'/>
        </div>
        <div className="block lg:hidden" onClick={() => setSideBar(!sideBar)}>
        <HeaderButton className='px-1 py-1 bg-mainTextColor text-white rounded-md' text='' padding='px-1 py-1 2xl:py-5 2xl:px-10' icon={<Menu />}/>
        {sideBar && <SideBar setSideBar={setSideBar} />}
        </div>
      </div>
    </header>

    // Header End 

  )
}

export default Header
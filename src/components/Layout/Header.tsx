import React, { useEffect, useState } from 'react'
import SideBar from '../Sidebar'
import Logo from '../Common/MainLogo'
import HeaderButton from '../Common/HeaderButton'
import { NavLink, useNavigate } from 'react-router-dom'
import { ROUTES } from '../../constant/route'
import Menu from '../svg/Menu'

const Header = () => {

  const [sideBar, setSideBar] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    setSideBar(false);
  }, [navigate]);

  return (

    // Header Start 

    <header id="header" className="w-full pt-6 absolute z-40">
      <div className="max-w-NavLargeScreenWidth mx-auto flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Logo className='' />
          <div className="hidden items-center gap-8 text-black font-medium text-base 2xl:text-2xl lg:flex">
            <NavLink to={ROUTES.PRICING} className={({ isActive }) => isActive ? "text-mainColor" : "hover:text-mainColor cursor-pointer"}>Pricing</NavLink>
            <NavLink to={ROUTES.FAQ} className={({ isActive }) => isActive ? "text-mainColor" : "hover:text-mainColor cursor-pointer"}>FAQ</NavLink>
          </div>
        </div>
        <NavLink to={ROUTES.SIGN_UP}>
          <HeaderButton className="hidden lg:block bg-white hover:bg-mainColor hover:border-mainColor cursor-pointer hover:text-white transition-all duration-200" text='Sign Up' icon="" padding='py-2 2xl:py-5 px-5 2xl:px-10' />
        </NavLink>
        <div className="block lg:hidden" onClick={() => setSideBar(!sideBar)}>
          <HeaderButton className='px-1 py-1 bg-mainTextColor text-white rounded-md' text='' padding='px-1 py-1 2xl:py-5 2xl:px-10' icon={<Menu />} />
          {sideBar && <SideBar setSideBar={setSideBar} />}
        </div>
      </div>
    </header>

    // Header End 

  )
}

export default Header
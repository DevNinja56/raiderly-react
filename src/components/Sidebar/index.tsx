import React from 'react'
import HeaderButton from '../Common/HeaderButton';
import Cross from '../Layout/icons/Cross';
import Logo from '../Common/MainLogo';
import { ROUTES } from '../../constant/route';
import { NavLink } from 'react-router-dom';

interface sideBarProps {
  setSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideBar = ({ setSideBar }: sideBarProps) => {

  return (

    // SideBar Start

    <div id="_SideBar" className={`top-0 right-0 h-full w-full bg-black flex justify-end fixed visible bg-opacity-20 z-20 transition-all duration-500`}>
      <div onClick={(e) => e.stopPropagation()} className={`w-full md:w-3/5 transition-all duration-500 bg-white px-4 md:px-6 pt-5 md:pt-7 flex flex-col gap-10 md:gap-16`}>
        <div className="w-full flex items-center justify-between">
          <Logo className='w-24 md:h-auto md:w-auto' />
          <div onClick={() => setSideBar(false)}>
            <HeaderButton padding='py-1 px-1' className='rounded-md bg-mainTextColor' text='' icon={<Cross />} />
          </div>
        </div>
        <div className="flex flex-col gap-5 md:gap-8 text-lg md:text-2xl font-medium text-black px-2">
          <NavLink to={ROUTES.PRICING} className={({ isActive }) => isActive ? "text-mainColor" : ""}>Pricing</NavLink>
          <NavLink to={ROUTES.FAQ} className={({ isActive }) => isActive ? "text-mainColor" : ""}>FAQ</NavLink>
        </div>
        <NavLink to={ROUTES.SIGN_UP}>
          <HeaderButton padding='py-3' className='text-sm md:text-base w-full rounded-3xl text-white font-medium bg-mainColor border-none' text='Sign Up' icon="" />
        </NavLink>
      </div>
    </div>

    // SideBar End

  )
}

export default SideBar
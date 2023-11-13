import React from 'react'
import HeaderButton from '../Common/HeaderButton';
import Cross from '../Layout/icons/Cross';
import Logo from '../Common/MainLogo';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constant/route';

interface sideBarProps {
  setSideBar: (newValue: boolean) => void;
}

const SideBar = ({ setSideBar } : sideBarProps) => {
  const navigate = useNavigate()
  
  return (

    // SideBar Start

    <div id="_SideBar" className={`top-0 right-0 h-full w-full bg-black flex justify-end fixed visible bg-opacity-20 z-20 transition-all duration-500`}>
    <div onClick={(e) => e.stopPropagation()} className={`w-full md:w-3/5 transition-all duration-500 bg-white px-6 pt-7 flex flex-col gap-16`}>
        <div className="w-full flex items-center justify-between">
            <Logo className='h-5 w-5' />
            <div onClick={() => setSideBar(false)}>
            <HeaderButton padding='py-1 px-1' className='rounded-md bg-mainTextColor' text='' icon={<Cross />}/>
            </div>
        </div>
        <div className="flex flex-col gap-8 text-2xl font-medium text-black px-2">
          <h1 onClick={() => navigate(ROUTES.PRICING)}>Pricing</h1>
          <h1 onClick={() => navigate(ROUTES.FAQ)}>FAQ</h1>
        </div>
        <HeaderButton padding='py-3' className='w-full rounded-3xl text-white font-medium bg-mainColor border-none' text='Sign Up' icon="" />
    </div>
    </div>

    // SideBar End

  )
}

export default SideBar
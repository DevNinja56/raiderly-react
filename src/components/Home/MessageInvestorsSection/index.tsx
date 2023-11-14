import React from 'react'
import Button from '../../Common/Button'
import Arrow from '../icons/Arrow'
import { useNavigate } from 'react-router'
import { ROUTES } from '../../../constant/route'

const MessageInvestorsSection = () => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center gap-8 lg:gap-12 w-full">
      <div className="relative w-full">
        <img alt='_dashboardImg' className="w-full" src="/images/Home/DashboardImg.svg" />
        <img alt='manSitting' className="absolute -top-16 md:-top-36 lg:-top-52 -translate-y-2 lg:translate-y-0 -translate-x-8 md:-translate-x-28 inset-x-2/4 h-auto w-auto md:h-56 md:w-56 lg:h-80 lg:w-80" src="/images/Home/manSittingDashboardImg.svg" />
      </div>
        <p className="text-lg lg:text-2xl font-medium text-mainTextColor">Yes, it's that simple.</p>
        <div onClick={() => navigate(ROUTES.SIGN_IN)}>
        <Button text='Message investors' padding='px-6 lg:px-9 py-3' className='hover:bg-mainTextColor bg-mainColor text-white font-medium text-base lg:text-lg hover:opacity-95' icon={<Arrow />}/>
        </div>
    </div>
  )
}

export default MessageInvestorsSection
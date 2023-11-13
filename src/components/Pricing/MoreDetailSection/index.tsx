import React from 'react'
import RequirementBox from '../RequirementBox'

const MoreDetails = () => {
  return (
    <div
    className="bg-gray-50 px-4 md:px-8 xl:px-16 pt-16 pb-12 z-10 rounded-xl w-full shadow-lg border border-gray-300 flex justify-between gap-x-5">
    <div className="flex flex-col gap-y-10">
      <h1 className="text-xl md:text-2xl 2xl:text-4xl font-bold">Feature</h1>
      <div className="flex flex-col gap-y-7 text-mainBlackColor text-sm 2xl:text-2xl font-medium">
        <p>Access to 38K+ investors</p>
        <p>Result per search</p>
        <p>Search savings</p>
        <p>Verified investor info</p>
        <p>Build-in message generator</p>
        <p>Message generations</p>
        <p>LinkedIn & Twitter links</p>
        <p>Email addresses</p>
        <p>Export contacts*</p>
        <p>Messages*</p>
        <p>Priority support</p>
      </div>
    </div>
    <div className="flex flex-col gap-y-10">
      <h1 className="text-xl md:text-2xl 2xl:text-4xl font-bold">Free</h1>
      <div className="flex flex-col gap-y-7 text-mainBlackColor text-sm font-medium">
        <RequirementBox textColor='text-mainTextColor' text='Unlimited' checkBg='opacity-90 fill-mainTextColor' />
        <RequirementBox textColor='text-mainTextColor' text='5' checkBg='opacity-90 fill-mainTextColor' />
        <RequirementBox textColor='text-mainTextColor' text='Yes' checkBg='opacity-90 fill-mainTextColor' />
        <RequirementBox textColor='text-mainTextColor' text='Yes' checkBg='opacity-90 fill-mainTextColor' />
        <RequirementBox textColor='text-mainTextColor' text='Yes' checkBg='opacity-90 fill-mainTextColor' />
        <RequirementBox textColor='text-mainTextColor' text='Unlimited' checkBg='opacity-90 fill-mainTextColor' />
        <RequirementBox textColor='text-mainTextColor' text='Yes' checkBg='opacity-90 fill-mainTextColor' />
      </div>
    </div>
    <div className="flex flex-col gap-y-10">
      <h1 className="text-xl md:text-2xl 2xl:text-4xl font-bold">Basic</h1>
      <div className="flex flex-col gap-y-7 text-mainBlackColor text-sm font-medium">
        <RequirementBox textColor='text-mainTextColor' text='Unlimited' checkBg='opacity-90 fill-mainTextColor' />
        <RequirementBox textColor='text-mainTextColor' text='5' checkBg='opacity-90 fill-mainTextColor' />
        <RequirementBox textColor='text-mainTextColor' text='Yes' checkBg='opacity-90 fill-mainTextColor' />
        <RequirementBox textColor='text-mainTextColor' text='Yes' checkBg='opacity-90 fill-mainTextColor' />
        <RequirementBox textColor='text-mainTextColor' text='Yes' checkBg='opacity-90 fill-mainTextColor' />
        <RequirementBox textColor='text-mainTextColor' text='Unlimited' checkBg='opacity-90 fill-mainTextColor' />
        <RequirementBox textColor='text-mainTextColor' text='Yes' checkBg='opacity-90 fill-mainTextColor' />
        <RequirementBox textColor='text-mainTextColor' text='Yes' checkBg='opacity-90 fill-mainTextColor' />
        <RequirementBox textColor='text-mainTextColor' text='300 contacts/month' checkBg='opacity-90 fill-mainTextColor' />
        <RequirementBox textColor='text-mainTextColor' text='50 messages/month' checkBg='opacity-90 fill-mainTextColor' />
        <RequirementBox textColor='text-mainTextColor' text='Unlimited' checkBg='opacity-90 fill-mainTextColor' />
      </div>
    </div>
    <div className="flex flex-col gap-y-10">
      <h1 className="text-xl md:text-2xl 2xl:text-4xl font-bold">Pro</h1>
      <div className="flex flex-col gap-y-7 text-mainBlackColor text-sm font-medium">
        <RequirementBox textColor='text-mainTextColor' text='Unlimited' checkBg='opacity-90 fill-mainTextColor' />
        <RequirementBox textColor='text-mainTextColor' text='5' checkBg='opacity-90 fill-mainTextColor' />
        <RequirementBox textColor='text-mainTextColor' text='Yes' checkBg='opacity-90 fill-mainTextColor' />
        <RequirementBox textColor='text-mainTextColor' text='Yes' checkBg='opacity-90 fill-mainTextColor' />
        <RequirementBox textColor='text-mainTextColor' text='Yes' checkBg='opacity-90 fill-mainTextColor' />
        <RequirementBox textColor='text-mainTextColor' text='Unlimited' checkBg='opacity-90 fill-mainTextColor' />
        <RequirementBox textColor='text-mainTextColor' text='Yes' checkBg='opacity-90 fill-mainTextColor' />
        <RequirementBox textColor='text-mainTextColor' text='Yes' checkBg='opacity-90 fill-mainTextColor' />
        <RequirementBox textColor='text-mainTextColor' text='300 contacts/month' checkBg='opacity-90 fill-mainTextColor' />
        <RequirementBox textColor='text-mainTextColor' text='50 messages/month' checkBg='opacity-90 fill-mainTextColor' />
        <RequirementBox textColor='text-mainTextColor' text='Yes' checkBg='opacity-90 fill-mainTextColor' />
      </div>
    </div>
  </div>
  )
}

export default MoreDetails
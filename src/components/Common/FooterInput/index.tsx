import React from 'react'
import HeaderButton from '../HeaderButton'

const FooterInput = () => {
  return (
    <div className="relative w-72 md:w-80 lg:w-full">
        <input className="rounded-xl pl-4 pr-24 md:pr-32 lg:pr-28 py-4 lg:p-4 2xl:p-8 w-auto lg:w-full bg-gray-100 text-gray-700 outline-none text-sm 2xl:text-xl" placeholder="example@gmail.com"/>
        <HeaderButton padding='px-6 md:px-6 py-2 2xl:py-3 2xl:px-5' className='absolute right-3 md:right-2 lg:right-3 top-2 lg:top-2 2xl:top-5 rounded-lg text-white bg-orange-500 border-none text-sm md:text-base' text='Send' icon=""/>
    </div>
  )
}

export default FooterInput
import React from 'react'
import UsersImg from '../UserImg'

interface propsTypes {
  img: string,
}

const Card = ({img} : propsTypes) => {
  return (
    <div className="border border-gray-200 bg-white shadow-xl rounded-3xl px-4 py-10 h-fit">
        <div className="relative mb-10">
            <img className="absolute top-[-10px]" src="/images/Home/commas.svg" />
            <p className="text-mainTextColor text-sm 2xl:text-xl z-10 relative leading-relaxed">From the selected funds from Raiderly, we received: out of 455 contacts, 443 were added on LinkedIn, 30% responded to email, and we scheduled calls with 5 funds.</p>
        </div>
        <div className="flex gap-2">
            <UsersImg className='min-w-1/5' img={img} />
            <div className="flex flex-col gap-1">
                <h1 className="text-sm 2xl:text-xl font-semibold">Vladimir Makarov</h1>
                <p className="text-xs 2xl:text-base font-medium text-gray-500">Co-founder of Emonomy</p>
            </div>
        </div>
    </div>
  )
}

export default Card
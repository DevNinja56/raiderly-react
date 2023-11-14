import React from 'react'

interface propsTypes {
    img: string,
    text: string,
}

const RaisingMoneyCard = ({img, text} : propsTypes) => {
  return (
    <div className="flex flex-col gap-5 2xl:gap-8 px-3 2xl:px-5 rounded-xl border border-gray-200 pt-5 pb-8 w-36 md:w-40 h-40 2xl:h-60 2xl:w-72">
        <img alt='_card' className="w-1/4 h-16" src={img} />
        <h1 className="font-medium text-xs 2xl:text-xl text-mainTextColor">{text}</h1>
    </div>
  )
}

export default RaisingMoneyCard
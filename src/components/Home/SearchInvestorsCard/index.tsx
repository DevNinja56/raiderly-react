import React from 'react'

interface propsTypes {
    img: string,
    text: string,
    className: string,
}

const SearchInvestorsCard = ({img, text, className} : propsTypes) => {
  return (
    <div className={`py-1 md:py-2 px-ten md:px-3 gap-1 md:gap-2 rounded-xl flex items-center border border-gray-200 shadow-md ${className}`}>
        <img alt='_card' className="h-auto w-auto 2xl:w-full 2xl:h-8" src={img} />
        <h1 className="text-xs 2xl:text-2xl text-mainTextColor font-medium">{text}</h1>
    </div>
  )
}

export default SearchInvestorsCard
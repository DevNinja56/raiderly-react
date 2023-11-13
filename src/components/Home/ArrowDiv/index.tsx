import React from 'react'

interface propsTypes {
    text: string,
    className: string,
}

const ArrowDiv = ({ text, className } : propsTypes) => {
  return (
    <div className={`p-3 2xl:p-6 rounded-xl bg-mainTextColor hover:bg-mainColor cursor-pointer transition-all duration-300 after:transition-all after:duration-300 after:hover:border-b-mainColor bg-opacity-95 flex items-center justify-center relative after:absolute after:pt-minusTenPixel after:-top-4 after:h-0 after:w-0 after:border-t-8 after:border-t-transparent after:border-l-8 after:border-l-transparent after:border-b-8 after:border-b-mainTextColor after:border-r-8 after:border-r-transparent ${className}`}>
        <p className="text-white font-medium text-xs md:text-base 2xl:text-2xl text-center md:text-start">{text}</p>
    </div>
  )
}

export default ArrowDiv
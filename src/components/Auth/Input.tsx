import React from 'react'

interface propsTypes {
  label: string;
  placeHolder: string;
  className?: string
}

const Input = ({ label, placeHolder, className }: propsTypes) => {
  return (
    <div>
      <p
        className="mb-4 text-lg 2xl:text-2xl text-mainTextColor font-normal max-sm:text-sm  max-sm:tracking-tight max-sm:font-medium">
        {label}

      </p>
      <input type="text" placeholder={placeHolder}
        className={`${className} w-full p-3 pl-5 2xl:p-4 h-14 rounded-full text-xs 2xl:text-xl border focus:border-mainColor outline-none transition-all duration-300 max-md:h-11 2xl:h-20`} />
    </div>
  )
}

export default Input
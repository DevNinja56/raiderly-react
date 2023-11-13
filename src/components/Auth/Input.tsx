import React from 'react'

interface propsTypes {
    label: string;
    placeHolder: string;
}

const Input = ({label, placeHolder} : propsTypes) => {
  return (
    <div>
    <p
    className="mb-4 text-lg 2xl:text-2xl text-mainTextColor font-normal max-sm:text-sm  max-sm:tracking-tight max-sm:font-medium">
    {label}

</p>
<input type="text" placeholder={placeHolder}
    className="w-full p-3 2xl:p-4 h-14 rounded-full text-xs 2xl:text-xl border outline-lightOrangeColor transition-all duration-300 max-md:h-11 2xl:h-20" />
    </div>
  )
}

export default Input
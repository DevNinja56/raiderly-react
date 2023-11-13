import React from 'react'

interface buttonProps {
    className: string;
    padding: string;
    text: string;
    icon: React.ReactElement | any
}

const HeaderButton = ({className, text, icon, padding} : buttonProps) => {
  return (
    <button className={`${className} ${padding} border border-mainTextColor text-mainTextColor rounded-3xl 2xl:rounded-full font-medium text-base 2xl:text-xl`}>
        {text}
        {icon}
    </button>
  )
}

export default HeaderButton
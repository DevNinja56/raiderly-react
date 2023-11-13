import React from 'react'

interface propsTypes {
    className: string,
    padding: string,
    text: string,
    icon: React.ReactElement | string,
}

const Button = ({className, padding, text, icon} : propsTypes) => {
  return (
    <button className={`${className} ${padding} rounded-sixtyThreePixel transition-all duration-300 font-medium flex items-center gap-3`}>
        {text}
        {icon}
    </button>
  )
}

export default Button
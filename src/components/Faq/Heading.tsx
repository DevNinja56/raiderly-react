import React from 'react'

interface propsTypes {
  text: string,
}

const Heading = ({ text }: propsTypes) => {
  return (
    <h1 className="font-semibold text-sm md:text-lg lg:text-xl xl:text-2xl truncate">{text}</h1>
  )
}

export default Heading
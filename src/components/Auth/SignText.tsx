import React from 'react'

interface propsTypes {
  spanText: string;
  text: string;
}

const SignText = ({ spanText, text }: propsTypes) => {
  return (
    <div className="text-5xl 2xl:text-6xl font-semibold text-mainTextColor max-md:text-3xl">
      <h1>Sign <span className="text-mainColor">{spanText}</span>{text}</h1>
    </div>
  )
}

export default SignText
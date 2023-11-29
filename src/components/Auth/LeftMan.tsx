import React from 'react'

interface propsTypes {
  className: string;
  imgSize: string;
}


const LeftManImage = ({ className, imgSize }: propsTypes) => {
  return (
    <div className={`float-right max-lg:w-28 ${className}`}>
      <img alt='_man' src="/images/SignIn/halfMan.png" className={imgSize} />
    </div>
  )
}

export default LeftManImage
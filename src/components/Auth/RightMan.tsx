import React from 'react'

interface propsTypes {
  className : string;
  imgSize : string;
}

const RightManImage = ({className, imgSize} : propsTypes) => {
  return (
    <div className={`float-left translate-y-52 max-lg:w-28 max-lg:translate-y-80 ${className}`}>
    <img alt='_man' src="/images/SignIn/halfManr.png" className={imgSize} />
</div>
  )
}

export default RightManImage
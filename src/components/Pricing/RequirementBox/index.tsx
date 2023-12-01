import React from 'react'
import Check from '../../svg/Check'

interface propsTypes {
  text: string,
  checkBg: string,
  textColor: string,
}

const RequirementBox = ({ text, checkBg, textColor }: propsTypes) => {
  return (
    <div className="flex items-center gap-3">
      <Check checkBg={checkBg} />
      <p className={`${textColor}`}>{text}</p>
    </div>
  )
}

export default RequirementBox
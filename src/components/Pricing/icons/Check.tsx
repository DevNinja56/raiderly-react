import React from 'react'

interface propsTypes {
  checkBg: string,
}

const Check = ({ checkBg }: propsTypes) => {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="12" className={`${checkBg}`} />
      <path d="M18.5 7L9 16.5L5 12.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default Check
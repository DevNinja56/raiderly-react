import React from 'react'

interface propTypes {
  className: string
}

const Cross = ({ className }: propTypes) => {
  return (
    <svg className={`cursor-pointer z-10 ${className}`} width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M27 49.5C39.4264 49.5 49.5 39.4264 49.5 27C49.5 14.5736 39.4264 4.5 27 4.5C14.5736 4.5 4.5 14.5736 4.5 27C4.5 39.4264 14.5736 49.5 27 49.5Z" stroke="#111111" strokeWidth="2" />
      <path d="M32.625 21.375L21.375 32.625M21.375 21.375L32.625 32.625" stroke="#111111" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export default Cross
import React from 'react'

interface propsTypes {
    className: string,
}

const RightArrow = ({className} : propsTypes) => {
  return (
<svg className={`${className}`} width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M17.0503 16.5962L20.3964 13.25H21.1035L17.4038 16.9498C17.3062 17.0474 17.1479 17.0474 17.0503 16.9498C16.9526 16.8521 16.9526 16.6938 17.0503 16.5962ZM17.4039 7.05028L21.1035 10.75H20.3964L17.0503 7.40383L17.0502 7.40382C16.9526 7.30619 16.9526 7.1479 17.0502 7.05028C17.1479 6.95264 17.3062 6.95264 17.4039 7.05028ZM2.5 11.75H19.9822L20.2322 12L19.9822 12.25H2.5V11.75ZM21.5 12.1464V12.25H21.3964L21.5 12.1464ZM21.5 11.75V11.8536L21.3964 11.75H21.5Z" fill="white" stroke="white"/>
</svg>
  )
}

export default RightArrow
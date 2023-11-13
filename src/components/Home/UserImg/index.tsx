import React from 'react'

interface propsTypes {
    img: string,
    className: string,
}

const UsersImg = ({ img, className } : propsTypes) => {
  return (
    <img className={`${className}`} src={img} />
  )
}

export default UsersImg
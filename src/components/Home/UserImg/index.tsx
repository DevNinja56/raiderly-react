import React from 'react'

interface propsTypes {
    img: string,
    className: string,
}

const UsersImg = ({ img, className } : propsTypes) => {
  return (
    <img alt='_userImg' className={`${className}`} src={img} />
  )
}

export default UsersImg
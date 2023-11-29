import React from 'react'
import { ROUTES } from '../../../constant/route'
import { NavLink } from 'react-router-dom'

interface propsTypes {
  className: string,
}

const Logo = ({ className }: propsTypes) => {

  return (
    <NavLink to={ROUTES.HOMEPAGE}>
      <img className={`${className} h-auto w-auto 2xl:h-24 cursor-pointer`} src="/images/Logo.svg" alt="logo" />
    </NavLink>
  )
}

export default Logo
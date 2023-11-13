import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../../constant/route'

interface propsTypes {
    className: string,
}

const Logo = ({className} : propsTypes) => {
  const navigate = useNavigate()

  return (
    <img onClick={() => navigate(ROUTES.HOMEPAGE)} className={`${className} h-auto w-auto 2xl:h-24 cursor-pointer`} src="/images/Logo.svg" alt="logo" />
  )
}

export default Logo
import React from 'react'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'

interface LayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({children} : LayoutProps) => {
  return (
    <>
    <Header></Header>
    {children}
    <Footer></Footer>
    </>
  )
}

export default MainLayout
import React from 'react'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'

interface LayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main id='main'>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default MainLayout
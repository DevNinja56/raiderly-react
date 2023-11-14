import React from 'react'
import Input from '../components/Auth/Input'
import Button from '../components/Common/Button'
import Cross from '../components/Auth/icons/Cross'

interface ForgotPassProps {
  setShowForgotModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ForgotPass = ({setShowForgotModal} : ForgotPassProps) => {
  return (
    <div className='fixed top-0 left-0 bg-black bg-opacity-20 h-full w-full flex items-center justify-center'>
        <div className='bg-white rounded-3xl py-12 md:py-20 w-11/12 md:w-10/12 lg:w-7/12 xl:w-6/12 flex justify-center relative'>
          <div onClick={() => setShowForgotModal(false)} className='absolute right-4 top-4'>
            <Cross />
          </div>
            <div className='w-11/12 md:w-9/12 lg:w-8/12 flex flex-col gap-10'>
                <Input label='Enter your username or email address' placeHolder='Username or email address' />
                <Button padding='py-3 2xl:py-6' className='hover:bg-mainColor bg-mainTextColor w-full font-medium text-base 2xl:text-2xl text-white flex justify-center' text='Send Email' icon=""/>
            </div>
        </div>
    </div>
  )
}

export default ForgotPass
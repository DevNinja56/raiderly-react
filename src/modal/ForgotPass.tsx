import React from 'react'
import Input from '../components/Auth/Input'
import Button from '../components/Common/Button'

const ForgotPass = () => {
  return (
    <div className='fixed top-0 left-0 bg-black bg-opacity-20 h-full w-full flex items-center justify-center'>
        <div className='bg-white rounded-sixtyThreePixel py-10 w-8/12 flex justify-center'>
            <div className='w-10/12 flex flex-col gap-10'>
                <Input label='Enter your username or email address' placeHolder='Username or email address' />
                <Button padding='py-3' className='hover:bg-mainColor bg-mainTextColor w-full font-medium text-base text-white text-center' text='Send Email' icon=""/>
            </div>
        </div>
    </div>
  )
}

export default ForgotPass
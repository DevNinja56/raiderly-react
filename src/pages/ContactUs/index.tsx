import React from 'react'
import Button from '../../components/Common/Button'
import LeftManImage from '../../components/Auth/LeftMan'
import RightManImage from '../../components/Auth/RightMan'
import Input from '../../components/Auth/Input'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../constant/route'
import SelectBox from '../../components/Auth/SelectBox'
import Cross from '../../components/Auth/icons/Cross'

const ContactUs = () => {
    const navigate = useNavigate()
  return (
    <>

    {/* Main Section Start */}

    <main id='_contactUs' className="w-full h-full relative">
    <div onClick={() => navigate(ROUTES.HOMEPAGE)} className='absolute top-6 md:top-8 left-6 md:left-10 z-20 cursor-pointer'>
        <Cross />
    </div>
    <img alt='_contact' className="absolute left-0 top-0 w-full h-full object-cover" src="/images/SignIn/loginPattern.svg"/>
    <div className="w-full py-28 md:py-20 lg:py-16 z-10 relative min-h-vh100">
    <LeftManImage className='max-sm:hidden hidden md:block' imgSize='w-full' />
    <RightManImage className="hidden md:block max-sm:hidden" imgSize='w-full' />
    <form className="max-md:px-3">
        <div
            className="border rounded-3xl w-2/5 mx-auto max-xl:w-[500px] max-sm:w-full bg-white bg-opacity-50">
            <div className="px-10 py-10 max-lg:pb-0 max-md:px-4 pb-0 2xl:py-16">
                <div className="gap-6 grid max-md:gap-6 2xl:gap-16">
                    <h1 className='font-semibold text-4xl text-mainTextColor text-center'>Contact Us</h1>
                    <div className='flex justify-center w-full'>
                    <SelectBox />
                    </div>
                    <Input label='Full Name' placeHolder="full name" />
                    <Input label='Email Address' placeHolder='email address'/>
                    <Input label='Message' placeHolder='Write your message...'/>
                    <Button padding='py-4 2xl:py-6' className='w-full hover:bg-mainTextColor bg-mainColor text-white text-xl 2xl:text-3xl font-medium flex justify-center mb-12' text='Send Message' icon="" />
                </div>
            </div>
        </div>
    </form>
    </div>
</main>

    {/* Main Section End */}
</>
  )
}

export default ContactUs
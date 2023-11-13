import React from 'react'
import Button from '../../components/Common/Button'
import LeftManImage from '../../components/Auth/LeftMan'
import RightManImage from '../../components/Auth/RightMan'
import SignText from '../../components/Auth/SignText'
import Input from '../../components/Auth/Input'
import CheckAcount from '../../components/Auth/CheckAcount'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../constant/route'
import SelectBox from '../../components/Auth/SelectBox'

const ContactUs = () => {
    const navigate = useNavigate()
  return (
    <>

    {/* Main Section Start */}

    <main id='_contactUs' className="w-full h-full relative">
    <img className="absolute left-0 top-0 w-full h-full object-cover" src="/images/SignIn/loginPattern.svg"/>
    <div className="w-full py-10 z-10 relative min-h-vh100">
    <LeftManImage />
    <RightManImage />
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
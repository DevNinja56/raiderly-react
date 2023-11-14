import React, { useState } from 'react'
import Button from '../../components/Common/Button'
import LeftManImage from '../../components/Auth/LeftMan'
import RightManImage from '../../components/Auth/RightMan'
import SignText from '../../components/Auth/SignText'
import Input from '../../components/Auth/Input'
import CheckAcount from '../../components/Auth/CheckAcount'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../constant/route'
import ForgotPass from '../../modal/ForgotPass'
import Cross from '../../components/Auth/icons/Cross'

const SignIn = () => {
    const navigate = useNavigate()

    const [showForgotModal, setShowForgotModal] = useState(false)

  return (
    <>

    {/* Main Section Start */}

    <main id='_signIn' className="w-full h-full relative">
    <div onClick={() => navigate(ROUTES.HOMEPAGE)} className='absolute top-6 md:top-8 left-6 md:left-10 z-20 cursor-pointer'>
        <Cross />
    </div>
    <img alt='_signIn' className="absolute left-0 top-0 w-full h-full object-cover" src="/images/SignIn/loginPattern.svg"/>
    <div className="w-full py-28 md:py-20 lg:py-16 z-10 relative min-h-vh100">
    <LeftManImage className='max-sm:hidden hidden md:block' imgSize='w-full' />
    <RightManImage className="hidden md:block max-sm:hidden" imgSize='w-full' />
    <form className="max-md:px-3">
        <div
            className="border rounded-3xl w-2/5 mx-auto max-xl:w-[449px] max-sm:w-full bg-white bg-opacity-50">
            <div className="px-10 py-10 max-lg:pb-0 max-md:px-4 pb-0 2xl:py-16">
                <div className="gap-12 grid max-md:gap-12 2xl:gap-16">
                    <div className="flex justify-between">
                        <SignText spanText='i' text='n'/>
                        <div onClick={() => navigate(ROUTES.SIGN_UP)}>
                        <CheckAcount account='No Account ?' type='Sign up' />
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-4 cursor-pointer transition-all duration-300 hover:bg-opacity-95 hover:bg-blue-100 bg-blue-500 bg-opacity-10 py-3 md:py-4 rounded-full">
                        <span><img alt='_google' className="h-auto w-auto 2xl:h-12 2xl:w-12" src="/images/SignIn/google.png" /></span>
                        <span className="text-sm 2xl:text-2xl text-blue-400">Sign in with Google</span>
                    </div>
                        <Input label='Enter your username or email address' placeHolder="Username or email address" />
                    <div className="mb-4">
                        <Input label='Enter your Password' placeHolder='Password'/>
                        <p onClick={() => setShowForgotModal(!showForgotModal)} className="cursor-pointer text-right text-xs 2xl:text-xl text-mainTextColor font-light mt-3">Forgot Password</p>
                        {showForgotModal && <ForgotPass />}
                    </div>
                    <div onClick={() => navigate(ROUTES.HOMEPAGE)}>
                    <Button padding='py-4 2xl:py-6' className='w-full hover:bg-mainTextColor bg-mainColor text-white text-xl 2xl:text-3xl font-medium flex justify-center mb-12' text='Sign in' icon="" />
                    </div>
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

export default SignIn
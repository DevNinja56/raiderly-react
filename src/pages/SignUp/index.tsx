import React from 'react'
import Button from '../../components/Common/Button'
import LeftManImage from '../../components/Auth/LeftMan'
import RightManImage from '../../components/Auth/RightMan'
import SignText from '../../components/Auth/SignText'
import Input from '../../components/Auth/Input'
import CheckAcount from '../../components/Auth/CheckAcount'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../constant/route'
import Cross from '../../components/Auth/icons/Cross'

const SignUp = () => {
    const navigate = useNavigate()
  return (
    <>

    {/* Main Section Start */}

    <main id='_signUp' className="w-full h-full relative">
    <div onClick={() => navigate(ROUTES.HOMEPAGE)} className='absolute top-6 md:top-8 left-6 md:left-10 z-20 cursor-pointer'>
        <Cross />
    </div>
    <img alt='pattern' className="absolute left-0 top-0 w-full h-full object-cover" src="/images/SignIn/loginPattern.svg"/>
    <div className="w-full py-28 md:py-20 lg:py-16 z-10 relative min-h-vh100">
    <LeftManImage className='max-sm:hidden hidden md:block' imgSize='w-full' />
    <RightManImage className="hidden md:block max-sm:hidden" imgSize='w-full' />
    <form className="max-md:px-3">
        <div
            className="border rounded-3xl w-2/5 mx-auto max-xl:w-[500px] max-sm:w-full bg-white bg-opacity-50">
            <div className="px-10 py-10 max-lg:pb-0 max-md:px-4 pb-0 2xl:py-16">
                <div className="gap-12 grid max-md:gap-12 2xl:gap-16">
                    <div className="flex justify-between">
                        <SignText spanText='u' text='p'/>
                        <div onClick={() => navigate(ROUTES.SIGN_IN)}>
                        <CheckAcount account='Have an Account ?' type='Sign in' />
                        </div>
                    </div>
                        <Input label='Enter your username or email address' placeHolder="Username or email address" />
                    <div className="grid grid-cols-2 gap-4">
                        <Input label='User Name' placeHolder='User name' />
                        <Input label='Contact Number' placeHolder='Contact Number' />
                    </div>
                        <Input label='Enter your Password' placeHolder='Password'/>
                    <div onClick={() => navigate(ROUTES.SIGN_IN)}>
                    <Button padding='py-4 2xl:py-6' className='w-full hover:bg-mainTextColor bg-mainColor text-white text-xl 2xl:text-3xl font-medium flex justify-center mb-12' text='Sign up' icon="" />
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

export default SignUp
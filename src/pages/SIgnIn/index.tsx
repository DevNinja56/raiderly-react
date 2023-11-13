import React from 'react'
import Button from '../../components/Common/Button'
import LeftManImage from '../../components/Auth/LeftMan'
import RightManImage from '../../components/Auth/RightMan'

const SignIn = () => {
  return (
    <>

    {/* Main Section Start */}

    <main className="w-full h-full relative">
    <img className="absolute left-0 top-0 w-full h-full object-cover" src="/images/SignIn/loginPattern.svg"/>
    <div className="w-full py-10 z-10 relative min-h-vh100">
    <LeftManImage />
    <RightManImage />
    <form className="max-md:px-3">
        <div
            className="border rounded-3xl w-2/5 mx-auto max-xl:w-[449px] max-sm:w-full bg-white bg-opacity-50">
            <div className="px-10 py-10 max-lg:pb-0 max-md:px-4 pb-0 2xl:py-16">
                <div className="gap-12 grid max-md:gap-12 2xl:gap-16">
                    <div className="flex justify-between">
                        <div className="text-5xl 2xl:text-6xl font-semibold text-mainTextColor max-md:text-3xl">
                            <h1>Sign <span className="text-mainColor">i</span>n</h1>
                        </div>
                        <div className="text-mainTextColor text-xs 2xl:text-2xl">
                            <a href="#">
                                <p>No Account ?
                                    <br />
                                    <span className="text-mainColor">Sign up</span>
                                </p>
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-4 bg-blue-500 bg-opacity-10 py-3 md:py-4 rounded-full">
                        <span><img className="h-auto w-auto 2xl:h-12 2xl:w-12" src="/images/SignIn/google.png" /></span>
                        <a href="#"><span className="text-sm 2xl:text-2xl text-blue-400">Sign in with Google</span></a>
                    </div>
                    <div>
                        <p
                            className="mb-4 text-lg 2xl:text-2xl text-mainTextColor font-normal max-sm:text-sm  max-sm:tracking-tight max-sm:font-medium">
                            Enter your username
                            or email address
                        </p>
                        <input type="text" placeholder="Username or email address"
                            className="w-full p-3 2xl:p-4 h-14 rounded-full text-xs 2xl:text-xl border outline-lightOrangeColor transition-all duration-300 max-md:h-11 2xl:h-20" />
                    </div>
                    <div className="mb-4">
                        <p className="mb-4 text-lg 2xl:text-2xl text-mainTextColor font-normal max-sm:text-sm max-sm:font-medium">
                            Enter your Password
                        </p>
                        <input type="text" placeholder="Password"
                            className="w-full p-3 2xl:p-4 h-14 max-md:h-11 2xl:h-20 text-xs 2xl:text-xl rounded-full border outline-mainColor transition-all duration-300" />
                        <p className="text-right text-xs 2xl:text-xl text-mainTextColor font-light mt-3"><a href="#">Forgot
                                Password</a>
                        </p>
                    </div>
                    <Button padding='py-4 2xl:py-6' className='w-full bg-mainColor text-white text-xl 2xl:text-3xl font-medium flex justify-center mb-12' text='Sign in' icon="" />
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
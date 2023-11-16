import React from 'react'

const SignInWithGoogle = () => {
  return (
    <div className="flex justify-center items-center gap-4 cursor-pointer transition-all duration-300 hover:bg-opacity-95 hover:bg-blue-100 bg-blue-500 bg-opacity-10 py-3 md:py-4 rounded-full">
        <span><img alt='_google' className="h-auto w-auto 2xl:h-12 2xl:w-12" src="/images/SignIn/google.png" /></span>
        <span className="text-sm 2xl:text-2xl text-blue-400">Sign in with Google</span>
    </div>
  )
}

export default SignInWithGoogle
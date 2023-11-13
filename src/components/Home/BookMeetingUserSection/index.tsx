import React from 'react'
import UsersImg from '../UserImg'

const BookMeetingUserSection = () => {
  return (
  <div className="w-full flex justify-between flex-wrap px-0 md:px-10">
    <div className="flex justify-between w-full">
        <UsersImg className='w-1/5 md:w-2/12' img='/images/Home/sliderUser1.svg' />
        <UsersImg className='w-1/5t md:w-2/12 translate-y-8' img='/images/Home/sliderUser3.svg' />
    </div>
    <div className="flex justify-center w-full">
        <UsersImg className='w-1/3 md:w-1/5' img='/images/Home/sliderUser4.svg' />
    </div>
    <div className="flex justify-between w-full pt-5">
        <UsersImg className='w-1/5 md:w-2/12' img='/images/Home/sliderUser1.svg' />
        <UsersImg className='' img='/images/Home/sliderUser2.svg' />
    </div>
   </div>
    )
}

export default BookMeetingUserSection
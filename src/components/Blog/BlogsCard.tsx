import React from 'react'

interface propsTypes {
  img: string,
  text: string,
}

const BlogsCard = ({img, text} : propsTypes) => {
  return (
    <div className="w-full flex items-end relative h-full rounded-3xl pt-72">
      <div className="h-full w-full absolute top-0 left-0 overflow-hidden rounded-3xl">
      <img className="h-full w-full rounded-3xl hover:scale-[1.2] transition-all duration-500 cursor-pointer object-cover" src={img} />
      </div>
      <div className="rounded-l-none rounded-3xl bg-white flex items-center justify-center w-7/12 shadow-lg z-10 h-full py-4 translate-y-11">
        <h1 className="font-bold text-xl xl:text-2xl 2xl:text-3xl px-7 2xl:px-2 text-black flex justify-center hover:text-mainColor cursor-pointer leading-7 2xl:leading-snug">{text}</h1>
      </div>
    </div>
  )
}

export default BlogsCard
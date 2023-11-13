import React from 'react'

interface propsTyes {
  img: string,
}

const NextGenFoundersCard = ({img} : propsTyes) => {
  return (
    <img className="min-w-[76px] w-0 md:min-w-0 md:w-1/6 xl:w-auto 2xl:w-52" src={img} />
  )
}

export default NextGenFoundersCard
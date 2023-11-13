import React from 'react'

interface propsType {
    account: string,
    type: string,
}

const CheckAcount = ({account,type} : propsType) => {
  return (
  <div className="text-mainTextColor text-xs 2xl:text-2xl cursor-pointer">
    <p>{account}
        <br />
        <span className="text-mainColor">{type}</span>
    </p>
  </div>
    )
}

export default CheckAcount
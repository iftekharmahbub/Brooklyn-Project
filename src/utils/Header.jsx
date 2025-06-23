import React from 'react'
import CmnText from './CmnText'

const Header = ({children , className ,}) => {
  return (
    <>
        <h2 className= {`font-semibold text-[48px] leading-[117%] text-gray-900 text-center ${className}`} >
              {children}
              <CmnText />
      </h2>
    </>
  )
}

export default Header
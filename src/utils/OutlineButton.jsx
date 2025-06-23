import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const OutlineButton = ({children , className}) => {
  return (
      
          <a
              href="#"
              className={`font-semibold text-base leading-[150%] text-primary-500
        border outline-primary-500 inline-block px-6 py-3 rounded-md ${className}
         hover:bg-primary-500 hover:text-white transition-colors duration-300`}
          >
          {children}
          <FaArrowRight className='inline-block ml-2'/>
          </a>
  )
}

export default OutlineButton

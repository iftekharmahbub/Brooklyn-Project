import React from 'react'

const ClientLink = ({ Imglink , className}) => {
  return (
    <div className='flex justify-center items-center text-gray-300 hover:text-black'  >
      <a href="#">
        <img src={Imglink} alt="" className={`w-full block cursor-pointer grayscale 
            hover:grayscale-0 transition-all duration-350 transform hover:transform hover:scale-110 ${className}`} />
      </a>
    </div>
  )
}

export default ClientLink

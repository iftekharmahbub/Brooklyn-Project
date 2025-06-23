import React from 'react'


const ContactDetail = ({logo, heading, title}) => {
  return (
      <a href={''}>
          <div className='flex flex-row max-w-[336px] gap-3.5 cursor-pointer p-6 transition-all duration-300 ease-in-out rounded-lg bg-white hover:shadow-lg'>
              <a href={''} className='logo w-[18%] text-2xl bg-primary-400 text-white flex justify-center items-center transition-all duration-300'> {logo} </a>
              <div className="detail ">
                  <a href={''} >
                      <span className='font-normal text-[14px] leading-[143%] text-gray-700'>{heading}</span>
                      <p className='font-medium text-[17px] leading-[150%] text-gray-900'>{title}</p>
                  </a>
              </div>
          </div>
    </a>
  )
}

export default ContactDetail

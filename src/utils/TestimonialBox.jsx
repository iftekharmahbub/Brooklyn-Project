import React from 'react'

const TestimonialBox = ({content, name, company}) => {
  return (
    <div>
          <p className='font-medium text-[18px] leading-[133%] text-gray-800 text-center lg:px-61' >{content}</p>
          <h3 className='font-semibold text-[18px] leading-[144%] text-black pt-[24px] pb-2' >{name}</h3>
          <span className='font-light text-[16px] leading-[150%] text-black' >{company}</span>
    </div>
  )
}

export default TestimonialBox

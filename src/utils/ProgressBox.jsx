import React from 'react'
import Detail from './Detail'

const ProgressBox = ({title, image}) => {
  return (
    <div className='p-8 bg-white rounded-xl hover:shadow-lg transition-all duration-300 ease-in-out cursor-pointer hover:scale-105 '>
          <img src= {image} alt="" />
      <h3 className='font-semibold text-xl leading-[120%]
           text-gray-900 mt-[32px] mb-[12px]'>{title}</h3>
          <Detail className='font-normal text-normal leading-[150%] text-gray-600'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.
          </Detail>
    </div>
  )
}

export default ProgressBox

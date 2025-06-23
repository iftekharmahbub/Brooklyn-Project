import React from 'react'
import { FiExternalLink } from "react-icons/fi";

const TodoList = ({title}) => {
  return (
    <div className='relative group rounded-md bg-white p-[32px] hover:shadow-lg transition-all 
      duration-300 ease-in-out transform hover:-translate-y-2 cursor-pointer ' >
          <h2 className='font-semibold text-[24px] leading-[100%] text-gray-900'>{title} <FiExternalLink className='inline-block ms-1 text-gray-600'/></h2> 
          <p className='font-normal text-[16px] leading-[150%] text-gray-700 mt-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.</p>
    </div>
  )
}

export default TodoList

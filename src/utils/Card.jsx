import React from 'react'
import OutlineButton from '../utils/OutlineButton'
import { FaArrowRight } from "react-icons/fa6";

const Card = ({cardImg}) => {
  return (
      <div className='border border-gray-100 rounded-lg shadow-card 
      hover:shadow-lg transition-all duration-300 ease-in-out cursor-pointer hover:scale-103 '>
          
          <div className="cardImg">
              <img className='w-full block' src={cardImg} alt="" />
          </div>

          <div className="cardContent p-8">
              <span className='font-medium text-[12px] text-gray-400 leading-[133%] '>
                  UI-UX DESIGN
              </span>
              <h3 className="cardTitle font-semibold text-[18px] text-gray-900 leading-[133%] mt-1">
                  Product Admin Dashboard
              </h3>
              <p className="cardDescription font-normal text-[14px] text-gray-600 leading-[143%] mt-3 mb-[20px]">
                  Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.
              </p>

              <OutlineButton>Case Study</OutlineButton>
          </div>
    </div>
  )
}

export default Card

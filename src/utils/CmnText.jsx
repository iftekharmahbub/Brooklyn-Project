import React from 'react'

const CmnText = ({className}) => {
  return (
    <div className="">
          <p className={`font-normal text-[18px] leading-[133%] text-gray-400 mt-[24px] inline-block ${className}`}>
              There are many variations of passages of Lorem Ipsum available, <br />
                but the majority have suffered alteration.</p>
    </div>
  )
}

export default CmnText

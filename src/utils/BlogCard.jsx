import React from 'react'

const BlogCard = ({blog: {image, date, comments, title}}) => {
  return (
    <div className='box rounded-lg shadow-blogcard overflow-hidden'>

      <div className="box-image ">
        <img src={image} className='w-full block' alt="" />
      </div>

      <div className="box-contant bg-white text-start p-6">
        <span className='font-normal text-[14px] leading-[143%] text-gray-400'>{date} / {comments}</span>
        <h5 className='font-medium text-[18px] leading-[133%] text-[#333] mt-2'>
          {title}</h5>
      </div>
    </div>
  )
}

export default BlogCard

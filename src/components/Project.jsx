import React from 'react'
import Button from '../utils/Button'
import { FaArrowRight } from "react-icons/fa6";
import CmnText from '../utils/CmnText';

const Project = () => {
  return (
    <section id="project" className='bg-gray-900'>
          <div className="container">
              <div className="content text-center py-[100px]">
                  <h3 className=' font-semibold text-[48px] leading-[117%] text-white'>Do you have Project Idea?
            <br /> Let's discuss your project!</h3>
              <CmnText className='py-[32px] !mt-0'/>
                  
                  <Button>Let’s work Together <FaArrowRight className='inline-block ml-2'/></Button>
              </div>
      </div>
    </section>
  )
}

export default Project

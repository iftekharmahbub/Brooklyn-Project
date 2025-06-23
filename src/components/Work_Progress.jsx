import React from 'react'
import Heading from '../utils/Heading'
import Detail from '../utils/Detail'
import ProgressBox from '../utils/ProgressBox'

const Work_Progress = () => {
  return (
    <div>
          <section id='work-progress' className='
           bg-[#f0f1f3] lg:pb-[140px] lg:pt-[248px] pt-[80px] -translate-y-[60px] lg:-translate-y-[100px]'>
              <div className="container">
                  <div className='grid grid-cols-1 lg:grid-cols-2 gap-[100px] py-8'>
                      
                      <div className="progress-content flex flex-col justify-center">
                          <Heading className='!text-[48px] !leading-[117%]'>
                              Work Process
                          </Heading>
                          <Detail className='mt-[24px] mb-[16px]'>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet,
                          </Detail>
                          <Detail>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non.
                          </Detail>

                      </div>

                      <div className="progress-box grid md:grid-cols-2 grid-cols-1 gap-6 ">
                          <div className="First-column grid gap-6">
                              <ProgressBox title={'1. Research'} image={'/public/images/progressIcon.png'} />
                              <ProgressBox title={'2. Analyze'} image={'/public/images/progressIcon-2.png'} />
                              
                          </div>
                          <div className="Second-column grid gap-6 md:mt-10">
                                <ProgressBox title={'3. Design'} image={'/public/images/progressIcon-3.png'} />
                                <ProgressBox title={'4. Launch'} image={'/public/images/progressIcon-4.png'} />
                             
                              
                          </div>
                      </div>
                  </div>
              </div>
      </section>
    </div>
  )
}

export default Work_Progress

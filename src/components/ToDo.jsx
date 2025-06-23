import React from 'react'
import Button from '../utils/Button'
import TodoList from '../utils/TodoList'

const ToDo = () => {
  return (
    <section id='todo' className='bg-gray-50'>
          <div className="container">
              <div className="Todo lg:grid lg:grid-cols-2 pt-[100px] pb-[150px] gap-[143px]">
                  
                  <div className="Todo-cnt flex flex-col justify-center items-start pb-15 lg:pb-0">
                      <h3 className='font-semibold text-[48px] leading-[117%] text-[#333]'>What I do?</h3>
                      <p className='font-normal text-[18px] leading-[133%] text-gray-400 pt-6 pb-4' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet,z</p>
                      <p className='font-normal text-[18px] leading-[133%] text-gray-400 mb-[50px]'>Lorem ipsum dolor
                          sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non.</p>
                      
                      <Button>Say Hello!</Button>
                  </div>

                  <div className="Todo-list flex flex-col gap-6 relative">
                      <TodoList title={'User Experience (UX)'} />
                      <TodoList title={'User Interface (UI)'} />
                      <TodoList title={'Web Development'} />
                  </div>
              </div>
      </div>
    </section>
  )
}

export default ToDo

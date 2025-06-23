import React from 'react'
import Heading from '../utils/Heading'
import Card from '../utils/Card'
import Button from '../utils/Button'
import CmnText from '../utils/CmnText'

const Portfolio = () => {
  return (
    <div>
      <section id="porfolio">
        <div className="container ">
          <div className="flex flex-col items-center justify-center mb-[100px]" >

            <div className="portfolioDetail text-center pb-[70px]">
              <Heading>Portfolio</Heading>
              <CmnText/>
            </div>

            <div className="portfolioCards  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card cardImg={'/images/card-1.png'} />
              <Card cardImg={'/images/card-2.png'} />
              <Card cardImg={'/images/card-3.png'} />
              <Card cardImg={'/images/card-4.png'} />
              <Card cardImg={'/images/card-5.png'} />
              <Card cardImg={'/images/card-6.png'} />
            </div>

            <Button className='mt-[50px]'>  More Project</Button>



          </div>

        </div>
      </section>
    </div>
  )
}

export default Portfolio

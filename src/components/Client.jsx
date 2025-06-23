import React from 'react'
import CmnText from '../utils/CmnText'
import ClientLink from '../utils/ClientLink'

const Client = () => {
  return (
    <section id="client">
          <div className="container">
              <div className="client py-[100px]">
                  <div className="content text-center mb-[50px] lg:mb-0">
                      <h3 className='font-semibold text-[48px] leading-[117%] text-gray-900' >Happy Clients</h3>
                      <CmnText/>
                  </div>
          <div className="links grid grid-cols-2 lg:grid-cols-6 gap-8  mb-[50px] lg:mb-0">
            
                      <ClientLink Imglink="/images/google-2.png"/>
                      <ClientLink Imglink="/images/dribbble-2.png"/>
                      <ClientLink Imglink="/images/linkedin-1.png"/>
                      <ClientLink Imglink="/images/amazon-1.png"/>
                      <ClientLink Imglink="/images/medium-2.png"/>
                      <ClientLink Imglink="/images/spotify-1.png"/>
                  </div>
              </div>
        </div>
    </section>
  )
}

export default Client

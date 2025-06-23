import React from 'react'
import Heading from '../utils/Heading'
import Header from '../utils/Header'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import TestimonialBox from '../utils/TestimonialBox';
const Testimonial = () => {
  return (
    <section id='testimonial' className='bg-gray-50/50'>
          <div className="container">
              <Header className='mb-[70px] pt-[100px]' >Testimonial</Header>

              <div className=" text-center ">
                

          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={{
              clickable: true,
              enabled: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              450: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 1,
              },
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <TestimonialBox
                content={`“Nulla efficitur nisl sit amet velit malesuada dapibus. Duis mollis felis turpis, nec semper odio convallis at. Curabitur imperdiet semper arcu, a finibus arcu suscipit in. Donec quis placerat nibh. Maecenas est purus, eleifend ac cursus sed, tincidunt ut sapien.
                    Morbi ornare elit at libero suscipit porta.”`}
                name={'Esther Howard'}
                company={'Managing Director, ABC company'}/>
            </SwiperSlide>

            <SwiperSlide>
              <TestimonialBox
                content={`“Nulla efficitur nisl sit amet velit malesuada dapibus. Duis mollis felis turpis, nec semper odio convallis at. Curabitur imperdiet semper arcu, a finibus arcu suscipit in. Donec quis placerat nibh. Maecenas est purus, eleifend ac cursus sed, tincidunt ut sapien.
                    Morbi ornare elit at libero suscipit porta.”`}
                name={'Esther Howard'}
                company={'Managing Director, ABC company'}/>
            </SwiperSlide>

            <SwiperSlide>
              <TestimonialBox
                content={`“Nulla efficitur nisl sit amet velit malesuada dapibus. Duis mollis felis turpis, nec semper odio convallis at. Curabitur imperdiet semper arcu, a finibus arcu suscipit in. Donec quis placerat nibh. Maecenas est purus, eleifend ac cursus sed, tincidunt ut sapien.
                    Morbi ornare elit at libero suscipit porta.”`}
                name={'Esther Howard'}
                company={'Managing Director, ABC company'}/>
            </SwiperSlide>

            <SwiperSlide>

              <TestimonialBox
                content={`“Nulla efficitur nisl sit amet velit malesuada dapibus. Duis mollis felis turpis, nec semper odio convallis at. Curabitur imperdiet semper arcu, a finibus arcu suscipit in. Donec quis placerat nibh. Maecenas est purus, eleifend ac cursus sed, tincidunt ut sapien.
                    Morbi ornare elit at libero suscipit porta.”`}
                name={'Esther Howard'}
                company={'Managing Director, ABC company'}/>
            </SwiperSlide>
            
                
        
        </Swiper>
        
        
        
        
        </div>
            </div>
    </section>
  )
}

export default Testimonial

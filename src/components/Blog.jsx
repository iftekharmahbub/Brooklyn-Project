import React from 'react';
import BlogCard from '../utils/BlogCard';
import CmnText from '../utils/CmnText';
import { Swiper, SwiperSlide } from "swiper/react";
// Required Modules
import { Autoplay, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      image: '/images/blog-1.png',
      date: '22 Oct, 2020',
      comments: '246 Comments',
      title: 'Lorem ipsum dolor sit consea. Nulla purus arcu'
    },
    {
      id: 2,
      image: '/images/blog-2.png',
      date: '22 Oct, 2020',
      comments: '246 Comments',
      title: 'Lorem ipsum dolor sit consea. Nulla purus arcu'
    },
    {
      id: 3,
      image: '/images/blog-3.png',
      date: '22 Oct, 2020',
      comments: '246 Comments',
      title: 'Lorem ipsum dolor sit consea. Nulla purus arcu'
    },
    {
      id: 4,
      image: '/images/blog-4.png',
      date: '22 Oct, 2020',
      comments: '246 Comments',
      title: 'Lorem ipsum dolor sit consea. Nulla purus arcu'
    },
    {
      id: 5,
      image: '/images/blog-1.png',
      date: '22 Oct, 2020',
      comments: '246 Comments',
      title: 'Lorem ipsum dolor sit consea. Nulla purus arcu'
    },
    {
      id: 6,
      image: '/images/blog-2.png',
      date: '22 Oct, 2020',
      comments: '246 Comments',
      title: 'Lorem ipsum dolor sit consea. Nulla purus arcu'
    },
  ];

  return (
    <section id='blog'>
      <div className="container">
        <div className="blogs text-center pt-[100px] pb-[70px]">
          <div className="blog-content blogContent pb-7 lg:pb-[70px] text-center w-full lg:max-w-[45%] mx-auto">
            <h3 className="font-semibold text-[48px] leading-[117%] text-gray-900 mb-4">
              Blog</h3>
            <CmnText />
          </div>
          <div className="blog-cards" style={{ minHeight: '300px' }}>
            <Swiper
              modules={[ Autoplay, Pagination ]}
              spaceBetween={24}
              slidesPerView={4}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 12,
                },
                450: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 24,
                },
              }}
            >
              {blogs.map((box) => (
                <SwiperSlide key={box.id}>
                  <BlogCard blog={box} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog;

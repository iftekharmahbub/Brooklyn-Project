import React from 'react'
import Button from '../utils/Button';
import ExperienceCard from '../utils/ExperienceCard';

const Banner = () => {
  return (
    <>
      <section id="banner " className=" mt-8">
        <div className=" bg-[#FEFFFE] container py-[80px] grid grid-cols-1 lg:grid-cols-2 items-center justify-between lg:gap-32">

          <div className="bannerCnt order-last lg:order-first flex-col justify-center items-start gap-6 ps-3.5">
            <h4 className="font-medium text-7xl leading-[117%] pt-[22px] text-gray-900">
              Hello, I’m Brooklyn Gilbert
            </h4>
            <p className="font-normal py-3.5 text-lg leading-[133%] text-gray-600">
              I'm a Freelance{' '}
              <span className="font-semibold">UI/UX Designer</span> and{' '}
              <span className="font-semibold">Developer</span> based in London,
              England. I strives to build immersive and beautiful web
              applications through carefully crafted code and user-centric
              design.
            </p>
            <Button >Say Hello</Button>

            <div className="cards gap-4 grid grid-cols-1 mx-auto lg:mx-0 w-full lg:grid-cols-3 mt-10 ">
              <ExperienceCard cardIndex="15" cardText="Y." cardTitle="Experience" />
              <ExperienceCard cardIndex="250" cardText="+" cardTitle="Projects Completed" />
              <ExperienceCard cardIndex="65" cardText="" cardTitle="Happy Clients" />

            </div>
          </div>

          <div className="bannerImg order-first lg:order-last ">

            <div className="Img">
              <img src="/images/banner.png" alt=""
                className='max-w-3/4 lg:max-w-full mx-auto lg:mx-auto h-full' />
            </div>

          </div>



        </div>
      </section>
    </>
  );
}

export default Banner

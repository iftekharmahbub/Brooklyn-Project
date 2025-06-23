import React from 'react'
import CountUp from 'react-countup';

const ExperienceCard = ({ cardIndex, cardText, cardTitle }) => {
  return (
    <div className=" py-4 px-2 flex flex-col items-center  bg-[#EDD8FF]/50">
      <CountUp
        end={cardIndex}
        duration={7.5}
        suffix={cardText}
        className="  font-semibold pb-2 text-[32px] leading-[125%] text-center text-gray-700"
      />
      <p className="font-normal text-base leading-[150%] text-center text-gray-500">
        {cardTitle}
      </p>
    </div>
  );
};

export default ExperienceCard

import Image from "next/image";
import React from "react";

const TimelineItem = ({ logoSrc, title, description }) => (
  <div className='flex items-center justify-start gap-[1.5rem] mb-[1.5rem]'>
    <div className='bg-white w-[3.25rem] h-[3.25rem] flex items-center justify-center rounded-full'>
      <Image src={logoSrc} width={16} height={24} alt={title} />
    </div>
    <div>
      <h2 className='text-[1.125rem] font-semibold text-[#161D29]'>{title}</h2>
      <p className='text-[#2C333F]'>{description}</p>
    </div>
  </div>
);

const Timeline = () => {
  return (
    <div>
      <TimelineItem
        logoSrc='/assets/TimeLineLogo/Logo1.svg'
        title='Leadership'
        description='Fully committed to the success of the company'
      />
      <div className='border-l-2 border-dotted border-[#AFB2BF] h-[2.5rem] ml-[1.75rem] mb-3'></div>

      <TimelineItem
        logoSrc='/assets/TimeLineLogo/Logo2.svg'
        title='Responsibility'
        description='Students will always be our top priority'
      />
      <div className='border-l-2 border-dotted border-[#AFB2BF] h-[2.5rem] ml-[1.75rem] mb-3'></div>

      <TimelineItem
        logoSrc='/assets/TimeLineLogo/Logo3.svg'
        title='Flexibility'
        description='The ability to switch is an important skill'
      />
      <div className='border-l-2 border-dotted border-[#AFB2BF] h-[2.5rem] ml-[1.75rem] mb-3'></div>

      <TimelineItem
        logoSrc='/assets/TimeLineLogo/Logo4.svg'
        title='Solve the Problem'
        description='Students will always be our top priority'
      />
    </div>
  );
};

export default Timeline;

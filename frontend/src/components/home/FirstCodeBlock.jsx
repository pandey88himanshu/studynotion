"use client";
import React from "react";
import HighlitedText from "./HighlitedText";
import { TiArrowRightThick } from "react-icons/ti";
import { TypeAnimation } from "react-type-animation";

const FirstCodeBlock = () => {
  return (
    <div className='bg-[#000814] w-full py-[5.625rem]'>
      <div className='custom-container text-[#AFB2BF] flex items-center justify-between'>
        <div className='w-[30.375rem] h-[15.5rem] flex items-start gap-[3rem] flex-col'>
          <div className='flex flex-col gap-[0.75rem]'>
            <h2 className='text-4xl text-[#F1F2FF] font-semibold'>
              Unlock your <HighlitedText text={"coding potential"} /> with our
              online courses.
            </h2>
            <p>
              Our courses are designed and taught by industry experts who have
              years of experience in coding and are passionate about sharing
              their knowledge with you.
            </p>
          </div>
          <div className='h-[3rem] flex items-center justify-start gap-[1.5rem]'>
            <button className='bg-[#FFD60A] text-[#000814] px-[1.5rem] h-full rounded-lg font-medium flex items-center justify-center gap-[0.5rem]'>
              Try it Yourself <TiArrowRightThick />
            </button>
            <button className='bg-[#161D29] shadow-[inset_-1px_-1px_0px_rgba(255,255,255,0.18)] h-full px-[1.5rem] font-medium text-[#F1F2FF] rounded-lg ml-[1.5rem]'>
              Learn More
            </button>
          </div>
        </div>

        <div className='relative w-[29.375rem] h-[17.375rem]'>
          {/* Blurred background glow */}
          <div
            className='
              absolute
              top-[calc(50%-10.9997rem)]
              left-[calc(50%-16.438rem)]
              w-[23.309rem]
              h-[16.066rem]
              opacity-[0.2]
              z-0
              [background:linear-gradient(123.77deg,_#8a2be2_-6.46%,_orange_59.04%,_#f8f8ff_124.53%)]
              [filter:blur(2.125rem)]
              [transform:matrix(1,_0,_-0.03,_1,_0,_0)]
              flex-none
              grow-0
              order-0
            '></div>

          {/* Foreground bordered content */}
          <div
            className='
              relative 
              w-full 
              h-full 
              inset-0 
              bg-[linear-gradient(111.93deg,_rgba(14,26,45,0.24)_-1.4%,_rgba(17,30,50,0.38)_104.96%)] 
              border-[2px] 
              border-solid 
              [border-image-slice:1] 
              [border-image-source:linear-gradient(to_right_bottom,_#ffffff38,_#ffffff00)] 
              p-[1rem] 
              rounded-lg 
              text-[#E7BC5B] 
              z-10
            '>
            <TypeAnimation
              sequence={[
                `1.   while (alive) {
  2.   eat();
  3.   sleep();
  4.   code();
  5.   commit();
  6.   push();
  7.   pray();
}`,
                2000,
                "",
              ]}
              repeat={Infinity}
              cursor={true}
              className='whitespace-pre-line block overflow-x-hidden text-[1rem] font-mono'
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstCodeBlock;

"use client";
import React from "react";
import HighlitedText from "./HighlitedText";
import { TiArrowRightThick } from "react-icons/ti";
import { TypeAnimation } from "react-type-animation";

const SecondCodeBlock = () => {
  return (
    <div className='bg-[#000814] w-full py-[5.625rem]'>
      <div className='custom-container text-[#AFB2BF] flex items-center justify-between flex-row-reverse'>
        <div className='w-[30.375rem] h-[15.5rem] flex flex-col items-start gap-[3rem]'>
          <div className='flex flex-col gap-[0.75rem]'>
            <h2 className='text-4xl text-[#F1F2FF] font-semibold'>
              Start <HighlitedText text={"coding in seconds"} />
            </h2>
            <p>
              Go ahead, give it a try. Our hands-on learning environment means
              you'll be writing real code from your very first lesson.
            </p>
          </div>
          <div className='h-[3rem] flex items-center justify-start gap-[1.5rem]'>
            <button className='bg-[#FFD60A] text-[#000814] px-[1.5rem] h-full rounded-lg font-medium flex items-center justify-center gap-[0.5rem]'>
              Try it Yourself <TiArrowRightThick />
            </button>
            <button className='bg-[#161D29] shadow-[inset_-1px_-1px_0px_rgba(255,255,255,0.18)] h-full px-[1.5rem] font-medium text-[#F1F2FF] rounded-lg'>
              Learn More
            </button>
          </div>
        </div>

        <div className='relative w-[29.375rem] h-[17.375rem]'>
          {/* Blurred background glow */}
          <div
            className='absolute top-[calc(50%-11rem)] left-[calc(50%-16.4378rem)] w-[23.3094rem] h-[16.0656rem] opacity-[0.2] z-0
            [background:linear-gradient(118.19deg,_#1fa2ff_-3.62%,_#12d8fa_50.44%,_#a6ffcb_104.51%)]
            [filter:blur(2.125rem)]
            [transform:matrix(1,_0,_-0.03,_1,_0,_0)] flex-none grow-0 order-0'></div>

          {/* Foreground bordered code block */}
          <div
            className='relative w-full h-full inset-0 bg-[linear-gradient(111.93deg,_rgba(14,26,45,.24)_-1.4%,_rgba(17,30,50,.38)_104.96%)]
            border-[0.125rem] border-solid [border-image-slice:1]
            [border-image-source:linear-gradient(to_right_bottom,_#ffffff38,_#ffffff00)]
            p-4 rounded-lg text-[#f9693d] z-10'>
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

export default SecondCodeBlock;

import React from "react";
import { TiArrowRightThick } from "react-icons/ti";
import HighlitedText from "./HighlitedText";
const HeroText = () => {
  return (
    <div className='py-16 flex items-center justify-between flex-col gap-9 w-[913px] mx-auto'>
      <div>
        <button className='bg-[#161D29] shadow-[inset_0_-1px_0px_rgba(255,255,255,0.18)] w-[235px] h-11 text-[#999DAA] flex items-center gap-2.5 justify-center rounded-full font-medium'>
          Become an Instructor <TiArrowRightThick />
        </button>
      </div>
      <div className='flex items-center justify-center gap-4 flex-col w-full'>
        <h1 className='text-4xl font-semibold text-[#F1F2FF]'>
          Empower Your Future with <HighlitedText text={"Coding Skills"} />
        </h1>
        <p className='px-2 text-center text-[#838894] font-medium'>
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.{" "}
        </p>
      </div>
      <div className='h-[48px]'>
        <button className='bg-[#FFD60A] text-[#000814] w-[138px] h-full  rounded-lg font-medium'>
          Learn More
        </button>
        <button className='bg-[#161D29] shadow-[inset_-1px_-1px_0px_rgba(255,255,255,0.18)] h-full w-[138px] font-medium text-[#F1F2FF] rounded-lg ml-6'>
          Book a Demo
        </button>
      </div>
    </div>
  );
};

export default HeroText;

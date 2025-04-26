import React from "react";
import Review from "./Review";

const ReviewSection = () => {
  return (
    <div className='bg-[#000814] w-full py-[5.625rem] h-[28.75rem] relative overflow-hidden'>
      <div className='custom-container text-[#F1F2FF] flex flex-col items-center gap-[6rem]'>
        <h2 className='text-4xl font-semibold text-center'>
          Reviews from other learners
        </h2>

        {/* Review Slider */}
        <div className='w-[75rem] relative'>
          {/* Gradient Left Fade */}
          <div className='absolute left-0 top-0 h-full w-[6rem] bg-gradient-to-r from-[#000814] to-transparent z-10 pointer-events-none' />

          {/* Review cards */}
          <div className='flex gap-[1.5rem] overflow-x-auto no-scrollbar px-[1.5rem]'>
            <Review />
            <Review />
            <Review />
            <Review />
            <Review />
            <Review />
          </div>

          {/* Gradient Right Fade */}
          <div className='absolute right-0 top-0 h-full w-[6rem] bg-gradient-to-l from-[#000814] to-transparent z-10 pointer-events-none' />
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;

import React from "react";
import { FaStar } from "react-icons/fa";

const Review = () => {
  return (
    <div className='w-[17.625rem] h-[11.5rem] p-[0.75rem] bg-[#161D29] flex flex-col gap-[0.5rem]'>
      <div className='flex items-center gap-[0.75rem]'>
        <div className='w-[2.25rem] h-[2.25rem] bg-white rounded-full'></div>
        <div>
          <h2 className='text-sm font-semibold'>Lorem Ipsum</h2>
          <p className='text-[0.75rem] font-medium text-[#424854]'>
            lorem@ipsum.com
          </p>
        </div>
      </div>
      <div className='w-[16.125rem] text-[0.75rem] font-medium text-[#DBDDEA]'>
        <p>
          Everyone’s on the same page. Many of our people are not very organized
          naturally, so Learn codings is a godsend!
        </p>
      </div>
      <div className='flex items-center justify-between'>
        <p>3</p>
        <div className='flex items-center gap-[0.5rem]'>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      </div>
    </div>
  );
};

export default Review;

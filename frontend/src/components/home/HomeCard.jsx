import React from "react";
import { FaUserGroup } from "react-icons/fa6";
import { TbBinaryTree2Filled } from "react-icons/tb";

const HomeCard = () => {
  return (
    <div className='w-[21.375rem] h-[18.75rem] bg-[#161D29] px-[1.5rem]'>
      <div className='py-[2rem] pb-[1.25rem] h-[14rem] text-[#6E727F]'>
        <h3 className='text-xl font-semibold text-[#DBDDEA]'>Learn HTML</h3>
        <p className='pt-[0.75rem]'>
          This course covers the basic concepts of HTML including creating and
          structuring web pages, adding text, links, images, and more.
        </p>
      </div>
      <div className='flex items-center justify-between text-[#838894]'>
        <div className='flex items-center justify-center gap-[0.5rem]'>
          <FaUserGroup /> <p>Beginner</p>
        </div>
        <div className='flex items-center justify-center gap-[0.5rem]'>
          <TbBinaryTree2Filled /> <p>6 Lessons</p>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;

// HomeCard.jsx
import React from "react";
import { FaUserGroup } from "react-icons/fa6";
import { TbBinaryTree2Filled } from "react-icons/tb";

const HomeCard = ({ title, description, level, lessons }) => {
  return (
    <div className='w-[342px] h-[300px] bg-white shadow-[12px_12px_0_0_#ffd60a] px-6'>
      <div className='py-8 pb-5 h-[224px] text-[#585D69]'>
        <h3 className='text-xl font-semibold text-[#161D29]'>{title}</h3>
        <p className='pt-3'>{description}</p>
      </div>
      <div className='flex items-center justify-between text-[#0A5A72]'>
        <div className='flex items-center gap-2'>
          <FaUserGroup /> <p>{level}</p>
        </div>
        <div className='flex items-center gap-2'>
          <TbBinaryTree2Filled /> <p>{lessons} Lessons</p>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;

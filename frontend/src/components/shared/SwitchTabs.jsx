import React from "react";

const SwitchTabs = () => {
  return (
    <div className='shadow-[inset_0_-1px_0px_rgba(255,255,255,0.18)] bg-[#161D29] h-11 w-[230px] px-1 py-1 my-9 flex items-center justify-between rounded-full'>
      <button className='px-[18px] py-1.5 bg-[#000814] rounded-full font-medium text-white'>
        Student
      </button>
      <button className='px-[18px] py-1.5 rounded-full font-medium'>
        Instructor
      </button>
    </div>
  );
};

export default SwitchTabs;

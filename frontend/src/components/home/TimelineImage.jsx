import Image from "next/image";
import React from "react";

const TimelineImage = () => {
  return (
    <div className='relative w-fit h-fit shadow-blue-300 shadow-[0px_0px_1.875rem_0px]'>
      <Image
        className='shadow-white shadow-[1.25rem_1.25rem_0px_0px] object-cover h-[25rem] lg:h-fit'
        src={"/assets/Images/TimelineImage.png"}
        width={714}
        height={545}
        alt='timeline-image'
      />
      <div className='bg-[#014A32] w-[31.9375rem] h-[8rem] flex items-center justify-between p-[2.625rem] text-[#05A77B] absolute bottom-[-3.5rem] left-6'>
        <div className='flex items-center justify-center gap-[1.5rem]'>
          <p className='text-white font-bold text-[2.5rem]'>10</p>
          <p className='text-sm font-medium w-[5.9375rem]'>YEARS EXPERIENCE</p>
        </div>

        <span className='bg-[#037957] h-[2.75rem] w-[0.03125rem]'></span>
        <div className='flex items-center justify-center gap-[1.5rem]'>
          <p className='text-white font-bold text-[2.5rem]'>250</p>
          <p className='text-sm font-medium w-[5.9375rem]'>TYPES OF COURSES</p>
        </div>
      </div>
    </div>
  );
};

export default TimelineImage;

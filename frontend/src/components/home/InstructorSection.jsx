import Image from "next/image";
import React from "react";
import HighlitedText from "./HighlitedText";
import { TiArrowRightThick } from "react-icons/ti";

const InstructorSection = () => {
  return (
    <div className='bg-[#000814] w-full py-[5.625rem] h-[45.3125rem]'>
      <div className='custom-container text-[#838894] flex items-center justify-between py-[5.625rem] gap-[6rem]'>
        <div className='shadow-white shadow-[-1.25rem_-1.25rem_0_0]'>
          <Image
            src={"/assets/Images/Instructor.png"}
            width={616}
            height={545}
            alt='instructor_image'
          />
        </div>
        <div className='flex justify-between flex-col gap-3 items-start'>
          <h2 className='text-4xl font-semibold text-[#F1F2FF]'>
            Become an <HighlitedText text={"instructor"} />
          </h2>
          <p className='font-medium'>
            Instructors from around the world teach millions of students on
            StudyNotion. We provide the tools and skills to teach what you love.
          </p>
          <button className='bg-[#FFD60A] text-[#000814] px-6 h-full py-3 rounded-lg font-medium flex items-center justify-center gap-2'>
            Start Teaching Today <TiArrowRightThick />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstructorSection;

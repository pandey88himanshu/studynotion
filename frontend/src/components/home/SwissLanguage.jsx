import React from "react";
import HighlitedText from "./HighlitedText";
import Image from "next/image";

const SwissLanguage = () => {
  return (
    <div className='bg-[#F9F9F9] w-full py-[5.625rem] h-[58.75rem]'>
      <div className='custom-container text-[#AFB2BF] flex items-center justify-between py-[5.625rem] flex-col gap-[3.25rem]'>
        <div>
          <h2 className='text-4xl font-semibold text-[#000814] text-center'>
            Your swiss knife for{" "}
            <HighlitedText text={"learning any language"} />
          </h2>
          <p className='w-[47.5rem] font-medium text-center'>
            Using spin making learning multiple languages easy. With 20+
            languages, realistic voice-over, progress tracking, custom schedule,
            and more.
          </p>
        </div>

        {/* Image Group */}
        <div className='flex flex-col lg:flex-row items-center justify-center mt-5 gap-[3.5rem]'>
          <Image
            src='/assets/Images/Know_your_progress.svg'
            alt='Know Your Progress'
            width={341}
            height={340}
            className='object-contain lg:mt-0 lg:-mr-32'
          />
          <Image
            src='/assets/Images/Compare_with_others.svg'
            alt='Compare with Others'
            width={341}
            height={408}
            className='object-contain lg:mt-0 -mt-10'
          />
          <Image
            src='/assets/Images/Plan_your_lessons.svg'
            alt='Plan Your Lessons'
            width={341}
            height={346}
            className='object-contain lg:mt-0 -mt-14 lg:-ml-36'
          />
        </div>
      </div>

      <div className='w-fit mx-auto lg:mb-20 mb-8 -mt-5'>
        <button className='bg-[#FFD60A] text-[#000814] px-[1.5rem] h-[3rem] rounded-lg font-medium flex items-center justify-center gap-2'>
          Learn More
        </button>
      </div>
    </div>
  );
};

export default SwissLanguage;

import React from "react";
import HighlitedText from "./HighlitedText";

const TimelinTopText = () => {
  return (
    <div className='w-full text-[#AFB2BF] flex flex-col lg:flex-row items-start justify-between gap-6 pt-[5.625rem]'>
      <div className='lg:w-[60%]'>
        <h2 className='text-3xl lg:text-4xl font-semibold text-[#000814] leading-snug'>
          Get the skills you need for a{" "}
          <HighlitedText text={"job that is in demand."} />
        </h2>
      </div>
      <div className='lg:w-[35%] flex flex-col gap-4 font-medium text-[#2C333F]'>
        <p>
          The modern StudyNotion dictates its own terms. Today, to be a
          competitive specialist requires more than professional skills.
        </p>
        <button className='px-6 py-3 bg-[#FFD60A] text-[#000814] font-semibold rounded-lg w-fit'>
          Learn More
        </button>
      </div>
    </div>
  );
};

export default TimelinTopText;

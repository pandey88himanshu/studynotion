import React from "react";
import TimelinTopText from "./TimelinTopText";
import TimelineImage from "./TimelineImage";
import Timeline from "./Timeline";

const TimelineSection = () => {
  return (
    <div className='bg-[#F9F9F9] w-full py-[90px]'>
      <div className='custom-container text-[#AFB2BF] flex flex-col gap-[52px] items-center justify-center'>
        <TimelinTopText />

        <div className='w-full flex flex-col lg:flex-row items-center justify-between gap-10'>
          <Timeline />
          <TimelineImage />
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;

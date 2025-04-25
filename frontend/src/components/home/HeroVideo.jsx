"use client";
import React from "react";

const HeroVideo = () => {
  return (
    <div className='mx-[0.75rem] my-[1.75rem] shadow-[0.625rem_-0.3125rem_3.125rem_-0.3125rem] shadow-blue-200'>
      <video
        className='shadow-[1.25rem_1.25rem_rgba(255,255,255)]'
        muted
        loop
        autoPlay>
        <source src={"/assets/Images/banner.mp4"} type='video/mp4' />
      </video>
    </div>
  );
};

export default HeroVideo;

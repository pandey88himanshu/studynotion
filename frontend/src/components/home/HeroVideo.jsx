"use client";
import React from "react";

const HeroVideo = () => {
  return (
    <div className='mx-3 my-7 shadow-[10px_-5px_50px_-5px] shadow-blue-200'>
      <video
        className='shadow-[20px_20px_rgba(255,255,255)]'
        muted
        loop
        autoPlay>
        <source src={"/assets/Images/banner.mp4"} type='video/mp4' />
      </video>
    </div>
  );
};

export default HeroVideo;

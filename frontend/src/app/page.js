import FirstCodeBlock from "@/components/home/FirstCodeBlock";
import HeroText from "@/components/home/HeroText";
import HeroVideo from "@/components/home/HeroVideo";
import SecondCodeBlock from "@/components/home/SecondCodeBlock";
import React from "react";

const page = () => {
  return (
    <section className='bg-[#000814]  w-full  flex items-center justify-center'>
      <div className='custom-container'>
        <HeroText />
        <HeroVideo />
        <FirstCodeBlock />
        <SecondCodeBlock />
      </div>
    </section>
  );
};

export default page;

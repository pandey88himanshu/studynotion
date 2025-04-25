import FirstCodeBlock from "@/components/home/FirstCodeBlock";
import HeroText from "@/components/home/HeroText";
import HeroVideo from "@/components/home/HeroVideo";
import SecondCodeBlock from "@/components/home/SecondCodeBlock";
import ThreeCards from "@/components/home/ThreeCards";
import TimelineSection from "@/components/home/TimelineSection";
import React from "react";

const page = () => {
  return (
    <section className='bg-[#000814]  w-full  '>
      <div>
        <HeroText />
        <HeroVideo />
        <FirstCodeBlock />
        <SecondCodeBlock />
        <ThreeCards />
        <TimelineSection />
      </div>
    </section>
  );
};

export default page;

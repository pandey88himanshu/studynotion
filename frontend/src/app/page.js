import FirstCodeBlock from "@/components/home/FirstCodeBlock";
import HeroText from "@/components/home/HeroText";
import HeroVideo from "@/components/home/HeroVideo";
import InstructorSection from "@/components/home/InstructorSection";
import ReviewSection from "@/components/home/ReviewSection";
import SecondCodeBlock from "@/components/home/SecondCodeBlock";
import SwissLanguage from "@/components/home/SwissLanguage";
import ThreeCards from "@/components/home/ThreeCards";
import TimelineSection from "@/components/home/TimelineSection";
import React from "react";

const page = () => {
  return (
    <section className='bg-[#000814]  '>
      <div>
        <HeroText />
        <HeroVideo />
        <FirstCodeBlock />
        <SecondCodeBlock />
        <ThreeCards />
        <TimelineSection />
        <SwissLanguage />
        <InstructorSection />
        <ReviewSection />
      </div>
    </section>
  );
};

export default page;

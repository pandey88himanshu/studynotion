import React from "react";
import HighlitedText from "./HighlitedText";
import { TiArrowRightThick } from "react-icons/ti";
import HomeCard from "./HomeCard";

const ThreeCards = () => {
  const cardData = [
    {
      title: "Learn HTML",
      description:
        "This course covers the basic concepts of HTML including creating and structuring web pages, adding text, links, images, and more.",
      level: "Beginner",
      lessons: 6,
    },
    {
      title: "Learn CSS",
      description:
        "Master the art of styling your HTML pages with CSS. Learn layout techniques, responsiveness, and more.",
      level: "Beginner",
      lessons: 8,
    },
    {
      title: "Learn JavaScript",
      description:
        "Understand the fundamentals of JavaScript including variables, functions, DOM manipulation, and event handling.",
      level: "Intermediate",
      lessons: 10,
    },
  ];

  return (
    <div className='bg-[#000814] w-full py-[90px] h-[820px] relative'>
      <div className='custom-container text-[#AFB2BF] flex items-start pt-6 h-[500px]'>
        <div className='flex items-center justify-center gap-2 flex-col w-full'>
          <h2 className='text-4xl font-semibold text-[#F1F2FF]'>
            Unlock the <HighlitedText text={"Power of Code"} />
          </h2>
          <p>Learn to Build Anything You Can Imagine</p>
        </div>

        <div className='absolute top-[360px] flex items-center justify-between gap-9 w-full custom-container'>
          {cardData.map((card, index) => (
            <HomeCard
              key={index}
              title={card.title}
              description={card.description}
              level={card.level}
              lessons={card.lessons}
            />
          ))}
        </div>
      </div>

      <div className="bg-[url('/assets/Images/bghome.svg')] bg-cover bg-center h-[320px] w-full bg-white">
        <div className='flex h-full items-center justify-center w-full gap-6 py-4'>
          <button className='bg-[#FFD60A] text-[#000814] px-6 h-[48px] rounded-lg font-medium flex items-center justify-center gap-2'>
            Explore Full Catalog <TiArrowRightThick />
          </button>
          <button className='bg-[#161D29] shadow-[inset_-1px_-1px_0px_rgba(255,255,255,0.18)] h-[48px] px-6 font-medium text-[#F1F2FF] rounded-lg ml-6'>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThreeCards;

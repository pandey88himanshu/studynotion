"use client";
import React, { useState } from "react";

const SwitchTabs = () => {
  const [activeTab, setActiveTab] = useState("student");

  return (
    <div className='shadow-[inset_0_-1px_0px_rgba(255,255,255,0.18)] bg-[#161D29] h-11 w-[230px] px-1 py-1 my-9 flex items-center justify-between rounded-full'>
      <button
        className={`px-[18px] py-1.5 rounded-full font-medium transition-all duration-200 ${
          activeTab === "student" ? "bg-[#000814] text-white" : "text-[#6E727F]"
        }`}
        onClick={() => setActiveTab("student")}>
        Student
      </button>
      <button
        className={`px-[18px] py-1.5 rounded-full font-medium transition-all duration-200 ${
          activeTab === "instructor"
            ? "bg-[#000814] text-white"
            : "text-[#6E727F]"
        }`}
        onClick={() => setActiveTab("instructor")}>
        Instructor
      </button>
    </div>
  );
};

export default SwitchTabs;

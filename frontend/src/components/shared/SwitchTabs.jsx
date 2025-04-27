"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const SwitchTabs = () => {
  const [activeTab, setActiveTab] = useState("student");
  const router = useRouter();
  const pathname = usePathname();

  // Automatically sync activeTab with pathname on load
  useEffect(() => {
    if (pathname.includes("student")) {
      setActiveTab("student");
    } else {
      setActiveTab("instructor");
    }
  }, [pathname]);

  function handleInstructor() {
    if (pathname === "/student/login") {
      router.push("/instructor/login");
    } else {
      router.push("/instructor/register");
    }
  }

  function handleStudent() {
    if (pathname === "/instructor/login") {
      router.push("/student/login");
    } else {
      router.push("/student/register");
    }
  }

  return (
    <div className='shadow-[inset_0_-1px_0px_rgba(255,255,255,0.18)] bg-[#161D29] h-[2.75rem] w-[14.375rem] px-[0.25rem] py-[0.25rem] my-[2.25rem] flex items-center justify-between rounded-full'>
      <button
        className={`px-[1.125rem] py-[0.375rem] rounded-full font-medium transition-all duration-200 ${
          activeTab === "student" ? "bg-[#000814] text-white" : "text-[#6E727F]"
        }`}
        onClick={handleStudent}>
        Student
      </button>
      <button
        className={`px-[1.125rem] py-[0.375rem] rounded-full font-medium transition-all duration-200 ${
          activeTab === "instructor"
            ? "bg-[#000814] text-white"
            : "text-[#6E727F]"
        }`}
        onClick={handleInstructor}>
        Instructor
      </button>
    </div>
  );
};

export default SwitchTabs;

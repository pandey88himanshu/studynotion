import StudentLogin from "@/components/auth-student/login/StudentLogin";
import AnnouncementHeadline from "@/components/shared/AnnouncementHeadline";
import NavBar from "@/components/shared/NavBar";
import React from "react";

const page = () => {
  return (
    <div>
      <AnnouncementHeadline />
      <NavBar />
      <StudentLogin />
    </div>
  );
};

export default page;

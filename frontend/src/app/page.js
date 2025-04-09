import StudentRegister from "@/components/auth/StudentRegister";
import AnnouncementHeadline from "@/components/shared/AnnouncementHeadline";
import NavBar from "@/components/shared/NavBar";
import React from "react";

const page = () => {
  return (
    <div>
      <AnnouncementHeadline />
      <NavBar />
      <StudentRegister />
    </div>
  );
};

export default page;

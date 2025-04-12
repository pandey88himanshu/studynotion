import React from "react";
import ImageComponent from "../register/ImageComponent";
import LoginText from "./LoginText";
import SwitchTabs from "@/components/shared/SwitchTabs";
import LoginForm from "./LoginForm";

const StudentLogin = () => {
  return (
    <section className='bg-[#121212] text-white w-full min-h-[100vh] '>
      <div className='custom-container text-[#AFB2BF] flex items-start justify-between py-[66px]'>
        <div className='w-508px '>
          <LoginText />
          <SwitchTabs />
          <LoginForm />
        </div>
        <div>
          <ImageComponent name={"login.webp"} />
        </div>
      </div>
    </section>
  );
};

export default StudentLogin;

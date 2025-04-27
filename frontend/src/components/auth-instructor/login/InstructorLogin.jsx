import React from "react";
import ImageComponent from "../../shared/ImageComponent";
import LoginText from "./LoginText";
import SwitchTabs from "@/components/shared/SwitchTabs";
import LoginForm from "./LoginForm";

const InstructorLogin = () => {
  return (
    <section className='bg-[#121212] text-white w-full min-h-[100vh] '>
      <div className='custom-container text-[#AFB2BF] flex items-start justify-between py-[66px]'>
        <div className='lg:w-[508px] w-full '>
          <LoginText />
          <SwitchTabs />
          <LoginForm />
        </div>
        <div>
          <ImageComponent name={"instructor-login.webp"} />
        </div>
      </div>
    </section>
  );
};

export default InstructorLogin;

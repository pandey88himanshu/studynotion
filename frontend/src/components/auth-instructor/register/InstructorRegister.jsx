import React from "react";
import RegisterText from "./RegisterText";
import SwitchTabs from "../../shared/SwitchTabs";
import RegistrationForm from "./RegistrationForm";
import ImageComponent from "../../shared/ImageComponent";
const InstructorRegister = () => {
  return (
    <section className='bg-[#121212] text-white w-full min-h-[100vh] '>
      <div className='custom-container text-[#AFB2BF] flex items-start justify-between py-[66px]'>
        <div className='lg:w-[508px] w-full '>
          <RegisterText />
          <SwitchTabs />
          <RegistrationForm />
        </div>
        <div>
          <ImageComponent name={"instructor-register.webp"} />
        </div>
      </div>
    </section>
  );
};

export default InstructorRegister;

import React from "react";
import RegisterText from "./RegisterText";
import SwitchTabs from "../../shared/SwitchTabs";
import RegistrationForm from "./RegistrationForm";
import ImageComponent from "./ImageComponent";

const StudentRegister = () => {
  return (
    <section className='bg-[#121212] text-white w-full min-h-[100vh] '>
      <div className='custom-container text-[#AFB2BF] flex items-start justify-between py-[66px]'>
        <div className='w-508px '>
          <RegisterText />
          <SwitchTabs />
          <RegistrationForm />
        </div>
        <div>
          <ImageComponent name={"signup.webp"} />
        </div>
      </div>
    </section>
  );
};

export default StudentRegister;

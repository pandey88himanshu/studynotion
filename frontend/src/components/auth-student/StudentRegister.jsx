import React from "react";
import ImageComponent from "./ImageComponent";
import RegisterText from "./RegisterText";

const StudentRegister = () => {
  return (
    <section className='bg-[#121212] text-white w-full min-h-[86vh] '>
      <div className='custom-container text-[#AFB2BF] flex items-start justify-between pt-[66px]'>
        <div className='w-508px '>
          <RegisterText />
        </div>
        <div>
          <ImageComponent name={"signup.webp"} />
        </div>
      </div>
    </section>
  );
};

export default StudentRegister;

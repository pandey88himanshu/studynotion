"use client";

import React, { useRef } from "react";
import { TiArrowLeftThick } from "react-icons/ti";

const OtpVerification = () => {
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (value.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  return (
    <div className='bg-[#121212] shadow-[inset_0_-0.0625rem_0px_rgba(255,255,255,0.18)] w-full h-[calc(100vh-4rem)] flex items-center justify-center'>
      <div className='custom-container text-[#AFB2BF] flex flex-col items-center justify-center'>
        <div className='p-8 w-[31.75rem] rounded-lg shadow-lg'>
          {/* Heading */}
          <div className='text-center mb-8'>
            <h2 className='text-2xl font-semibold text-white mb-2'>
              Verify OTP
            </h2>
            <p className='text-sm text-[#AFB2BF]'>
              A verification code has been sent to you. Enter the code below
            </p>
          </div>

          {/* OTP Inputs */}
          <div className='flex justify-center gap-4 mb-6'>
            {[...Array(6)].map((_, index) => (
              <input
                key={index}
                type='text'
                maxLength='1'
                ref={(el) => (inputRefs.current[index] = el)}
                onChange={(e) => handleChange(e, index)}
                className='w-12 h-12 text-center text-xl bg-[#161D29] text-[#DBDDEA] rounded-lg shadow-[inset_0_-0.0625rem_0px_rgba(255,255,255,0.18)] focus:outline-none focus:ring-2 focus:ring-[#FFD60A]'
              />
            ))}
          </div>

          {/* Verify Button */}
          <button
            type='submit'
            className='py-3 w-full bg-[#FFD60A] text-[#000814] mt-2 font-semibold rounded-md hover:bg-[#e6c200] transition-all duration-200'>
            Verify OTP
          </button>

          {/* Footer Actions */}
          <div className='flex justify-between items-center mt-6'>
            <button className='flex items-center gap-2 text-sm hover:underline hover:text-[#FFD60A] transition-all'>
              <TiArrowLeftThick className='text-lg' />
              Back to Login
            </button>

            <button className='text-sm hover:underline hover:text-[#FFD60A] transition-all'>
              Resend OTP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;

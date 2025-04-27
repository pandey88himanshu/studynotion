"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { FaStarOfLife } from "react-icons/fa";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5'>
      {/* Email Field */}
      <div>
        <label
          htmlFor='email'
          className='flex items-start text-sm font-medium text-[#F1F2FF]'>
          Email
          <sup>
            <FaStarOfLife className='text-[#EF476F] text-[8px] ml-1.5 mt-1' />
          </sup>
        </label>
        <input
          id='email'
          {...register("email", { required: "Email is required" })}
          placeholder='Enter Email Address'
          className='shadow-[inset_0_-1px_0px_rgba(255,255,255,0.18)] bg-[#161D29] h-12 p-3 rounded-lg w-full text-[#DBDDEA]'
        />
        {errors.email && (
          <p className='text-sm text-[#EF476F] mt-1'>{errors.email.message}</p>
        )}
      </div>

      {/* Password Field */}
      <div>
        <label
          htmlFor='password'
          className='flex items-start text-sm font-medium text-[#F1F2FF]'>
          Password
          <sup>
            <FaStarOfLife className='text-[#EF476F] text-[8px] ml-1.5 mt-1' />
          </sup>
        </label>
        <input
          id='password'
          type='password'
          {...register("password", { required: "Password is required" })}
          placeholder='Enter Password'
          className='shadow-[inset_0_-1px_0px_rgba(255,255,255,0.18)] bg-[#161D29] h-12 p-3 rounded-lg w-full text-[#DBDDEA]'
        />
        {errors.password && (
          <p className='text-sm text-[#EF476F] mt-1'>
            {errors.password.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type='submit'
        className='py-3 w-full text-center bg-[#FFD60A] text-[#000814] mt-4 font-medium rounded-md'>
        Login
      </button>
    </form>
  );
};

export default LoginForm;

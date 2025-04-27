"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { FaStarOfLife } from "react-icons/fa";

const RegistrationForm = () => {
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
      {/* First Name and Last Name */}
      <div className='flex items-center justify-between gap-5'>
        <div className='w-full'>
          <label className='flex items-start'>
            First Name{" "}
            <sup>
              <FaStarOfLife className='text-[#EF476F] text-[8px] ml-1.5 mt-1' />
            </sup>
          </label>
          <input
            {...register("firstName", { required: true })}
            placeholder='Enter First Name'
            className='shadow-[inset_0_-1px_0px_rgba(255,255,255,0.18)] bg-[#161D29] h-12 p-3 rounded-lg w-full'
          />
          {errors.firstName && (
            <p className='text-red-500 text-sm'>First Name is required</p>
          )}
        </div>

        <div className='w-full'>
          <label className='flex items-start'>
            Last Name{" "}
            <sup>
              <FaStarOfLife className='text-[#EF476F] text-[8px] ml-1.5 mt-1' />
            </sup>
          </label>
          <input
            {...register("lastName", { required: true })}
            placeholder='Enter Last Name'
            className='shadow-[inset_0_-1px_0px_rgba(255,255,255,0.18)] bg-[#161D29] h-12 p-3 rounded-lg w-full'
          />
          {errors.lastName && (
            <p className='text-red-500 text-sm'>Last Name is required</p>
          )}
        </div>
      </div>

      {/* Email */}
      <div>
        <label className='flex items-start'>
          Email{" "}
          <sup>
            <FaStarOfLife className='text-[#EF476F] text-[8px] ml-1.5 mt-1' />
          </sup>
        </label>
        <input
          {...register("email", { required: true })}
          placeholder='Enter Email Address'
          className='shadow-[inset_0_-1px_0px_rgba(255,255,255,0.18)] bg-[#161D29] h-12 p-3 rounded-lg w-full'
        />
        {errors.email && (
          <p className='text-red-500 text-sm'>Email is required</p>
        )}
      </div>

      {/* Phone Number */}
      <div>
        <label className='flex items-start'>
          Phone Number{" "}
          <sup>
            <FaStarOfLife className='text-[#EF476F] text-[8px] ml-1.5 mt-1' />
          </sup>
        </label>
        <input
          {...register("phone", { required: true })}
          placeholder='1234567890'
          className='shadow-[inset_0_-1px_0px_rgba(255,255,255,0.18)] bg-[#161D29] h-12 p-3 rounded-lg w-full'
        />
        {errors.phone && (
          <p className='text-red-500 text-sm'>Phone Number is required</p>
        )}
      </div>

      {/* Password and Confirm Password */}
      <div className='flex items-center justify-between gap-5'>
        <div className='w-full'>
          <label className='flex items-start'>
            Password{" "}
            <sup>
              <FaStarOfLife className='text-[#EF476F] text-[8px] ml-1.5 mt-1' />
            </sup>
          </label>
          <input
            type='password'
            {...register("password", { required: true })}
            placeholder='Enter Password'
            className='shadow-[inset_0_-1px_0px_rgba(255,255,255,0.18)] bg-[#161D29] h-12 p-3 rounded-lg w-full'
          />
          {errors.password && (
            <p className='text-red-500 text-sm'>Password is required</p>
          )}
        </div>

        <div className='w-full'>
          <label className='flex items-start'>
            Confirm Password{" "}
            <sup>
              <FaStarOfLife className='text-[#EF476F] text-[8px] ml-1.5 mt-1' />
            </sup>
          </label>
          <input
            type='password'
            {...register("confirmPassword", { required: true })}
            placeholder='Enter Password Again'
            className='shadow-[inset_0_-1px_0px_rgba(255,255,255,0.18)] bg-[#161D29] h-12 p-3 rounded-lg w-full'
          />
          {errors.confirmPassword && (
            <p className='text-red-500 text-sm'>Confirm Password is required</p>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <button
        type='submit'
        className='py-3 w-full text-center bg-[#FFD60A] text-[#000814] mt-4 font-medium rounded-md'>
        Create Account
      </button>
    </form>
  );
};

export default RegistrationForm;

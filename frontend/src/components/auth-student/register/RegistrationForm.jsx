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
      <div className='flex items-center justify-between'>
        <div>
          {" "}
          <label htmlFor='' className='flex items-start'>
            First Name{" "}
            <sup>
              <FaStarOfLife className='text-[#EF476F] text-[8px] ml-1.5 mt-1' />
            </sup>
          </label>
          <input
            {...register("name")}
            placeholder='Enter First Name'
            className='shadow-[inset_0_-1px_0px_rgba(255,255,255,0.18)] bg-[#161D29] h-12 p-3 rounded-lg'
          />
          {errors.name && <p>First Name is required</p>}
        </div>
        <div>
          <label htmlFor='' className='flex items-start'>
            Last Name{" "}
            <sup>
              <FaStarOfLife className='text-[#EF476F] text-[8px] ml-1.5 mt-1' />
            </sup>
          </label>
          <input
            {...register("name")}
            placeholder='Enter Last Name'
            className='shadow-[inset_0_-1px_0px_rgba(255,255,255,0.18)] bg-[#161D29] h-12 p-3 rounded-lg'
          />
          {errors.name && <p>Last Name is required</p>}
        </div>
      </div>
      <div>
        <label htmlFor='' className='flex items-start'>
          Email{" "}
          <sup>
            <FaStarOfLife className='text-[#EF476F] text-[8px] ml-1.5 mt-1' />
          </sup>
        </label>
        <input
          {...register("name")}
          placeholder='Enter Email Address'
          className='shadow-[inset_0_-1px_0px_rgba(255,255,255,0.18)] bg-[#161D29] h-12 p-3 rounded-lg w-full'
        />
        {errors.name && <p>Email is required</p>}
      </div>
      <div>
        <label htmlFor='' className='flex items-start'>
          Phone Number{" "}
          <sup>
            <FaStarOfLife className='text-[#EF476F] text-[8px] ml-1.5 mt-1' />
          </sup>
        </label>
        <input
          {...register("name")}
          placeholder='1234567890'
          className='shadow-[inset_0_-1px_0px_rgba(255,255,255,0.18)] bg-[#161D29] h-12 p-3 rounded-lg w-full'
        />
        {errors.name && <p>Phone Number is required</p>}
      </div>
      <div className='flex items-center justify-between'>
        <div>
          {" "}
          <label htmlFor='' className='flex items-start'>
            Password{" "}
            <sup>
              <FaStarOfLife className='text-[#EF476F] text-[8px] ml-1.5 mt-1' />
            </sup>
          </label>
          <input
            {...register("name")}
            placeholder='Enter Password'
            className='shadow-[inset_0_-1px_0px_rgba(255,255,255,0.18)] bg-[#161D29] h-12 p-3 rounded-lg'
          />
          {errors.name && <p>Password is required</p>}
        </div>
        <div>
          <label htmlFor='' className='flex items-start'>
            Confirm Password{" "}
            <sup>
              <FaStarOfLife className='text-[#EF476F] text-[8px] ml-1.5 mt-1' />
            </sup>
          </label>
          <input
            {...register("name")}
            placeholder='Enter Password'
            className='shadow-[inset_0_-1px_0px_rgba(255,255,255,0.18)] bg-[#161D29] h-12 p-3 rounded-lg'
          />
          {errors.name && <p>Confirm Password is required</p>}
        </div>
      </div>
      <button
        type='submit'
        className='py-3 w-full text-center bg-[#FFD60A] text-[#000814] mt-4 font-medium rounded-md'>
        Create Account
      </button>
    </form>
  );
};

export default RegistrationForm;

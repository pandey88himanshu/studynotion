"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";

const NavBar = ({ login }) => {
  const router = useRouter();
  function handleClick() {
    if (login) {
      router.push("/register");
    } else {
      router.push("/login");
    }
  }
  return (
    <header className='bg-[#161D29] shadow-[inset_0_0_0_1px_#2C333F] w-full h-16  '>
      <div className='custom-container h-full text-[#AFB2BF] flex items-center justify-between '>
        <figure>
          <Image
            src='/assets/Logo/Logo-Full-Light.png'
            alt='EStudy_Notion_Logo'
            width={160}
            height={32}
          />
        </figure>
        <nav>
          <ul className='flex gap-x-8 text-[#DBDDEA] '>
            <li>Home</li>
            <li className='text-[#FFD60A] font-semibold'>Category</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </nav>
        <nav>
          <ul className='flex items-center gap-x-6 text-[#AFB2BF] text-lg'>
            <li className='cursor-pointer text-2xl'>
              <CiSearch />
            </li>
            <li className='cursor-pointer text-2xl'>
              <MdOutlineShoppingCart />
            </li>
            <li>
              <button
                className='border-2 rounded-lg border-[#2C333F] text-[#AFB2BF] w-20 h-10 flex items-center justify-center font-medium cursor-pointer hover:brightness-90'
                onClick={handleClick}>
                {login ? "Sign Up" : "Log In"}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;

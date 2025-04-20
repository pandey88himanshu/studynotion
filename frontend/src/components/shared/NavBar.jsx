"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const NavBar = ({ login }) => {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleClick = () => {
    if (login) {
      router.push("/register");
    } else {
      router.push("/login");
    }
  };

  const handleLogoClick = () => {
    router.push("/");
  };

  return (
    <header className='bg-[#000814] shadow-[inset_0_-1px_0px_rgba(255,255,255,0.18)] w-full h-16'>
      <div className='custom-container h-full text-[#AFB2BF] flex items-center justify-between'>
        {/* Logo */}
        <figure className='cursor-pointer brightness-90'>
          <Image
            src='/assets/Logo/Logo-Full-Light.png'
            alt='Study_Notion_Logo'
            width={160}
            height={32}
            onClick={handleLogoClick}
          />
        </figure>

        {/* Desktop Menu */}
        <nav className='hidden md:flex gap-x-8 text-[#DBDDEA]'>
          <ul className='flex gap-x-8'>
            <li className='cursor-pointer hover:text-yellow-400'>Home</li>
            <li className='text-[#FFD60A] font-semibold cursor-pointer'>
              Category
            </li>
            <li className='cursor-pointer hover:text-yellow-400'>About Us</li>
            <li className='cursor-pointer hover:text-yellow-400'>Contact Us</li>
          </ul>
        </nav>

        {/* Desktop Icons and Auth */}
        <nav className='hidden md:flex items-center gap-x-6 text-[#AFB2BF] text-lg'>
          <CiSearch className='cursor-pointer text-2xl' />
          <MdOutlineShoppingCart className='cursor-pointer text-2xl' />
          <button
            className='border-2 rounded-lg border-[#2C333F] text-[#AFB2BF] w-20 h-10 flex items-center justify-center font-medium cursor-pointer hover:brightness-90'
            onClick={handleClick}>
            {login ? "Sign Up" : "Log In"}
          </button>
        </nav>

        {/* Hamburger menu */}
        <div className='md:hidden flex items-center'>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className='text-2xl text-white'>
            {mobileMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className='md:hidden bg-[#1E2530] text-white px-6 pb-4 pt-2 space-y-3 shadow-lg'>
          <ul className='flex flex-col gap-3'>
            <li className='cursor-pointer hover:text-yellow-400'>Home</li>
            <li className='text-[#FFD60A] font-semibold cursor-pointer'>
              Category
            </li>
            <li className='cursor-pointer hover:text-yellow-400'>About Us</li>
            <li className='cursor-pointer hover:text-yellow-400'>Contact Us</li>
          </ul>
          <div className='flex gap-4 items-center pt-3 border-t border-gray-700'>
            <CiSearch className='text-2xl' />
            <MdOutlineShoppingCart className='text-2xl' />
            <button
              className='border-2 rounded-lg border-[#2C333F] text-[#AFB2BF] w-20 h-10 flex items-center justify-center font-medium hover:brightness-90'
              onClick={handleClick}>
              {login ? "Sign Up" : "Log In"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;

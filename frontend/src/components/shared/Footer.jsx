import Image from "next/image";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-[#161D29] text-[#6E727F] shadow-[inset_0_1px_0px_rgba(255,255,255,0.18)] py-12'>
      <div className='custom-container space-y-12'>
        {/* Top Grid Sections */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Left Column */}
          <div className='grid grid-cols-3 gap-8'>
            {/* Logo and Social */}
            <div className='space-y-6'>
              <Image
                src='/assets/Logo/Logo-Full-Light.png'
                width={160}
                height={32}
                alt='logo'
              />
              <div>
                <p className='font-semibold text-white mb-2'>Company</p>
                <ul className='space-y-1'>
                  <li>About</li>
                  <li>Careers</li>
                  <li>Affiliates</li>
                </ul>
              </div>
              <ul className='flex items-center gap-4 text-white text-lg'>
                <li>
                  <FaFacebookF />
                </li>
                <li>
                  <FaInstagram />
                </li>
                <li>
                  <FaTwitter />
                </li>
                <li>
                  <FaYoutube />
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div className='space-y-6'>
              <div>
                <p className='font-semibold text-white mb-2'>Resources</p>
                <ul className='space-y-1'>
                  <li>Articles</li>
                  <li>Blog</li>
                  <li>Chart Sheet</li>
                  <li>Code Challenges</li>
                  <li>Docs</li>
                  <li>Projects</li>
                  <li>Videos</li>
                  <li>Workspaces</li>
                </ul>
              </div>
              <div>
                <p className='font-semibold text-white mb-2'>Support</p>
                <ul>
                  <li>Help Center</li>
                </ul>
              </div>
            </div>

            {/* Plans & Community */}
            <div className='space-y-6'>
              <div>
                <p className='font-semibold text-white mb-2'>Plans</p>
                <ul className='space-y-1'>
                  <li>Paid Memberships</li>
                  <li>For Students</li>
                  <li>Business Solutions</li>
                </ul>
              </div>
              <div>
                <p className='font-semibold text-white mb-2'>Community</p>
                <ul className='space-y-1'>
                  <li>Forums</li>
                  <li>Chapters</li>
                  <li>Events</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className='grid grid-cols-3 gap-8'>
            {/* Subjects */}
            <div>
              <p className='font-semibold text-white mb-2'>Subjects</p>
              <ul className='space-y-1'>
                {[
                  "AI",
                  "Cloud Computing",
                  "Code Foundations",
                  "Computer Science",
                  "Cybersecurity",
                  "Data Analytics",
                  "Data Science",
                  "Data Visualization",
                  "Developer Tools",
                  "DevOps",
                  "Game Development",
                  "IT",
                  "Machine Learning",
                  "Math",
                  "Mobile Development",
                  "Web Design",
                  "Web Development",
                ].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Languages */}
            <div>
              <p className='font-semibold text-white mb-2'>Languages</p>
              <ul className='space-y-1'>
                {[
                  "Bash",
                  "C",
                  "C++",
                  "C#",
                  "Go",
                  "HTML & CSS",
                  "Java",
                  "JavaScript",
                  "Kotlin",
                  "PHP",
                  "Python",
                  "R",
                  "Ruby",
                  "SQL",
                  "Swift",
                ].map((lang) => (
                  <li key={lang}>{lang}</li>
                ))}
              </ul>
            </div>

            {/* Career */}
            <div>
              <p className='font-semibold text-white mb-2'>Career Building</p>
              <ul className='space-y-1'>
                <li>Career Paths</li>
                <li>Career Services</li>
                <li>Interview Prep</li>
                <li>Professional Certification</li>
                <li>Full Catalog</li>
                <li>Beta Content</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className='border-t border-[#2c3442]' />

        {/* Bottom Bar */}
        <div className='flex flex-col md:flex-row justify-between items-center text-sm text-[#A9B2C3] gap-4'>
          <ul className='flex gap-6'>
            <li className='hover:text-white cursor-pointer'>Privacy Policy</li>
            <li className='hover:text-white cursor-pointer'>Cookie Policy</li>
            <li className='hover:text-white cursor-pointer'>Terms</li>
          </ul>
          <p className='text-center'>Developed by Himanshu Pandey</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

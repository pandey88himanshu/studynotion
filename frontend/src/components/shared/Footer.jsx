import Image from "next/image";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className='bg-[#161D29] w-full h-[778px] shadow-[inset_0_1px_0px_rgba(255,255,255,0.18)] text-[#6E727F]'>
      <div className='custom-container '>
        <div className='flex items-start justify-between'>
          <div className='flex items-start justify-between w-[548px]'>
            <div className=''>
              <div>
                <Image
                  src={"/assets/Logo/Logo-Full-Light.png"}
                  width={160}
                  height={32}
                  alt='logo'
                />
              </div>
              <div>
                <p>Company</p>
                <ul>
                  <li>About</li>
                  <li>Careers</li>
                  <li>Affiliates</li>
                </ul>
              </div>
              <div>
                <ul>
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
            </div>
            <div>
              <div>
                <p>Resource</p>
                <ul>
                  <li>Articles</li>
                  <li>Blog</li>
                  <li>Chart Sheet</li>
                  <li>Code challenges</li>
                  <li>Docs</li>
                  <li>Projects</li>
                  <li>Videos</li>
                  <li>Workspaces</li>
                </ul>
              </div>
              <div>
                <p>Support</p>
                <ul>
                  <li>Help Center</li>
                </ul>
              </div>
            </div>
            <div>
              <div>
                <p>Plans</p>
                <ul>
                  <li>Paid memberships</li>
                  <li>For students</li>
                  <li>Business solutions </li>
                </ul>
              </div>
              <div>
                <p>Community</p>
                <ul>
                  <li>Forums</li>
                  <li>Chapters</li>
                  <li>Events</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='flex justify-between w-[548px]'>
            <div>
              <p>Subjects</p>
              <ul>
                <li>AI</li>
                <li>Cloud Computing</li>
                <li>Code Foundations</li>
                <li>Computer Science</li>
                <li>Cybersecurity</li>
                <li>Data Analytics</li>
                <li>Data Science</li>
                <li>Data Visualization</li>
                <li>Developer Tools</li>
                <li>DevOps</li>
                <li>Game Development</li>
                <li>IT</li>
                <li>Machine Learning</li>
                <li>Math</li>
                <li>Mobile Development</li>
                <li>Web Design</li>
                <li>Web Development</li>
              </ul>
            </div>
            <div>
              <p>Languages</p>
              <ul>
                <li>Bash</li>
                <li>C</li>
                <li>C++</li>
                <li>C#</li>
                <li>Go</li>
                <li>HTML & CSS</li>
                <li>Java</li>
                <li>JavaScript</li>
                <li>Kotlin</li>
                <li>PHP</li>
                <li>Python</li>
                <li>R</li>
                <li>Ruby</li>
                <li>SQL</li>
                <li>Swift</li>
              </ul>
            </div>
            <div>
              <p>Carrer building</p>
              <ul>
                <li>Career paths</li>
                <li>Career services</li>
                <li>Interview prep</li>
                <li>Professional certification</li>
                <li>-</li>
                <li>Full Catalog</li>
                <li>Beta Content</li>
              </ul>
            </div>
          </div>
        </div>
        <hr className='bg-white h-full' />
        <div className='flex items-center justify-between'>
          <div>
            <ul className='flex items-center justify-between gap-8'>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
              <li>Terms</li>
            </ul>
          </div>
          <div>
            <p>Developed by Himanshu Pandey</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

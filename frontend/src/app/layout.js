"use client";

import NavBar from "@/components/shared/NavBar";
import "./globals.css";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Footer from "@/components/shared/Footer";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    // Define routes where NavBar shouldn't be shown
    const hideNavRoutes = [
      "/student/login",
      "/student/register",
      "/student/otp",
      "/instructor/register",
      "/instructor/login",
    ];
    setShowNav(!hideNavRoutes.includes(pathname));
  }, [pathname]);

  return (
    <html lang='en'>
      <head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>StudyNotion - level up Your Skills</title>
        <meta
          name='description'
          content='StudyNotion is a fully-featured, modern Learning Management System (LMS) designed to empower educators and learners with a seamless digital learning experience. Built with scalability and user experience in mind, StudyNotion offers robust tools for course creation, content management, student engagement, and performance tracking'
        />
        <meta
          name='keywords'
          content='studynotion, StudyNotion, Studynotion, studyNotion , study, notion,NotionStudy,Notion,Study'
        />
        <meta name='author' content='Himanshu Pandey' />
        <meta name='theme-color' content='#ffffff' />

        <link
          rel='icon'
          type='image/png'
          sizes='192x192'
          href='/favicon/android/192.png'
        />
        <link rel='apple-touch-icon' href='/favicon/ios/192.png' />
        <meta
          name='msapplication-TileImage'
          content='/favicon/windows/150.png'
        />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <link rel='icon' href='/favicon/android/192.png' />
      </head>
      <body>
        {showNav && <NavBar />}
        {children}
        {showNav && <Footer />}
      </body>
    </html>
  );
}

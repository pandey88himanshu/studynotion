import AnnouncementHeadline from "@/components/shared/AnnouncementHeadline";
import NavBar from "@/components/shared/NavBar";
import React from "react";

export default function RootLayout({ children }) {
  return (
    <div>
      <NavBar login={true} />
      {children}
    </div>
  );
}

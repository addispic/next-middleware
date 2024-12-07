import React from "react";

// ui
// dashboard
import LeftSideBar from "../ui/dashboard/LeftSideBar";
import Header from "../ui/dashboard/Header";
import RightSideComponent from "../ui/dashboard/RightSideComponent";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-screen h-screen overflow-hidden flex bg-neutral-100 gap-5">
      {/* left */}
      <LeftSideBar />
      {/* content */}
      <div className="flex flex-col flex-1">
        {/* header */}
        <Header />
        {/* pages */}
        <div className="flex-1">{children}</div>
      </div>
      {/* right */}
      <RightSideComponent />
    </div>
  );
}

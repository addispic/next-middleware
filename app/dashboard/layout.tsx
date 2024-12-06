import React from "react";

// ui
// dashboard
import LeftSideBar from "../ui/dashboard/LeftSideBar";
import Header from "../ui/dashboard/Header";
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
      <div className="min-w-44 bg-green-50">right</div>
    </div>
  );
}

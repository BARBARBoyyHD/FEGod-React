import React, { useState } from "react";
import SideBarTrain from "../components/sidebarTrain/SideBarTrain";
import SidebarToggle from "../components/button/SidebarToggle";
import BreadCrumb from "../components/Breadcrumb/BreadCrumb";
import BreadCrumbTest from "../components/Breadcrumb/BreadCrumbTest";
export default function DashboardTest() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  return (
    <div className="flex">
      {/* Sidebar Toggle Button */}

      {/* Sidebar Component */}
      <SideBarTrain isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Page Content */}
      <div
        className={`flex-1 p-6 transition-all duration-300 ${
          isSidebarOpen ? "ml-64" : "ml-0"
        }`}
      >
        <div className="flex gap-2 w-full  items-center">
          <SidebarToggle
            isOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
          {/* <BreadCrumb /> */}
          <BreadCrumbTest/>
        </div>

        <div className="p-6">
          <h1 className="text-2xl mt-4">Main Content</h1>
        </div>
      </div>
    </div>
  );
}

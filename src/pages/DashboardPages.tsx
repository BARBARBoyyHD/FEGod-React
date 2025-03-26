import React, { useState } from "react";
import Sidebar from "../components/SideBar";
import SidebarToggle from "../components/button/SidebarToggle";

export default function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      <SidebarToggle setIsOpen={setIsOpen} />
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div
        className={`transition-all duration-300 ${
          isOpen ? "ml-64" : "ml-0"
        } p-6`}
      >
        <h1 className="text-xl font-bold">Main Content Here</h1>
      </div>
    </div>
  );
}

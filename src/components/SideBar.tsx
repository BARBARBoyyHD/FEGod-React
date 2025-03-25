import React from "react";
import { CgProfile } from "react-icons/cg";
import { IoSettingsSharp } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { MdWorkspacesOutline } from "react-icons/md";

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-screen bg-slate-900 text-white shadow-lg transition-transform duration-300 rounded-r-[16px]  ${
        isOpen ? "translate-x-0 w-64" : "-translate-x-full w-64"
      }`}
    >
      {/* Sidebar Header */}
      <div className="flex justify-between items-center p-5 border-b border-gray-700">
        <h2 className="text-lg font-semibold">Dashboard</h2>
        <button onClick={() => setIsOpen(false)} className="text-white">
          ✖
        </button>
      </div>

      {/* Sidebar Links */}
      <ul className="mt-4 space-y-2">
        <SidebarItem icon={<FaHome size={20} />} text="Home" />
        <SidebarItem icon={<CgProfile size={20} />} text="Profile" />
        <SidebarItem icon={<IoSettingsSharp size={20} />} text="Settings" />
        <SidebarItem icon={<MdWorkspacesOutline size={20} />} text="Projects" />
      </ul>
    </div>
  );
};

const SidebarItem = ({ icon, text }) => {
  return (
    <li className="flex items-center space-x-4 cursor-pointer hover:bg-gray-800 p-3 rounded-lg">
      {icon}
      <span>{text}</span>
    </li>
  );
};

export default Sidebar;

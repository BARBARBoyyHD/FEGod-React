import React from "react";
import { BiMenu } from "react-icons/bi";

const SidebarToggle = ({ setIsOpen }) => {
  return (
    <button
      onClick={() => setIsOpen((prev) => !prev)}
      className="fixed top-5 left-5 p-3 text-white bg-slate-900 rounded-lg shadow-lg"
    >
      <BiMenu size={24} />
    </button>
  );
};

export default SidebarToggle;

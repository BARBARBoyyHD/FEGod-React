import React from "react";
import { BiMenu, BiX } from "react-icons/bi";

interface SidebarToggleProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const SidebarToggle: React.FC<SidebarToggleProps> = ({ isOpen, setIsOpen }) => {
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="p-3 text-black transition-transform duration-300"
    >
      {isOpen ? <BiX size={24} /> : <BiMenu size={24} />}
    </button>
  );
};

export default SidebarToggle;

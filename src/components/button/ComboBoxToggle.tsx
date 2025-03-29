import React from "react";
import { FiChevronsDown } from "react-icons/fi";

const DropDownToggle = ({ isOpen, setIsOpen }) => {
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="p-3 text-white transition-transform duration-300 bg-black rounded-md flex justify-center items-center gap-4"
    >
      Select Stack <FiChevronsDown size={20} />
    </button>
  );
};

export default DropDownToggle;

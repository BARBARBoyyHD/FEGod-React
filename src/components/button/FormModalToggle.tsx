import React from "react";

const FormModalToggle = ({ isOpen, setIsOpen }) => {
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="p-3 text-white transition-transform duration-300 bg-black rounded-md flex justify-center items-center gap-4"
    >
        Click me !
    </button>
  );
};

export default FormModalToggle;

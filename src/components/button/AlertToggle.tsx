import React from "react";

interface AlertToggleProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function AlertToggle({ isOpen, setIsOpen }: AlertToggleProps) {
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="border border-black px-4 py-2 rounded-[8px] bg-black text-white font-bold hover:bg-slate-100 hover:text-black hover:border-black transition-all duration-300"
    >
      Login Now !
    </button>
  );
}

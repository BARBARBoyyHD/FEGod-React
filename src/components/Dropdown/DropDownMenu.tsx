import React from "react";
import { CgProfile } from "react-icons/cg";
import { FaWallet } from "react-icons/fa";

export default function DropDownMenu({ isOpen }: { isOpen: boolean }) {
  return (
    <div
      className={`absolute h-[310px] bg-black text-white border border-black w-[230px] mt-2 p-4 flex flex-col rounded-md shadow-green-600 shadow-md transition-all duration-300 transform ${
        isOpen
          ? "opacity-100 scale-100 pointer-events-auto"
          : "opacity-0 scale-95 pointer-events-none"
      }`}
    >
      <h1>My Account</h1>
      <hr className="w-[100%] border-t border-gray-400 my-2" />
      <div className="flex items-center gap-2 cursor-pointer hover:text-green-400">
        <CgProfile />
        <p>Profile</p>
      </div>
      <div className="flex items-center gap-2 cursor-pointer hover:text-green-400">
        <FaWallet />
        <p>Billing</p>
      </div>
    </div>
  );
}

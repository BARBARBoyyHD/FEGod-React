import type { SideBarProps } from "../../types/SideBarItem";
import { CgProfile } from "react-icons/cg";
import { IoSettingsSharp } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import SideBarItem from "../item/SideBarItem";

export default function SideBarTrain({ isOpen }: SideBarProps) {
  return (
    <div
      className={`fixed top-0 left-0 h-screen bg-slate-950 shadow-lg transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0 w-64" : "-translate-x-full w-64"
      }`}
    >
      <div className="flex flex-col justify-between h-full">
        <div>
          <h1 className="text-white text-xl font-bold p-5">Abal.ai</h1>
          <ul className="text-white mt-4 space-y-2">
            <SideBarItem icon={<FaHome size={20} />} text="Home" />
            <SideBarItem icon={<CgProfile size={20} />} text="Profile" />
            <SideBarItem icon={<IoSettingsSharp size={20} />} text="Settings" />
          </ul>
        </div>
        <div className="text-white p-3 rounded-md hover:bg-slate-500 transition-all duration-300 mb-4">
          <p className="">example@mail.com</p>
        </div>
      </div>
    </div>
  );
}

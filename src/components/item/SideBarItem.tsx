import type { SideBarItem } from "../../types/SideBarItem";

export default function SideBarItem({ icon, text }: SideBarItem) {
  return (
    <li className="flex items-center space-x-4 cursor-pointer hover:bg-gray-800 p-3 rounded-lg">
      {icon}
      <span>{text}</span>
    </li>
  );
}

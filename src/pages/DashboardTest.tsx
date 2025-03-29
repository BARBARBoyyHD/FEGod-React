import React, { useState } from "react";
import SideBarTrain from "../components/sidebarTrain/SideBarTrain";
import SidebarToggle from "../components/button/SidebarToggle";
import BreadCrumbTest from "../components/Breadcrumb/BreadCrumbTest";
import ComboBoxToggle from "../components/button/ComboBoxToggle";
import ComboBoxMenu from "../components/Dropdown/ComboBoxMenu";
import DropDownToggle from "../components/button/DropDownToggle";
import DropDownMenu from "../components/Dropdown/DropDownMenu";
import FormModal from "../components/modal/FormModal";
import FormModalToggle from "../components/button/FormModalToggle";

export default function DashboardTest() {
  // Sidebar State
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Dropdown & Combobox States
  const [isComboboxOpen, setIsComboboxOpen] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar Component */}
      <SideBarTrain isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Page Content */}
      <div
        className={`flex-1 p-6 transition-all duration-300 ${
          isSidebarOpen ? "ml-64" : "ml-0"
        }`}
      >
        {/* Top Navigation */}
        <div className="flex gap-2 w-full items-center">
          <SidebarToggle isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
          <BreadCrumbTest />
        </div>

        {/* Main Content */}
        <div className="p-6">
          <h1 className="text-2xl mt-4">Main Content</h1>
          <div className="flex gap-7">
            <div className="">
              <h1 className="text-lg font-semibold">ComboBox</h1>
              <ComboBoxToggle
                isOpen={isComboboxOpen}
                setIsOpen={setIsComboboxOpen}
              />
              <ComboBoxMenu isOpen={isComboboxOpen} />
            </div>

            {/* DropDown Section */}
            <div className="">
              <h1 className="text-lg font-semibold">DropDown</h1>
              <DropDownToggle
                isOpen={isDropDownOpen}
                setIsOpen={setIsDropDownOpen}
              />
              <DropDownMenu isOpen={isDropDownOpen} />
            </div>
            <div>
              <h1 className="text-lg font-semibold">Modal</h1>
              <FormModalToggle
                isOpen={isModalOpen}
                setIsOpen={setIsModalOpen}
              />
              <FormModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
            </div>
          </div>
        </div>

        {/* ComboBox Section */}
      </div>
    </div>
  );
}

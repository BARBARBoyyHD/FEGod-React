export type SideBarItem = {
  icon: React.ReactNode;
  text: string;
};

export type SideBarProps = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

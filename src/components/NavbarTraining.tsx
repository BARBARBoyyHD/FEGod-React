import { useEffect, useState } from "react";

export default function NavbarTraining() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log("ScrollY:", window.scrollY);
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "w-[50%] h-12 bg-teal-500 shadow-md mt-3 rounded-[30px]"
          : "  w-full h-20 bg-transparent"
      } `}
    >
      <div className="container mx-auto px-6 flex justify-between items-center h-full">
        <h1 className=" text-xl font-bold">Abal.Ai</h1>
        <ul className="flex space-x-6">
          <li>Home</li>
          <li>About</li>
          <li>Car</li>
          <li>Settings</li>
        </ul>
        <button>Logout</button>
      </div>
    </nav>
  );
}

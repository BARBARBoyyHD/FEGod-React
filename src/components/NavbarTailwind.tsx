import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 transition-all duration-300 ease-in-out 
      ${isScrolled ? "w-[80%] h-14 bg-gray-900 shadow-md" : "w-full h-20 bg-transparent"}`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center h-full">
        <h1 className="text-white text-xl font-bold">Teras Kopi 54</h1>
        <ul className="flex space-x-6 text-white">
          <li>Home</li>
          <li>Menu</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

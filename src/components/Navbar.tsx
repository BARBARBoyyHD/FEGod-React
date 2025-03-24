import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const NavbarTailwind = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ height: 80, width: "100%" }}
      animate={{
        height: isScrolled ? 60 : 80,
        width: isScrolled ? "80%" : "100%", // Shrinks on scroll
      }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 transition-all duration-300 ease-in-out 
      ${isScrolled ? "bg-gray-900 py-2 shadow-md" : "bg-transparent py-4"}`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">Teras Kopi 54</h1>
        <ul className="flex space-x-6 text-white">
          <li>Home</li>
          <li>Menu</li>
          <li>Contact</li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default NavbarTailwind;

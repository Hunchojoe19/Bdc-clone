import React, { useState, useEffect } from "react";
import logo from "../assets/bdc-logo.jpg";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-lg dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-800 ${
        isScrolled ? "bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-lg dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-800" : "bg-transparent"
      } transition-all duration-300`}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold flex items-center">
          <img src={logo} alt="CosCoin Logo" className="h-8 mr-2" />
          <span className="text-3xl text-white font-bold">CosCoin</span>
        </div>

  
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>

  
        <div className="hidden md:flex space-x-4 items-center">
          <p>
            <a href="#contact" className="hover:text-gray-400 list-none">
              Contact Us
            </a>
          </p>
          <button className="bg-blue-500 px-4 py-2 cursor-pointer rounded-lg hover:bg-blue-700">
            <a href="#contact">
                 Get Started
            </a>
           
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden h-[200px] py-4 bg-gray-800 p-4">
          <p>
            <a href="#contact" className="hover:text-gray-400 list-none">
              Contact Us
            </a>
          </p>
          <div className="mt-4 space-y-4">
            <button className="w-full bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
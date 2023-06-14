import React, { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center p-6 xs:w-[85%] md:w-[90%] mx-auto">
      <div className="flex items-center">
        <img src="../images/Catalyst-logo.svg" alt="Logo" className="" />
      </div>

      <div className="hidden md:flex space-x-10 grand text-[1.1rem]">
        <a href="https://www.google.com" className="text-[#ffffff] hover:text-[#83C5F3]">
          ABOUT
        </a>
        <a href="https://www.google.com" className="text-[#ffffff] hover:text-[#83C5F3]">
          OUR WORK
        </a>
        <a href="https://www.google.com" className="text-[#ffffff] hover:text-[#83C5F3]">
          CMO
        </a>
        <a href="https://www.google.com" className="text-[#ffffff] hover:text-[#83C5F3]">
          CONTACT
        </a>
      </div>

      <div className="md:hidden">
        <button onClick={toggleMenu} className="block text-[#ffffff] hover:text-[#cccccc] focus:outline-none focus:text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-10 right-0 w-full py-2 mt-2 bg-[#000000] z-[2]">
          <a href="https://www.google.com" className="block px-4 py-2 text-[#ffffff] hover:bg-[#cccccc] hover:text-[#000000]">
            ABOUT
          </a>
          <a href="https://www.google.com" className="block px-4 py-2 text-[#ffffff] hover:bg-[#cccccc] hover:text-[#000000]">
            OUT
          </a>
          <a href="https://www.google.com" className="block px-4 py-2 text-[#ffffff] hover:bg-[#cccccc] hover:text-[#000000]">
            CMO
          </a>
          <a href="https://www.google.com" className="block px-4 py-2 text-[#ffffff] hover:bg-[#cccccc] hover:text-[#000000]">
            CONTACT
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

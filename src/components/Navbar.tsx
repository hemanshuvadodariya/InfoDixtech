import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl font-bold text-blue-700 uppercase tracking-wider flex items-center gap-1"
          >
            InfoDix<span className="text-slate-800">Tech</span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 items-center font-medium text-slate-600">
            {navLinks.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`transition duration-300 ${
                    isActive(item.path) 
                      ? "text-blue-600 font-semibold" 
                      : "hover:text-blue-600"
                  }`}
                >
                  {item.name === "About" ? "About Us" : item.name === "Contact" ? "Contact Us" : item.name}
                </Link>
              </li>
            ))}
            <li className="ml-4">
                <Link to="/contact" className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition shadow-md hover:shadow-lg text-sm font-semibold">
                    Get Quote
                </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-800 text-2xl focus:outline-none p-2 rounded hover:bg-slate-100 transition"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg animate-fade-in-down">
          <div className="px-4 py-4 space-y-3 flex flex-col">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-4 py-3 rounded-lg font-medium transition ${
                    isActive(item.path) 
                    ? "bg-blue-50 text-blue-700" 
                    : "text-slate-700 hover:bg-slate-50 hover:text-blue-600"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name === "About" ? "About Us" : item.name === "Contact" ? "Contact Us" : item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
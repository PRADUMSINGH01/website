"use client";
import { useState, useEffect } from 'react';
import { FaPhoneAlt, FaUser, FaUserPlus } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 top-0 mb-10 border-b border-blue-500 ${isScrolled ? 'bg-blue-500 shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Section - Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-blue-500 font-bold text-xl">C</span>
              </div>
              <span className={`text-xl font-bold ${isScrolled ? 'text-white' : 'text-blue-500'}`}>
                CarPartsPro
              </span>
            </div>
          </div>

          {/* Center Section - Navigation (hidden on mobile) */}
          <div className="hidden md:block">
            <div className="flex space-x-8">
              <a href="#" className={`${isScrolled ? 'text-white' : 'text-blue-500'} hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium transition-colors`}>
                Parts Catalog
              </a>
              <a href="#" className={`${isScrolled ? 'text-white' : 'text-blue-500'} hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium transition-colors`}>
                Brands
              </a>
              <a href="#" className={`${isScrolled ? 'text-white' : 'text-blue-500'} hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium transition-colors`}>
                Services
              </a>
            </div>
          </div>

          {/* Right Section - Contact and Auth */}
          <div className="flex items-center space-x-4">
            {/* Contact Info */}
            <div className="hidden md:flex items-center space-x-2">
              <FaPhoneAlt className={`h-4 w-4 ${isScrolled ? 'text-white' : 'text-blue-500'}`} />
              <span className={`text-sm ${isScrolled ? 'text-white' : 'text-blue-500'}`}>
                +1 (555) 123-4567
              </span>
            </div>

            {/* Auth Buttons */}
            <div className="flex space-x-2">
              <button className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${isScrolled ? 'text-white hover:bg-blue-600' : 'text-blue-500 hover:bg-blue-50'}`}>
                <FaUser className="h-4 w-4" />
                <span className="text-sm hidden md:inline">Login</span>
              </button>
              <button className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${isScrolled ? 'text-white hover:bg-blue-600' : 'text-blue-500 hover:bg-blue-50'}`}>
                <FaUserPlus className="h-4 w-4" />
                <span className="text-sm hidden md:inline">Register</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 rounded-lg hover:bg-blue-100 transition-colors">
              <FiMenu className={`h-6 w-6 ${isScrolled ? 'text-white' : 'text-blue-500'}`} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
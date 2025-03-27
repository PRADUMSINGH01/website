"use client";
import { useState, useEffect } from 'react';
import { FaPhoneAlt, FaUser, FaUserPlus } from 'react-icons/fa';
import { FiMenu ,FiX } from 'react-icons/fi';
import Link from 'next/link';
import Sidebar from './Sidebar';
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
const [MobileNav , SetMobileNav] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  const MobileNavFunc = ()=>{
    if(!MobileNav){
      SetMobileNav(true)
    }else{
      SetMobileNav(false)
    }
  }

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 top-0 mb-10 border-b border-blue-500 ${isScrolled ? 'bg-blue-500 shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Section - Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center space-x-1">
              <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-blue-500 font-bold text-xl">P</span>
              </div>
              <span className={`text-xl font-bold ${isScrolled ? 'text-white' : 'text-blue-500'}`}>
                arts Point
              </span>
            </div>  
          </div>

          {/* Center Section - Navigation (hidden on mobile) */}
          <div className="hidden md:block">
            <div className="flex space-x-8">
              <a href="/Catalog" className={`${isScrolled ? 'text-white' : 'text-blue-500'} hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium transition-colors`}>
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
                +91 5555-123-4567
              </span>
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex space-x-2 ">
              <button className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${isScrolled ? 'text-white hover:bg-blue-600' : 'text-blue-500 hover:bg-blue-50'}`}>
                <FaUser className="h-4 w-4" />
                <Link href={'/Login'} className="text-sm hidden md:inline">Login</Link>
              </button>
              <button className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${isScrolled ? 'text-white hover:bg-blue-600' : 'text-blue-500 hover:bg-blue-50'}`}>
                <FaUserPlus className="h-4 w-4" />
                <Link href={'/Register'} className="text-sm hidden md:inline">Register</Link>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 rounded-lg hover:bg-blue-100 transition-colors" onClick={MobileNavFunc}>
           <FiMenu/>
            </button>


           

          </div>
        </div>
      </div>
<div className="md:hidden absolute top-0 flex justify-between w-full ">
     {/* Close Button (Mobile) */}
          <button
            onClick={MobileNavFunc}
            className={`${MobileNav ===true ? "mb-4  p-3 w-full z-50  absolute  right-0 justify-center top-4 flex  md:hidden": " hidden " }`}
          >
            <FiX className="h-6 w-6 text-gray-600 " />
          </button>
<Sidebar isOpen={MobileNav}  />
</div>
    </nav>
  );
}
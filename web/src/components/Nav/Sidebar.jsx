import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiHome, FiUser, FiSettings, FiMail, FiX, FiMenu } from 'react-icons/fi';

 const Sidebar = ({ isOpen }) => {
  const links = [
    { name: 'Home', path: '/', icon: <FiHome /> },
    { name: 'Profile', path: '/profile', icon: <FiUser /> },
    { name: 'Settings', path: '/settings', icon: <FiSettings /> },
    { name: 'Contact', path: '/contact', icon: <FiMail /> },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/50 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.nav
        initial={{ x: -256 }}
        animate={{ x: isOpen ? 0 : -256 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed top-0 left-0 z-40 h-full w-64 bg-white shadow-lg md:relative md:translate-x-0"
      >
        <div className="flex h-full flex-col p-4">
     

          {/* Navigation Links */}
          <div className="space-y-2 md:hidden ">
            {links.map((link) => (
              <motion.a
                key={link.name}
                href={link.path}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className=" flex items-center rounded-lg p-3 text-gray-700 transition-colors hover:bg-gray-100"
              >
                <span className="mr-3 text-xl">{link.icon}</span>
                <span className="text-sm font-medium">{link.name}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>
    </>
  );
};


export default Sidebar


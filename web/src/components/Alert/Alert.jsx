"use client"
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaInfoCircle, FaTimes } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const Alert = ({ type = 'login' }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const alertConfig = {
    login: {
      title: 'Welcome Back!',
      message: 'You have successfully logged in.',
      icon: <FaCheckCircle className="w-6 h-6" />,
      color: 'bg-green-100 border-green-500 text-green-700'
    },
    logout: {
      title: 'Logged Out',
      message: 'You have been securely logged out.',
      icon: <FaInfoCircle className="w-6 h-6" />,
      color: 'bg-blue-100 border-blue-500 text-blue-700'
    }
  };

  const { title, message, icon, color } = alertConfig[type];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ type: 'spring', stiffness: 200 }}
          className={`fixed top-6 right-6 rounded-lg border-l-4 p-4 pr-8 ${color} shadow-xl max-w-sm z-50`}
        >
          <div className="flex items-start gap-3">
            <span className="shrink-0">{icon}</span>
            <div>
              <h3 className="font-semibold text-lg mb-1">{title}</h3>
              <p className="text-sm">{message}</p>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-3 right-3 hover:opacity-75 transition-opacity"
            >
              <FaTimes className="w-4 h-4" />
            </button>
          </div>

          {/* Progress bar */}
          <motion.div
            initial={{ width: '100%' }}
            animate={{ width: '0%' }}
            transition={{ duration: 5, ease: 'linear' }}
            className="absolute bottom-0 left-0 h-1 bg-current opacity-25"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Alert;
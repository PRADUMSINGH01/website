"use client";
import React from "react";
import { motion } from "framer-motion";

const HeroBanner = () => {
  return (
    <section
      className="relative h-[600px] flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/auto-hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Blue overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/90 to-blue-600/90"></div>
      
      <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-md">
            Precision Engineered
            <br />
            <span className="text-blue-200">Automotive Solutions</span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-blue-50 max-w-3xl mx-auto mb-8"
          >
            Trusted by professional mechanics worldwide. Discover OEM-quality parts with 
            enhanced durability and perfect fitment for your vehicle.
          </motion.p>

          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <a
              href="#shop"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-full 
              transition-all duration-300 hover:bg-blue-100 hover:shadow-lg border-2 border-white hover:border-blue-100"
            >
              Explore Catalog
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scrolling indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="animate-bounce w-6 h-6 border-2 border-white rounded-full"></div>
      </div>
    </section>
  );
};

export default HeroBanner;
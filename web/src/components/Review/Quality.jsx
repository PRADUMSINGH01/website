"use client";
import React from "react";
import { FaShieldAlt, FaLock, FaUndo, FaRegSmile } from "react-icons/fa";
import { motion } from "framer-motion";

const Quality = () => {
  const trustItems = [
    {
      title: "Secure Payments",
      description: "Your transactions are safe with our state-of-the-art secure payment gateways.",
      icon: FaLock,
      color: "bg-blue-100"
    },
    {
      title: "Money-Back Guarantee",
      description: "Enjoy a risk-free purchase with our 30-day hassle-free return policy.",
      icon: FaUndo,
      color: "bg-blue-200"
    },
    {
      title: "Quality Assurance",
      description: "All car parts undergo rigorous testing to ensure the highest quality.",
      icon: FaShieldAlt,
      color: "bg-blue-100"
    },
    {
      title: "Satisfied Customers",
      description: "Read our testimonials and case studies to see why our customers trust us.",
      icon: FaRegSmile,
      color: "bg-blue-200"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent"
        >
          Why Choose Us
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`absolute top-0 left-0 w-full h-1 ${index % 2 === 0 ? 'bg-blue-500' : 'bg-blue-400'} rounded-t-xl`}></div>
                <div className="flex flex-col items-center text-center">
                  <div className={`p-4 rounded-full ${item.color} mb-4 group-hover:bg-blue-500 transition-colors`}>
                    <Icon className="text-3xl text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Quality;
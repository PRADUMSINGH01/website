"use client";
import React from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const ReviewCard = ({ name, rating, review, date }) => {
  const stars = Array(5).fill(0);
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-transparent hover:border-blue-500"
    >
      <div className="flex items-center mb-4 gap-1">
        {stars.map((_, i) => (
          <FaStar
            key={i}
            className={`text-xl ${
              i < rating ? "text-blue-500" : "text-blue-100"
            }`}
          />
        ))}
        <span className="text-blue-500 text-sm font-medium ml-2">
          {rating}.0
        </span>
      </div>
      <p className="text-gray-600 text-base mb-6 leading-relaxed">
        {review}
      </p>
      <div className="flex justify-between items-center border-t pt-4">
        <span className="font-medium text-gray-800">
          {name}
        </span>
        <span className="text-sm text-gray-500">
          {date}
        </span>
      </div>
    </motion.div>
  );
};

const ReviewComponent = () => {
  const reviews = [
    {
      name: "Michael Thompson",
      rating: 5,
      review: "The quality and craftsmanship are exceptional. I am extremely satisfied with both the product and the outstanding support.",
      date: "April 5, 2024"
    },
    {
      name: "Emily Rodriguez",
      rating: 4,
      review: "A very reliable service that pays attention to every detail. My experience has been consistently positive, and I highly recommend it.",
      date: "April 2, 2024"
    },
    {
      name: "Samuel Lee",
      rating: 5,
      review: "Outstanding results paired with exceptional customer care. The product exceeded my expectations and truly stands out in its class.",
      date: "March 28, 2024"
    }
  ];

  return (
    <section className="bg-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent"
        >
          Customer Experiences
        </motion.h2>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ReviewCard {...review} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewComponent;
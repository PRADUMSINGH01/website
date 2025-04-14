import React from 'react';
import { FiTool, FiSliders, FiShoppingCart, FiChevronRight } from 'react-icons/fi';

const MercedesPartsAccessories = () => {
  const primaryColor = 'red-600';
  const secondaryColor = 'gray-900';
  const textColor = 'gray-700';
  const lightBg = 'gray-100';
  const backgroundColor = 'gray-50';
  const accentColor = 'indigo-500'; // You can adjust this if needed

  const accessories = [
    {
      id: 1,
      name: 'AMG Performance Steering Wheel Trim',
      description: 'Enhance the sporty feel of your Mercedes.',
      image: 'https://via.placeholder.com/300x200/222/eee?Text=Steering+Trim', // Replace with actual image
      price: '$450',
    },
    {
      id: 2,
      name: 'Mercedes-Benz Floor Mats',
      description: 'Premium quality floor mats for interior protection.',
      image: 'https://via.placeholder.com/300x200/333/ddd?Text=Floor+Mats', // Replace with actual image
      price: '$180',
    },
    {
      id: 3,
      name: 'Roof Rack System',
      description: 'Increase your vehicle\'s carrying capacity.',
      image: 'https://via.placeholder.com/300x200/444/ccc?Text=Roof+Rack', // Replace with actual image
      price: '$320',
    },
    // Add more accessories here
  ];

  return (
    <div className={`bg-${backgroundColor} py-16`}>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white rounded-xl shadow-lg mb-16 mx-auto max-w-7xl">
      
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Introduction Section */}
        <div className="bg-white rounded-2xl shadow-xl p-10 mb-16 text-center">
          <h2 className={`text-3xl font-bold text-${secondaryColor} mb-6`}>
            <FiTool className={`inline-block mr-2 text-${primaryColor}`} size={32} />
            Genuine Quality, Perfect Fit
          </h2>
          <p className={`text-lg text-${textColor} leading-relaxed`}>
            Discover our wide range of genuine Mercedes-Benz parts and accessories designed to perfectly
            complement your vehicle. From performance upgrades to stylish enhancements, we have everything
            you need to personalize and maintain your Mercedes-Benz.
          </p>
        </div>

        {/* Accessories Grid */}
        <div className="mb-16">
          <h2 className={`text-2xl font-semibold text-${secondaryColor} mb-6`}>Featured Accessories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {accessories.map((accessory) => (
              <div
                key={accessory.id}
                className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative aspect-w-3 aspect-h-2">
                  <img
                    className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                    src={accessory.image}
                    alt={accessory.name}
                  />
                </div>
                <div className="px-6 py-4">
                  <h3 className={`text-lg font-semibold text-${secondaryColor} mb-2`}>{accessory.name}</h3>
                  <p className={`text-sm text-${textColor} mb-3`}>{accessory.description}</p>
                  <div className="flex items-center justify-between">
                    <span className={`text-xl font-bold text-${primaryColor}`}>{accessory.price}</span>
                    <button
                      className={`inline-flex items-center rounded-md bg-${accentColor} px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-${accentColor}-700 focus:outline-none focus:ring-2 focus:ring-${accentColor}-500 focus:ring-offset-2`}
                    >
                      <FiShoppingCart className="mr-2" /> Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Browse Parts Section */}
        <div className="bg-white rounded-xl shadow-lg py-12 px-8 text-center">
          <h3 className={`text-2xl font-semibold text-${secondaryColor} mb-4`}>Looking for Specific Parts?</h3>
          <p className={`text-lg text-${textColor} mb-6`}>
            Explore our comprehensive catalog of genuine Mercedes-Benz parts to keep your vehicle running at its best.
          </p>
          <button
            className={`inline-flex items-center rounded-md border border-transparent bg-${primaryColor} px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-${primaryColor}-700 focus:outline-none focus:ring-2 focus:ring-${primaryColor}-500 focus:ring-offset-2`}
          >
            Browse Parts <FiSliders className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MercedesPartsAccessories;
import React from 'react';
import { FiAward, FiBatteryCharging, FiGlobe, FiClock, FiChevronRight } from 'react-icons/fi';
import Models from './Models';

const ToyotaModels = () => {
  const primaryColor = 'red-600';
  const secondaryColor = 'gray-900';
  const textColor = 'gray-700';
  const lightBg = 'gray-100';
  const backgroundColor = 'gray-50';
  const accentColor = 'indigo-500';

  return (
    <div className={`bg-${backgroundColor} py-16`}>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white rounded-xl shadow-lg mb-16 mx-auto max-w-7xl">
        <div className="relative">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-black opacity-40"></div>
          </div>
       
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Overview with Creative Layout */}
        <div className="bg-white rounded-2xl shadow-xl p-10 mb-16">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className={`text-3xl font-bold text-${secondaryColor}`}>
                <span className={`border-b-4 border-${primaryColor} pb-2`}>Our Legacy</span> of Innovation
              </h2>
              <p className={`text-lg text-${textColor} leading-relaxed`}>
                For over 8 decades, Toyota has been at the forefront of automotive innovation, driven by a
                commitment to quality, durability, and environmental sustainability. From pioneering hybrid
                technology to developing advanced safety features, we strive to exceed expectations.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <li className="flex items-center space-x-4">
                  <FiAward className={`w-7 h-7 text-${primaryColor}`} />
                  <span className={`font-semibold text-${secondaryColor}`}>Global Recognition</span>
                </li>
                <li className="flex items-center space-x-4">
                  <FiBatteryCharging className={`w-7 h-7 text-${primaryColor}`} />
                  <span className={`font-semibold text-${secondaryColor}`}>Sustainable Solutions</span>
                </li>
                <li className="flex items-center space-x-4">
                  <FiGlobe className={`w-7 h-7 text-${primaryColor}`} />
                  <span className={`font-semibold text-${secondaryColor}`}>Worldwide Presence</span>
                </li>
                <li className="flex items-center space-x-4">
                  <FiClock className={`w-7 h-7 text-${primaryColor}`} />
                  <span className={`font-semibold text-${secondaryColor}`}>Trusted Expertise</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl overflow-hidden shadow-md">
            </div>
          </div>
        </div>

        {/* Model Showcase Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold text-${secondaryColor}`}>Explore Our Latest Models</h2>
            <p className={`text-lg text-${textColor}`}>Discover the perfect Toyota to fit your lifestyle.</p>
          </div>
          <Models
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            textColor={textColor}
            backgroundColor={backgroundColor}
            lightBg={lightBg}
            accentColor={accentColor}
          />
        </div>

        {/* Call to Action */}
        <div className="bg-white rounded-xl shadow-lg py-12 px-8 text-center">
          <h3 className={`text-2xl font-semibold text-${secondaryColor} mb-4`}>Ready to Experience Toyota?</h3>
          <p className={`text-lg text-${textColor} mb-6`}>
            Visit your nearest dealership or explore our virtual showroom today.
          </p>
          <button
            className={`inline-flex items-center rounded-md border border-transparent bg-${primaryColor} px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-${primaryColor}-700 focus:outline-none focus:ring-2 focus:ring-${primaryColor}-500 focus:ring-offset-2`}
          >
            Find a Dealer
            <FiChevronRight className="ml-3 h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToyotaModels;
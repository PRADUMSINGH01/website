"use client"
import { 
  GiEngine,
  GiCarWheel,
  GiDiscBrake,
  GiGears,
  GiExhaust,
  GiThermometerHot,
  GiSpring,
  GiCarKey,
  GiTurbo,
  GiCatalyticConverter,
  GiDifferentialGear,
  GiPiston,
  GiCrankshaft,
  GiCarLight,
  GiCarRotor,
  GiTransmissionTower,
  GiSparkSpiral,
  GiOilDrum,
  GiGasPump,
  GiSteeringWheel
} from 'react-icons/gi';

import { 
  FaFilter,
  FaCarBattery,
  FaGasPump,
  FaFan,
  FaTachometerAlt,
  FaPlug,
  FaRegQuestionCircle
} from 'react-icons/fa';

const PopularBrands = () => {
  // Category data with icons
  const categories = [
    { name: 'Engine', icon: <GiEngine className="text-4xl" /> },
    { name: 'Tires', icon: <GiCarWheel className="text-4xl" /> },
    { name: 'Brakes', icon: <GiDiscBrake className="text-4xl" /> },
    { name: 'Transmission', icon: <GiGears className="text-4xl" /> },
    { name: 'Exhaust System', icon: <GiExhaust className="text-4xl" /> },
    { name: 'Radiator', icon: <GiThermometerHot className="text-4xl" /> },
    { name: 'Suspension', icon: <GiSpring className="text-4xl" /> },
    { name: 'Ignition', icon: <GiCarKey className="text-4xl" /> },
    { name: 'Turbocharger', icon: <GiTurbo className="text-4xl" /> },
    { name: 'Catalytic Converter', icon: <GiCatalyticConverter className="text-4xl" /> },
    { name: 'Differential', icon: <GiDifferentialGear className="text-4xl" /> },
    { name: 'Piston', icon: <GiPiston className="text-4xl" /> },
    { name: 'Crankshaft', icon: <GiCrankshaft className="text-4xl" /> },
    { name: 'Headlights', icon: <GiCarLight className="text-4xl" /> },
    { name: 'Rotors', icon: <GiCarRotor className="text-4xl" /> },
    { name: 'Drivetrain', icon: <GiTransmissionTower className="text-4xl" /> },
    { name: 'Spark Plugs', icon: <GiSparkSpiral className="text-4xl" /> },
    { name: 'Oil System', icon: <GiOilDrum className="text-4xl" /> },
    { name: 'Fuel System', icon: <GiGasPump className="text-4xl" /> },
    { name: 'Steering', icon: <GiSteeringWheel className="text-4xl" /> },
    { name: 'Battery', icon: <FaCarBattery className="text-4xl" /> },
    { name: 'Oil Filter', icon: <FaFilter className="text-4xl" /> },
    { name: 'Fuel Pump', icon: <FaGasPump className="text-4xl" /> },
    { name: 'Cooling Fan', icon: <FaFan className="text-4xl" /> },
    { name: 'Dashboard', icon: <FaTachometerAlt className="text-4xl" /> },
    { name: 'Electrical System', icon: <FaPlug className="text-4xl" /> },
    { name: 'Other', icon: <FaRegQuestionCircle className="text-4xl" /> }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Search by Category
      </h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {categories.map((item, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-4 cursor-pointer border border-gray-100 hover:border-blue-200"
          >
            <div className="flex flex-col items-center">
              {/* Icon Container */}
              <div className="w-20 h-20 mb-2 text-gray-700 group-hover:text-blue-600 transition-colors flex items-center justify-center">
                
              </div>
              {/* Category Name */}
              <h3 className="text-sm font-medium text-gray-900 group-hover:text-blue-700 transition-colors text-center">
                {item.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularBrands;
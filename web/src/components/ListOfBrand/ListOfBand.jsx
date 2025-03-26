"use client"


const PopularBrands = () => {
  // Category data with icons
  const categories = [
    { name: 'Engine'},
    { name: 'Tires'},
    { name: 'Brakes'},
    { name: 'Transmission'},
    { name: 'Exhaust System' },
    { name: 'Radiator', },
    { name: 'Suspension', },
    { name: 'Ignition', },
    { name: 'Turbocharger' },
    { name: 'Catalytic Converter'},
    { name: 'Differential'},
    { name: 'Piston' },
    { name: 'Crankshaft'},
    { name: 'Headlights',  },
    { name: 'Rotors', },
    { name: 'Drivetrain', },
    { name: 'Spark Plugs' },
    { name: 'Oil System'},
    { name: 'Fuel System', },
    { name: 'Steering',  },
    { name: 'Battery'},
    { name: 'Oil Filter', },
    { name: 'Fuel Pump',},
    { name: 'Cooling Fan',},
    { name: 'Dashboard',},
    { name: 'Electrical System', },
    { name: 'Other'    }
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
              <h3 className="text-xl font-medium text-gray-900 group-hover:text-blue-700 transition-colors text-center">
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
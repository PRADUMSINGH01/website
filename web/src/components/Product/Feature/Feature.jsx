const FeaturesAndSpecs = () => {
    const features = [
      "Panoramic Sunroof",
      "Heated Seats",
      "Apple CarPlay/Android Auto",
      "Adaptive Cruise Control",
      "360-Degree Camera",
      "Wireless Charging"
    ];
  
    const specifications = [
      {
        category: "Engine",
        items: [
          { name: "Engine Type", value: "Turbocharged V4" },
          { name: "Displacement", value: "2.0L" },
          { name: "Horsepower", value: "250 hp" },
          { name: "Torque", value: "273 lb-ft" },
        ]
      },
      {
        category: "Dimensions",
        items: [
          { name: "Length", value: "186.5 in" },
          { name: "Width", value: "72.4 in" },
          { name: "Height", value: "56.9 in" },
          { name: "Wheelbase", value: "112.2 in" },
        ]
      },
      {
        category: "Performance",
        items: [
          { name: "0-60 mph", value: "6.2s" },
          { name: "Top Speed", value: "130 mph" },
          { name: "Fuel Economy", value: "28 mpg combined" },
          { name: "Drive Type", value: "AWD" },
        ]
      },
      {
        category: "Capacity",
        items: [
          { name: "Seating", value: "5 Adults" },
          { name: "Cargo Space", value: "15.1 cu ft" },
          { name: "Fuel Tank", value: "14.3 gal" },
          { name: "Towing Capacity", value: "1,500 lbs" },
        ]
      }
    ];
  
    return (
      <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8  text-black">
        <div className="max-w-7xl mx-auto">
          {/* Features Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Key Features</h2>
            <div className="flex flex-wrap gap-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center bg-white px-4 py-3 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 text-green-600 mr-2" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
  
          {/* Specifications Section */}
          <div>
            <h2 className="text-2xl font-bold mb-8">Technical Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {specifications.map((spec, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <h3 className="ml-3 text-lg font-semibold">{spec.category}</h3>
                  </div>
                  <dl className="space-y-3">
                    {spec.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex justify-between">
                        <dt className="text-gray-600">{item.name}</dt>
                        <dd className="text-gray-900 font-medium">{item.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default FeaturesAndSpecs;
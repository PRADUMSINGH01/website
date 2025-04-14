import React from 'react';
import { FiSettings, FiDroplet, FiUsers, FiGrid, FiStar, FiEye } from 'react-icons/fi';

const Models = ({ primaryColor, secondaryColor, textColor, backgroundColor, lightBg, accentColor }) => {
  const models = [
    {
      id: 1,
      name: 'Camry',
      year: 2023,
      price: '$26,320',
      image: 'https://via.placeholder.com/600x400/4A5568/EDF2F7?Text=Camry',
      specs: {
        engine: '2.5L 4-cylinder',
        transmission: '8-speed automatic',
        fuel: 'Hybrid available',
        seats: 5,
      },
    },
    {
      id: 2,
      name: 'RAV4',
      year: 2023,
      price: '$28,275',
      image: 'https://via.placeholder.com/600x400/2D3748/E2E8F0?Text=RAV4',
      specs: {
        engine: '2.5L 4-cylinder Hybrid',
        transmission: 'eCVT Automatic',
        fuel: '40 MPG Combined',
        seats: 5,
      },
    },
    {
      id: 3,
      name: 'Corolla',
      year: 2023,
      price: '$21,550',
      image: 'https://via.placeholder.com/600x400/1A202C/CBD5E0?Text=Corolla',
      specs: {
        engine: '1.8L 4-cylinder',
        transmission: 'CVT Automatic',
        fuel: '35 MPG Combined',
        seats: 5,
      },
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {models.map((model) => (
        <div
          key={model.id}
          className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          {/* Image with Overlay */}
          <div className="relative aspect-w-3 aspect-h-2">
            <img
              className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105"
              src={model.image}
              alt={model.name}
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
              <h3 className="text-lg font-semibold">{model.name}</h3>
              <p className="text-sm">{model.price}</p>
            </div>
          </div>

          {/* Details Section */}
          <div className="px-6 py-4">
            <div className="flex justify-between items-center mb-3">
              <span className={`text-sm text-${textColor}`}>{model.year}</span>
              <div className="flex items-center space-x-1 text-amber-400 text-sm">
                <FiStar />
                <span>5.0</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <FiSettings className={`w-4 h-4 text-${accentColor}`} />
                <span className={`text-${secondaryColor}`}>{model.specs.engine}</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiDroplet className={`w-4 h-4 text-${accentColor}`} />
                <span className={`text-${secondaryColor}`}>{model.specs.fuel}</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiGrid className={`w-4 h-4 text-${accentColor}`} />
                <span className={`text-${secondaryColor}`}>{model.specs.transmission}</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiUsers className={`w-4 h-4 text-${accentColor}`} />
                <span className={`text-${secondaryColor}`}>{model.specs.seats} Seats</span>
              </div>
            </div>
            <div className="mt-4">
              <button
                className={`inline-flex items-center rounded-md bg-${primaryColor} px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-${primaryColor}-700 focus:outline-none focus:ring-2 focus:ring-${primaryColor}-500 focus:ring-offset-2`}
              >
                View Details <FiEye className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Models;
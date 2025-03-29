"use client"
import { useState } from 'react';

const CompatibilityComponent = () => {
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedFuel, setSelectedFuel] = useState('');
  const [selectedEngine, setSelectedEngine] = useState('');

  // Sample compatible vehicles data
  const compatibleVehicles = [
    {
      model: 'Honda Civic',
      year: '2018-2023',
      engine: 'L15B7',
      power: 158,
      fuel: 'Petrol',
      engineType: '1.5L Turbocharged'
    },
    {
      model: 'Toyota Corolla',
      year: '2020-2024',
      engine: 'M20A-FKS',
      power: 169,
      fuel: 'Hybrid',
      engineType: '2.0L Dynamic Force'
    },
    {
      model: 'Ford Mustang',
      year: '2015-2023',
      engine: 'EcoBoost',
      power: 310,
      fuel: 'Petrol',
      engineType: '2.3L Turbocharged'
    },
    // Add more vehicles as needed
  ];

  // Filter vehicles based on selections
  const filteredVehicles = compatibleVehicles.filter(vehicle => {
    return (
      (!selectedYear || vehicle.year.includes(selectedYear)) &&
      (!selectedFuel || vehicle.fuel === selectedFuel) &&
      (!selectedEngine || vehicle.engineType === selectedEngine)
    );
  });

  // Get unique filter options
  const years = [...new Set(compatibleVehicles.flatMap(v => v.year.split('-').map(y => y.trim())))];
  const fuelTypes = [...new Set(compatibleVehicles.map(v => v.fuel))];
  const engineTypes = [...new Set(compatibleVehicles.map(v => v.engineType))];

  return (
    <div className="p-6 bg-gray-50 rounded-lg text-black">
      <h2 className="text-2xl font-bold mb-6">Vehicle Compatibility</h2>
      
      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <select 
          className="p-2 border rounded-md"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          <option value="">All Years</option>
          {years.map((year, index) => (
            <option key={index} value={year}>{year}</option>
          ))}
        </select>

        <select
          className="p-2 border rounded-md"
          value={selectedFuel}
          onChange={(e) => setSelectedFuel(e.target.value)}
        >
          <option value="">All Fuel Types</option>
          {fuelTypes.map((fuel, index) => (
            <option key={index} value={fuel}>{fuel}</option>
          ))}
        </select>

        <select
          className="p-2 border rounded-md"
          value={selectedEngine}
          onChange={(e) => setSelectedEngine(e.target.value)}
        >
          <option value="">All Engine Types</option>
          {engineTypes.map((engine, index) => (
            <option key={index} value={engine}>{engine}</option>
          ))}
        </select>
      </div>

      {/* Compatibility Table */}
      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-lg shadow-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left">Model</th>
              <th className="px-4 py-3 text-left">Year</th>
              <th className="px-4 py-3 text-left">Engine</th>
              <th className="px-4 py-3 text-left">Power (hp)</th>
              <th className="px-4 py-3 text-left">Fuel Type</th>
              <th className="px-4 py-3 text-left">Engine Type</th>
            </tr>
          </thead>
          <tbody>
            {filteredVehicles.map((vehicle, index) => (
              <tr 
                key={index}
                className="border-t hover:bg-gray-50 transition-colors"
              >
                <td className="px-4 py-3">{vehicle.model}</td>
                <td className="px-4 py-3">{vehicle.year}</td>
                <td className="px-4 py-3">{vehicle.engine}</td>
                <td className="px-4 py-3">{vehicle.power}</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {vehicle.fuel}
                  </span>
                </td>
                <td className="px-4 py-3">{vehicle.engineType}</td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {filteredVehicles.length === 0 && (
          <div className="text-center py-6 text-gray-500">
            No vehicles found matching your criteria
          </div>
        )}
      </div>
    </div>
  );
};

export default CompatibilityComponent;
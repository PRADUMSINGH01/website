"use client";
// components/SearchBar.js
import { useState } from 'react';
import { FaSearch, FaCar } from 'react-icons/fa';

export default function SearchByname() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedModification, setSelectedModification] = useState('');

  // Mock data
  const carModels = ['Model S', 'Model 3', 'Mustang', 'Civic', 'Corolla'];
  const modifications = ['Performance', 'Standard', 'Off-road', 'Sport'];
  const years = Array.from({ length: 34 }, (_, i) => 1990 + i).reverse();

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search logic
    console.log({
      searchQuery,
      selectedYear,
      selectedModel,
      selectedModification,
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8  border-blue-500 border mt-5 rounded-xl ">
<h2 className='text-3xl font-bold mb-3 text-center text-black bg-white'>Search by Vehicle</h2>

      <form onSubmit={handleSearch} className="space-y-6">
        {/* Search Input */}
      

        {/* Filters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Model Select */}
          <div className="space-y-1">
            <label className="block text-md  font-bold text-gray-700">
              Car Model
            </label>
            <select
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700"
            >
              <option value="">All Models</option>
              {carModels.map((model) => (
                <option key={model} value={model} className='overflow-hidden w-full'>
                  {model}
                </option>
              ))}
            </select>   
          </div>
     {/* Model */}
     <div className="space-y-1">
            <label className="block text-md  font-bold text-gray-700">
              Model
            </label>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="w-full px-3 py-2 overflow-hidden   flex rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
            >
              <option value="">All Models</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          {/* Year Select */}
          <div className="space-y-1">
            <label className="block text-md  font-bold text-gray-700">
              Year
            </label>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
            >
              <option value="">All Years</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          {/* Modification Select */}
          <div className="space-y-1">
            <label className="block text-md  font-bold text-gray-700">
              Modification
            </label>
            <select
              value={selectedModification}
              onChange={(e) => setSelectedModification(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
            >
              <option value="">All Versions</option>
              {modifications.map((mod) => (
                <option key={mod} value={mod}>
                  {mod}
                </option>
              ))}
            </select>
          </div>

          {/* Search Button */}
          <div className="space-y-1 flex items-end">
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
            >
              <FaCar className="h-5 w-5" />
              <span>Search Parts</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
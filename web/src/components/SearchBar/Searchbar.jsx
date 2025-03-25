"use client";

import { FiSearch, FiX } from 'react-icons/fi';
import { useState, useRef, useEffect } from 'react';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef(null);

  // Sample data - replace with your actual data source
  const partCategories = ['Engine', 'Transmission', 'Brakes', 'Suspension', 'Electrical'];
  const popularSearches = [
    'Toyota Camry 2018 Headlights',
    'Ford F-150 Brake Pads',
    'Honda Civic Oil Filter',
    'BMW 3 Series Battery',
    'Chevy Silverado Alternator'
  ];

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Implement your search logic here
      console.log('Searching for:', searchQuery);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
    // Optional: trigger search immediately when suggestion is clicked
    // handleSearch({ preventDefault: () => {} });
  };

  const clearSearch = () => {
    setSearchQuery('');
    setShowSuggestions(true);
  };

  return (
    <div className="flex justify-center w-full md:my-32 my-24">
    <div className="relative w-full max-w-2xl" ref={searchRef}>
      <form onSubmit={handleSearch} className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setShowSuggestions(true);
          }}
          onFocus={() => {
            setIsInputFocused(true);
            setShowSuggestions(true);
          }}
          onBlur={() => setIsInputFocused(false)}
          placeholder="Search by part number, vehicle, or category..."
          className="w-full py-3 pl-4 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm text-gray-700"
          aria-label="Search car parts"
        />

        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
          {searchQuery && (
            <button
              type="button"
              onClick={clearSearch}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Clear search"
            >
              <FiX size={18} />
            </button>
          )}
          <button
            type="submit"
            className="text-gray-500 hover:text-blue-600 transition-colors"
            aria-label="Submit search"
          >
            <FiSearch size={20} />
          </button>
        </div>
      </form>

      {/* Suggestions dropdown */}
      {showSuggestions && isInputFocused && (
        <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
          {/* Recent searches (could be from localStorage) */}
          {searchQuery.length === 0 && (
            <div className="p-2 border-b">
              <h3 className="px-2 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Recent Searches
              </h3>
              <ul>
                {['Honda Accord 2020', 'Toyota Corolla Spark Plug'].map((item) => (
                  <li
                    key={item}
                    className="px-4 py-2 hover:bg-blue-50 cursor-pointer text-sm flex items-center"
                    onClick={() => handleSuggestionClick(item)}
                  >
                    <FiSearch className="mr-2 text-gray-400" size={14} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Category suggestions */}
          {searchQuery.length === 0 && (
            <div className="p-2 border-b">
              <h3 className="px-2 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Categories
              </h3>
              <div className="flex flex-wrap gap-2 px-2 py-1">
                {partCategories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => handleSuggestionClick(category)}
                    className="text-xs bg-gray-100 hover:bg-blue-100 text-gray-700 px-3 py-1 rounded-full transition-colors"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Popular searches */}
          <div className="p-2">
            <h3 className="px-2 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Popular Right Now
            </h3>
            <ul>
              {popularSearches.map((item) => (
                <li
                  key={item}
                  className="px-4 py-2 hover:bg-blue-50 cursor-pointer text-sm"
                  onClick={() => handleSuggestionClick(item)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default SearchBar;
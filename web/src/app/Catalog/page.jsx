"use client"
import { useState } from 'react';
import { FiFilter, FiChevronDown, FiStar } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { Dialog } from '@headlessui/react';
import Link from 'next/link';
import Firstbadge from '@/components/bedge/Firstbadge';


const CatalogPage = () => {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedRating, setSelectedRating] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  });

  // Sample data
  const products = [
    {
      id: 1,
      name: 'Performance Air Filter',
      brand: 'BMC',
      price: 89.99,
      rating: 4,
      image: '/air-filter.jpg',
    },
    {
      id: 2,
      name: 'Performance Air Filter',
      brand: 'BMC',
      price: 49.99,
      rating: 1,
      image: '/air-filter.jpg',
    },
    {
      id: 3,
      name: 'Performance Air Filter',
      brand: 'BMC',
      price: 894.99,
      rating: 3,
      image: '/air-filter.jpg',
    },
    // Add more products...
  ];

  const brands = ['BMC', 'K&N', 'HKS', 'AEM', 'Injen'];

  const handleBrandSelect = (brand) => {
    setSelectedBrands(prev =>
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const handleEnquiryOpen = (product) => {
    setSelectedProduct(product);
    setIsEnquiryOpen(true);
  };

  const handleSubmitEnquiry = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Enquiry Data:', {
      ...formData,
      product: selectedProduct,
    });
    setIsEnquiryOpen(false);
    setFormData({ name: '', phone: '' });
  };

  const filteredProducts = products.filter(product => {
    const matchesBrand = selectedBrands.length === 0 || 
      selectedBrands.includes(product.brand);
    const matchesPrice = product.price >= priceRange[0] && 
      product.price <= priceRange[1];
    const matchesRating = product.rating >= selectedRating;
    return matchesBrand && matchesPrice && matchesRating;
  });

  return (
    <div className="min-h-screen bg-gray-50 mt-16 text-black  ">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
          <h1 className="text-2xl font-bold text-gray-900">Automotive Parts Catalog</h1>
          <div className="flex items-center space-x-4 w-full md:w-auto">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center space-x-2 px-4 py-2 border rounded-lg bg-white"
            >
              <FiFilter className="text-blue-500" />
              <span>Filters</span>
            </button>
            <select className="w-full md:w-48 px-4 py-2 border rounded-lg bg-white text-sm">
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Rating</option>
              <option>Newest</option>
            </select>
          </div>
        </div>

        <div className="lg:flex gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-64 lg:block ${showFilters ? 'block' : 'hidden'}`}>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold">Filters</h2>
                <FiFilter className="text-blue-500" />
              </div>

              <div className="space-y-8">
                {/* Price Range */}
                <div>
                  <h3 className="text-sm font-medium mb-4">Price Range</h3>
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-600 mt-2">
                    <span>0</span>
                    <span>{priceRange[1]}</span>
                  </div>
                </div>

                {/* Brands */}
                <div>
                  <h3 className="text-sm font-medium mb-4">Brands</h3>
                  <div className="space-y-3">
                    {brands.map(brand => (
                      <label
                        key={brand}
                        className="flex items-center space-x-3 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={selectedBrands.includes(brand)}
                          onChange={() => handleBrandSelect(brand)}
                          className="rounded text-blue-500 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Ratings */}
                <div>
                  <h3 className="text-sm font-medium mb-4">Rating</h3>
                  <div className="space-y-2">
                    {[4, 3, 2, 1].map(rating => (
                      <button
                        key={rating}
                        onClick={() => setSelectedRating(rating)}
                        className={`flex items-center space-x-2 w-full p-2 rounded-lg text-sm ${
                          selectedRating === rating
                            ? 'bg-blue-50 text-blue-500'
                            : 'hover:bg-gray-50'
                        }`}
                      >
                        {[...Array(5)].map((_, i) => (
                          <FiStar
                            key={i}
                            className={`w-4 h-4 ${
                              i < rating ? 'text-yellow-400' : 'text-gray-200'
                            }`}
                          />
                        ))}
                        <span>& up</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">

            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">


              {filteredProducts.map(product => (
                
                <div
                  key={product.id}
                  className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-contain mb-4"
                  />
                  <div className="space-y-3">
                    <h3 className="font-medium text-gray-900">{product.name}</h3>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <FiStar
                          key={i}
                          className={`w-4 h-4 ${
                            i < product.rating ? 'text-yellow-400' : 'text-gray-200'
                          }`}
                        />
                      ))}
                    </div>
                      <span className="text-lg font-bold text-blue-500">
                       Price : {product.price.toFixed(2)}
                      </span>
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-2">
                        <a
                          href={`https://wa.me/?text=Hi, I'm interested in ${product.name} (ID: ${product.id})`}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-lg bg-green-50 text-green-600 hover:bg-green-100"
                        >
                          <FaWhatsapp className="w-5 h-5" />
                        </a>
                        <button
                          onClick={() => handleEnquiryOpen(product)}
                          className="px-4 py-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 text-sm"
                        >
                          Enquiry Now
                        </button>

                    
                  <Link
                        
                          className="px-2 py-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 text-sm" 
                          href={`Catalog/${product.id}`}
                        >
                          Read view
                        </Link> 
                      </div>

                      
                    </div>
                  </div>

                </div>
              ))}
            </div>



          </div>
        </div>

        <div>
      {/* Button to Open Enquiry Form */}
      <button
        onClick={() => setIsEnquiryOpen(false)}
        className="hidden  
         bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
       
      </button>

      {/* Enquiry Modal */}
      {isEnquiryOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4 relative">
            <h3 className="text-lg font-bold mb-4">Product Enquiry</h3>

            {/* Product Details */}
            {selectedProduct && (
              <div className="mb-4 p-4 bg-gray-100 rounded-lg">
                <p className="font-medium">{selectedProduct.name}</p>
                <p className="text-sm text-gray-600">Product ID: {selectedProduct.id}</p>
              </div>
            )}

            {/* Enquiry Form */}
            <form onSubmit={handleSubmitEnquiry} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border rounded-lg"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Phone Number</label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-2 border rounded-lg"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              {/* Buttons */}
              <div className="flex space-x-3 mt-4">
                <button
                  type="submit"
                  className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                >
                  Submit Enquiry
                </button>
                <button
                  type="button"
                  onClick={() => setIsEnquiryOpen(false)}
                  className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
      </div>

   
    </div>
  );
};

export default CatalogPage;
import Link from 'next/link';
import { FaCar, FaRegQuestionCircle } from 'react-icons/fa';
import { GiCarWheel } from 'react-icons/gi';
import { SiToyota, SiHonda, SiBmw, SiMercedes, SiAudi, SiVolkswagen, SiFord } from 'react-icons/si';

const SearchByCatCard    = () => {
  // Brand data with icons
  const brands = [
    { name: 'Toyota', icon: <SiToyota className="w-full h-full" /> },
    { name: 'Honda', icon: <SiHonda className="w-full h-full" /> },
    { name: 'BMW', icon: <SiBmw className="w-full h-full" /> },
    { name: 'Mercedes', icon: <SiMercedes className="w-full h-full" /> },
    { name: 'Audi', icon: <SiAudi className="w-full h-full" /> },
    { name: 'Volkswagen', icon: <SiVolkswagen className="w-full h-full" /> },
    { name: 'Ford', icon: <SiFord className="w-full h-full" /> },
    { name: 'Other', icon: <FaRegQuestionCircle className="w-full h-full" /> },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
      Search by Brand
      </h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {brands.map((brand, index) => (
          <div
            key={brand.name}
            className="group relative bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-4 cursor-pointer border border-gray-100 hover:border-blue-200"
          >
            <Link href={`/Vehical/${brand.name}`}>
            <div className="flex flex-col items-center">
              {/* Brand Icon Container */}
              <div className="w-20 h-20 mb-4 text-gray-700 group-hover:text-blue-600 transition-colors">
                {brand.icon}
              </div>
              
              {/* Brand Name */}
              <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-700 transition-colors text-center">
                {brand.name}
              </h3>
            </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Optional View All Button */}
      <div className="mt-8 flex justify-center">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium">
          View All Brands
        </button>
      </div>
    </div>
  );
};




export default SearchByCatCard;
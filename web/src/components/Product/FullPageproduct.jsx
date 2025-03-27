import { FaCartPlus, FaCheckCircle, FaRegStar, FaStar } from 'react-icons/fa';

const CarPartCard = ({ part }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div className="grid grid-cols-2 gap-4">
          {part.images.map((image, index) => (
            <div key={index} className="aspect-square relative group overflow-hidden rounded-xl">
              <img
                src={image}
                alt={`${part.name} ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          {/* Title and Price */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{part.name}</h1>
            <div className="mt-2 flex items-center space-x-2">
              <span className="text-2xl font-bold text-blue-500">
                ${part.price.toFixed(2)}
              </span>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`w-5 h-5 ${i < part.rating ? 'text-yellow-400' : 'text-gray-300'}`}
              />
            ))}
            <span className="ml-2 text-gray-600">({part.reviews} reviews)</span>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-900">Product Description</h3>
            <p className="text-gray-600 leading-relaxed">{part.description}</p>
          </div>

          {/* Specifications */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-900">Key Features</h3>
            <ul className="space-y-2">
              {part.specs.map((spec, index) => (
                <li key={index} className="flex items-center space-x-2 text-gray-600">
                  <FaCheckCircle className="w-4 h-4 text-blue-500" />
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Add to Cart */}
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transition-colors duration-200">
            <FaCartPlus className="w-5 h-5" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

// Sample data
const samplePart = {
  name: "Premium Turbocharger Kit",
  price: 899.99,
  rating: 4,
  reviews: 128,
  description: "High-performance turbocharger kit designed for maximum boost and efficiency. Features advanced ball bearing technology and CNC-machined components for superior durability.",
  images: [
    "/turbo-1.jpg",
    "/turbo-2.jpg",
    "/turbo-3.jpg",
    "/turbo-4.jpg"
  ],
  specs: [
    "Stainless Steel Housing",
    "360° Ball Bearing Core",
    "Includes Intercooler Piping",
    "500+ HP Capability",
    "5-Year Warranty"
  ]
};

export default function FullProductPage() {
  return <CarPartCard part={samplePart} />;
}
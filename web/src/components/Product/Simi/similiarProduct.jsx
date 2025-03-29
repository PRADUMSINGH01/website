const SimilarProducts = () => {
    const products = [
      {
        id: 1,
        name: 'Wireless Headphones',
        price: 2999,
        image: '/images/headphones.jpg',
        rating: 4.5
      },
      {
        id: 2,
        name: 'Smart Watch',
        price: 4999,
        image: '/images/smartwatch.jpg',
        rating: 4.2
      },
      {
        id: 3,
        name: 'Bluetooth Speaker',
        price: 1999,
        image: '/images/speaker.jpg',
        rating: 4.8
      },
      {
        id: 4,
        name: 'Gaming Mouse',
        price: 1499,
        image: '/images/mouse.jpg',
        rating: 4.4
      },
      {
        id: 5,
        name: 'Mechanical Keyboard',
        price: 2499,
        image: '/images/keyboard.jpg',
        rating: 4.6
      }
    ];
  
    return (
      <section className="px-4 py-8 bg-gray-50 text-black   ">
        <h2 className="text-2xl font-bold mb-6">Similar Products</h2>
        
        <div className="flex overflow-x-auto pb-4 space-x-4 md:grid md:grid-cols-3 lg:grid-cols-5 md:gap-6 md:space-x-0 md:overflow-hidden">
          {products.map((product) => (
            <div 
              key={product.id}
              className="min-w-[200px] bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 snap-start"
            >
              <div className="p-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-contain rounded-t-lg"
                />
                <div className="p-3">
                  <h3 className="font-medium text-gray-900 truncate">{product.name}</h3>
                  
                  <div className="flex items-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${i < product.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
  
                  <div className="mt-2 flex items-center justify-between">
                    <p className="text-lg font-semibold">₹{product.price.toLocaleString()}</p>
                    <button className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition-colors">
                      View
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default SimilarProducts;
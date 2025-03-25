import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope, FaCreditCard } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Us */}
          <div>
            <h3 className="text-xl font-bold mb-4">AutoParts Pro</h3>
            <p className="text-gray-400 mb-4">
              Your trusted source for high-quality car parts and accessories since 2010. We provide genuine and aftermarket parts for all makes and models.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Shop</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">New Arrivals</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Best Sellers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Special Offers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Contact Us</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-xl font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">My Account</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Order Tracking</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Wishlist</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Shipping Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Returns & Refunds</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">FAQs</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-400">123 Auto Street, Motor City, MC 12345, USA</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3" />
                <span className="text-gray-400">support@autopartspro.com</span>
              </li>
              <li className="flex items-center">
                <FaCreditCard className="mr-3" />
                <span className="text-gray-400">Secure Payment Options</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} AutoParts Pro. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
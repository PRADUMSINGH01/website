import Link from "next/link";
import Callus from "../CallUs/Callus";

const NavbarLink = () => {
  const navigationLinks = [
    { name: "Home", path: "/" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="w-full bg-white shadow-sm h-full items-center flex">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Navigation Links */}
          <ul className="flex flex-1 items-center space-x-4">
            {navigationLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  className="relative px-3 py-2 text-gray-700 transition-all hover:text-blue-600
                             after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 
                             after:bg-blue-600 after:transition-all after:duration-300
                             hover:after:w-full"
                  aria-label={`Navigate to ${link.name}`}
                >
                  <span className="text-sm font-medium tracking-wide">
                    {link.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Call Us Component */}
          <div className="flex items-center gap-4">
            <Callus />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarLink;
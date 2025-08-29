import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Service", path: "/service" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="w-full fixed top-0 py-4  flex items-center justify-between px-8">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-blue-600">Easy Find</h1>

      {/* Navigation Links */}
      <div className="flex items-center gap-12">
        <nav>
          <ul className="flex space-x-12">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`${location.pathname === link.path
                      ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                      : "text-gray-900"
                    } hover:text-blue-500 transition-colors`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Login Button */}
        <div>
          <button className="ml-4 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Login
          </button>
        </div>
      </div>




    </header>
  );
}

export default Navbar;

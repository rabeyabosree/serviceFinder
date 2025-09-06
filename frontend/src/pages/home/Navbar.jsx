import { Link } from "react-router-dom";
import { FcServices } from "react-icons/fc";
import { MdMenuOpen, MdClose } from "react-icons/md";
import { useState } from "react";

function Navbar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full py-4 px-8 z-[100] bg-transparent backdrop-blur-sm">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="font-bold text-2xl flex items-center gap-2 text-white cursor-pointer">
          EasyFind <span className="text-3xl"><FcServices /></span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-12">
          {navLinks.map((navmenu) => (
            <Link
              key={navmenu.name}
              to={navmenu.path}
              className="text-white font-semibold hover:text-green-400 transition-colors duration-200"
            >
              {navmenu.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Login */}
        <button className="hidden md:block px-5 py-2 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-lg font-semibold shadow hover:scale-105 transition">
          Login
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-3xl text-white"
          onClick={() => setIsOpenMenu(!isOpenMenu)}
        >
          {isOpenMenu ? <MdClose /> : <MdMenuOpen />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpenMenu && (
        <nav className="md:hidden bg-white/95 px-8 py-4 flex flex-col gap-4 shadow-lg backdrop-blur-md rounded-b-2xl">
          {navLinks.map((navmenu) => (
            <Link
              key={navmenu.name}
              to={navmenu.path}
              onClick={() => setIsOpenMenu(false)}
              className="font-semibold text-gray-800 hover:text-green-700 transition transform hover:scale-105"
            >
              {navmenu.name}
            </Link>
          ))}
          <button className="px-5 py-2 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-lg font-semibold shadow hover:scale-105 transition">
            Login
          </button>
        </nav>
      )}
    </header>
  );
}

export default Navbar;

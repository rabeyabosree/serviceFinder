import React, { useState } from "react";
import {
  FaSearch,
  FaWrench,
  FaBolt,
  FaChalkboardTeacher,
  FaUtensils,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Hero() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    if (query || location) {
      navigate(`/search?query=${query}&location=${location}`);
    }
  };

  const services = [
    { name: "Plumber", icon: <FaWrench className="text-indigo-600 text-2xl" />, color: "bg-indigo-100" },
    { name: "Electrician", icon: <FaBolt className="text-yellow-500 text-2xl" />, color: "bg-yellow-100" },
    { name: "Tutor", icon: <FaChalkboardTeacher className="text-green-500 text-2xl" />, color: "bg-green-100" },
    { name: "Home Cook", icon: <FaUtensils className="text-red-500 text-2xl" />, color: "bg-red-100" },
  ];

  return (
    <div className="relative w-full h-[100vh]">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/src/assets/traveller-with-map-mobile-phone-medium-shot.jpg')] bg-cover bg-center -z-10" />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 -z-10" />

      {/* Hero Content */}
      <section className="relative z-10 pt-32 md:pt-40 text-center text-white w-full max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Find Local Services Near You
        </h1>
        <p className="text-lg md:text-xl mb-8 drop-shadow-md">
          Search trusted providers for your daily needs
        </p>

        {/* Search Bar */}
        <div className="flex flex-col md:flex-row bg-white/30 backdrop-blur-md rounded-full overflow-hidden shadow-lg max-w-3xl mx-auto">
          <input
            type="text"
            placeholder="What e.g. plumber, electrician..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search services"
            className="flex-1 px-6 py-3 text-white outline-none placeholder-gray-400"
          />
          <input
            type="text"
            placeholder="Where e.g. your city"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            aria-label="Search location"
            className="flex-1 px-6 py-3 text-white outline-none placeholder-gray-400 border-t md:border-t-0 md:border-l border-white/40"
          />
          <button
            type="button"
            onClick={handleSearch}
            aria-label="Search"
            className="bg-green-600 hover:bg-green-700 text-white px-6 flex items-center justify-center transition-colors duration-300"
          >
            <FaSearch className="w-5 h-5" />
          </button>
        </div>

        {/* Popular Services */}
        <div className="mt-16 text-left w-full max-w-4xl mx-auto px-6 sm:px-14">
          <h2 className="text-xl font-semibold mb-6">Popular Services</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-12">
            {services.map((service) => (
              <div
                key={service.name}
                role="button"
                tabIndex={0}
                onClick={() =>
                  navigate(`/service/${service.name.toLowerCase()}`)
                }
                onKeyDown={(e) =>
                  e.key === "Enter" &&
                  navigate(`/service/${service.name.toLowerCase()}`)
                }
                className="flex flex-col items-center py-4 bg-gray-200/30 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-full ${service.color} mb-2`}
                >
                  {service.icon}
                </div>
                <p className="text-gray-900 font-medium">{service.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Provider CTA */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col md:flex-row items-center gap-4 bg-white backdrop-blur-2xl rounded-2xl shadow-lg px-6 py-4">
          <h2 className="text-lg font-medium text-gray-700">
            Are you a service provider?
          </h2>
          <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-lg font-semibold shadow-md hover:scale-105 hover:shadow-lg transition">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;











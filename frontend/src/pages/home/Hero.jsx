import React, { useState } from "react";
import {
  FaSearch,
  FaWrench,
  FaBolt,
  FaChalkboardTeacher,
  FaUtensils,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar';


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
    <div className="relative w-full h-[85vh]">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/src/assets/traveller-with-map-mobile-phone-medium-shot.jpg')] bg-cover bg-center -z-10" />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 -z-10" />
      

      {/* Hero Content */}
      <section className="relative z-10 pt-32 md:pt-50 text-center text-white w-full max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Explore Amazing Destinations
        </h1>
        <p className="text-lg md:text-xl mb-8 drop-shadow-md">
          Find great places to stay, eat, shop, or visit from local experts.
        </p>

        {/* Search Bar */}
        <div className="flex flex-col md:flex-row bg-white/30 backdrop-blur-md rounded-full overflow-hidden shadow-lg max-w-3xl mx-auto">
          <input
            type="text"
            placeholder="What e.g. shopping, restaurant..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search services"
            className="flex-1 px-6 py-3 text-gray-700 outline-none placeholder-gray-400"
          />
          <input
            type="text"
            placeholder="Where e.g. your city"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            aria-label="Search location"
            className="flex-1 px-6 py-3 text-gray-700 outline-none placeholder-gray-400 border-t md:border-t-0 md:border-l border-white/40"
          />
          <button
            type="button"
            onClick={handleSearch}
            aria-label="Search"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 flex items-center justify-center transition-colors duration-300"
          >
            <FaSearch className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Service Provider CTA */}
      <div className="relative z-10 mt-20 md:mt-30 text-center max-w-[450px] mx-auto p-4 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-2 ">
        <h2 className="text-xl font-bold text-gray-900 flex items-center justify-center md:justify-start">
          Are you a service provider?
        </h2>
        <button
          onClick={() => navigate("/register")}
          className="bg-indigo-600 text-white px-4 py-2 rounded-xl font-semibold hover:bg-indigo-700 transition-colors duration-300"
        >
          Join Now
        </button>
      </div>

      {/* Popular Services */}
      <div className="absolute -bottom-15 left-1/2 transform -translate-x-1/2 z-20 w-full max-w-4xl px-14">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {services.map((service) => (
            <div
              key={service.name}
              onClick={() => navigate(`/service/${service.name.toLowerCase()}`)}
              className="flex flex-col items-center py-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className={`w-12 h-12 flex items-center justify-center rounded-full ${service.color} mb-2`}>
                {service.icon}
              </div>
              <p className="text-gray-700 font-medium">{service.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;










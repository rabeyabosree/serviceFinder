import React from "react";
import Navbar from "./Navbar";
import {
  FaSearch,
  FaWrench,
  FaBolt,
  FaChalkboardTeacher,
  FaUtensils,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";


function Hero() {
  const navigate = useNavigate()
  return (
    <div className="relative w-full h-[85vh]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center -z-10"
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 -z-10" />

      {/* Navbar */}
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* Hero Content */}
      <section className="relative z-10 pt-32 md:pt-40 text-center text-white w-full max-w-4xl mx-auto px-4">
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
            aria-label="Search services"
            className="flex-1 px-6 py-3 text-gray-700 outline-none placeholder-gray-400"
          />
          <input
            type="text"
            placeholder="Where e.g. your city"
            aria-label="Search location"
            className="flex-1 px-6 py-3 text-gray-700 outline-none placeholder-gray-400 border-t md:border-t-0 md:border-l border-white/40"
          />
          <button
            aria-label="Search"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 flex items-center justify-center transition-colors duration-300"
          >
            <FaSearch className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Service Provider CTA */}
      <div className="relative z-10 mt-16 md:mt-32 text-center max-w-xl mx-auto p-4 rounded-2xl bg-white/20 backdrop-blur-md shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
        <h3 className="text-xl font-bold text-indigo-800 flex items-center justify-center md:justify-start">
          Are you a service provider?
        </h3>
        <button onClick={()=> navigate('/register')} className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors duration-300">
          Join Now
        </button>
      </div>

      {/* Popular Services (positioned -bottom and horizontally center) */}
      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 z-20 w-full max-w-5xl px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
            <FaWrench className="text-3xl text-indigo-600 mb-2 bg-indigo-100 rounded-full p-3" />
            <p className="text-gray-700 font-medium">Plumber</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
            <FaBolt className="text-3xl text-yellow-500 mb-2 bg-yellow-100 rounded-full p-3" />
            <p className="text-gray-700 font-medium">Electrician</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
            <FaChalkboardTeacher className="text-3xl text-green-500 mb-2 bg-green-100 rounded-full p-3" />
            <p className="text-gray-700 font-medium">Tutor</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
            <FaUtensils className="text-3xl text-red-500 mb-2 bg-red-100 rounded-full p-3" />
            <p className="text-gray-700 font-medium">Home Cook</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;









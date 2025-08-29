import React from "react";
import Navbar from "./Navbar";
import {
  FaMapMarkerAlt,
  FaSearch,
  FaWrench,
  FaBolt,
  FaChalkboardTeacher,
  FaUtensils,
} from "react-icons/fa";

function Hero() {
  return (
    <div className="relative h-screen w-full bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center">
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Navbar */}
      <div>
        <Navbar />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Find Local Services Instantly
        </h1>
        <p className="text-lg text-gray-200 mb-8">
          Search trusted professionals near you with ease
        </p>

        {/* Search Section */}
        <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-4 flex flex-col md:flex-row items-center gap-3">
          {/* Service Input */}
          <input
            type="text"
            placeholder="What service are you looking for?"
            className="w-full md:flex-1 p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          {/* Location Input */}
          <div className="relative w-full md:w-1/3">
            <FaMapMarkerAlt className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Enter location"
              className="w-full p-3 pl-10 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Search Button */}
          <button className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition">
            <FaSearch /> Search
          </button>
        </div>

        {/* Service Provider CTA (Now ABOVE category) */}
        <div className="mt-12 bg-indigo-100 w-full max-w-3xl p-6 rounded-2xl text-center shadow-md">
          <h3 className="text-xl font-bold text-indigo-800">
            Are you a service provider?
          </h3>
          <p className="text-gray-700 mb-4">
            Join our platform and reach thousands of customers today.
          </p>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition">
            Join Now
          </button>
        </div>

        {/* Popular Services */}
        <div className="mt-12 w-full max-w-4xl">
          <h3 className="text-xl font-semibold text-white mb-6">
            Popular Services
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center p-4 bg-white rounded-2xl shadow hover:shadow-lg transition cursor-pointer">
              <FaWrench className="text-3xl text-indigo-600 mb-2" />
              <p className="text-gray-700 font-medium">Plumber</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-2xl shadow hover:shadow-lg transition cursor-pointer">
              <FaBolt className="text-3xl text-yellow-500 mb-2" />
              <p className="text-gray-700 font-medium">Electrician</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-2xl shadow hover:shadow-lg transition cursor-pointer">
              <FaChalkboardTeacher className="text-3xl text-green-500 mb-2" />
              <p className="text-gray-700 font-medium">Tutor</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-2xl shadow hover:shadow-lg transition cursor-pointer">
              <FaUtensils className="text-3xl text-red-500 mb-2" />
              <p className="text-gray-700 font-medium">Home Cook</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;






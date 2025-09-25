import React from "react";
import { useNavigate } from "react-router-dom";
import profile from "../../../assets/traveller-with-map-mobile-phone-medium-shot.jpg";
import { FaCalendarCheck } from "react-icons/fa";
import { GiRoundStar } from "react-icons/gi";

function Services() {
  const navigate = useNavigate();

  const services = [
    { id: 1, name: "Alamin", service: "Plumber", profile, availability: "9 AM - 5 PM", rating: 4, price: 388 },
    { id: 2, name: "Juha", service: "Electrician", profile, availability: "9 AM - 5 PM", rating: 3, price: 300 },
    { id: 3, name: "Nahor", service: "Tutor", profile, availability: "9 AM - 5 PM", rating: 5, price: 400 },
    { id: 4, name: "Tekka", service: "Tailor", profile, availability: "9 AM - 5 PM", rating: 2, price: 250 },
    { id: 5, name: "Bela", service: "Blogger", profile, availability: "9 AM - 5 PM", rating: 4, price: 388 },
     { id: 5, name: "Bela", service: "Blogger", profile, availability: "9 AM - 5 PM", rating: 4, price: 388 },
  ];

  // Function to render stars based on rating
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <GiRoundStar
        key={i}
        className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-400"}`}
      />
    ));
  };

  return (
    <section className="bg-DustyRose w-full py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-10 text-start text-lavender drop-shadow-lg">Services</h1>

        {/* Service list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={()=> navigate(`/services/${service.id}`)}
              className="flex flex-col bg-white backdrop-blur-md rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition-transform cursor-pointer"
            >
              {/* Top row: Profile info + Book Now */}
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-4">
                  <img
                    src={service.profile || "https://via.placeholder.com/50"}
                    alt={`${service.name} profile`}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h2 className="font-semibold text-lg text-gray-700">{service.name}</h2>
                    <p className="text-lavender">{service.service}</p>
                  </div>
                </div>

                {/* Book Now button */}
                <button
                  className="flex items-center gap-2 bg-aqua text-white px-4 py-2 rounded-lg font-semibold hover:scale-105 hover:bg-gradient-to-r from-lavender to-lavender/70 transition-all"
                  onClick={() => navigate(`/services/${service.id}`)}
                >
                  <FaCalendarCheck className="w-4 h-4" /> Book
                </button>
              </div>

              {/* Bottom row: Price, rating, availability */}
              <div className="flex justify-between items-center w-full text-sm font-medium mt-1">
                {/* Price */}
                <p className=" text-gray-800 px-3 py-1 rounded-lg">${service.price}</p>

                {/* Rating and Availability */}
                <div className="flex items-center gap-3">
                  {/* Dynamic Stars */}
                  <span className="flex items-center gap-0.5">{renderStars(service.rating)}</span>

                  {/* Availability badge */}
                  <span className=" text-gray-800 px-2 py-1 rounded-lg">{service.availability}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;






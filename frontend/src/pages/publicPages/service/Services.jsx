import React from "react";
import { useNavigate } from "react-router-dom";
import profile from "../../../assets/traveller-with-map-mobile-phone-medium-shot.jpg";
import { GiRoundStar } from "react-icons/gi";

function Services() {
  const navigate = useNavigate();

  const services = [
    { id: 1, name: "Alamin", service: "Plumber", profile: profile, rating: 4, price: 388 },
    { id: 2, name: "Juha", service: "Electrician", profile: "https://i.pravatar.cc/150?img=4", rating: 3, price: 300 },
    { id: 3, name: "Nahor", service: "Tutor", profile: "https://i.pravatar.cc/150?img=3", rating: 5, price: 400 },
    { id: 4, name: "Tekka", service: "Tailor", profile: "https://i.pravatar.cc/150?img=2", rating: 2, price: 250 }
    
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <GiRoundStar
        key={i}
        className={`w-5 h-5 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
      />
    ));
  };

  return (
    <section className=" w-full py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-10 text-lavender">Services</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col p-4 cursor-pointer hover:scale-105 transition-transform"
              onClick={() => navigate(`/services/${service.id}`)}
            >
              {/* Profile Image */}
              <img
                src={service.profile || "https://via.placeholder.com/150"}
                alt={service.name}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />

              {/* Name & Service */}
              <h2 className="text-xl font-semibold text-gray-700">{service.name}</h2>
              <p className="text-lavender mb-1">{service.service}</p>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-1">{renderStars(service.rating)}</div>

              {/* Price */}
              <p className="text-gray-800 font-medium mb-2">${service.price}</p>

              {/* Book Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/booking/${service.id}`);
                }}
                className="bg-aqua text-white px-5 py-2 rounded-lg font-semibold hover:bg-gradient-to-r from-lavender to-lavender/70 transition-all"
              >
                Book
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;







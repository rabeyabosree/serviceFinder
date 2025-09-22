import React from "react";
import { useParams } from "react-router-dom";

function ServiceDetails() {
  const { id } = useParams();

  const services = [
    {
      id: 1,
      name: "Alamin",
      service: "Plumber",
      profile: "",
      description: "I am a skilled plumber with 8 years of experience",
      location: "Dhaka",
      availability: "9 AM - 5 PM",
      rating: 4,
      price: 388,
    },
    {
      id: 2,
      name: "Juha",
      service: "Electrician",
      profile: "",
      description: "I am a skilled electrician with 8 years of experience",
      location: "Dhaka",
      availability: "9 AM - 5 PM",
      rating: 4,
      price: 388,
    },
    {
      id: 3,
      name: "Nahor",
      service: "Tutor",
      profile: "",
      description: "I am a skilled tutor with 8 years of experience",
      location: "Dhaka",
      availability: "9 AM - 5 PM",
      rating: 4,
      price: 388,
    },
  ];

  // just the selected service
  const service = services.find((s) => s.id === Number(id));

  if (!service) {
    return <h2 className="text-center mt-10">Service not found</h2>;
  }

  return (
    <div className="px-6 max-w-4xl mx- mt-20 bg-aqua/30">
      <div className="shadow-md rounded-2xl p-4 flex flex-col gap-3">
        {/* Profile Info */}
        <div className="flex items-center gap-3">
          <img
            src={service.profile || "https://via.placeholder.com/60"}
            alt={`${service.name} profile`}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h2 className="text-lg font-semibold">{service.name}</h2>
            <p className="text-gray-500">{service.service}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 text-sm">{service.description}</p>

        {/* Details */}
        <div className="text-sm text-gray-600">
          <p className="flex flex-row"><strong> Location:</strong> {service.location}</p>
          <p><strong> Price:</strong> ${service.price}</p>
          <p><strong>⭐ Rating:</strong> {service.rating}</p>
          <p><strong> Availability:</strong> {service.availability}</p>
        </div>

        {/* Action */}
        <button className="mt-3 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
          Book Now
        </button>
      </div>
    </div>
  );
}

export default ServiceDetails;


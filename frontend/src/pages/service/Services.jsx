import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Services() {
  const [query, setQuery] = useState("");

  const services = [
    { id: 1, name: "Alamin", service: "Plumber", profile: "", availability: "9 AM - 5 PM", rating: 4, price: 388 },
    { id: 2, name: "Juha", service: "Electrician", profile: "", availability: "9 AM - 5 PM", rating: 4, price: 388 },
    { id: 3, name: "Nahor", service: "Tutor", profile: "", availability: "9 AM - 5 PM", rating: 4, price: 388 },
    { id: 4, name: "Tekka", service: "Tailor", profile: "", availability: "9 AM - 5 PM", rating: 4, price: 388 },
    { id: 5, name: "Bela", service: "Blogger", profile: "", availability: "9 AM - 5 PM", rating: 4, price: 388 },
  ];
  const navigate = useNavigate()

  // simple filter by service name
  const filtered = services.filter((s) =>
    s.service.toLowerCase().includes(query.toLowerCase())
  );

  return (

    <section className="bg-DustyRose w-full p-8 h-screen  mx-auto pt-20 flex items-start justify-start ">
      <div className="max-w-6xl ">
        <h1 className="text-2xl font-bold mb-4">Services</h1>

        {/* Search bar */}
        <div className="flex gap-2 mb-6 w-xl ">
          <input
            type="text"
            placeholder="Search by service type or location"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border rounded-md px-3 py-2 w-full"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Filter
          </button>
        </div>

        {/* Service list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((service) => (
            <div
              key={service.name}
              className="border-lavender border rounded-lg p-4 flex flex-1 items-center gap-16"
              onClick={() => navigate(`/services/${service.id}`)}
            >
              <div className="flex items-center gap-3">
                <img
                  src={service.profile || "https://via.placeholder.com/50"}
                  alt={`${service.name} profile`}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h2 className="font-semibold">{service.name}</h2>
                  <p className="text-gray-500">{service.service}</p>
                </div>
              </div>

              <div className="text-sm text-black mt-2 flex flex-1 gap-2">
                <p> ${service.price}</p>
                <div className="flex flex-1 gap-0.5">
                  <p>⭐{service.rating}</p>
                  <p>  {service.availability}</p>
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

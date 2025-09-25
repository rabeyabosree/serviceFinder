import React, { useState } from "react";

function ProviderRegister() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    service: "",
    location: "",
    availability: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Provider Register Data:", formData);
    // 🔹 API call can be added here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col space-y-4 text-left"
    >
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
        className="border-gray-400 border rounded-2xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="border-gray-400 border rounded-2xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="border-gray-400 border rounded-2xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <input
        type="text"
        name="service"
        placeholder="Service (e.g., Plumber, Electrician)"
        value={formData.service}
        onChange={handleChange}
        className="border-gray-400 border rounded-2xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <input
        type="text"
        name="location"
        placeholder="Service Area / Location"
        value={formData.location}
        onChange={handleChange}
        className="border-gray-400 border rounded-2xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <select
        name="availability"
        value={formData.availability}
        onChange={handleChange}
        className="border-gray-400 border rounded-2xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="">Select Availability</option>
        <option value="Full Time">Full Time</option>
        <option value="Part Time">Part Time</option>
        <option value="Weekends">Weekends</option>
      </select>

      <button
        type="submit"
        className="bg-aqua text-white py-3 rounded-2xl font-semibold hover:aqua/700 transition"
      >
        Register as Provider
      </button>
    </form>
  );
}

export default ProviderRegister;

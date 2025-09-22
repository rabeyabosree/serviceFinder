import React, { useState } from "react";

function CustomerRegister() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Customer Register Data:", formData);
    // 🔹 You can connect API here
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
        className="border-gray-400 border rounded-2xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-400"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="border-gray-400 border rounded-2xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-400"
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="border-gray-400 border rounded-2xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-400"
      />

      <input
        type="text"
        name="location"
        placeholder="Location"
        value={formData.location}
        onChange={handleChange}
        className="border-gray-400 border rounded-2xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-400"
      />

      <button
        type="submit"
        className="bg-green-600 text-white py-3 rounded-2xl font-semibold hover:bg-green-700 transition"
      >
        Register
      </button>
    </form>
  );
}

export default CustomerRegister;

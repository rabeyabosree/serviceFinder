import React, { useState } from "react";

function RegisterPage() {
  const [role, setRole] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    location: "",
    category: "",
    serviceArea: "",
    availability: "",
    portfolio: [],
  });

  // handle change for inputs
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", { role, ...formData });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg">
        <h1 className="text-2xl font-bold text-center mb-6">Register</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Role */}
          <div>
            <select
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            >
              <option value="">Choose Role</option>
              <option value="customer">Customer</option>
              <option value="provider">Provider</option>
            </select>
          </div>

          {/* Common Fields */}
          {role && (
            <>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
            </>
          )}

          {/* Customer-specific Fields */}
          {role === "customer" && (
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          )}

          {/* Provider-specific Fields */}
          {role === "provider" && (
            <>
              <input
                type="text"
                name="category"
                placeholder="Service Category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />

              <input
                type="text"
                name="serviceArea"
                placeholder="Service Area"
                value={formData.serviceArea}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />

              <input
                type="text"
                name="availability"
                placeholder="Availability (e.g., 9am-6pm)"
                value={formData.availability}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />

              <input
                type="file"
                name="portfolio"
                multiple
                accept="image/*"
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </>
          )}

          {/* Submit */}
          {role && (
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition"
            >
              Register as {role.charAt(0).toUpperCase() + role.slice(1)}
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;

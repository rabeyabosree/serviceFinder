import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Booking() {
  const navigate = useNavigate();
  const [Bookings, setBookings] = useState([])

  // Bookings data object array
  const bookings = [
    {
      id: 1,
      customer: "Jack Jone",
      service: "Plumber",
      time: "6:00 - 12:00",
      status: "Pending",
    },
    {
      id: 2,
      customer: "Sarah Lee",
      service: "Electrician",
      time: "2:00 - 5:00",
      status: "Completed",
    },
    {
      id: 3,
      customer: "David Miller",
      service: "Carpenter",
      time: "10:00 - 2:00",
      status: "Pending",
    },
    {
      id: 4,
      customer: "Emma Watson",
      service: "Cleaner",
      time: "3:00 - 6:00",
      status: "Completed",
    },
  ];


  // status update করার handler
  const handleStatusChange = (id, newStatus) => {
    setBookings((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, status: newStatus } : s
      )
    );

    // Future এ এখানে API call হবে
    // await axios.patch(`/api/services/${id}`, { status: newStatus });
  };

  return (
    <div>
      <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
        <h3 className="text-lg font-semibold mb-4">Recent Bookings</h3>
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
            <tr>
              <th className="px-6 py-3">Customer</th>
              <th className="px-6 py-3">Service</th>
              <th className="px-6 py-3">Time</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {bookings.map((booking) => (
              <tr key={booking.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium">{booking.customer}</td>
                <td className="px-6 py-4">{booking.service}</td>
                <td className="px-6 py-4">{booking.time}</td>
                <td className="px-6 py-4">
                  <select
                    value={booking.status}
                    onChange={(e) => handleStatusChange(booking.id, e.target.value)}
                    onClick={(e) => e.stopPropagation()} // row click আটকানোর জন্য
                    className={`px-3 py-1 rounded-lg text-sm ${booking.status === "pending" ? "bg-amber-100 text-gray-600"
                      : booking.status === "Accepted"
                        ? "bg-blue-100 text-gray-600"
                        : booking.status === "Completed"
                          ? "bg-green-100 text-gray-600"
                          : "bg-gray-100 text-gray-600"}`}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Accepted">Accepted</option>
                    <option value="Completed">Completed</option>
                  </select>
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => navigate(`/dashboard/booking/${booking.id}`)}
                    className="px-3 py-1 rounded-lg bg-lavender text-white text-xs hover:bg-indigo-600 transition"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Booking;


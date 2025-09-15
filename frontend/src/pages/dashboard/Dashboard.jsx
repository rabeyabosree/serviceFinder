import React from "react";
import { MdDesignServices } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { TiTickOutline } from "react-icons/ti";
import { FaStar, FaMoneyBillWave } from "react-icons/fa";
import profile from "../../assets/traveller-with-map-mobile-phone-medium-shot.jpg"

function Dashboard() {
  return (
    <div className="bg-DustyRose min-h-screen">
      {/* Top Navbar-like Header */}
      <div className="bg-white px-6 py-4 flex items-center justify-between sticky top-0 z-10 ">
        <h1 className="text-xl font-bold text-gray-800">
          Service Provider Dashboard
        </h1>

        <div className="flex items-center gap-4">
          <img
            src={profile}
            alt="profile"
            className="w-10 h-10 rounded-full border"
          />
          <div>
            <h2 className="text-sm font-semibold text-gray-700">John Doe</h2>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Overview Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <MdDesignServices className="text-2xl " />
              <p className="text-2xl font-bold text-gray-800">05</p>
            </div>
            <h3 className="text-gray-500 text-sm">Total Services</h3>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <FiShoppingCart className="text-2xl " />
              <p className="text-2xl font-bold text-gray-800">03</p>
            </div>
            <h3 className="text-gray-500 text-sm">Pending Bookings</h3>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <TiTickOutline className="text-2xl " />
              <p className="text-2xl font-bold text-gray-800">20</p>
            </div>
            <h3 className="text-gray-500 text-sm">Completed Bookings</h3>
          </div>
        </div>

        {/* Rating and Earning */}
        <div className="bg-white px-16 py-6 rounded-2xl shadow flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <FaStar className="text-yellow-500 text-2xl" />
            <div>
              <p className="text-xl font-bold text-gray-800">4.5 </p>
              <h3 className="text-gray-500 text-sm">Average Rating</h3>
            </div>
          </div>

          <div className="flex items-center gap-3">
          
            <div>
              <h3 className="text-gray-500 text-sm">Earnings (This Month)</h3>
              <p className="text-xl font-bold text-gray-800">$1,250</p>
            </div>
          </div>
        </div>

        {/* Recent Booking Table */}
        <div className="bg-white p-6 rounded-2xl shadow overflow-x-auto">
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
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium">Jack Jone</td>
                <td className="px-6 py-4">Plumber</td>
                <td className="px-6 py-4">6:00 - 12:00</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-600">
                    Pending
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="px-3 py-1 rounded-lg bg-lavender text-white text-xs hover:bg-indigo-600 transition">
                    View
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium">Sarah Lee</td>
                <td className="px-6 py-4">Electrician</td>
                <td className="px-6 py-4">2:00 - 5:00</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-600">
                    Completed
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="px-3 py-1 rounded-lg bg-lavender text-white text-xs hover:bg-indigo-600 transition">
                    View
                  </button>
                </td>
              </tr>
               <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium">Sarah Lee</td>
                <td className="px-6 py-4">Electrician</td>
                <td className="px-6 py-4">2:00 - 5:00</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-600">
                    Completed
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="px-3 py-1 rounded-lg bg-lavender text-white text-xs hover:bg-indigo-600 transition">
                    View
                  </button>
                </td>
              </tr>
               <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium">Sarah Lee</td>
                <td className="px-6 py-4">Electrician</td>
                <td className="px-6 py-4">2:00 - 5:00</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-600">
                    Completed
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="px-3 py-1 rounded-lg bg-lavender text-white text-xs hover:bg-indigo-600 transition">
                    View
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;






// import React from 'react'

// function Dashboard() {
//   return (
//     <div>

//       {/* service provider dahsboard top with profile img name  */}
//       <div></div>

//       {/* total overview with total service, pending booking, completed booking */}
//       <div></div>

//       {/* avarage rating and earning this month justify between */}
//       <div></div>

//       {/* recent booking with customer , service, time, status, action */}
//       <div></div>


//     </div>
//   )
// }

// export default Dashboard



// import React from "react";
// import { MdDesignServices } from "react-icons/md";
// import { FiShoppingCart } from "react-icons/fi";
// import { TiTickOutline } from "react-icons/ti";
// import { FaStar } from "react-icons/fa6";

// function Dashboard() {
//   return (
//     <div className="bg-gray-50 w-full min-h-screen p-6">
//       <h1 className="text-2xl font-bold mb-6 text-gray-800">Dashboard</h1>

//       {/* Stats Container */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {/* Total Services */}
//         <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition flex flex-col items-center">
//           <div className="flex items-center gap-3 text-indigo-600 text-3xl">
//             <MdDesignServices />
//             <span className="text-2xl font-bold text-gray-800">05</span>
//           </div>
//           <h3 className="text-gray-500 mt-2">Total Services</h3>
//         </div>

//         {/* Pending Booking */}
//         <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition flex flex-col items-center">
//           <div className="flex items-center gap-3 text-indigo-600 text-3xl">
//             <FiShoppingCart />
//             <span className="text-2xl font-bold text-gray-800">05</span>
//           </div>
//           <h3 className="text-gray-500 mt-2">Pending Booking</h3>
//         </div>

//         {/* Completed Booking */}
//         <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition flex flex-col items-center">
//           <div className="flex items-center gap-3 text-indigo-600 text-3xl">
//             <TiTickOutline />
//             <span className="text-2xl font-bold text-gray-800">05</span>
//           </div>
//           <h3 className="text-gray-500 mt-2">Completed Booking</h3>
//         </div>

//         {/* Average Rating */}
//         <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition flex flex-col items-center">
//           <div className="flex items-center gap-3 text-indigo-600 text-3xl">
//             <FaStar />
//             <span className="text-2xl font-bold text-gray-800">4.5</span>
//           </div>
//           <h3 className="text-gray-500 mt-2">Average Rating</h3>
//         </div>
//       </div>

//       {/* Recent Booking */}
//       <div className="mt-8">
//         <h3 className="text-xl font-bold mb-6 text-gray-800">Recent Booking</h3>
//         <div className="overflow-x-auto bg-white rounded-2xl shadow">
//           <table className="min-w-full text-sm text-left">
//             <thead className="bg-gray-100 text-indigo-600 uppercase text-xs">
//               <tr>
//                 <th className="px-6 py-3">Customer</th>
//                 <th className="px-6 py-3">Service</th>
//                 <th className="px-6 py-3">Time</th>
//                 <th className="px-6 py-3">Status</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-200">
//               <tr className="hover:bg-gray-50 transition">
//                 <td className="px-6 py-4 font-medium text-gray-800">Jack Jone</td>
//                 <td className="px-6 py-4 text-gray-600">Plumber</td>
//                 <td className="px-6 py-4 text-gray-600">6:00 - 12:00</td>
//                 <td className="px-6 py-4">
//                   <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-600">
//                     Pending
//                   </span>
//                 </td>
//               </tr>
//               <tr className="hover:bg-gray-50 transition">
//                 <td className="px-6 py-4 font-medium text-gray-800">Sarah Lee</td>
//                 <td className="px-6 py-4 text-gray-600">Electrician</td>
//                 <td className="px-6 py-4 text-gray-600">2:00 - 5:00</td>
//                 <td className="px-6 py-4">
//                   <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-600">
//                     Completed
//                   </span>
//                 </td>
//               </tr>
//                 <tr className="hover:bg-gray-50 transition">
//                 <td className="px-6 py-4 font-medium text-gray-800">Sarah Lee</td>
//                 <td className="px-6 py-4 text-gray-600">Electrician</td>
//                 <td className="px-6 py-4 text-gray-600">2:00 - 5:00</td>
//                 <td className="px-6 py-4">
//                   <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-600">
//                     Completed
//                   </span>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;



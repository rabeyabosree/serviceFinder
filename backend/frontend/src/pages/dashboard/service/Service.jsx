import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

function Service() {
  const navigate = useNavigate();

  // state এ রাখলাম services যাতে আপডেট করা যায়
  const [services, setServices] = useState([
    { id: 1, service: "Plumber", description: "Skilled plumber with 8 years of experience", price: 388, status: "Pending" },
    { id: 2, service: "Electrician", description: "Certified electrician for home & office", price: 420, status: "Completed" },
    { id: 3, service: "Tutor", description: "Math and science tutor with 5 years of teaching", price: 300, status: "Accepted" },
    { id: 4, service: "Tailor", description: "Custom clothing and alterations", price: 250, status: "Pending" },
    { id: 5, service: "Blogger", description: "Content writer and blogger for lifestyle topics", price: 350, status: "Completed" },
  ]);

  // status update করার handler
  const handleStatusChange = (id, newStatus) => {
    setServices((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, status: newStatus } : s
      )
    );

    // Future এ এখানে API call হবে
    // await axios.patch(`/api/services/${id}`, { status: newStatus });
  };

  return (
    <div className="min-h-screen bg-DustyRose p-6">
      {/* Title */}
      <h1 className="text-3xl font-semibold text-gray-900 mb-4">Service Management</h1>

      {/* Add Service Button */}
      <div className="flex justify-end mb-6">
        <button
          onClick={() => navigate("/dashboard/service/add")}
          className="bg-lavender text-white px-5 py-2 rounded-lg hover:bg-lavender/80 transition"
        >
          <span className="pr-2">+</span> Add Service
        </button>
      </div>

      {/* Service Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-separate border-spacing-y-2">
          <thead>
            <tr className="bg-gray-200 text-gray-800">
              <th className="p-3">Service</th>
              <th className="p-3">Description</th>
              <th className="p-3">Rate</th>
              <th className="p-3">Status</th>
              <th className="p-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr
                key={service.id}
                onClick={() => navigate(`/dashboard/service/${service.id}`)}
                className="bg-white shadow-sm rounded-lg hover:shadow-md transition"
              >
                <td className="px-6 py-3 font-medium">{service.service}</td>
                <td className="px-4 py-3 text-gray-600">{service.description}</td>
                <td className="px-4 py-3">${service.price}</td>
                <td className="px-4 py-3">
                  {/* Status dropdown */}
                  <select
                    value={service.status}
                    onChange={(e) => handleStatusChange(service.id, e.target.value)}
                    onClick={(e) => e.stopPropagation()} // row click আটকানোর জন্য
                    className="px-3 py-1 rounded-lg text-sm"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Accepted">Accepted</option>
                    <option value="Completed">Completed</option>
                  </select>
                </td>
                <td className="p-3 text-center">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/dashboard/service/edit/${service.id}`);
                    }}
                    className="text-lavender hover:text-blue-800"
                  >
                    <CiEdit size={20} />
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

export default Service;





// import React from 'react'
// import { CiEdit } from "react-icons/ci";

// function Service() {
//   const services = [
//     { id: 1, service: "Plumber", description: "I am a skilled plumber with 8 years of experience", price: 388, status: "Pending", edit: <CiEdit /> },
//     { id: 2, service: "Electrician", description: "I am a skilled plumber with 8 years of experience", price: 388, status: "Completed", edit: <CiEdit /> },
//     { id: 3, service: "Tutor", description: "I am a skilled plumber with 8 years of experience", price: 388, status: "Accepted", edit: <CiEdit /> },
//     { id: 4, service: "Tailor", description: "I am a skilled plumber with 8 years of experience", price: 388, status: "Pending", edit: <CiEdit /> },
//     { id: 5, service: "Blogger", description: "I am a skilled plumber with 8 years of experience", price: 388, status: "Completed", edit: <CiEdit /> },
//   ];
//   return (
//     <div className='h-screen bg-DustyRose'>
//       <div className='flex items-center justify-between p-6'>
//         <h1 className='text-2xl text-gray-900 font-medium p-6'>Service Managment</h1>
//         <button className='bg-lavender text-white px-4 py-2 rounded-2xl text-end '> <span className='pr-2'>+</span>Add New Service</button>
//       </div>
 


//         <div className='w-full p-6'>
//           <table className='py-2'>
//             <thead>
//               <tr className='bg-white'>
//                 <th className='py-2'>Service</th>
//                 <th>Description</th>
//                 <th>Rate</th>
//                 <th>Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {services.map((service) => (
//                 <tr key={service.id}>
//                   <td>{service.service}</td>
//                   <td>{service.description}</td>
//                   <td>{service.price}</td>
//                   <td>{service.status}</td>
//                   <td>{service.edit}</td>
//                 </tr>
//               ))}

//               <button></button>
//             </tbody>
//           </table>
//         </div>
   
//     </div>
//   )
// }

// export default Service
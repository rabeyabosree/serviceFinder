import React from "react";
import { VscEdit } from "react-icons/vsc";
import profile from "../../../assets/traveller-with-map-mobile-phone-medium-shot.jpg";

function CustomerProfile() {
  const orders = [
    { service: "Plumbing", provider: "Saisa Akter", status: "Pending", time: "6-12pm", price: "$37" },
    { service: "Electrician", provider: "Rafsan Karim", status: "Completed", time: "10-2pm", price: "$45" },
    { service: "Cleaning", provider: "Shila Begum", status: "Cancelled", time: "3-5pm", price: "$25" },
    { service: "Painting", provider: "Hasan Ali", status: "Accepted", time: "1-6pm", price: "$60" },
  ];

  const statusColors = {
    Pending: "bg-gray-100 text-yellow-800",
    Completed: " text-green-800",
    Cancelled: " text-red-800",
    Accepted: " text-black-800",
  };

  return (
    <div className="h-screen flex items-start pt-24 justify-center bg-DustyRose">
      <div className="max-w-3xl w-full">
        {/* profile info */}
        <div className="flex items-center justify-between bg-white p-6 rounded-lg shadow">
          <div className="flex gap-3 items-center">
            <img src={profile} alt="profile" className="h-14 w-14 rounded-full object-cover" />
            <div>
              <h1 className="font-semibold text-xl">Customer 2</h1>
              <p className="text-sm text-gray-500">email34@gmail.com</p>
              <p className="text-sm text-gray-600">Dhaka, Bangladesh</p>
            </div>
          </div>

          <button className="cursor-pointer text-2xl text-gray-700 hover:text-black transition">
            <VscEdit />
          </button>
        </div>

        {/* orders info */}
        <div className="mt-6">
          <h1 className="text-2xl font-medium mb-3">Orders</h1>
          <div className="overflow-x-auto shadow rounded-lg">
            <table className="w-full text-left border-collapse">
              <thead className="bg-lavender text-white">
                <tr>
                  <th className="py-2 px-3">Service</th>
                  <th className="px-3">Provider</th>
                  <th className="px-3">Status</th>
                  <th className="px-3">Time</th>
                  <th className="px-3">Price</th>
                </tr>
              </thead>

              <tbody>
                {orders.map((order, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b border-white hover:bg-gray-100 transition"
                  >
                    <td className="py-2 px-3">{order.service}</td>
                    <td className="px-3">{order.provider}</td>
                    <td className="px-3">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[order.status]}`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="px-3">{order.time}</td>
                    <td className="px-3 font-semibold">{order.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <button className="bg-white px-4 py-2 rounded-2xl mt-6 font-medium text-lavender hover:px-6">Logout</button>
      </div>
    </div>
  );
}

export default CustomerProfile;


// import React from 'react'
// import { VscEdit } from "react-icons/vsc";
// import profile from "../../../assets/traveller-with-map-mobile-phone-medium-shot.jpg"

// function CustomerProfile() {
//   const orders = [
//     { service: "Plumbing", provider: "saisa akter", Status: "Pending", Time: "6-12pm", Price: "$37" },
//     { service: "Plumbing", provider: "saisa akter", Status: "Pending", Time: "6-12pm", Price: "$37" },
//     { service: "Plumbing", provider: "saisa akter", Status: "Pending", Time: "6-12pm", Price: "$37" },
//     { service: "Plumbing", provider: "saisa akter", Status: "Pending", Time: "6-12pm", Price: "$37" },
//     { service: "Plumbing", provider: "saisa akter", Status: "Pending", Time: "6-12pm", Price: "$37" },
//   ]
//   return (
//     <div className='h-screen flex items-start mt-24 justify-center'>
//       <div className='max-w-3xl w-full'>
//         {/* profile info */}
//         <div className='flex flex-1 items-center-safe justify-between bg-DustyRose p-6'>
//           <div className='flex flex-1 gap-2 items-center-safe'>
//             <img src={profile} alt="" className='h-14 w-16 rounded-full' />
//             <div className='flex flex-col'>
//               <h1 className='font-semibold text-xl'>Customer 2</h1>
//               <p className='text-[14px] text-gray-500'>email34@gmail.com</p>
//               <p className=''> dhaka, Bangladesh</p>
//             </div>
//           </div>

//           <button className=' cursor-pointer text-2xl text-black'>
//             <VscEdit />
//           </button>
//         </div>
//         {/* orders info */}
//         <div className='mt-6'>
//           <h1 className='text-2xl font-medium mb-2'>Orders</h1>
//           <div>
//             <table className='w-full'>
//               <thead className='bg-lavender text-white'>
//                <tr>
//                  <th className='py-2'>Service</th>
//                 <th>provider</th>
//                 <th>Status</th>
//                 <th>Time</th>
//                 <th>Price</th>
//                </tr>
//               </thead>

//               <tbody >
//                 {
//                   orders.map((order) => (

//                     <tr key={order.service} className='py-2 bg-DustyRose mb-0.5 shadow-2xs' >
//                       <td className='py-2 text-center'>{order.service}</td>
//                       <td>{order.provider}</td>
//                       <td>{order.Status}</td>
//                       <td>{order.Time}</td>
//                       <td>{order.Price}</td>
//                     </tr>


//                   ))
//                 }
//               </tbody>

//             </table>

//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default CustomerProfile
import React from 'react'
import {
    FaWrench,
    FaBolt,
    FaChalkboardTeacher,
    FaUtensils,
} from "react-icons/fa";

function Popularcategory() {
    const services = [
        { name: "Plumber", icon: <FaWrench className="text-indigo-600 text-2xl" />, color: "bg-indigo-100" },
        { name: "Electrician", icon: <FaBolt className="text-yellow-500 text-2xl" />, color: "bg-yellow-100" },
        { name: "Tutor", icon: <FaChalkboardTeacher className="text-green-500 text-2xl" />, color: "bg-green-100" },
        { name: "Home Cook", icon: <FaUtensils className="text-red-500 text-2xl" />, color: "bg-red-100" },
    ];
    return (
        <div className='bg-lavender'>

            {/* Popular Services */}
            <div className="px-6 py-16 text-left w-full max-w-2xl mx-auto ">
                <h2 className="text-xl font-semibold mb-6 text-white drop-shadow">
                    Popular Services
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 md:gap-16 gap-8">
                    {services.map((service) => (
                        <div key={service.name} role="button" tabIndex={0} onClick={() => navigate(`/service/${service.name.toLowerCase()}`)} onKeyDown={(e) => e.key === "Enter" && navigate(`/service/${service.name.toLowerCase()}`)} className="flex flex-col items-center py-4 bg-gray-200/30 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer" >
                            <div className={`w-10 h-10 flex items-center justify-center rounded-full ${service.color} mb-2`} > {service.icon} </div>
                            <p className="text-gray-900 font-medium">{service.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Popularcategory
import React, { useState } from "react";
import { FaUser, FaTools } from "react-icons/fa";
import CustomerRegister from './CustomerRegister';
import ProviderRegister from './ProviderRegister';

function RegisterPage() {
  const [activeTab, setActiveTab] = useState("customer");

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full text-center bg-white p-12 rounded-2xl shadow-md">
        {/* Toggle Buttons */}
        <div className="flex justify-center gap-6 mb-6">
          <button
            onClick={() => setActiveTab("customer")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold ${
              activeTab === "customer"
                ? "bg-green-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            <FaUser /> Customer
          </button>
          <button
            onClick={() => setActiveTab("provider")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold ${
              activeTab === "provider"
                ? "bg-aqua text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            <FaTools /> Provider
          </button>
        </div>

        {/* Conditional Form */}
        {activeTab === "customer" ? <CustomerRegister /> : <ProviderRegister />}
      </div>
    </div>
  );
}

export default RegisterPage;



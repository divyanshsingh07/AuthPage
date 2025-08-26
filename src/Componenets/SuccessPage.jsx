import React from "react";
import { FaCheckCircle, FaHome } from "react-icons/fa";

function SuccessPage({ goHome }) {
  return (
    <div className="flex flex-col items-center justify-center text-center h-full">
      <div className="w-20 h-20 bg-green-500 text-white flex items-center justify-center rounded-full mb-4">
        <FaCheckCircle size={36} />
      </div>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">
        Login Successful!
      </h1>
      <p className="text-gray-600 mb-6">
        Welcome back to your PopX account 
      </p>
      <button 
        onClick={goHome} 
        className="px-6 py-2 rounded-md bg-violet-600 text-white hover:bg-violet-700 transition flex items-center gap-2"
      >
        <FaHome size={16} />
        Go to Home
      </button>
    </div>
  );
}

export default SuccessPage;

import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaUser, FaPhone, FaEnvelope, FaLock, FaBuilding } from "react-icons/fa";

function CreateAccountPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="text-left h-full">
      <h1 className=" text-2xl font-bold text-gray-900 mb-6">
        Create your PopX account
      </h1>

      <form className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-violet-700">
            Full Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
              <FaUser size={16} />
            </span>
            <input
              type="text"
              placeholder="Enter full name"
              className="w-full mt-1 pl-9 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-600"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-violet-700">
            Phone number <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
              <FaPhone size={16} />
            </span>
            <input
              type="text"
              placeholder="Enter phone number"
              className="w-full mt-1 pl-9 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-600"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-violet-700">
            Email address <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
              <FaEnvelope size={16} />
            </span>
            <input
              type="email"
              placeholder="arsh8004105292@gmail.com"
              className="w-full mt-1 pl-9 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-600"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-violet-700">
            Password <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
              <FaLock size={16} />
            </span>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              className="w-full mt-1 pl-9 pr-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-600"
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-violet-700">
            Company name
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
              <FaBuilding size={16} />
            </span>
            <input
              type="text"
              placeholder="Enter company name"
              className="w-full mt-1 pl-9 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-600"
            />
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-gray-700 mb-2">
            Are you an Agency? <span className="text-red-500">*</span>
          </p>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2">
              <input type="radio" name="agency" value="yes" className="text-violet-600" />
              Yes
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="agency" value="no" className="text-violet-600" />
              No
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-md bg-violet-600 hover:bg-violet-700 text-white font-semibold"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}

export default CreateAccountPage;

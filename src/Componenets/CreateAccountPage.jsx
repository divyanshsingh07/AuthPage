import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaUser, FaPhone, FaEnvelope, FaLock, FaBuilding } from "react-icons/fa";

function CreateAccountPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isAgency, setIsAgency] = useState(false);
  const [companyName, setCompanyName] = useState("");

  return (
    <div className="text-left h-full">
      <h1 className=" text-2xl font-bold text-gray-900 mb-6">
        Create your PopX account
      </h1>

      <form className="space-y-4">
        <div>
          <fieldset className="border rounded-md">
            <legend className="ml-3 text-sm font-semibold text-violet-700">
              Full Name <span className="text-red-500">*</span>
            </legend>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <FaUser size={16} />
              </span>
              <input
                type="text"
                placeholder="Enter full name"
                className="w-full pl-9 pr-3 py-2 border-0 focus:outline-none focus:ring-0 bg-transparent"
              />
            </div>
          </fieldset>
        </div>

        <div>
          <fieldset className="border rounded-md">
            <legend className="ml-3 text-sm font-semibold text-violet-700">
              Phone number <span className="text-red-500">*</span>
            </legend>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <FaPhone size={16} />
              </span>
              <input
                type="text"
                placeholder="Enter phone number"
                className="w-full pl-9 pr-3 py-2 border-0 focus:outline-none focus:ring-0 bg-transparent"
              />
            </div>
          </fieldset>
        </div>

        <div>
          <fieldset className="border rounded-md">
            <legend className="ml-3 text-sm font-semibold text-violet-700">
              Email address <span className="text-red-500">*</span>
            </legend>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <FaEnvelope size={16} />
              </span>
              <input
                type="email"
                placeholder="email"
                className="w-full pl-9 pr-3 py-2 border-0 focus:outline-none focus:ring-0 bg-transparent"
              />
            </div>
          </fieldset>
        </div>

        <div>
          <fieldset className="border rounded-md">
            <legend className="ml-3 text-sm font-semibold text-violet-700">
              Password <span className="text-red-500">*</span>
            </legend>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <FaLock size={16} />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className="w-full pl-9 pr-10 py-2 border-0 focus:outline-none focus:ring-0 bg-transparent"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center text-gray-500 hover:text-gray-700"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </button>
            </div>
          </fieldset>
        </div>

        <div>
          <fieldset className="border rounded-md">
            <legend className="ml-3 text-sm font-semibold text-violet-700">
              Company name {isAgency && <span className="text-red-500">*</span>}
            </legend>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <FaBuilding size={16} />
              </span>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                required={isAgency}
                placeholder={isAgency ? "Company name (required)" : "Enter company name"}
                className="w-full pl-9 pr-3 py-2 border-0 focus:outline-none focus:ring-0 bg-transparent"
              />
            </div>
          </fieldset>
        </div>

        <div>
          <p className="text-sm font-semibold text-gray-700 mb-2">
            Are you an Agency? <span className="text-red-500">*</span>
          </p>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="agency"
                checked={isAgency === true}
                onChange={() => setIsAgency(true)}
                className="text-violet-600"
              />
              Yes
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="agency"
                checked={isAgency === false}
                onChange={() => setIsAgency(false)}
                className="text-violet-600"
              />
              No
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-12 py-3 rounded-md bg-violet-600 hover:bg-violet-700 text-white font-semibold"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}

export default CreateAccountPage;

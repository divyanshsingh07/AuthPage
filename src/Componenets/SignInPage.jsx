import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="text-left h-full">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">
        Signin to your PopX account
      </h1>
      <p className="text-gray-500 text-sm mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>

      <form className="space-y-4">
        <div>
          <fieldset className="border rounded-md">
            <legend className="ml-3 text-sm font-semibold text-violet-700">
              Email Address
            </legend>
            <div className="relative">
              <input
                type="email"
                placeholder="arsh8004105292@gmail.com"
                className="w-full px-3 py-2 border-0 focus:outline-none focus:ring-0 bg-transparent"
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
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className="w-full pr-10 px-3 py-2 border-0 focus:outline-none focus:ring-0 bg-transparent"
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
          </fieldset>
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-md  bg-violet-600 hover:bg-violet-700 text-white cursor-pointer"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default SignInPage;

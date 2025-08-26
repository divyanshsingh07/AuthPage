import React from "react";

function WelcomePage({ CreateAccount, SignIn }) {
  return (
    <div className="relative flex flex-col justify-between h-full">
    
      <div className="flex-1 flex flex-col items-start justify-end text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Welcome to PopX
        </h1>
        <p className="text-gray-500 text-lg mb-6 text-left  ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, perferendis.
        </p>

        <div className="space-y-3">
          <button onClick={CreateAccount} className=" w-full py-3 rounded-md bg-violet-600 hover:bg-violet-700 text-white font-semibold transition cursor-pointer">
            Create Account
          </button>
          <button onClick={SignIn} className="w-full py-3 rounded-md bg-purple-200 text-purple-800 font-semibold hover:bg-purple-300 transition cursor-pointer">
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;

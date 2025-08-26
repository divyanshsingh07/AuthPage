import React from "react";
import { FaUserCircle, FaCamera } from "react-icons/fa";

function AccountSettingsPage() {
  return (
    <div className="text-left h-full">
     
      <h1 className="text-center align-middle  text-2xl font-semibold text-gray-900 mb-8">
        
        Account Settings
      </h1>
      

      <div className=" p-6  mb-6">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-200">
              <img
                src="data:image/jpeg;base64,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"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-violet-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-violet-700 transition-colors">
              <FaCamera size={16} className="text-white" />
            </div>
          </div>
          <div>
            <p className="font-bold text-xl text-gray-800 mb-1">Marry Doe</p>
            <p className="text-gray-600">Marry@Gmail.Com</p>
          </div>
        </div>
      </div>

      <div className="  ">
        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
          Erat, Sed Diam
        </p>
        <div className="border-t-2 border-dashed border-gray-300"></div>
      </div>
    </div>
  );
}

export default AccountSettingsPage;

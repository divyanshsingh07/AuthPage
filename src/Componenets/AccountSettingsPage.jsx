import React from "react";
import { FaUserCircle } from "react-icons/fa";

function AccountSettingsPage() {
  return (
    <div className="text-left">
      <h1 className="text-xl font-bold text-gray-900 mb-6">
        Account Settings
      </h1>

      <div className="bg-gray-100 p-4 rounded-md flex items-center gap-4 mb-4">
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white">
          <FaUserCircle size={56} className="text-gray-400" />
        </div>
        <div>
          <p className="font-bold text-gray-800">Divyansh Singh</p>
          <p className="text-gray-600 text-sm">arsh8004105292@gmail.com</p>
        </div>
      </div>

      <p className="text-gray-600 text-sm leading-relaxed">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
        Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
        Erat, Sed Diam
      </p>
    </div>
  );
}

export default AccountSettingsPage;

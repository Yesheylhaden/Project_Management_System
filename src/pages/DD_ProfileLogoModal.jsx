import React, { useState } from "react";

const ProfileLogoModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Dummy developer info
  const developer = {
    name: "Tandin Yuzer",
    email: "tandin123@gmail.com",
    role: "System Admin",
    phone: "+975 1783567",
    company: "Thimphu Tech Park Limited",
  };

  const handleSignOut = () => {
    // Add your sign out logic here
    alert("Signed out!");
    setIsOpen(false);
  };

  return (
    <div>
      {/* Profile Logo */}
      <div
        className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-xl cursor-pointer hover:ring-2 hover:ring-blue-500 transition"
        onClick={() => setIsOpen(true)}
      >
        👤
      </div>

      {/* Modal Popup */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-80 p-6 rounded-2xl shadow-lg relative">
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-lg font-bold"
            >
              ×
            </button>

            {/* Developer Info */}
            <div className="flex flex-col items-center mb-4">
              <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-3xl mb-3">
                👤
              </div>
              <h2 className="text-lg font-semibold">{developer.name}</h2>
              <p className="text-sm text-gray-500">{developer.role}</p>
            </div>

            <div className="space-y-2 text-sm text-gray-700 mb-4">
              <p>
                <strong>Email:</strong> {developer.email}
              </p>
              <p>
                <strong>Phone:</strong> {developer.phone}
              </p>
              <p>
                <strong>Company:</strong> {developer.company}
              </p>
            </div>

            {/* Sign Out */}
            <button
              onClick={handleSignOut}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition"
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileLogoModal;

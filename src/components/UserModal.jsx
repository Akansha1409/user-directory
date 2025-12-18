import React from "react";

const UserModal = ({ user, onClose }) => {
  if (!user) return null;

  return (
    // Backdrop
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      
      {/* Modal Content */}
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 relative">
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500 font-bold text-xl"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-4 border-b pb-2">{user.name}</h2>
        
        <div className="space-y-2">
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Website:</strong> {user.website}</p>
          
          <div className="mt-4 bg-gray-50 p-3 rounded">
            <h4 className="font-semibold">Company</h4>
            <p>{user.company?.name || "N/A"}</p>
            <p className="text-sm text-gray-500">{user.company?.catchPhrase}</p>
          </div>

          <div className="mt-2 bg-gray-50 p-3 rounded">
            <h4 className="font-semibold">Address</h4>
            <p>
              {user.address?.street}, {user.address?.city}
            </p>
            <p className="text-sm text-gray-500">Zip: {user.address?.zipcode}</p>
          </div>
        </div>

        <button 
          onClick={onClose}
          className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default UserModal;
import React from "react";

const UserCard = ({ user, onClick }) => {
  // Generate initials from name
  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();

  // Random color for avatar background
  const colors = ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-purple-500", "bg-yellow-500", "bg-indigo-500"];
  const colorClass = colors[user.id % colors.length] || "bg-gray-500";

  return (
    <div
      onClick={() => onClick(user)}
      className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-gray-100 overflow-hidden"
    >
      {/* Decorative Top Gradient Line */}
      <div className={`absolute top-0 left-0 w-full h-1 ${colorClass.replace('bg-', 'bg-gradient-to-r from-white to-')}`}></div>

      <div className="flex items-center space-x-4 mb-4">
        {/* Avatar Circle */}
        <div className={`w-12 h-12 ${colorClass} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md`}>
          {initials}
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">
            {user.name}
          </h3>
          <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
            {user.company?.name || "Freelancer"}
          </p>
        </div>
      </div>

      <div className="space-y-2 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
          {user.email}
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
          {user.phone}
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
        <span className="text-xs font-medium text-gray-400 group-hover:text-indigo-500 transition-colors">View Profile</span>
        <svg className="w-5 h-5 text-gray-300 group-hover:text-indigo-500 transform group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
      </div>
    </div>
  );
};

export default UserCard;
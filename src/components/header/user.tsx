/* eslint-disable @next/next/no-img-element */
import { User as UserIcon } from 'lucide-react';

export default function UserProfile() {
  return (
    <div className="flex items-center space-x-4 bg-white p-1 rounded-lg shadow hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        {/* User Avatar */}
        <img
          src="/profile-pic.jpg"
          alt="Admin Profile Picture"
          className="h-12 w-12 rounded-full border-2 border-blue-500 shadow-md hover:shadow-lg transition-all duration-300"
        />
        {/* Decorative Icon */}
        <div className="absolute -bottom-1 -right-1 bg-white p-1 rounded-full border border-gray-200 shadow-md">
          <UserIcon className="h-4 w-4 text-blue-500" />
        </div>
      </div>
      <div className="text-sm">
        {/* User Name */}
        <span className="block font-semibold text-gray-800 text-lg hover:text-blue-500 transition-all duration-200 cursor-pointer">
          Admin
        </span>
        {/* User Email */}
        <p className="text-gray-500 text-sm hover:text-gray-700 transition-colors duration-200">
          admin@example.com
        </p>
      </div>
    </div>
  );
}

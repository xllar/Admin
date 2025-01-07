export default function Notifications() {
  return (
    <div >
      {/* Notification Button */}
      <button className=" flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full shadow-md hover:bg-gray-200 focus:ring-2 focus:ring-gray-500">
        <svg
          className="w-6 h-6 text-gray-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11c0-3.866-3.134-7-7-7S4 7.134 4 11v3.159c0 .538-.214 1.055-.595 1.436L2 17h5m8 0a3 3 0 11-6 0m6 0H9"
          />
        </svg>
        {/* Notification Badge */}
        <span className=" absolute-top-1 -right-1 flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full">
          5
        </span>
      </button>
    </div>
  );
}

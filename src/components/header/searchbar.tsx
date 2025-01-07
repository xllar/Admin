export default function SearchBar() {
    return (
      <div className="relative flex items-center w-full max-w-sm border border-gray-300 rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-gray-400">
        {/* Search Icon */}
        <div className="absolute left-3 text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm6.8-1.2l3.4 3.4"
            />
          </svg>
        </div>
  
        {/* Input Field */}
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-10 py-2 text-sm text-gray-700 bg-white border-none rounded-l-lg focus:outline-none"
        />
  
        {/* Enter Button */}
        <button
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-r-lg hover:bg-gray-300 focus:outline-none transition duration-300"
          type="button"
        >
          Enter
        </button>
      </div>
    );
  }
  
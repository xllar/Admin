'use client';

export default function Settings() {
  return (
    <div className="space-y-8">

      {/* Account Settings Section */}
      <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">Account Settings</h3>
        
        {/* Change Password */}
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-600">Change Password</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter new password"
            />
          </div>
        </div>

        {/* Notifications */}
        <div className="space-y-4 mt-6">
          <label className="text-sm font-medium text-gray-600">Notifications</label>
          <div className="inline-flex items-center space-x-4">
            <input
              type="checkbox"
              className="form-checkbox text-indigo-600"
            />
            <span className="text-gray-700">Enable email notifications</span>
          </div>
        </div>

        {/* Profile Visibility */}
        <div className="space-y-4 mt-6">
          <label className="text-sm font-medium text-gray-600">Profile Visibility</label>
          <div className="inline-flex items-center space-x-4">
            <input
              type="checkbox"
              className="form-checkbox text-indigo-600"
            />
            <span className="text-gray-700">Make profile public</span>
          </div>
        </div>

        {/* Language Preferences */}
        <div className="space-y-4 mt-6">
          <label className="text-sm font-medium text-gray-600">Preferred Language</label>
          <select
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
          </select>
        </div>

        {/* Two-Factor Authentication */}
        <div className="space-y-4 mt-6">
          <label className="text-sm font-medium text-gray-600">Two-Factor Authentication</label>
          <div className="inline-flex items-center space-x-4">
            <input
              type="checkbox"
              className="form-checkbox text-indigo-600"
            />
            <span className="text-gray-700">Enable 2FA</span>
          </div>
        </div>

        {/* Save Changes Button */}
        <div className="mt-8">
          <button className="w-full py-3 text-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-all duration-300">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

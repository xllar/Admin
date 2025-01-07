'use client';
import React, { useState } from 'react';

const UserRoleSettings = () => {
  const [adminRole, setAdminRole] = useState(false);
  const [customRole, setCustomRole] = useState('');
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [showResetModal, setShowResetModal] = useState(false);

  const handleSave = () => {
    setShowSaveModal(false);
    alert('Role settings saved successfully!');
  };

  const handleReset = () => {
    setAdminRole(false);
    setCustomRole('');
    setShowResetModal(false);
  };

  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">User Roles and Permissions</h3>
      <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
        {/* Admin Role Toggle */}
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={adminRole}
            onChange={(e) => setAdminRole(e.target.checked)}
            className="h-5 w-5 text-indigo-500 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label className="ml-2 text-gray-700">Admin Role</label>
        </div>

        {/* Custom Role Input */}
        <div>
          <label htmlFor="customRole" className="text-gray-700 block mb-2">
            Custom Role
          </label>
          <input
            id="customRole"
            type="text"
            value={customRole}
            onChange={(e) => setCustomRole(e.target.value)}
            placeholder="Enter custom role"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => setShowSaveModal(true)}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Save Role Settings
          </button>
          <button
            type="button"
            onClick={() => setShowResetModal(true)}
            className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            Reset Role Settings
          </button>
        </div>
      </form>

      {/* Save Confirmation Modal */}
      {showSaveModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-80">
            <h4 className="text-lg font-semibold mb-4">Confirm Save</h4>
            <p className="text-gray-600 mb-6">Are you sure you want to save these settings?</p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowSaveModal(false)}
                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Reset Confirmation Modal */}
      {showResetModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-80">
            <h4 className="text-lg font-semibold mb-4">Confirm Reset</h4>
            <p className="text-gray-600 mb-6">Are you sure you want to reset all settings?</p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowResetModal(false)}
                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={handleReset}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserRoleSettings;

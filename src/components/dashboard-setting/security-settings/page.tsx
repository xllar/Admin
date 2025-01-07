'use client';
import React, { useState } from 'react';

const SecuritySettings = () => {
  const [password, setPassword] = useState('');
  const [dataProtection, setDataProtection] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle submit logic here
  };

  const handleReset = () => {
    setPassword('');
    setDataProtection(false);
  };

  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Security and Compliance</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 font-medium">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            checked={dataProtection}
            onChange={(e) => setDataProtection(e.target.checked)}
            className="h-5 w-5 text-indigo-500 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label className="ml-2 text-gray-700">Enable Data Protection</label>
        </div>

        <div className="flex justify-between">
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Save Security Settings
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            Reset Security Settings
          </button>
        </div>
      </form>
    </div>
  );
};

export default SecuritySettings;

'use client';
import React, { useState } from 'react';

const OrderSettings = () => {
  const [orderWorkflow, setOrderWorkflow] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle submit logic here
  };

  const handleReset = () => {
    setOrderWorkflow('');
  };

  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Order Settings</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 font-medium">Order Workflow</label>
          <textarea
            value={orderWorkflow}
            onChange={(e) => setOrderWorkflow(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            rows={4}
          />
        </div>

        <div className="flex justify-between">
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Save Order Settings
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            Reset Order Settings
          </button>
        </div>
      </form>
    </div>
  );
};

export default OrderSettings;

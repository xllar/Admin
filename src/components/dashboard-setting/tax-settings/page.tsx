'use client';
import React, { useState } from 'react';

const TaxSettings = () => {
  const [taxRate, setTaxRate] = useState(0);
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [showResetModal, setShowResetModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taxRate < 0 || taxRate > 100) {
      setErrorMessage('Tax rate must be between 0% and 100%.');
      return;
    }
    setShowSaveModal(false);
    setErrorMessage('');
    alert('Tax settings saved successfully!');
  };

  const handleReset = () => {
    setTaxRate(0);
    setShowResetModal(false);
    setErrorMessage('');
  };

  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Tax Settings</h3>
      <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
        {/* Tax Rate Input */}
        <div>
          <label htmlFor="taxRate" className="block text-gray-700 font-medium mb-2">
            Tax Rate (%)
          </label>
          <input
            id="taxRate"
            type="number"
            value={taxRate}
            onChange={(e) => setTaxRate(Number(e.target.value))}
            placeholder="Enter tax rate (e.g., 15)"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {errorMessage && <p className="text-red-600 text-sm mt-2">{errorMessage}</p>}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => setShowSaveModal(true)}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Save Tax Settings
          </button>
          <button
            type="button"
            onClick={() => setShowResetModal(true)}
            className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            Reset Tax Settings
          </button>
        </div>
      </form>

      {/* Save Confirmation Modal */}
      {showSaveModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-80">
            <h4 className="text-lg font-semibold mb-4">Confirm Save</h4>
            <p className="text-gray-600 mb-6">Are you sure you want to save these tax settings?</p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowSaveModal(false)}
                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
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
            <p className="text-gray-600 mb-6">Are you sure you want to reset the tax settings?</p>
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

export default TaxSettings;

'use client';
import React from 'react';
import { FaCreditCard, FaCogs, FaTrashAlt, FaPlusCircle, FaInfoCircle } from 'react-icons/fa';

export function PaymentGateway() {
  return (
    <section className="p-6 bg-gray-50 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Payment Gateway</h2>
      <div className="space-y-6">
        <p className="text-gray-600 text-sm">
          Configure and manage your payment gateway integrations here. You can add, update, or remove gateways as needed.
        </p>

        {/* Add New Gateway Button */}
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
          <FaCreditCard />
          <span>Add New Gateway</span>
        </button>

        {/* List of Existing Gateways */}
        <div className="bg-white rounded-lg shadow p-4 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-700">Existing Gateways</h3>
          <div className="space-y-4 mt-4">
            {/* Example Gateway */}
            <div className="flex justify-between items-center border-b border-gray-200 pb-4">
              <div className="flex items-center space-x-3">
                <FaCogs className="text-gray-600" />
                <span className="text-gray-700 font-medium">Stripe</span>
              </div>
              <div className="flex space-x-4">
                <button className="text-blue-600 hover:text-blue-700 transition-colors">
                  Edit
                </button>
                <button className="text-red-600 hover:text-red-700 transition-colors">
                  <FaTrashAlt />
                </button>
              </div>
            </div>

            {/* Example Gateway */}
            <div className="flex justify-between items-center border-b border-gray-200 pb-4">
              <div className="flex items-center space-x-3">
                <FaCogs className="text-gray-600" />
                <span className="text-gray-700 font-medium">PayPal</span>
              </div>
              <div className="flex space-x-4">
                <button className="text-blue-600 hover:text-blue-700 transition-colors">
                  Edit
                </button>
                <button className="text-red-600 hover:text-red-700 transition-colors">
                  <FaTrashAlt />
                </button>
              </div>
            </div>

            {/* Placeholder for More Gateways */}
            <div className="flex justify-center items-center py-6 text-gray-500">
              <FaPlusCircle className="text-xl mr-2" />
              <span>More gateways will appear here</span>
            </div>
          </div>
        </div>

        {/* Add Gateway Form Section */}
        <div className="bg-gray-100 p-4 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Add Gateway</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Gateway Name
              </label>
              <input
                type="text"
                placeholder="Enter gateway name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                API Key
              </label>
              <input
                type="text"
                placeholder="Enter API key"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Save Gateway
            </button>
          </form>
        </div>

        {/* Footer or Notes Section */}
        <div className="text-gray-500 text-sm mt-6 flex items-center space-x-2">
          <FaInfoCircle />
          <span>Ensure gateways are configured correctly to avoid payment issues.</span>
        </div>
      </div>
    </section>
  );
}

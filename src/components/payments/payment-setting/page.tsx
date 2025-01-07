'use client';
import React, { useState } from 'react';

export function PaymentSettings() {
  const [currency, setCurrency] = useState('USD');
  const [paymentMethod, setPaymentMethod] = useState('CreditCard');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setMessage('Settings saved successfully!');
    setTimeout(() => setMessage(''), 3000); // Clear message after 3 seconds
  };

  const handleReset = () => {
    setCurrency('USD');
    setPaymentMethod('CreditCard');
    setMessage('Settings reset to default.');
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <section className="p-6 bg-gray-50 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Payment Settings</h2>
      <p className="text-gray-600 text-sm mb-4">
        Adjust your payment-related settings here.
      </p>

      {message && (
        <div className="mb-4 p-4 text-sm text-green-700 bg-green-100 rounded-lg">
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="currency" className="block text-gray-700 font-medium">
            Currency
          </label>
          <select
            id="currency"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="NGN">NGN</option>
          </select>
        </div>

        <div>
          <label htmlFor="paymentMethod" className="block text-gray-700 font-medium">
            Default Payment Method
          </label>
          <select
            id="paymentMethod"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="CreditCard">Credit Card</option>
            <option value="PayPal">PayPal</option>
            <option value="BankTransfer">Bank Transfer</option>
          </select>
        </div>

        <div className="flex justify-between">
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Save Settings
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
          >
            Reset
          </button>
        </div>
      </form>
    </section>
  );
}

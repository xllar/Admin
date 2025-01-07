'use client';
import React, { useState } from 'react';

export default function NewCoupons() {
  const [formData, setFormData] = useState({
    code: '',
    discount: '',
    usageLimit: '',
    expires: '',
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.code || !formData.discount || !formData.usageLimit || !formData.expires) {
      alert('All fields are required!');
      return;
    }

    // Submit form data (mocked for now)
    console.log('New Coupon Data:', formData);

    setSuccessMessage('Coupon created successfully!');
    setFormData({
      code: '',
      discount: '',
      usageLimit: '',
      expires: '',
    });
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Create New Coupon</h2>

      {successMessage && (
        <div className="mb-4 text-green-600 font-medium">{successMessage}</div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Coupon Code</label>
          <input
            type="text"
            name="code"
            value={formData.code}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="e.g., SPRING2025"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Discount (%)</label>
          <input
            type="number"
            name="discount"
            value={formData.discount}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="e.g., 20"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Usage Limit</label>
          <input
            type="number"
            name="usageLimit"
            value={formData.usageLimit}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="e.g., 100"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Expiration Date</label>
          <input
            type="date"
            name="expires"
            value={formData.expires}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all"
        >
          Create Coupon
        </button>
      </form>
    </div>
  );
}

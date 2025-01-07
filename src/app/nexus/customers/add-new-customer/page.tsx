'use client';
import React, { useState } from 'react';
import Header from '@/components/header/page';
import Footer from '@/components/footer/page';
import Sidebar from '@/components/sidebar/page';

export default function AddCustomerPage() {
  const [newCustomer, setNewCustomer] = useState({ name: '', email: '', phone: '' });

  const handleAddCustomer = () => {
    if (newCustomer.name.trim() && newCustomer.email.trim() && newCustomer.phone.trim()) {
      // Handle adding new customer (API call or state update)
      alert('Customer added!');
      setNewCustomer({ name: '', email: '', phone: '' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-grow">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex flex-col flex-grow">
          {/* Header */}
          <Header />

          {/* Main Content */}
          <main className="flex-grow">
            <div className="container mx-auto px-6 mt-6">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900">Add New Customer</h3>
                <div className="space-y-4">
                  <label className="text-lg font-semibold text-gray-700">Customer Name</label>
                  <input
                    type="text"
                    value={newCustomer.name}
                    onChange={(e) => setNewCustomer({ ...newCustomer, name: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                    placeholder="Enter customer name"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-lg font-semibold text-gray-700">Email</label>
                  <input
                    type="email"
                    value={newCustomer.email}
                    onChange={(e) => setNewCustomer({ ...newCustomer, email: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                    placeholder="Enter customer email"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-lg font-semibold text-gray-700">Phone</label>
                  <input
                    type="text"
                    value={newCustomer.phone}
                    onChange={(e) => setNewCustomer({ ...newCustomer, phone: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                    placeholder="Enter customer phone number"
                  />
                </div>
                <div className="space-y-4">
                  <button
                    onClick={handleAddCustomer}
                    className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
                  >
                    Add Customer
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

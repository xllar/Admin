'use client';
import React, { useState } from 'react';
import { FaList, FaEdit, FaTrashAlt } from 'react-icons/fa';
import Header from '@/components/header/page';
import Footer from '@/components/footer/page';
import Sidebar from '@/components/sidebar/page';

const tabs = [
  { id: 'all', label: 'All Customers', icon: <FaList /> },
];

export default function AllCustomerPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [customers, setCustomers] = useState([
    { id: 1, name: 'Customer A', email: 'customerA@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Customer B', email: 'customerB@example.com', phone: '987-654-3210' },
    { id: 3, name: 'Customer C', email: 'customerC@example.com', phone: '555-123-4567' },
  ]);

  const handleDeleteCustomer = (id: unknown) => {
    setCustomers(customers.filter((customer) => customer.id !== id));
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
              {/* Tab Navigation */}
              <div className="flex flex-wrap justify-center space-x-6 mb-8 gap-4">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`flex items-center space-x-2 px-6 py-3 text-sm font-medium rounded-lg transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-indigo-500 hover:text-white'
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.icon}
                    <span className="hidden sm:inline">{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="rounded-lg p-6 sm:p-8 transition-all duration-300">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-gray-900">Customers</h3>
                  <p className="text-gray-700">Manage your customers here.</p>
                  <div className="space-y-4">
                    <table className="min-w-full bg-white shadow-md rounded-lg">
                      <thead>
                        <tr className="border-b">
                          <th className="px-6 py-3 text-left">Customer Name</th>
                          <th className="px-6 py-3 text-left">Email</th>
                          <th className="px-6 py-3 text-left">Phone</th>
                          <th className="px-6 py-3 text-left">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {customers.map((customer) => (
                          <tr key={customer.id} className="border-b hover:bg-gray-100">
                            <td className="px-6 py-4">{customer.name}</td>
                            <td className="px-6 py-4">{customer.email}</td>
                            <td className="px-6 py-4">{customer.phone}</td>
                            <td className="px-6 py-4">
                              <button
                                onClick={() => alert('Edit functionality coming soon')}
                                className="text-indigo-600 hover:text-indigo-800 mr-2"
                              >
                                <FaEdit />
                              </button>
                              <button
                                onClick={() => handleDeleteCustomer(customer.id)}
                                className="text-red-600 hover:text-red-800"
                              >
                                <FaTrashAlt />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
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

'use client';
import React, { useState } from 'react';
import { FaUsers, FaEdit, FaTrashAlt } from 'react-icons/fa';
import Header from '@/components/header/page';
import Footer from '@/components/footer/page';
import Sidebar from '@/components/sidebar/page';

const tabs = [
  { id: 'all', label: 'All Customer Groups', icon: <FaUsers /> },
];

export default function CustomerGroupPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [customerGroups, setCustomerGroups] = useState([
    { id: 1, name: 'VIP Customers' },
    { id: 2, name: 'Regular Customers' },
  ]);

  const handleDeleteGroup = (id: unknown) => {
    setCustomerGroups(customerGroups.filter((group) => group.id !== id));
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
                  <h3 className="text-2xl font-semibold text-gray-900">Customer Groups</h3>
                  <p className="text-gray-700">Manage your customer groups here.</p>
                  <div className="space-y-4">
                    <table className="min-w-full bg-white shadow-md rounded-lg">
                      <thead>
                        <tr className="border-b">
                          <th className="px-6 py-3 text-left">Group Name</th>
                          <th className="px-6 py-3 text-left">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {customerGroups.map((group) => (
                          <tr key={group.id} className="border-b hover:bg-gray-100">
                            <td className="px-6 py-4">{group.name}</td>
                            <td className="px-6 py-4">
                              <button
                                onClick={() => alert('Edit functionality coming soon')}
                                className="text-indigo-600 hover:text-indigo-800 mr-2"
                              >
                                <FaEdit />
                              </button>
                              <button
                                onClick={() => handleDeleteGroup(group.id)}
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

'use client';
import React, { useState } from 'react';
import { FaList, FaEdit, FaTrashAlt } from 'react-icons/fa';
import Header from '@/components/header/page';
import Footer from '@/components/footer/page';
import Sidebar from '@/components/sidebar/page';

const tabs = [
  { id: 'all', label: 'All Inventory', icon: <FaList /> },
];

export default function InventoryManagement() {
  const [activeTab, setActiveTab] = useState('all');
  const [inventory, setInventory] = useState([
    { id: 1, name: 'Product A', quantity: 100, price: 30.00 },
    { id: 2, name: 'Product B', quantity: 50, price: 20.00 },
    { id: 3, name: 'Product C', quantity: 200, price: 15.00 },
  ]);

  const handleDeleteProduct = (id: unknown) => {
    setInventory(inventory.filter(item => item.id !== id));
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'all':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">Inventory</h3>
            <p className="text-gray-700">Manage your product inventory here.</p>
            <div className="space-y-4">
              <table className="min-w-full bg-white shadow-md rounded-lg">
                <thead>
                  <tr className="border-b">
                    <th className="px-6 py-3 text-left">Product Name</th>
                    <th className="px-6 py-3 text-left">Quantity</th>
                    <th className="px-6 py-3 text-left">Price</th>
                    <th className="px-6 py-3 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {inventory.map((item) => (
                    <tr key={item.id} className="border-b hover:bg-gray-100">
                      <td className="px-6 py-4">{item.name}</td>
                      <td className="px-6 py-4">{item.quantity}</td>
                      <td className="px-6 py-4">${item.price.toFixed(2)}</td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => alert('Edit functionality coming soon')}
                          className="text-indigo-600 hover:text-indigo-800 mr-2"
                        >
                          <FaEdit />
                        </button>
                        <button
                          onClick={() => handleDeleteProduct(item.id)}
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
        );
      default:
        return null;
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
                {renderTabContent()}
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

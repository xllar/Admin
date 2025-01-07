'use client';
import React, { useState } from 'react';
import AllOrders from '@/components/order/all-orders';
import PendingOrders from '@/components/order/pending';
import CompletedOrders from '@/components/order/completed-orders';
import OrderHistory from '@/components/order/order-hstory';
import { FaList, FaClock, FaCheck, FaHistory } from 'react-icons/fa';

import Header from '@/components/header/page';
import Footer from '@/components/footer/page';
import Sidebar from '@/components/sidebar/page';

const tabs = [
  { id: 'all', label: 'All Orders', icon: <FaList /> },
  { id: 'pending', label: 'Pending Orders', icon: <FaClock /> },
  { id: 'completed', label: 'Completed Orders', icon: <FaCheck /> },
  { id: 'history', label: 'Order History', icon: <FaHistory /> },
];

export default function OrderDashboard() {
  const [activeTab, setActiveTab] = useState('all');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'pending':
        return <PendingOrders />;
      case 'completed':
        return <CompletedOrders />;
      case 'history':
        return <OrderHistory />;
      default:
        return <AllOrders />;
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
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-purple-500 hover:text-white'
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

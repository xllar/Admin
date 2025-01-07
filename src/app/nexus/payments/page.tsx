'use client';
import React, { useState } from 'react';

import { FaCreditCard, FaHistory, FaUndo, FaCog } from 'react-icons/fa';

import Header from '@/components/header/page';
import Footer from '@/components/footer/page';
import Sidebar from '@/components/sidebar/page';
import { TransactionHistory } from '@/components/payments/transaction-history/page';
import { PaymentGateway } from '@/components/payments/payment-gateway/page';
import { PaymentSettings } from '@/components/payments/payment-setting/page';
import { Refunds } from '@/components/payments/refund/page';

const tabs = [
  { id: 'gateway', label: 'Payment Gateway', icon: <FaCreditCard /> },
  { id: 'history', label: 'Transaction History', icon: <FaHistory /> },
  { id: 'refunds', label: 'Refunds', icon: <FaUndo /> },
  { id: 'settings', label: 'Payment Settings', icon: <FaCog /> },
];

export default function PaymentDashboard() {
  const [activeTab, setActiveTab] = useState('gateway');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'history':
        return <TransactionHistory />;
      case 'refunds':
        return <Refunds />;
      case 'settings':
        return <PaymentSettings />;
      default:
        return <PaymentGateway />;
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

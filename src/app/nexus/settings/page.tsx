'use client';
import React, { useState } from 'react';
import StoreSettings from '@/components/dashboard-setting/store-settings/page';
import TaxSettings from '@/components/dashboard-setting/tax-settings/page';
import SecuritySettings from '@/components/dashboard-setting/security-settings/page';
import UserRoleSettings from '@/components/dashboard-setting/user-role/page';
import OrderSettings from '@/components/dashboard-setting/order-settings/page';
import Sidebar from '@/components/sidebar/page';
import Header from '@/components/header/page';
import Footer from '@/components/footer/page';

const settingsTabs = [
  { id: 'store', label: 'Store Settings', component: <StoreSettings /> },
  { id: 'tax', label: 'Tax Settings', component: <TaxSettings /> },
  { id: 'security', label: 'Security Settings', component: <SecuritySettings /> },
  { id: 'role', label: 'User Roles', component: <UserRoleSettings /> },
  { id: 'order', label: 'Order Settings', component: <OrderSettings /> },
];

export default function SettingsDashboard() {
  const [activeTab, setActiveTab] = useState('store');

  const renderTabContent = () => {
    const activeTabContent = settingsTabs.find(tab => tab.id === activeTab);
    return activeTabContent ? activeTabContent.component : null;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-grow">
        {/* Sidebar */}
        <Sidebar />
        {/* Main Content */}
        <div className="flex flex-col flex-grow">
          {/* Header */}
          <Header />
          {/* Settings Tabs */}
          <main className="flex-grow">
            <div className="container mx-auto px-6 mt-6">
              {/* Tab Navigation */}
              <div className="flex flex-wrap justify-center space-x-6 mb-8 gap-4">
                {settingsTabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`flex items-center space-x-2 px-6 py-3 text-sm font-medium rounded-lg transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-purple-500 hover:text-white'
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
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

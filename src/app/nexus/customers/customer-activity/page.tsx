'use client';
import React, { useState } from 'react';
import { FaClipboardList } from 'react-icons/fa';
import Header from '@/components/header/page';
import Footer from '@/components/footer/page';
import Sidebar from '@/components/sidebar/page';

const tabs = [
  { id: 'all', label: 'All Customer Activities', icon: <FaClipboardList /> },
];

export default function CustomerActivityPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [activities] = useState([
    { id: 1, customerName: 'John Doe', activity: 'Logged in', date: '2025-01-01' },
    { id: 2, customerName: 'Jane Smith', activity: 'Made a purchase', date: '2025-01-02' },
  ]);

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
                  <h3 className="text-2xl font-semibold text-gray-900">Customer Activities</h3>
                  <p className="text-gray-700">Track your customers&apos; activities here.</p>
                  <div className="space-y-4">
                    <table className="min-w-full bg-white shadow-md rounded-lg">
                      <thead>
                        <tr className="border-b">
                          <th className="px-6 py-3 text-left">Customer Name</th>
                          <th className="px-6 py-3 text-left">Activity</th>
                          <th className="px-6 py-3 text-left">Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {activities.map((activity) => (
                          <tr key={activity.id} className="border-b hover:bg-gray-100">
                            <td className="px-6 py-4">{activity.customerName}</td>
                            <td className="px-6 py-4">{activity.activity}</td>
                            <td className="px-6 py-4">{activity.date}</td>
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

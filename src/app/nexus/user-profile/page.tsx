'use client';

import React, { useState, useEffect } from 'react';
import { User as UserIcon, Settings as SettingsIcon, Activity as ActivityIcon } from 'lucide-react';

import Header from '@/components/header/page';
import Footer from '@/components/footer/page';
import Sidebar from '@/components/sidebar/page';

import Settings from '@/components/user-profile/settings/page';
import ProfileDetails from '@/components/user-profile/profile-details/page';
import Activity from '@/components/user-profile/activity/page';

const tabs = [
  { id: 'profile', label: 'Profile', icon: <UserIcon /> },
  { id: 'settings', label: 'Settings', icon: <SettingsIcon /> },
  { id: 'activity', label: 'Activity', icon: <ActivityIcon /> },
];

export default function UserProfile() {
  const [activeTab, setActiveTab] = useState('profile');

  // On initial mount, load the active tab from localStorage
  useEffect(() => {
    const savedTab = localStorage.getItem('activeTab');
    if (savedTab) {
      setActiveTab(savedTab);
    }
  }, []);

  // Save active tab to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('activeTab', activeTab);
  }, [activeTab]);

  const renderTabContent = () => {
    switch (activeTab) {
      case 'settings':
        return <Settings />;
      case 'activity':
        return <Activity />;
      default:
        return <ProfileDetails />;
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
                    className={`flex items-center space-x-2 px-6 py-1 text-sm font-medium rounded-lg transition-all duration-300 ${
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

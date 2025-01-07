'use client';

import React, { useState } from 'react';
import Sidebar from '@/components/sidebar/page';
import Header from '@/components/header/page';
import Footer from '@/components/footer/page';
import { FaSearch, FaCheck, FaTimes } from 'react-icons/fa';

export default function NotificationPage() {
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'Feature Update', message: 'A new feature has been added.', read: false, type: 'Update' },
    { id: 2, title: 'Maintenance Notice', message: 'Scheduled maintenance on Sunday at 2 AM.', read: true, type: 'Maintenance' },
    { id: 3, title: 'New Message', message: 'You have a new message from support.', read: false, type: 'Message' },
    // Add more notifications here
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');

  const filteredNotifications = notifications.filter((notification) => {
    const matchesSearch = notification.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'All' || notification.type === filter;
    return matchesSearch && matchesFilter;
  });

  const markAllAsRead = () => {
    setNotifications(notifications.map((notif) => ({ ...notif, read: true })));
  };

  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter((notif) => notif.id !== id));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-grow">
        <Sidebar />
        <div className="flex flex-col flex-grow">
          <Header />
          <main className="flex-grow">
            <div className="container mx-auto px-6 mt-6">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Notifications</h1>
                <button
                  onClick={markAllAsRead}
                  className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
                >
                  Mark All as Read
                </button>
              </div>

              {/* Search and Filter */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2 shadow-sm">
                  <FaSearch className="text-gray-400 mr-2" />
                  <input
                    type="text"
                    placeholder="Search notifications..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="bg-transparent focus:outline-none"
                  />
                </div>
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="bg-gray-100 px-4 py-2 rounded-lg shadow-sm focus:outline-none"
                >
                  <option value="All">All</option>
                  <option value="Update">Updates</option>
                  <option value="Maintenance">Maintenance</option>
                  <option value="Message">Messages</option>
                </select>
              </div>

              {/* Notifications List */}
              <ul className="space-y-4">
                {filteredNotifications.map((notification) => (
                  <li
                    key={notification.id}
                    className={`p-4 rounded-lg shadow-md flex justify-between items-start ${
                      notification.read ? 'bg-gray-100' : 'bg-purple-100'
                    } hover:bg-gray-200 transition`}
                  >
                    <div>
                      <h2 className="font-semibold text-lg">{notification.title}</h2>
                      <p className="text-sm text-gray-700">{notification.message}</p>
                      <span
                        className={`text-xs font-semibold mt-2 inline-block px-2 py-1 rounded ${
                          notification.type === 'Update'
                            ? 'bg-blue-100 text-blue-700'
                            : notification.type === 'Maintenance'
                            ? 'bg-yellow-100 text-yellow-700'
                            : 'bg-green-100 text-green-700'
                        }`}
                      >
                        {notification.type}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4">
                      {!notification.read && (
                        <button
                          onClick={() =>
                            setNotifications(
                              notifications.map((notif) =>
                                notif.id === notification.id ? { ...notif, read: true } : notif
                              )
                            )
                          }
                          className="text-purple-600 hover:text-purple-800"
                        >
                          <FaCheck />
                        </button>
                      )}
                      <button
                        onClick={() => deleteNotification(notification.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <FaTimes />
                      </button>
                    </div>
                  </li>
                ))}
                {filteredNotifications.length === 0 && (
                  <p className="text-gray-600 text-center">No notifications found.</p>
                )}
              </ul>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}

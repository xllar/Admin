'use client';

import React, { useState } from 'react';

export default function LayoutSettings() {
  const [sidebarPosition, setSidebarPosition] = useState<'left' | 'right'>('left');
  const [headerPosition, setHeaderPosition] = useState<'fixed' | 'scrollable'>('fixed');
  const [contentWidth, setContentWidth] = useState<'full' | 'boxed'>('full');
  const [navbarVisibility, setNavbarVisibility] = useState<boolean>(true);

  return (
    <div className="space-y-6 px-6 py-4 bg-gray-50 rounded-lg shadow-md max-w-4xl mx-auto">
      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-800">Layout Settings</h2>
      <p className="text-gray-600 text-sm">Adjust the layout of your dashboard to fit your preferences.</p>

      {/* Sidebar Position */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800">Sidebar Position</h3>
        <div className="flex space-x-4">
          {['left', 'right'].map((position) => (
            <button
              key={position}
              onClick={() => setSidebarPosition(position as 'left' | 'right')}
              className={`px-3 py-2 rounded-lg font-medium text-sm shadow-sm transition-all border focus:outline-none focus:ring-2 focus:ring-offset-2
                ${sidebarPosition === position ? 'bg-purple-600 text-white border-purple-700' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
            >
              {position.charAt(0).toUpperCase() + position.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Header Position */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800">Header Position</h3>
        <div className="flex space-x-4">
          {['fixed', 'scrollable'].map((position) => (
            <button
              key={position}
              onClick={() => setHeaderPosition(position as 'fixed' | 'scrollable')}
              className={`px-3 py-2 rounded-lg font-medium text-sm shadow-sm transition-all border focus:outline-none focus:ring-2 focus:ring-offset-2
                ${headerPosition === position ? 'bg-purple-600 text-white border-purple-700' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
            >
              {position.charAt(0).toUpperCase() + position.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Content Width */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800">Content Width</h3>
        <div className="flex space-x-4">
          {['full', 'boxed'].map((width) => (
            <button
              key={width}
              onClick={() => setContentWidth(width as 'full' | 'boxed')}
              className={`px-3 py-2 rounded-lg font-medium text-sm shadow-sm transition-all border focus:outline-none focus:ring-2 focus:ring-offset-2
                ${contentWidth === width ? 'bg-purple-600 text-white border-purple-700' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
            >
              {width.charAt(0).toUpperCase() + width.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Navbar Visibility */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800">Navbar Visibility</h3>
        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            checked={navbarVisibility}
            onChange={() => setNavbarVisibility(!navbarVisibility)}
            className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
          />
          <label className="text-sm text-gray-700">Show Navbar</label>
        </div>
      </div>

      {/* Preview */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Preview</h3>
        <div className="space-y-6">
          <div
            className={`w-full p-4 border-2 rounded-lg shadow-md ${
              contentWidth === 'boxed' ? 'max-w-screen-md mx-auto' : ''
            }`}
            style={{
              backgroundColor: '#f3f4f6',
              borderTopLeftRadius: headerPosition === 'fixed' ? '20px' : '0',
            }}
          >
            <div
              className={`${
                headerPosition === 'fixed' ? 'sticky top-0 bg-white shadow-md' : ''
              } p-4 border-b-2`}
            >
              <h2 className="text-xl font-semibold text-gray-800">Header</h2>
            </div>
            <div className="p-4">
              <p>Sidebar Position: {sidebarPosition}</p>
              <p>Navbar Visibility: {navbarVisibility ? 'Visible' : 'Hidden'}</p>
              <p>Content Width: {contentWidth}</p>
              <p>Header Position: {headerPosition}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useState } from 'react';

export default function ColorScheme() {
  const [themeMode, setThemeMode] = useState<'light' | 'dark' | 'system'>('system');
  const [primaryColor, setPrimaryColor] = useState('#6366F1'); // Default purple
  const [secondaryColor, setSecondaryColor] = useState('#F43F5E'); // Default pink
  const [gradientEnabled, setGradientEnabled] = useState(false);
  const [backgroundGradient, setBackgroundGradient] = useState('linear-gradient(to right, #4f46e5, #ec4899)');

  return (
    <div className="space-y-6 px-6 py-4 bg-gray-50 rounded-lg shadow-md max-w-4xl mx-auto">
      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-800">Color Scheme Settings</h2>
      <p className="text-gray-600 text-sm">Customize your dashboard colors and theme preferences.</p>

      {/* Theme Mode Selection */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800">Theme Mode</h3>
        <div className="flex space-x-3">
          {['light', 'dark', 'system'].map((mode) => (
            <button
              key={mode}
              onClick={() => setThemeMode(mode as 'light' | 'dark' | 'system')}
              className={`px-3 py-2 rounded-lg font-medium text-sm shadow-sm transition-all border focus:outline-none focus:ring-2 focus:ring-offset-2
                ${themeMode === mode ? 'bg-purple-600 text-white border-purple-700' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
            >
              {mode.charAt(0).toUpperCase() + mode.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Color Selection */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-gray-800">Color Customization</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Primary Color */}
          <div className="flex flex-col items-start">
            <label className="text-sm font-medium text-gray-700 mb-1">Primary Color</label>
            <input
              type="color"
              value={primaryColor}
              onChange={(e) => setPrimaryColor(e.target.value)}
              className="w-12 h-12 rounded-full border-2 border-gray-300 cursor-pointer"
            />
            <span className="text-xs text-gray-500 mt-2">Selected: {primaryColor}</span>
          </div>

          {/* Secondary Color */}
          <div className="flex flex-col items-start">
            <label className="text-sm font-medium text-gray-700 mb-1">Secondary Color</label>
            <input
              type="color"
              value={secondaryColor}
              onChange={(e) => setSecondaryColor(e.target.value)}
              className="w-12 h-12 rounded-full border-2 border-gray-300 cursor-pointer"
            />
            <span className="text-xs text-gray-500 mt-2">Selected: {secondaryColor}</span>
          </div>
        </div>
      </div>

      {/* Gradient Background */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800">Background Settings</h3>
        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            checked={gradientEnabled}
            onChange={() => setGradientEnabled(!gradientEnabled)}
            className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
          />
          <label className="text-sm text-gray-700">Enable Gradient Background</label>
        </div>
        {gradientEnabled && (
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">Gradient CSS</label>
            <input
              type="text"
              value={backgroundGradient}
              onChange={(e) => setBackgroundGradient(e.target.value)}
              placeholder="e.g., linear-gradient(to right, #4f46e5, #ec4899)"
              className="w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            />
            <span className="text-xs text-gray-500 mt-2 block">Current Gradient: {backgroundGradient}</span>
          </div>
        )}
      </div>

      {/* Preview */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Preview</h3>
        <div
          className="w-48 h-24 rounded-lg shadow-md flex items-center justify-center text-sm font-medium"
          style={{
            background: gradientEnabled ? backgroundGradient : primaryColor,
            color: secondaryColor,
          }}
        >
          Preview
        </div>
      </div>
    </div>
  );
}


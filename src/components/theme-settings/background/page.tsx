'use client';

import React, { useState } from 'react';

export default function BackgroundSettings() {
  const [backgroundType, setBackgroundType] = useState<'solid' | 'gradient' | 'image'>('solid');
  const [backgroundColor, setBackgroundColor] = useState('#F0F4F8');
  const [gradientColorStart, setGradientColorStart] = useState('#4f46e5');
  const [gradientColorEnd, setGradientColorEnd] = useState('#ec4899');
  const [imageURL, setImageURL] = useState('');

  const handleBackgroundChange = (type: 'solid' | 'gradient' | 'image') => {
    setBackgroundType(type);
    if (type === 'solid') {
      setImageURL('');
    }
  };

  const backgroundStyle = backgroundType === 'gradient'
    ? `linear-gradient(to right, ${gradientColorStart}, ${gradientColorEnd})`
    : backgroundType === 'image'
    ? `url(${imageURL})`
    : backgroundColor;

  return (
    <div className="space-y-6 px-6 py-4 bg-gray-50 rounded-lg shadow-md max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800">Background Settings</h2>
      <p className="text-gray-600 text-sm">Customize your dashboard background.</p>

      {/* Background Type */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800">Background Type</h3>
        <div className="flex space-x-3">
          {['solid', 'gradient', 'image'].map((type) => (
            <button
              key={type}
              onClick={() => handleBackgroundChange(type as 'solid' | 'gradient' | 'image')}
              className={`px-4 py-2 rounded-lg font-medium text-sm shadow-sm transition-all border focus:outline-none focus:ring-2 focus:ring-offset-2
                ${backgroundType === type ? 'bg-purple-600 text-white border-purple-700' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Solid Color */}
      {backgroundType === 'solid' && (
        <div className="space-y-4">
          <label className="text-sm font-medium text-gray-700">Background Color</label>
          <input
            type="color"
            value={backgroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}
            className="w-12 h-12 rounded-full border-2 border-gray-300 cursor-pointer"
          />
          <span className="text-xs text-gray-500 mt-2">Selected: {backgroundColor}</span>
        </div>
      )}

      {/* Gradient */}
      {backgroundType === 'gradient' && (
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700">Gradient Start Color</label>
            <input
              type="color"
              value={gradientColorStart}
              onChange={(e) => setGradientColorStart(e.target.value)}
              className="w-12 h-12 rounded-full border-2 border-gray-300 cursor-pointer"
            />
            <span className="text-xs text-gray-500 mt-2">Selected: {gradientColorStart}</span>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Gradient End Color</label>
            <input
              type="color"
              value={gradientColorEnd}
              onChange={(e) => setGradientColorEnd(e.target.value)}
              className="w-12 h-12 rounded-full border-2 border-gray-300 cursor-pointer"
            />
            <span className="text-xs text-gray-500 mt-2">Selected: {gradientColorEnd}</span>
          </div>
        </div>
      )}

      {/* Image URL */}
      {backgroundType === 'image' && (
        <div className="space-y-4">
          <label className="text-sm font-medium text-gray-700">Background Image URL</label>
          <input
            type="text"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
            placeholder="Enter image URL"
            className="w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <span className="text-xs text-gray-500 mt-2">Preview Image URL: {imageURL}</span>
        </div>
      )}

      {/* Preview */}
<div className="mt-4">
  <h3 className="text-base font-semibold text-gray-700 mb-2">Preview</h3>
  <div
    className="w-32 h-24 rounded-lg shadow flex items-center justify-center text-xs font-medium text-gray-700"
    style={{
      background: backgroundStyle,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    Preview
  </div>
</div>

    </div>
  );
}

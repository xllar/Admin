"use client";

import React, { useState } from "react";

export default function AnimationSettings() {
  const [animationEnabled, setAnimationEnabled] = useState(false);
  const [animationType, setAnimationType] = useState<'fade' | 'slide' | 'zoom' | 'bounce'>('fade');
  const [duration, setDuration] = useState(500);

  const handleAnimationToggle = () => setAnimationEnabled(!animationEnabled);

  return (
    <div className="space-y-6 px-6 py-4 bg-gray-50 rounded-lg shadow-md max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800">Animation Settings</h2>
      <p className="text-gray-600 text-sm">Customize animations for dashboard components.</p>

      {/* Animation Toggle */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800">Enable Animation</h3>
        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            checked={animationEnabled}
            onChange={handleAnimationToggle}
            className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
          />
          <label className="text-sm text-gray-700">Enable Animation Effects</label>
        </div>
      </div>

      {/* Animation Type */}
      {animationEnabled && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">Animation Type</h3>
          <div className="flex flex-wrap gap-3">
            {['fade', 'slide', 'zoom', 'bounce'].map((type) => (
              <button
                key={type}
                onClick={() => setAnimationType(type as 'fade' | 'slide' | 'zoom' | 'bounce')}
                className={`px-4 py-2 rounded-lg font-medium text-sm shadow-sm transition-all border focus:outline-none focus:ring-2 focus:ring-offset-2
                  ${animationType === type ? 'bg-purple-600 text-white border-purple-700' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Transition Duration */}
      {animationEnabled && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">Transition Duration</h3>
          <input
            type="range"
            min={200}
            max={2000}
            step={100}
            value={duration}
            onChange={(e) => setDuration(parseInt(e.target.value))}
            className="w-full"
          />
          <span className="text-sm text-gray-500">Duration: {duration}ms</span>
        </div>
      )}

      {/* Animation Preview */}
      {animationEnabled && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-800">Preview</h3>
          <div
            className={`w-48 h-24 rounded-lg shadow-md flex items-center justify-center text-sm font-medium transition-all duration-${duration}
              ${animationType === 'fade' ? 'opacity-0 animate-fade-in' : ''}
              ${animationType === 'slide' ? 'transform -translate-x-full animate-slide-in' : ''}
              ${animationType === 'zoom' ? 'transform scale-50 animate-zoom-in' : ''}
              ${animationType === 'bounce' ? 'animate-bounce' : ''}`}
            style={{
              background: 'linear-gradient(to right, #4f46e5, #ec4899)',
              color: '#ffffff',
            }}
          >
            Preview
          </div>
        </div>
      )}
    </div>
  );
}

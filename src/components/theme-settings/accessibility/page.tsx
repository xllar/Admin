"use client";

import React, { useState } from "react";
import { FiEye, FiType } from "react-icons/fi";

export default function AccessibilitySettings() {
  const [highContrast, setHighContrast] = useState(false);
  const [fontScaling, setFontScaling] = useState(1);

  const handleReset = () => {
    setHighContrast(false);
    setFontScaling(1);
    alert("Accessibility settings reset to default.");
  };

  return (
    <div
      className={`space-y-6 px-6 py-4 rounded-lg shadow-md max-w-4xl mx-auto ${
        highContrast ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"
      }`}
    >
      {/* Title */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Accessibility Settings</h2>
        <button
          onClick={handleReset}
          className="px-3 py-1 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600"
        >
          Reset
        </button>
      </div>
      <p className="text-sm">
        Customize settings to improve accessibility and usability.
      </p>

      {/* High Contrast Mode */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <FiEye /> High Contrast Mode
        </h3>
        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            checked={highContrast}
            onChange={() => setHighContrast(!highContrast)}
            className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
          />
          <label className="text-sm">
            {highContrast
              ? "High Contrast Mode Enabled"
              : "Enable High Contrast Mode"}
          </label>
        </div>
      </div>

      {/* Font Scaling */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <FiType /> Font Scaling
        </h3>
        <div className="flex items-center space-x-4">
          <input
            type="range"
            min={0.8}
            max={1.5}
            step={0.1}
            value={fontScaling}
            onChange={(e) => setFontScaling(parseFloat(e.target.value))}
            className="w-full"
          />
          <span className="text-sm">
            Scale: <strong>{fontScaling.toFixed(1)}x</strong>
          </span>
        </div>
        <p className="text-xs text-gray-500">
          Adjust the font size to improve readability.
        </p>
      </div>

      {/* Live Preview */}
      <div
        className="p-4 border rounded-lg"
        style={{ fontSize: `${fontScaling}em` }}
      >
        <p className="font-semibold">Live Preview:</p>
        <p>
          This is how your text will look with the current accessibility
          settings.
        </p>
      </div>
    </div>
  );
}

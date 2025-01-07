"use client";

import React, { useState } from "react";

export default function LanguageAndRegionalSettings() {
  const [language, setLanguage] = useState("en");
  const [dateFormat, setDateFormat] = useState("MM/DD/YYYY");
  const [numberFormat, setNumberFormat] = useState("1,234.56");

  return (
    <div className="space-y-6 px-6 py-4 bg-gray-50 rounded-lg shadow-md max-w-4xl mx-auto">
      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-800">Language and Regional Settings</h2>
      <p className="text-gray-600 text-sm">Adjust language and format preferences for your dashboard.</p>

      {/* Language Selection */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800">Language</h3>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="es">Spanish</option>
          <option value="de">German</option>
        </select>
      </div>

      {/* Date Format */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800">Date Format</h3>
        <select
          value={dateFormat}
          onChange={(e) => setDateFormat(e.target.value)}
          className="w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="MM/DD/YYYY">MM/DD/YYYY</option>
          <option value="DD/MM/YYYY">DD/MM/YYYY</option>
          <option value="YYYY/MM/DD">YYYY/MM/DD</option>
        </select>
      </div>

      {/* Number Format */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800">Number Format</h3>
        <select
          value={numberFormat}
          onChange={(e) => setNumberFormat(e.target.value)}
          className="w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="1,234.56">1,234.56</option>
          <option value="1.234,56">1.234,56</option>
          <option value="1234.56">1234.56</option>
        </select>
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { FiRefreshCw, FiCheckCircle } from "react-icons/fi";

export default function ResetAndApply() {
  const [status, setStatus] = useState("unchanged"); // "unchanged", "reset", "applied"

  const handleReset = () => {
    // Confirm and reset settings
    if (confirm("Are you sure you want to reset all settings to default?")) {
      setStatus("reset");
      setTimeout(() => alert("All settings have been reset to default."), 500);
    }
  };

  const handleApply = () => {
    // Apply current settings
    setStatus("applied");
    setTimeout(() => alert("Settings applied successfully."), 500);
  };

  return (
    <div className="flex flex-col gap-6 p-6 bg-white rounded-lg shadow-lg max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-800">Settings Actions</h2>
        <p className={`text-sm ${
          status === "applied" ? "text-green-600" : status === "reset" ? "text-red-600" : "text-gray-500"
        }`}>
          {status === "unchanged"
            ? "No changes made."
            : status === "reset"
            ? "Settings have been reset."
            : "Settings have been applied."}
        </p>
      </div>

      {/* Buttons */}
      <div className="flex justify-between items-center">
        {/* Reset Button */}
        <button
          onClick={handleReset}
          className="flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 rounded-lg font-medium shadow-sm hover:bg-red-200"
        >
          <FiRefreshCw className="text-red-700" />
          Reset to Default
        </button>

        {/* Apply Button */}
        <button
          onClick={handleApply}
          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg font-medium shadow-sm hover:bg-green-700"
        >
          <FiCheckCircle />
          Apply Settings
        </button>
      </div>

      {/* Footer */}
      <p className="text-xs text-gray-400">Changes are not saved automatically. Click Apply Settings to save them.</p>
    </div>
  );
}

'use client';

import React, { useState } from 'react';

export default function Typography() {
  const [fontFamily, setFontFamily] = useState<'sans-serif' | 'serif' | 'monospace'>('sans-serif');
  const [fontWeight, setFontWeight] = useState<'light' | 'normal' | 'bold'>('normal');
  const [fontSize, setFontSize] = useState('medium');
  const [lineHeight, setLineHeight] = useState('normal');
  const [letterSpacing, setLetterSpacing] = useState('normal');
  const [textTransform, setTextTransform] = useState<'none' | 'uppercase' | 'lowercase' | 'capitalize'>('none');

  // Update Typography settings globally (optional if needed)
  const handleFontFamilyChange = (e: React.ChangeEvent<HTMLSelectElement>) => setFontFamily(e.target.value as 'sans-serif' | 'serif' | 'monospace');
  const handleFontWeightChange = (e: React.ChangeEvent<HTMLSelectElement>) => setFontWeight(e.target.value as 'light' | 'normal' | 'bold');
  const handleFontSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => setFontSize(e.target.value);
  const handleLineHeightChange = (e: React.ChangeEvent<HTMLSelectElement>) => setLineHeight(e.target.value);
  const handleLetterSpacingChange = (e: React.ChangeEvent<HTMLSelectElement>) => setLetterSpacing(e.target.value);
  const handleTextTransformChange = (e: React.ChangeEvent<HTMLSelectElement>) => setTextTransform(e.target.value as 'none' | 'uppercase' | 'lowercase' | 'capitalize');

  return (
    <div className="space-y-6 px-6 py-4 bg-gray-50 rounded-lg shadow-md max-w-4xl mx-auto">
      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-800">Typography Settings</h2>
      <p className="text-gray-600 text-sm">Customize your typography settings including font, size, weight, and other text properties.</p>

      {/* Font Family Selection */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800">Font Family</h3>
        <select
          value={fontFamily}
          onChange={handleFontFamilyChange}
          className="px-3 py-2 text-sm border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
        >
          <option value="sans-serif">Sans Serif</option>
          <option value="serif">Serif</option>
          <option value="monospace">Monospace</option>
        </select>
      </div>

      {/* Font Weight Selection */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800">Font Weight</h3>
        <select
          value={fontWeight}
          onChange={handleFontWeightChange}
          className="px-3 py-2 text-sm border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
        >
          <option value="light">Light</option>
          <option value="normal">Normal</option>
          <option value="bold">Bold</option>
        </select>
      </div>

      {/* Font Size Selection */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800">Font Size</h3>
        <select
          value={fontSize}
          onChange={handleFontSizeChange}
          className="px-3 py-2 text-sm border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
        >
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>

      {/* Line Height Selection */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800">Line Height</h3>
        <select
          value={lineHeight}
          onChange={handleLineHeightChange}
          className="px-3 py-2 text-sm border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
        >
          <option value="normal">Normal</option>
          <option value="spacious">Spacious</option>
        </select>
      </div>

      {/* Letter Spacing Selection */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800">Letter Spacing</h3>
        <select
          value={letterSpacing}
          onChange={handleLetterSpacingChange}
          className="px-3 py-2 text-sm border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
        >
          <option value="normal">Normal</option>
          <option value="wide">Wide</option>
          <option value="tight">Tight</option>
        </select>
      </div>

      {/* Text Transform Selection */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800">Text Transformation</h3>
        <select
          value={textTransform}
          onChange={handleTextTransformChange}
          className="px-3 py-2 text-sm border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
        >
          <option value="none">None</option>
          <option value="uppercase">Uppercase</option>
          <option value="lowercase">Lowercase</option>
          <option value="capitalize">Capitalize</option>
        </select>
      </div>

      {/* Preview */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Preview</h3>
        <div
          className="w-full h-24 rounded-lg shadow-md flex items-center justify-center text-sm font-medium"
          style={{
            fontFamily: fontFamily,
            fontWeight: fontWeight === 'light' ? '300' : fontWeight === 'bold' ? '700' : '400',
            fontSize: fontSize === 'small' ? '12px' : fontSize === 'large' ? '20px' : '16px',
            lineHeight: lineHeight === 'spacious' ? '2' : '1.5',
            letterSpacing: letterSpacing === 'wide' ? '2px' : letterSpacing === 'tight' ? '-1px' : 'normal',
            textTransform: textTransform,
          }}
        >
          Preview Text
        </div>
      </div>
    </div>
  );
}

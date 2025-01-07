'use client';
import React, { useState } from 'react';
import { FaPalette, FaFont, FaColumns, FaBrush, FaCog, FaImages, FaMagic, FaGlobe, FaUniversalAccess, FaRedo } from 'react-icons/fa';
import Header from '@/components/header/page';
import Footer from '@/components/footer/page';
import Sidebar from '@/components/sidebar/page';

import ColorScheme from '@/components/theme-settings/color-scheme/page';
import TypographySettings from '@/components/theme-settings/typography-settings/page';
import LayoutSettings from '@/components/theme-settings/layout-settings/page';
import ThemePresets from '@/components/theme-settings/theme-presets/page';
import WidgetsSettings from '@/components/theme-settings/widgets-settings/page';
import BackgroundSettings from '@/components/theme-settings/background/page';
import AnimationSettings from '@/components/theme-settings/animation/page';
import RegionalSettings from '@/components/theme-settings/regional/page';
import AccessibilitySettings from '@/components/theme-settings/accessibility/page';
import ResetApply from '@/components/theme-settings/reset/page';

const settings = [
  { id: 'color-scheme', label: 'Color Scheme', icon: <FaPalette /> },
  { id: 'typography', label: 'Typography', icon: <FaFont /> },
  { id: 'layout', label: 'Layout Settings', icon: <FaColumns /> },
  { id: 'theme-presets', label: 'Theme Presets', icon: <FaBrush /> },
  { id: 'widgets', label: 'Widgets and Components', icon: <FaCog /> },
  { id: 'background', label: 'Background Settings', icon: <FaImages /> },
  { id: 'animations', label: 'Animations', icon: <FaMagic /> },
  { id: 'regional', label: 'Language & Regional', icon: <FaGlobe /> },
  { id: 'accessibility', label: 'Accessibility', icon: <FaUniversalAccess /> },
  { id: 'reset-apply', label: 'Reset & Apply', icon: <FaRedo /> },
];

export default function ThemeCustomization() {
  const [activeSetting, setActiveSetting] = useState('color-scheme');

  const renderSettingContent = () => {
    switch (activeSetting) {
      case 'typography':
        return <TypographySettings />;
      case 'layout':
        return <LayoutSettings />;
      case 'theme-presets':
        return <ThemePresets />;
      case 'widgets':
        return <WidgetsSettings />;
      case 'background':
        return <BackgroundSettings />;
      case 'animations':
        return <AnimationSettings />;
      case 'regional':
        return <RegionalSettings />;
      case 'accessibility':
        return <AccessibilitySettings />;
      case 'reset-apply':
        return <ResetApply />;
      default:
        return <ColorScheme />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-grow">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex flex-col flex-grow">
          {/* Header */}
          <Header />

          {/* Main Settings Section */}
          <main className="flex-grow">
            <div className="container mx-auto px-6 mt-6">
              {/* Settings Navigation */}
              <div className="flex flex-wrap justify-center space-x-6 mb-8 gap-4">
                {settings.map((setting) => (
                  <button
                    key={setting.id}
                    className={`flex items-center space-x-2 px-6 py-3 text-sm font-medium rounded-lg transition-all duration-300 ${
                      activeSetting === setting.id
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-purple-500 hover:text-white'
                    }`}
                    onClick={() => setActiveSetting(setting.id)}
                  >
                    {setting.icon}
                    <span className="hidden sm:inline">{setting.label}</span>
                  </button>
                ))}
              </div>

              {/* Render Active Setting Content */}
              <div className="rounded-lg p-6 sm:p-8 transition-all duration-300">
                {renderSettingContent()}
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

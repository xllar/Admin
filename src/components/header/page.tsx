/* eslint-disable @next/next/no-html-link-for-pages */
import SearchBar from './searchbar';
import Notifications from './notification';
import ThemeSwitcher from './themeswitcher';
import LanguageSelector from './langauge';
import HelpIcon from './helpIcon';
import UserProfile from './user';
import React from 'react';

export default function Header() {
  return (
    <div className="w-full bg-white shadow-md py-3 px-6 flex items-center justify-between">
      {/* Logo or Brand Name with Search Bar */}
      <div className="flex items-center space-x-4 flex-1">
        <h1  className="text-xl font-semibold text-gray-800 hidden md:block">
          <a href="/">Nexus</a>
          
          </h1>
        <div className="hidden md:flex flex-1">
          <SearchBar />
        </div>
      </div>

      {/* Icons and Admin Info */}
      <div className="flex items-center space-x-4 sm:space-x-6">
        {React.cloneElement(<Notifications />, { className: 'hidden sm:block' })}
        {React.cloneElement(<ThemeSwitcher />, { className: 'hidden sm:block' })}
        {React.cloneElement(<LanguageSelector />, { className: 'hidden md:block' })}
        {React.cloneElement(<HelpIcon />, { className: 'hidden md:block' })}
        <UserProfile />
      </div>
    </div>
  );
}

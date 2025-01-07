'use client';
import React, { useState } from 'react';
import { FaList, FaPlus, FaRegEdit } from 'react-icons/fa';
import Header from '@/components/header/page';
import Footer from '@/components/footer/page';
import Sidebar from '@/components/sidebar/page';

const tabs = [
  { id: 'all', label: 'All Categories', icon: <FaList /> },
  { id: 'add', label: 'Add Category', icon: <FaPlus /> },
];

export default function ProductCategories() {
  const [activeTab, setActiveTab] = useState('all');
  const [categories, setCategories] = useState([
    { id: 1, name: 'Electronics', subcategories: ['Mobile Phones', 'Laptops'] },
    { id: 2, name: 'Clothing', subcategories: ['Men', 'Women'] },
    { id: 3, name: 'Home Appliances', subcategories: ['Kitchen', 'Living Room'] },
  ]);

  const [newCategory, setNewCategory] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [newSubcategory, setNewSubcategory] = useState('');

  const handleAddCategory = () => {
    if (newCategory.trim()) {
      const newCategoryObj = {
        id: categories.length + 1,
        name: newCategory,
        subcategories: [],
      };
      setCategories([...categories, newCategoryObj]);
      setNewCategory('');
    }
  };

  const handleAddSubcategory = () => {
    if (selectedCategory !== null && newSubcategory.trim()) {
      setCategories((prevCategories) =>
        prevCategories.map((category) =>
          category.id === selectedCategory
            ? {
                ...category,
                subcategories: [...category.subcategories, newSubcategory],
              }
            : category
        )
      );
      setNewSubcategory('');
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'add':
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <label className="text-lg font-semibold text-gray-700">New Category Name</label>
              <input
                type="text"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                placeholder="Enter category name"
              />
            </div>
            <button
              onClick={handleAddCategory}
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              Add Category
            </button>
          </div>
        );
      case 'all':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">Product Categories</h3>
            <ul className="space-y-4">
              {categories.map((category) => (
                <li
                  key={category.id}
                  className="p-4 bg-gray-100 rounded-lg shadow-sm"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-medium">{category.name}</span>
                    <button
                      className="text-indigo-600 hover:text-indigo-800"
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      <FaRegEdit />
                    </button>
                  </div>
                  <div className="mt-2">
                    <h4 className="text-sm font-semibold text-gray-600">
                      Subcategories:
                    </h4>
                    <ul className="ml-4 list-disc">
                      {category.subcategories.map((subcategory, index) => (
                        <li key={index} className="text-gray-700">
                          {subcategory}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
            {selectedCategory && (
              <div className="mt-6 space-y-4">
                <label className="text-lg font-semibold text-gray-700">
                  Add Subcategory for{' '}
                  {
                    categories.find((cat) => cat.id === selectedCategory)?.name
                  }
                </label>
                <input
                  type="text"
                  value={newSubcategory}
                  onChange={(e) => setNewSubcategory(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                  placeholder="Enter subcategory name"
                />
                <button
                  onClick={handleAddSubcategory}
                  className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                >
                  Add Subcategory
                </button>
              </div>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-grow">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex flex-col flex-grow">
          {/* Header */}
          <Header />

          {/* Main Content */}
          <main className="flex-grow">
            <div className="container mx-auto px-6 mt-6">
              {/* Tab Navigation */}
              <div className="flex flex-wrap justify-center space-x-6 mb-8 gap-4">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`flex items-center space-x-2 px-6 py-3 text-sm font-medium rounded-lg transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-indigo-500 hover:text-white'
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.icon}
                    <span className="hidden sm:inline">{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="rounded-lg p-6 sm:p-8 transition-all duration-300">
                {renderTabContent()}
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

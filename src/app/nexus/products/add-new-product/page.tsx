'use client';
import Footer from '@/components/footer/page';
import Header from '@/components/header/page';
import Sidebar from '@/components/sidebar/page';
import React, { useState } from 'react';

export default function AddNewProduct() {
  const [productDetails, setProductDetails] = useState({
    name: '',
    description: '',
    category: '',
    subcategory: '',
    sku: '',
    price: '',
    discountPrice: '',
    tax: '',
    currency: 'USD',
    stockQuantity: '',
    stockStatus: 'In Stock',
    minOrderQuantity: '',
    images: [],
    videoUrl: '',
    slug: '', 
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProductDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(productDetails);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-grow">
        <Sidebar />
        <div className="flex flex-col flex-grow">
          <Header />
  
          <section className="p-6 bg-gray-50 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Add New Product</h2>
  
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Product Details */}
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="space-y-4">
                  <div>
                    <label className="text-lg font-semibold text-gray-700">Product Name</label>
                    <input
                      type="text"
                      name="name"
                      value={productDetails.name}
                      onChange={handleChange}
                      className="mt-2 w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Enter product name"
                    />
                  </div>
                  <div>
                    <label className="text-lg font-semibold text-gray-700">Description</label>
                    <textarea
                      name="description"
                      value={productDetails.description}
                      onChange={handleChange}
                      rows={4}
                      className="mt-2 w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Enter product description"
                    />
                  </div>
                  {/* Slug */}
                  <div>
                    <label className="text-lg font-semibold text-gray-700">Slug</label>
                    <input
                      type="text"
                      name="slug"
                      value={productDetails.slug}
                      onChange={handleChange}
                      className="mt-2 w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Enter product slug"
                    />
                  </div>
                </div>
  
                <div className="space-y-4">
                  <div>
                    <label className="text-lg font-semibold text-gray-700">Category</label>
                    <select
                      name="category"
                      value={productDetails.category}
                      onChange={handleChange}
                      className="mt-2 w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      <option value="">Select Category</option>
                      <option value="Electronics">Electronics</option>
                      <option value="Footwear">Footwear</option>
                      <option value="Fitness">Fitness</option>
                      <option value="Accessories">Accessories</option>
                    </select>
                  </div>
                  {/* Subcategory */}
                  <div>
                    <label className="text-lg font-semibold text-gray-700">Subcategory</label>
                    <input
                      type="text"
                      name="subcategory"
                      value={productDetails.subcategory}
                      onChange={handleChange}
                      className="mt-2 w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Enter product subcategory"
                    />
                  </div>
                  <div>
                    <label className="text-lg font-semibold text-gray-700">SKU</label>
                    <input
                      type="text"
                      name="sku"
                      value={productDetails.sku}
                      onChange={handleChange}
                      className="mt-2 w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Enter SKU"
                    />
                  </div>
                </div>
              </div>
  
              {/* Pricing */}
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <label className="text-lg font-semibold text-gray-700">Price</label>
                  <input
                    type="number"
                    name="price"
                    value={productDetails.price}
                    onChange={handleChange}
                    className="mt-2 w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter price"
                  />
                </div>
                <div>
                  <label className="text-lg font-semibold text-gray-700">Discount Price</label>
                  <input
                    type="number"
                    name="discountPrice"
                    value={productDetails.discountPrice}
                    onChange={handleChange}
                    className="mt-2 w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter discount price (optional)"
                  />
                </div>
                <div>
                  <label className="text-lg font-semibold text-gray-700">Tax (%)</label>
                  <input
                    type="number"
                    name="tax"
                    value={productDetails.tax}
                    onChange={handleChange}
                    className="mt-2 w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter tax percentage"
                  />
                </div>
                <div>
                  <label className="text-lg font-semibold text-gray-700">Currency</label>
                  <select
                    name="currency"
                    value={productDetails.currency}
                    onChange={handleChange}
                    className="mt-2 w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                  </select>
                </div>
              </div>
  
              {/* Inventory */}
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <label className="text-lg font-semibold text-gray-700">Stock Quantity</label>
                  <input
                    type="number"
                    name="stockQuantity"
                    value={productDetails.stockQuantity}
                    onChange={handleChange}
                    className="mt-2 w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter stock quantity"
                  />
                </div>
                <div>
                  <label className="text-lg font-semibold text-gray-700">Stock Status</label>
                  <select
                    name="stockStatus"
                    value={productDetails.stockStatus}
                    onChange={handleChange}
                    className="mt-2 w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="In Stock">In Stock</option>
                    <option value="Out of Stock">Out of Stock</option>
                    <option value="Backordered">Backordered</option>
                  </select>
                </div>
                <div>
                  <label className="text-lg font-semibold text-gray-700">Minimum Order Quantity</label>
                  <input
                    type="number"
                    name="minOrderQuantity"
                    value={productDetails.minOrderQuantity}
                    onChange={handleChange}
                    className="mt-2 w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter minimum order quantity"
                  />
                </div>
              </div>
  
              {/* Media */}
              <div className="space-y-4">
                <div>
                  <label className="text-lg font-semibold text-gray-700">Product Images</label>
                  <input
                    type="file"
                    name="images"
                    accept="image/*"
                    multiple
                    onChange={handleFileChange}
                    className="mt-2 w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="text-lg font-semibold text-gray-700">Product Video URL</label>
                  <input
                    type="url"
                    name="videoUrl"
                    value={productDetails.videoUrl}
                    onChange={handleChange}
                    className="mt-2 w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter video URL (optional)"
                  />
                </div>
              </div>
  
              {/* Submit Button */}
              <div className="mt-8 flex justify-center">
                <button
                  type="submit"
                  className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Add Product
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
  
};

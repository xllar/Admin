'use client'
import React from 'react';
import { Bell, CheckCircle, XCircle } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function StockAlerts() {
  const stockData = [
    {
      item: 'T-Shirts',
      status: 'In Stock',
      stock: 120,
      icon: <CheckCircle className="text-green-500" />,
    },
    {
      item: 'Sneakers',
      status: 'Low Stock',
      stock: 15,
      icon: <Bell className="text-yellow-500" />,
    },
    {
      item: 'Caps',
      status: 'Out of Stock',
      stock: 0,
      icon: <XCircle className="text-red-500" />,
    },
  ];

  // Graph Data
  const stockGraphData = [
    { item: 'T-Shirts', stock: 120 },
    { item: 'Sneakers', stock: 15 },
    { item: 'Caps', stock: 0 },
  ];

  return (
    <section className="bg-white rounded-lg shadow-lg p-6 mb-6">
    <h2 className="text-lg font-bold text-blue-600 mb-2">Stock Alerts</h2>
    <p className="text-sm text-gray-700  mb-6">
      Keep track of items with low or out-of-stock status to restock efficiently.
    </p>
      {/* Container for side-by-side layout */}
      <div className="flex flex-col md:flex-row justify-between gap-6">
        {/* Stock Alerts Section */}
        <div className="flex-1 space-y-4">
          {stockData.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 rounded-lg shadow-md"
              style={{
                backgroundColor: item.status === 'In Stock' ? '#d4f8d4' : item.status === 'Low Stock' ? '#fff9e5' : '#ffe6e6',
              }}
            >
              <div className="flex items-center space-x-3">
                {item.icon}
                <div>
                  <h4 className="text-lg font-semibold">{item.item}</h4>
                  <p className="text-sm">{item.status}</p>
                </div>
              </div>
              <span className="text-lg font-bold">{item.stock} units</span>
            </div>
          ))}
        </div>

        {/* Graph Section */}
        <div className="flex-1">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={stockGraphData}>
              <XAxis dataKey="item" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="stock" stroke="#4caf50" name="Stock Level" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}

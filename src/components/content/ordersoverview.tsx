'use client';

import React from 'react';
import { Typography, Card, CardContent } from '@mui/material';

export default function OrdersOverview() {
  // Example data for recent orders
  const recentOrders = [
    { id: '12345', customer: 'John Doe', status: 'Completed', date: 'Jan 1, 2025', amount: '$250' },
    { id: '12346', customer: 'Jane Smith', status: 'Pending', date: 'Jan 2, 2025', amount: '$150' },
    { id: '12347', customer: 'Alice Brown', status: 'Cancelled', date: 'Jan 3, 2025', amount: '$100' },
  ];

  // Simplified order statistics
  const orderSummary = [
    { label: 'Total Orders', value: 175 },
    { label: 'Completed', value: 120 },
    { label: 'Pending', value: 45 },
    { label: 'Cancelled', value: 10 },
  ];

  return (
    <section className="p-6 mb-8 rounded-lg bg-white shadow-md">
      {/* Header */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: 'bold',
          color: 'primary.main',
          marginBottom: '1.5rem',
        }}
      >
        Orders Overview
      </Typography>

      {/* Order Summary */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
        {orderSummary.map((item, index) => (
          <Card key={index} className="shadow-lg">
            <CardContent className="text-center">
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  color: '#1E40AF',
                }}
              >
                {item.value}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
              >
                {item.label}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Orders Table */}
      <Typography
        variant="h6"
        sx={{
          fontWeight: 'bold',
          color: 'primary.main',
          marginBottom: '1rem',
        }}
      >
        Recent Orders
      </Typography>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left font-semibold border border-gray-200">Order ID</th>
              <th className="px-4 py-3 text-left font-semibold border border-gray-200">Customer</th>
              <th className="px-4 py-3 text-left font-semibold border border-gray-200">Status</th>
              <th className="px-4 py-3 text-left font-semibold border border-gray-200">Date</th>
              <th className="px-4 py-3 text-left font-semibold border border-gray-200">Amount</th>
            </tr>
          </thead>
          <tbody>
            {recentOrders.map((order, index) => (
              <tr
                key={index}
                className={`hover:bg-gray-50 transition ${
                  index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                }`}
              >
                <td className="px-4 py-3 border border-gray-200">{order.id}</td>
                <td className="px-4 py-3 border border-gray-200">{order.customer}</td>
                <td
                  className={`px-4 py-3 border border-gray-200 font-medium ${
                    order.status === 'Completed'
                      ? 'text-green-600'
                      : order.status === 'Pending'
                      ? 'text-yellow-600'
                      : 'text-red-600'
                  }`}
                >
                  {order.status}
                </td>
                <td className="px-4 py-3 border border-gray-200">{order.date}</td>
                <td className="px-4 py-3 border border-gray-200">{order.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

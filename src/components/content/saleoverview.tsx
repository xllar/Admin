'use client';

import React from 'react';
import { BarChart2, TrendingUp } from 'lucide-react';
import { Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, BarChart } from 'recharts';
import { Typography, Box } from '@mui/material';

export default function SalesOverview() {
  const salesData = [
    { month: 'Jan', sales: 5000 },
    { month: 'Feb', sales: 5200 },
    { month: 'Mar', sales: 5400 },
    { month: 'Apr', sales: 5600 },
    { month: 'May', sales: 5800 },
    { month: 'Jun', sales: 6000 },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-100 to-gray-50 shadow-xl rounded-3xl p-8 mb-10">
      {/* Title Section */}
      <Box mb={4}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            color: 'blue',
            mb: 1,
          }}
        >
          Sales Overview
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: 2,
          }}
        >
          Analyze weekly, monthly, and yearly sales trends to understand your growth trajectory.
        </Typography>
      </Box>

      {/* Weekly Sales Section */}
      <div className="flex justify-between items-center  p-4 rounded-lg shadow-md mb-6">
        <div className="flex items-center space-x-2">
          <BarChart2 className="text-blue-600" />
          <h4 className="text-lg font-semibold text-blue-600">Weekly Sales</h4>
        </div>
        <span className="text-sm text-gray-600">Last week: $5,200</span>
      </div>

      {/* Sales Graph Section */}
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={salesData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="month" tick={{ fill: '#666' }} />
          <YAxis tick={{ fill: '#666' }} />
          <Tooltip
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #ddd',
              borderRadius: '8px',
            }}
            itemStyle={{
              color: '#333',
            }}
          />
          <Bar dataKey="sales" fill="#4caf50" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>

      {/* Growth Section */}
      <div className="flex justify-between items-center bg-green-50 p-4 rounded-lg shadow-md mt-6">
        <div className="flex items-center space-x-2">
          <TrendingUp className="text-green-600" />
          <h4 className="text-lg font-semibold text-green-600">Growth</h4>
        </div>
        <span className="text-sm text-gray-600">+8% compared to last month</span>
      </div>
    </section>
  );
}

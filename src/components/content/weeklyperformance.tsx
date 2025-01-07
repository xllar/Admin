'use client'
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function Weeklyperformance() {
  const weeklySalesData = [
    { day: 'Mon', sales: 500 },
    { day: 'Tue', sales: 450 },
    { day: 'Wed', sales: 480 },
    { day: 'Thu', sales: 530 },
    { day: 'Fri', sales: 600 },
    { day: 'Sat', sales: 620 },
    { day: 'Sun', sales: 590 },
  ];

  return (
    <section className="bg-white rounded-lg shadow-xl p-6 mb-8">
      {/* Title */}
      <div className="mb-4">
        <h3 className="text-2xl font-bold text-blue-700 mb-2">Weekly Sales Performance</h3>
        <p className="text-gray-600">Monitor this week&apos;s sales performance across each day.</p>
      </div>

      {/* Stacked Layout: Bar Chart and Sales Breakdown */}
      <div className="space-y-6">
        {/* Bar Chart */}
        <div className="w-full h-[300px] bg-gray-50 rounded-lg overflow-hidden shadow-lg">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={weeklySalesData}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales" fill="#3b82f6" barSize={20} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Sales Breakdown (Side by Side) */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h4 className="text-xl font-semibold text-gray-600 mb-4">Sales Breakdown</h4>
          <div className="grid grid-cols-7 gap-4">
            {weeklySalesData.map(({ day, sales }, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 rounded-lg bg-gray-100 shadow-md"
              >
                <h5 className="text-lg font-medium text-gray-700">{day}</h5>
                <p className="text-sm text-gray-500">{sales} units</p>
                <span className="text-lg font-bold text-blue-600">${(sales * 15).toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

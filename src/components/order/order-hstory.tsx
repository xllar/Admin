'use client';
import React from 'react';

export default function OrderHistory() {
  const orderHistory = [
    { id: 1, customer: 'Alice Smith', total: '$300.00', date: '2025-01-01', status: 'Completed' },
    { id: 2, customer: 'David Johnson', total: '$450.00', date: '2025-01-03', status: 'Pending' },
    { id: 3, customer: 'Emma Davis', total: '$220.00', date: '2025-01-06', status: 'Cancelled' },
    { id: 4, customer: 'Oliver Wilson', total: '$540.00', date: '2025-01-08', status: 'Completed' },
    { id: 5, customer: 'Sophia Brown', total: '$120.00', date: '2025-01-10', status: 'Pending' },
  ];

  const getStatusBadge = (status: string) => {
    const colors: Record<string, string> = {
      Completed: 'bg-green-100 text-green-700',
      Pending: 'bg-yellow-100 text-yellow-700',
      Cancelled: 'bg-red-100 text-red-700',
    };

    return (
      <span className={`px-3 py-1 text-sm font-medium rounded-full ${colors[status]}`}>
        {status}
      </span>
    );
  };

  return (
    <section className="p-6 bg-gray-50 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Order History</h2>
      <div className="hidden md:block">
        <table className="w-full table-auto border-collapse bg-white rounded-lg shadow">
          <thead className="bg-gray-100">
            <tr className="text-left text-gray-600 text-sm">
              <th className="px-6 py-3 font-medium">Order ID</th>
              <th className="px-6 py-3 font-medium">Customer</th>
              <th className="px-6 py-3 font-medium">Total</th>
              <th className="px-6 py-3 font-medium">Date</th>
              <th className="px-6 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {orderHistory.map((order, index) => (
              <tr
                key={order.id}
                className={`${
                  index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                } hover:bg-gray-100 transition-colors`}
              >
                <td className="px-6 py-4 text-sm font-semibold text-gray-700">#{order.id}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{order.customer}</td>
                <td className="px-6 py-4 text-sm font-bold text-gray-800">{order.total}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{order.date}</td>
                <td className="px-6 py-4">{getStatusBadge(order.status)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="md:hidden">
        {orderHistory.map((order) => (
          <div
            key={order.id}
            className="mb-4 bg-white rounded-lg shadow p-4 border border-gray-200"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold text-gray-700">Order #{order.id}</h3>
              {getStatusBadge(order.status)}
            </div>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Customer:</span> {order.customer}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Total:</span> {order.total}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Date:</span> {order.date}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

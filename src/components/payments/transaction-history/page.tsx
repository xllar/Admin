'use client';
import React, { useState } from 'react';
import PaginationComponent from '@/components/pagination/page';

export function TransactionHistory() {
  const transactions = [
    { id: 1, date: '2025-01-01', amount: '$100.00', status: 'Completed' },
    { id: 2, date: '2025-01-02', amount: '$200.00', status: 'Pending' },
    { id: 3, date: '2025-01-03', amount: '$150.00', status: 'Failed' },
    { id: 4, date: '2025-01-04', amount: '$250.00', status: 'Completed' },
    { id: 5, date: '2025-01-05', amount: '$300.00', status: 'Pending' },
    { id: 6, date: '2025-01-06', amount: '$500.00', status: 'Failed' },
    { id: 7, date: '2025-01-07', amount: '$600.00', status: 'Completed' },
    { id: 8, date: '2025-01-08', amount: '$700.00', status: 'Pending' },
    // Additional transactions go here
  ];

  const transactionsPerPage = 10; 
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(transactions.length / transactionsPerPage);

  const getStatusBadge = (status: string) => {
    const colors: Record<string, string> = {
      Completed: 'bg-green-100 text-green-700',
      Pending: 'bg-yellow-100 text-yellow-700',
      Failed: 'bg-red-100 text-red-700',
    };

    return (
      <span className={`px-3 py-1 text-sm font-medium rounded-full ${colors[status]}`}>
        {status}
      </span>
    );
  };

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * transactionsPerPage;
  const currentTransactions = transactions.slice(startIndex, startIndex + transactionsPerPage);

  return (
    <section className="p-6 bg-gray-50 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Transaction History</h2>
      
      {/* Desktop View */}
      <div className="hidden md:block">
        <table className="w-full table-auto border-collapse bg-white rounded-lg shadow">
          <thead className="bg-gray-100">
            <tr className="text-left text-gray-600 text-sm">
              <th className="px-6 py-3 font-medium">Date</th>
              <th className="px-6 py-3 font-medium">Amount</th>
              <th className="px-6 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {currentTransactions.map((transaction, index) => (
              <tr
                key={transaction.id}
                className={`${
                  index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                } hover:bg-gray-100 transition-colors`}
              >
                <td className="px-6 py-4 text-sm font-semibold text-gray-700">{transaction.date}</td>
                <td className="px-6 py-4 text-sm font-bold text-gray-800">{transaction.amount}</td>
                <td className="px-6 py-4">{getStatusBadge(transaction.status)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View */}
      <div className="md:hidden">
        {currentTransactions.map((transaction) => (
          <div
            key={transaction.id}
            className="mb-4 bg-white rounded-lg shadow p-4 border border-gray-200"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold text-gray-700">{transaction.date}</h3>
              {getStatusBadge(transaction.status)}
            </div>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Amount:</span> {transaction.amount}
            </p>
          </div>
        ))}
      </div>

      {/* Pagination Component */}
      <PaginationComponent
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </section>
  );
}

'use client';
import React, { useState } from 'react';
import { FaEdit, FaTrashAlt} from 'react-icons/fa';

const dummyDiscounts = [
  { id: 1, code: 'SAVE20', discount: '20% Off', minSpend: '$50', expires: '2025-12-31' },
  { id: 2, code: 'SHIPFREE', discount: 'Free Shipping', minSpend: '$30', expires: '2025-06-30' },
];

export default function Discounts() {
  const [discounts, setDiscounts] = useState(dummyDiscounts);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const deactivateDiscount = (id: number) => {
    const updatedDiscounts = discounts.filter((discount) => discount.id !== id);
    setDiscounts(updatedDiscounts);
    alert('Discount deactivated successfully!');
  };

  const filteredDiscounts = discounts.filter((discount) =>
    discount.code.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex flex-wrap justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Discounts</h2>

        <div className="flex items-center space-x-4">
          <input
            type="text"
            className="border px-4 py-2 rounded-lg"
            placeholder="Search by code..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2 text-left">Code</th>
              <th className="border px-4 py-2 text-left">Discount</th>
              <th className="border px-4 py-2 text-left">Min Spend</th>
              <th className="border px-4 py-2 text-left">Expires</th>
              <th className="border px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredDiscounts.map((discount) => (
              <tr key={discount.id}>
                <td className="border px-4 py-2">{discount.code}</td>
                <td className="border px-4 py-2">{discount.discount}</td>
                <td className="border px-4 py-2">{discount.minSpend}</td>
                <td className="border px-4 py-2">{discount.expires}</td>
                <td className="border px-4 py-2 text-center space-x-2">
                  <button className="text-blue-600 hover:text-blue-800">
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => deactivateDiscount(discount.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredDiscounts.length === 0 && (
        <p className="text-center text-gray-500 mt-4">No discounts found.</p>
      )}
    </div>
  );
}

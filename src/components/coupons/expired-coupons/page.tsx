'use client';
import React, { useState } from 'react';
import { FaTrashAlt} from 'react-icons/fa';

const dummyExpiredCoupons = [
  { id: 1, code: 'WINTER2024', discount: '15%', usageLimit: 100, expiredOn: '2024-12-31' },
  { id: 2, code: 'OLDPROMO', discount: '10%', usageLimit: 50, expiredOn: '2024-11-15' },
];

export default function ExpiredCoupons() {
  const [coupons, setCoupons] = useState(dummyExpiredCoupons);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const deleteCoupon = (id: number) => {
    const updatedCoupons = coupons.filter((coupon) => coupon.id !== id);
    setCoupons(updatedCoupons);
    alert('Coupon deleted successfully!');
  };

  const filteredCoupons = coupons.filter((coupon) =>
    coupon.code.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex flex-wrap justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Expired Coupons</h2>

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
              <th className="border px-4 py-2 text-left">Usage Limit</th>
              <th className="border px-4 py-2 text-left">Expired On</th>
              <th className="border px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCoupons.map((coupon) => (
              <tr key={coupon.id}>
                <td className="border px-4 py-2">{coupon.code}</td>
                <td className="border px-4 py-2">{coupon.discount}</td>
                <td className="border px-4 py-2">{coupon.usageLimit}</td>
                <td className="border px-4 py-2">{coupon.expiredOn}</td>
                <td className="border px-4 py-2 text-center">
                  <button
                    onClick={() => deleteCoupon(coupon.id)}
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

      {filteredCoupons.length === 0 && (
        <p className="text-center text-gray-500 mt-4">No expired coupons found.</p>
      )}
    </div>
  );
}

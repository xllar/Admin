'use client';
import React, { useState } from 'react';
import { FaEdit, FaTrashAlt} from 'react-icons/fa';

const dummyCoupons = [
  { id: 1, code: 'SUMMER2025', discount: '20%', usageLimit: 50, remaining: 30, expires: '2025-06-30' },
  { id: 2, code: 'WELCOME10', discount: '10%', usageLimit: 100, remaining: 80, expires: '2025-12-31' },
  { id: 3, code: 'FREESHIP', discount: 'Free Shipping', usageLimit: 200, remaining: 120, expires: '2025-03-15' },
];

export default function ActiveCoupons() {
  const [coupons, setCoupons] = useState(dummyCoupons);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCoupons, setSelectedCoupons] = useState<number[]>([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const toggleSelectCoupon = (id: number) => {
    if (selectedCoupons.includes(id)) {
      setSelectedCoupons(selectedCoupons.filter((cid) => cid !== id));
    } else {
      setSelectedCoupons([...selectedCoupons, id]);
    }
  };

  const deactivateCoupon = (id: number) => {
    const updatedCoupons = coupons.filter((coupon) => coupon.id !== id);
    setCoupons(updatedCoupons);
    alert('Coupon deactivated successfully!');
  };

  const bulkDeactivate = () => {
    const updatedCoupons = coupons.filter((coupon) => !selectedCoupons.includes(coupon.id));
    setCoupons(updatedCoupons);
    setSelectedCoupons([]);
    alert('Selected coupons deactivated successfully!');
  };

  const filteredCoupons = coupons.filter((coupon) =>
    coupon.code.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex flex-wrap justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Active Coupons</h2>

        <div className="flex items-center space-x-4">
          <input
            type="text"
            className="border px-4 py-2 rounded-lg"
            placeholder="Search by code..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <button
            onClick={bulkDeactivate}
            disabled={selectedCoupons.length === 0}
            className={`px-4 py-2 rounded-lg font-medium ${
              selectedCoupons.length > 0
                ? 'bg-red-600 text-white hover:bg-red-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Deactivate Selected
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2 text-left">
                <input
                  type="checkbox"
                  onChange={(e) =>
                    setSelectedCoupons(
                      e.target.checked ? coupons.map((coupon) => coupon.id) : []
                    )
                  }
                  checked={selectedCoupons.length === coupons.length}
                />
              </th>
              <th className="border px-4 py-2 text-left">Code</th>
              <th className="border px-4 py-2 text-left">Discount</th>
              <th className="border px-4 py-2 text-left">Usage Limit</th>
              <th className="border px-4 py-2 text-left">Remaining</th>
              <th className="border px-4 py-2 text-left">Expires</th>
              <th className="border px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCoupons.map((coupon) => (
              <tr key={coupon.id}>
                <td className="border px-4 py-2">
                  <input
                    type="checkbox"
                    checked={selectedCoupons.includes(coupon.id)}
                    onChange={() => toggleSelectCoupon(coupon.id)}
                  />
                </td>
                <td className="border px-4 py-2">{coupon.code}</td>
                <td className="border px-4 py-2">{coupon.discount}</td>
                <td className="border px-4 py-2">{coupon.usageLimit}</td>
                <td className="border px-4 py-2">{coupon.remaining}</td>
                <td className="border px-4 py-2">{coupon.expires}</td>
                <td className="border px-4 py-2 text-center space-x-2">
                  <button className="text-blue-600 hover:text-blue-800">
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => deactivateCoupon(coupon.id)}
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
        <p className="text-center text-gray-500 mt-4">No coupons found.</p>
      )}
    </div>
  );
}

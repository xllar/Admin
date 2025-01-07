import React from 'react';
import { CreditCard, Play, Ban, MoreHorizontal } from 'lucide-react';

export default function PaymentGateways() {
  const paymentMethods = [
    {
      method: 'Credit Card',
      percentage: '55%',
      icon: <CreditCard className="text-blue-600 w-6 h-6" />,
    },
    {
      method: 'PayPal',
      percentage: '30%',
      icon: <Play className="text-green-600 w-6 h-6" />,
    },
    {
      method: 'Bank Transfer',
      percentage: '10%',
      icon: <Ban className="text-yellow-600 w-6 h-6" />,
    },
    {
      method: 'Other',
      percentage: '5%',
      icon: <MoreHorizontal className="text-gray-600 w-6 h-6" />,
    },
  ];

  return (
    <div>
      <section className="p-6 mb-8 rounded-lg shadow-lg">
        {/* Header */}
        <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Payment Gateways</h3>
        <p className="text-gray-600 mb-6 text-center">
          Breakdown of payment methods used by customers.
        </p>

        {/* Payment Methods */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {paymentMethods.map(({ method, percentage, icon }, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 rounded-lg shadow hover:shadow-md transition"
            >
              <div className="flex items-center space-x-4">
                {icon}
                <h4 className="text-lg font-medium text-gray-800">{method}</h4>
              </div>
              <span className="text-lg font-bold text-gray-700">{percentage}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

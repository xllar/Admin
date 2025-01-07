// Refunds Component
export function Refunds() {
  const refundRequests = [
    { id: '#12345', amount: '$50.00', status: 'Pending' },
    { id: '#12346', amount: '$75.00', status: 'Approved' },
    { id: '#12347', amount: '$100.00', status: 'Rejected' },
    { id: '#12348', amount: '$35.00', status: 'Pending' },
    { id: '#12349', amount: '$120.00', status: 'Pending' },
  ];

  const getStatusBadge = (status: string) => {
    const colors: Record<string, string> = {
      Pending: 'bg-yellow-100 text-yellow-700',
      Approved: 'bg-green-100 text-green-700',
      Rejected: 'bg-red-100 text-red-700',
    };

    return (
      <span className={`px-3 py-1 text-sm font-medium rounded-full ${colors[status]}`}>
        {status}
      </span>
    );
  };

  return (
    <section className="p-6 bg-gray-50 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Refunds</h2>
      <p className="text-gray-600 mb-4">Manage refund requests here.</p>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white rounded-lg shadow">
          <thead className="bg-gray-100">
            <tr className="text-left text-gray-600 text-sm">
              <th className="px-6 py-3 font-medium">Order ID</th>
              <th className="px-6 py-3 font-medium">Amount</th>
              <th className="px-6 py-3 font-medium">Status</th>
              <th className="px-6 py-3 font-medium text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {refundRequests.map((refund, index) => (
              <tr
                key={refund.id}
                className={`${
                  index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                } hover:bg-gray-100 transition-colors`}
              >
                <td className="px-6 py-4 text-sm text-gray-800 font-medium">{refund.id}</td>
                <td className="px-6 py-4 text-sm text-gray-800 font-semibold">{refund.amount}</td>
                <td className="px-6 py-4">{getStatusBadge(refund.status)}</td>
                <td className="px-6 py-4 text-center space-x-2">
                  {refund.status === 'Pending' ? (
                    <>
                      <button className="px-4 py-2 bg-green-500 text-white text-sm font-medium rounded-lg shadow hover:bg-green-600 hover:scale-105 transform transition-transform">
                        Approve
                      </button>
                      <button className="px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-lg shadow hover:bg-red-600 hover:scale-105 transform transition-transform">
                        Reject
                      </button>
                    </>
                  ) : (
                    <span className="text-sm italic text-gray-500">No Actions Available</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

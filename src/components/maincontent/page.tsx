// pages/content/MainContent.tsx
'use client';

import { useState } from 'react';
import DashboardHeader from '@/components/content/dashboardheader';
import Keymetrics from '@/components/content/keymetrics';
import Revenueupdate from '@/components/content/revenueupdate';
import Saleoverview from '@/components/content/saleoverview';
import Weeklyperformance from '@/components/content/weeklyperformance';
import Ordersoverview from '@/components/content/ordersoverview';
import Stockalerts from '@/components/content/stockalerts';
import Paymentgateways from '@/components/content/paymentgateways';
import Profitlosssummary from '@/components/content/profit-loss-summary';
import Marketingcampaigns from '@/components/content/marketingcampaigns';
import Trafficsources from '@/components/content/traficsources';
import Customerfeedback from '@/components/content/customerfeedback';
import Usermanagement from '@/components/content/usermanagement';
import Notifications from '@/components/content/notifications';
import Realtimeinsights from '@/components/content/realtimeinsight';
import PaginationComponent from '@/components/pagination/page'; 

const components = [
  { id: 1, component: <Keymetrics /> },
  { id: 2, component: <Realtimeinsights /> },
  { id: 3, component: <Revenueupdate /> },
  { id: 4, component: <Saleoverview /> },
  { id: 5, component: <Ordersoverview /> },
  { id: 6, component: <Weeklyperformance /> },
  { id: 7, component: <Profitlosssummary /> },
  { id: 8, component: <Marketingcampaigns /> },
  { id: 9, component: <Trafficsources /> },
  { id: 10, component: <Stockalerts /> },
  { id: 11, component: <Customerfeedback /> },
  { id: 12, component: <Usermanagement /> },
  { id: 13, component: <Paymentgateways /> },
  { id: 14, component: <Notifications /> },
];

export default function MainContent() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const totalPages = Math.ceil(components.length / itemsPerPage);

  const handlePageChange = (_event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentComponents = components.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <main className="flex-1 p-6 bg-gray-50 overflow-y-auto">
      {/* Dashboard Header */}
      <DashboardHeader />

      {/* Paginated Content */}
      <div className="space-y-6">
        {currentComponents.map((item) => (
          <div key={item.id}>{item.component}</div>
        ))}
      </div>

      {/* Pagination */}
      <PaginationComponent
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </main>
  );
}





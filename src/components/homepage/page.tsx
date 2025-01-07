import Sidebar from '@/components/sidebar/page';
import Header from '@/components/header/page';
import MainContent from '@/components/maincontent/page';
import AdminDashboardFooter from '@/components/footer/page';

export default function HomePage() {
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Header />
          <MainContent />
        </div>
      </div>
      <AdminDashboardFooter />
    </div>
  );
}

import DashboardLayout from "@/components/layouts/DashboardLayout";
import Dashboard from "@/components/views/Admin/Dashboard";

const DashboardAdminPage = () => {
  return (
    <DashboardLayout
      title="Dashboard"
      type="admin"
      description="dashboard admin"
    >
      <Dashboard />
    </DashboardLayout>
  );
};

export default DashboardAdminPage;

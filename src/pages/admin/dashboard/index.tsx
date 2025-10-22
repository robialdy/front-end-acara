import DashboardLayout from "@/components/layouts/DashboardLayout";
import Dashboard from "@/components/views/Admin/Dashboard";

const AdminDashboardPage = () => {
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

export default AdminDashboardPage;

import DashboardLayout from "@/components/layouts/DashboardLayout";
import Category from "@/components/views/Admin/Category";

const AdminCategoryPage = () => {
  return (
    <DashboardLayout
      title="Category"
      type="admin"
      description="List of all Categories, create new categories, and manage existing categories."
    >
      <Category />
    </DashboardLayout>
  );
};

export default AdminCategoryPage;

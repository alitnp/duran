import DashboardPageTitle from "components/Dashboard/DashboardPageTitle";
import DashboardLayout from "components/Dashboard/DashbordLayout";
import UserOrdersList from "components/Dashboard/UserOrdersList";

const DashboardOrders = () => {
  return (
    <DashboardLayout>
      <DashboardPageTitle title="خرید های من" />
      <UserOrdersList />
    </DashboardLayout>
  );
};

export default DashboardOrders;

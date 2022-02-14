import DashboardPageTitle from "components/Dashboard/DashboardPageTitle";
import DashboardLayout from "components/Dashboard/DashbordLayout";
import RequestList from "components/Dashboard/request/RequestList";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getUserRequestsList } from "redux/middlewares/request/getUserRequestsList";

const RequestDashboard = () => {
  //states
  const { requestList, loading } = useSelector((state) => state.request);

  //hooks
  const dispatch = useDispatch();

  //effects
  useEffect(() => {
    !requestList && dispatch(getUserRequestsList());
  }, []);

  return (
    <DashboardLayout>
      <DashboardPageTitle title="سفارش های من" loading={loading} />
      <RequestList />
    </DashboardLayout>
  );
};

export default RequestDashboard;

import { Descriptions } from "antd";
import AddNewAddress from "components/Dashboard/AddNewAddress";
import DashboardPageTitle from "components/Dashboard/DashboardPageTitle";
import DashboardLayout from "components/Dashboard/DashbordLayout";
import UserAddresses from "components/Dashboard/UserAddresses";
import { useState } from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  //states
  const { userDetail, userAddresses } = useSelector((state) => state.user);
  const [showAddAddress, setShowAddAddress] = useState(false);

  //functions
  const toggle = () => setShowAddAddress((prevState) => !prevState);

  return (
    <DashboardLayout>
      <DashboardPageTitle title="اطلاعات حساب" />
      <Descriptions layout="vertical" bordered column={{ sm: 3, xs: 1 }}>
        <Descriptions.Item label="نام">
          <p className="min-h-[15px] mb-0">
            {userDetail?.FirstName || "تعیین نشده"}
          </p>
        </Descriptions.Item>
        <Descriptions.Item label="نام خانوادگی">
          <p className="min-h-[15px] mb-0">
            {userDetail?.LastName || "تعیین نشده"}
          </p>
        </Descriptions.Item>
        {/* <Descriptions.Item label="آدرس ایمیل">
          <p className="min-h-[15px] mb-0">
            {userDetail?.Email || "تعیین نشده"}
          </p>
        </Descriptions.Item> */}
        <Descriptions.Item label="شماره تلفن" span={1}>
          <p className="min-h-[15px] mb-0">
            {userDetail?.Phone || "تعیین نشده"}
          </p>
        </Descriptions.Item>
      </Descriptions>
      <Descriptions layout="vertical" bordered>
        <Descriptions.Item label="آدرس">
          <UserAddresses noTrash />
          {(!userAddresses || userAddresses?.length === 0) && (
            <p className="mb-0 cursor-pointer text-d-primary" onClick={toggle}>
              + افزودن آدرس جدید
            </p>
          )}
          <AddNewAddress show={showAddAddress} close={toggle} />
        </Descriptions.Item>
      </Descriptions>
    </DashboardLayout>
  );
};

export default Dashboard;

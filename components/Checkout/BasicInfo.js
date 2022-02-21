import { Form } from "antd";
import AddNewAddress from "components/Dashboard/AddNewAddress";
import ShowInfo from "components/Global/ShowInfo/ShowInfo";
import Button from "components/UI/Button/Button";
import DFormItem from "components/UI/DFormItem/DFormItem";
import DInput from "components/UI/DInput/DInput";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getUserDetail } from "redux/middlewares/user/getUSerDetail";
import endpointUrls from "utils/constants/endpointUrls";
import routes from "utils/constants/routes";
import apiServices from "utils/services/apiServices";

const BasicInfo = ({ changeStep, setShippingMethods, setShippingAddress }) => {
  //states
  const [checkoutStartInfo, setCheckoutStartInfo] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [showAddAddress, setShowAddAddress] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const { cartList, userDetail } = useSelector((state) => state.user);

  const [form] = Form.useForm();

  //hooks
  const router = useRouter();
  const dispatch = useDispatch();

  //effects
  useEffect(() => {
    if (!cartList || cartList?.Items?.length === 0)
      router.push(routes.home.path);
    else handleStart();
  }, []);
  useEffect(() => {
    if (userDetail && (!userDetail.FirstName || !userDetail.LastName))
      setIsEditing(true);
    form.setFieldsValue({
      FirstName: userDetail?.FirstName,
      LastName: userDetail?.LastName,
    });
  }, [userDetail]);

  //functions
  const handleStart = async () => {
    const result = await apiServices.get(endpointUrls.checkoutStart);
    if (result.isSuccess) {
      setCheckoutStartInfo(result.data.Data);
      if (result.data.Data.ShippingAddress.ExistingAddresses?.length > 0)
        setSelectedAddress(
          result.data.Data.ShippingAddress.ExistingAddresses[0]
        );
    }
  };
  const toggle = () => setShowAddAddress((prevState) => !prevState);
  const handleUserEdit = async (values) => {
    setLoading(true);
    const result = await apiServices.put(endpointUrls.editUserInfo, values);
    setLoading(false);
    if (!result.isSuccess) return;
    dispatch(getUserDetail());
  };
  const handleFinish = async () => {
    if (!userDetail.FirstName || !userDetail.LastName)
      return toast.warning(
        "نام و نام خانوادگی خود را وارد کنید و تغییرات را ثبت کنید."
      );
    if (!selectedAddress)
      return toast.warning("ابتدا یک آدرس به اطلاعات خود اضافه کنید.");
    setLoading(true);
    const result = await apiServices.post(endpointUrls.saveShipping, {
      PickUpInStore: false,
      ShippingAddressId: selectedAddress.Id,
      BillToTheSameAddress: true,
    });
    setLoading(false);
    console.log(result);
    if (result.isSuccess) {
      setShippingAddress(selectedAddress);
      setShippingMethods(result.data.Data.Model.ShippingMethods);
      changeStep(result.data.Data.GotoSection);
    }
  };
  return (
    <>
      <div className="pb-4 mb-4 border-b">
        <p className="mb-2 font-medium">اطلاعات حساب :</p>
        {!isEditing && (
          <div className="flex flex-col gap-y-2">
            <ShowInfo right="نام" left={userDetail?.FirstName} />
            <ShowInfo right="نام خانوادگی" left={userDetail?.LastName} />
          </div>
        )}
        {isEditing && (
          <Form form={form} onFinish={handleUserEdit} requiredMark={false}>
            <DFormItem
              name="FirstName"
              label="نام"
              rules={[{ required: true, message: "نام تعیین نشده" }]}
            >
              <DInput disabled={loading} />
            </DFormItem>
            <DFormItem
              name="LastName"
              label="نام خانوادگی"
              rules={[{ required: true, message: "نام خانوادگی تعیین نشده" }]}
            >
              <DInput disabled={loading} />
            </DFormItem>
            <div className="flex flex-row-reverse mb-6 gap-x-2">
              <Button text="ثبت تغییرات" type="submit" loading={loading} />
            </div>
          </Form>
        )}
      </div>
      <div className="pb-4 mb-4 border-b">
        <p className="mb-2 font-medium">انتخاب آدرس :</p>
        <div className="flex flex-col gap-y-2">
          {checkoutStartInfo &&
            checkoutStartInfo.ShippingAddress.ExistingAddresses.map((item) => {
              return (
                <div
                  key={item.Id}
                  className={`flex items-center p-2 border rounded-lg cursor-pointer hover:bg-gray-50 ${
                    selectedAddress?.Id === item.Id &&
                    "border-d-border-gray shadow-md"
                  }`}
                  onClick={() => setSelectedAddress(item)}
                >
                  {selectedAddress?.Id !== item.Id && (
                    <div className="pl-4 pr-2">
                      <div className="w-3 h-3 border rounded-full border-d-text" />
                    </div>
                  )}
                  {selectedAddress?.Id === item.Id && (
                    <div className="pl-4 pr-2">
                      <div className="w-3 h-3 border border-none rounded-full border-d-text bg-d-primary" />
                    </div>
                  )}
                  <div className="flex flex-col ">
                    <p className="mb-0 ml-2 text-xs whitespace-nowrap text-d-faded-text">
                      {item.StateProvinceName + " - " + item.City}
                    </p>
                    <p className="mb-0">{item.Address1}</p>
                  </div>
                </div>
              );
            })}
        </div>
        <p
          className="mt-4 mb-0 cursor-pointer text-d-primary hover:font-medium"
          onClick={toggle}
        >
          + افزودن آدرس جدید
        </p>
      </div>
      <div className="flex flex-row-reverse">
        <Button text="تایید اطلاعات" onClick={handleFinish} loading={loading} />
      </div>
      <AddNewAddress
        show={showAddAddress}
        close={toggle}
        callAfterFinish={handleStart}
      />
    </>
  );
};

export default BasicInfo;

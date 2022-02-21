import { Form, Modal } from "antd";
import Button from "components/UI/Button/Button";
import DFormItem from "components/UI/DFormItem/DFormItem";
import DInput from "components/UI/DInput/DInput";
import DOption from "components/UI/DOption/DOption";
import DSelect from "components/UI/DSelect/DSelect";
import DTextArea from "components/UI/DTextArea/DTextArea";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getHomeProvinceList } from "redux/middlewares/home/getHomeProvinceList";
import { getUserAddresses } from "redux/middlewares/user/getUserAddresses";
import endpointUrls from "utils/constants/endpointUrls";
import apiServices from "utils/services/apiServices";

const AddNewAddress = ({ show, close, callAfterFinish }) => {
  //states
  const [loading, setLoading] = useState(false);
  const { provinceList } = useSelector((state) => state.home);

  //hooks
  const dispatch = useDispatch();

  //effects
  useEffect(() => {
    !provinceList && dispatch(getHomeProvinceList());
  }, []);

  //functions
  const handleSubmit = async (values) => {
    setLoading(true);
    const result = await apiServices.post(endpointUrls.addNewAddress, {
      ...values,
      CountryId: "61dc6d9e2e7daa9231e32c2c",
    });
    setLoading(false);
    if (!result.isSuccess) return;
    dispatch(getUserAddresses());
    callAfterFinish();
    close();
  };

  return (
    <Modal visible={show} footer={false} title="آدرس جدید" onCancel={close}>
      <Form onFinish={handleSubmit} requiredMark={false}>
        <DFormItem
          label="استان"
          name="StateProvinceId"
          rules={[{ required: true, message: "استان تعیین نشده" }]}
        >
          <DSelect allowClear placeholder="انتخاب استان" disabled={loading}>
            {provinceList?.map((item) => (
              <DOption key={item.id} value={item.id}>
                {item.name}
              </DOption>
            ))}
          </DSelect>
        </DFormItem>
        <DFormItem
          label="شهر"
          name="City"
          rules={[{ required: true, message: "نام شهر را وارد کنید" }]}
        >
          <DInput disabled={loading} placeholder="تعیین شهر" />
        </DFormItem>
        <DFormItem
          label="آدرس"
          name="Address1"
          rules={[{ required: true, message: "آدرس را وارد کنید" }]}
        >
          <DTextArea placeholder="آدرس دقیق" disabled={loading} />
        </DFormItem>
        <div className="flex justify-end">
          <Button text="ثبت" type="submit" loading={loading} />
        </div>
      </Form>
    </Modal>
  );
};

export default AddNewAddress;

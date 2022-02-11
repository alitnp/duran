import { Divider, Form } from "antd";
import Button from "components/UI/Button/Button";
import DFormItem from "components/UI/DFormItem/DFormItem";
import DInput from "components/UI/DInput/DInput";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getUserDetail } from "redux/middlewares/user/getUSerDetail";
import endpointUrls from "utils/constants/endpointUrls";
import routes from "utils/constants/routes";
import apiServices from "utils/services/apiServices";
import AddNewAddress from "../AddNewAddress";

const DashboardEditUser = () => {
    //states
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [showAddAddress, setShowAddAddress] = useState(false);

    //hooks
    const dispatch = useDispatch();
    const router = useRouter();

    //functions
    const toggle = () => setShowAddAddress(prevState => !prevState);
    const handleFinish = async (values) => {
        const body = {};
        Object.keys(values).map(key => {
            if (values[key]) body[key] = values[key];
        });
        setLoading(true);
        const result = await apiServices.put(endpointUrls.editUserInfo, body);
        setLoading(false);
        if (!result.isSuccess) return;
        dispatch(getUserDetail());
        router.push(routes.dashboard.path);
    };

    return <div className=''>
        <Divider >اطلاعات فردی</Divider>
        <Form form={form} onFinish={handleFinish}>
            <DFormItem label="نام" name="FirstName">
                <DInput disabled={loading} />
            </DFormItem>
            <DFormItem label="نام خانوادگی" name="LastName">
                <DInput disabled={loading} />
            </DFormItem>
            <DFormItem label="آدرس ایمیل" name="Email">
                <DInput disabled={loading} />
            </DFormItem>
            <div className="flex justify-end">
                <Button text="ثبت" type="submit" loading={loading} />
            </div>

        </Form>
        <Divider >آدرس</Divider>
        <Form>
            <DFormItem label="آدرس">
                <p className='mb-0 cursor-pointer text-d-primary' onClick={toggle}>+ افزودن آدرس جدید</p>
                <AddNewAddress show={showAddAddress} close={toggle} />
            </DFormItem>
        </Form>
    </div>;
};

export default DashboardEditUser;
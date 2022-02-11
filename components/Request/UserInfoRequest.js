import { Divider, Form } from "antd";
import Button from "components/UI/Button/Button";
import DFormItem from "components/UI/DFormItem/DFormItem";
import DInput from "components/UI/DInput/DInput";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getUserDetail } from "redux/middlewares/user/getUSerDetail";
import endpointUrls from "utils/constants/endpointUrls";
import apiServices from "utils/services/apiServices";

const UserInfoRequest = ({ cancel, ProductUrl, onRequestSent }) => {
    //states
    const [form] = Form.useForm();
    const { userDetail } = useSelector(state => state.user);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    //effects
    useEffect(() => {
        userDetail && form.setFieldsValue({ PhoneNumber: userDetail.Phone, Email: userDetail.Email, LastName: userDetail.LastName, FirstName: userDetail.FirstName });
    });

    //functions
    const handleFinish = async (values) => {
        setLoading(true);
        const result = await apiServices.post(endpointUrls.sendProductRequest, { ...values, ProductUrl });
        setLoading(false);
        if (!result.isSuccess) return;
        dispatch(getUserDetail());
        onRequestSent();

    };

    return <div className='absolute flex items-center justify-center w-full h-full'>
        <div className="flex flex-col w-10/12 max-w-2xl p-4 border rounded-md shadow-md bg-d-bg-color border-d-border-gray">
            <Divider>ثبت اطلاعات</Divider>
            <Form form={form} onFinish={handleFinish} style={{ width: '100%' }} requiredMark={false}>
                <DFormItem label="نام" name="FirstName" rules={[{ required: true, message: 'نام وارد نشده' }]}>
                    <DInput disabled={loading} />
                </DFormItem>
                <DFormItem label="نام خانوادگی" name="LastName" rules={[{ required: true, message: 'نام خانوادگی وارد نشده' }]}>
                    <DInput disabled={loading} />
                </DFormItem>
                <DFormItem label="آدرس ایمیل" name="Email" rules={[
                    {
                        type: 'email',
                        message: 'ایمیل به درستی وارد نشده',
                    },
                    {
                        required: true,
                        message: 'آدرس ایمیل وارد نشده',
                    },
                ]}>
                    <DInput disabled={loading} />
                </DFormItem>
                <DFormItem label="شماره موبایل" name="PhoneNumber" rules={[{
                    required: true,
                    message: "فقط اعداد",
                    pattern: new RegExp(/^[0-9]+$/)
                }, {
                    required: true,
                    message: 'شماره موبایل وارد نشده',
                },]}>
                    <DInput style={{ width: '100%' }} disabled={loading} />
                </DFormItem>
                <div className="flex justify-end gap-x-2">
                    <Button text="بازگشت" loading={loading} back onClick={cancel} />
                    <Button text="تایید و ثبت" type="submit" loading={loading} />
                </div>
            </Form>
        </div>
    </div>;
};

export default UserInfoRequest;
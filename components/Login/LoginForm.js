import Button from "components/UI/Button/Button";
import DInput from "components/UI/DInput/DInput";
import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import DFormItem from "components/UI/DFormItem/DFormItem";
import { Form, Input } from "antd";
import DInputPassword from "components/UI/DInputPassword/DInputPassword";
import { handleLogin } from "redux/middlewares/user/handleLogin";
import routes from "utils/constants/routes";
import { useSelector } from "react-redux";

const LoginForm = () => {
  //states
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const { needRedirect } = useSelector((state) => state.home);

  //hooks
  const router = useRouter();
  const dispatch = useDispatch();

  //functions
  const handleSubmit = async (values) => {
    dispatch(
      handleLogin(
        values.Phone,
        Buffer.from(values.Password).toString("base64"),
        setLoading,
        () => router.push(needRedirect ? needRedirect : routes.home.path)
      )
    );
  };

  return (
    <div>
      <div className="w-full text-center mb-7">
        <h3 className="text-2xl font-bold text-center">ورود به حساب</h3>
      </div>
      <Form form={form} requiredMark={false} onFinish={handleSubmit}>
        <DFormItem
          label="شماره موبایل"
          name="Phone"
          rules={[{ required: true, message: "شماره موبایل وارد نشده." }]}
        >
          <Input disabled={loading} />
        </DFormItem>

        <DFormItem label="رمز عبور" name="Password">
          <DInputPassword disabled={loading} />
        </DFormItem>
        {/* <div className='flex justify-end text-xs cursor-pointer hover:underline'>
					فراموشی رمز
				</div> */}
        <Button
          text="ورود"
          className="w-full mt-6"
          primary
          loading={loading}
          type="sbmit"
        />
      </Form>
    </div>
  );
};

export default LoginForm;

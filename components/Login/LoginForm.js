import Button from 'components/UI/Button/Button';
import DInput from 'components/UI/DInput/DInput';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import DFormItem from 'components/UI/DFormItem/DFormItem';
import { Form } from 'antd';
import DInputPassword from 'components/UI/DInputPassword/DInputPassword';
import { handleLogin } from 'redux/middlewares/user/handleLogin';

const LoginForm = () => {
	//states
	const [form] = Form.useForm();
	const [loading, setLoading] = useState(false);

	// console.log(Buffer.from('سلام').toString('base64'));

	//hooks
	const router = useRouter();
	const dispatch = useDispatch();

	//functions
	const handleSubmit = async (values) => {
		dispatch(
			handleLogin(values.Phone, values.Password, setLoading, () =>
				router.push('/')
			)
		);
	};

	return (
		<>
			<div className='w-full text-center mb-7'>
				<h3 className='text-2xl font-bold '>ورود به حساب</h3>
			</div>
			<Form form={form} requiredMark={false} onFinish={handleSubmit}>
				<DFormItem
					label='شماره موبایل'
					name='Phone'
					rules={[{ required: true, message: 'شماره موبایل وارد نشده.' }]}
				>
					<DInput type='text' disabled={loading} />
				</DFormItem>

				<DFormItem label='رمز عبور' name='Password'>
					<DInputPassword disabled={loading} />
				</DFormItem>
				{/* <div className='flex justify-end text-xs cursor-pointer hover:underline'>
					فراموشی رمز
				</div> */}
				<Button
					text='ورود'
					className='w-full mt-6'
					primary
					loading={loading}
					type='sbmit'
				/>
			</Form>
		</>
	);
};

export default LoginForm;

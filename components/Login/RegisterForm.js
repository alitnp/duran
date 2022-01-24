import { Form } from 'antd';
import Button from 'components/UI/Button/Button';
import DFormItem from 'components/UI/DFormItem/DFormItem';
import DInput from 'components/UI/DInput/DInput';
import DInputPassword from 'components/UI/DInputPassword/DInputPassword';
import { useState } from 'react';
import { toast } from 'react-toastify';
import endpointUrls from 'utils/constants/enpointUrls';
import apiServices from 'utils/services/apiServices';

const RegisterForm = ({ setShowOtp }) => {
	//states
	const [form] = Form.useForm();
	const [loading, setLoading] = useState(false);

	//functions
	const handleSubmit = async (values) => {
		setLoading(true);
		const result = await apiServices.post(endpointUrls.register, values);
		setLoading(false);
		if (!result.isSuccess) return;
		toast.success(result.data.Message);
		setShowOtp(values.Phone);
	};

	return (
		<Form form={form} requiredMark={false} onFinish={handleSubmit}>
			<DFormItem
				label='شماره موبایل'
				name='Phone'
				rules={[{ required: true, message: 'شماره موبایل وارد نشده.' }]}
			>
				<DInput type='text' disabled={loading} />
			</DFormItem>
			<DFormItem
				label='رمز عبور'
				name='Password'
				rules={[
					{
						required: true,
						message: 'رمز عبور خود را وارد کنید',
					},
					{
						min: 8,
						message: 'رمز عبور باید حداقل 8 کاراکتر باشد',
					},
				]}
			>
				<DInputPassword disabled={loading} />
			</DFormItem>
			<DFormItem
				label='تکرار رمز'
				name='ConfirmPassword'
				rules={[
					{
						required: true,
						message: 'تکرار رمز وارد نشده',
					},
					({ getFieldValue }) => ({
						validator(_, value) {
							if (!value || getFieldValue('Password') === value) {
								return Promise.resolve();
							}
							return Promise.reject(
								new Error('تکرار رمز عبور به درستی وارد نشده.')
							);
						},
					}),
				]}
			>
				<DInputPassword disabled={loading} />
			</DFormItem>
			<Button
				text='ورود'
				className='w-full mt-6'
				loading={loading}
				type='sbmit'
			/>
		</Form>
	);
};

export default RegisterForm;

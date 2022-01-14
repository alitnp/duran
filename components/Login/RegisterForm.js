import Button from 'components/UI/Button/Button';
import Hr from 'components/UI/Hr/Hr';
import Input from 'components/UI/Input/Input';
import { useState } from 'react';
import endpointUrls from 'utils/constants/enpointUrls';
import apiServices from 'utils/services/apiServices';
import { toast } from 'react-toastify';

const RegisterForm = () => {
	//states
	const [form, setForm] = useState({
		username: '',
		password: '',
		repeatPassword: '',
	});
	const [warning, setWarning] = useState({});
	const [open, setOpen] = useState(false);

	//functions
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!isFormValidate()) return;
		const result = await apiServices.post(endpointUrls.register, {
			Email: form.username,
			Password: form.password,
			ConfirmPassword: form.repeatPassword,
		});
		if (!result.isSuccess) return;
		console.log(result);
	};
	const handleChange = (e) => {
		setWarning({});
		setForm((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};
	const toggleOpen = () => setOpen((prevState) => !prevState);
	const isFormValidate = () => {
		let isValid = true;
		if (!form.username) {
			setWarning((prevState) => ({
				...prevState,
				username: 'شماره موبایل وارد نشده.',
			}));
			isValid = false;
		}
		if (!form.password) {
			return setWarning((prevState) => ({
				...prevState,
				password: 'رمز عبور وارد نشده.',
			}));
			isValid = false;
		}
		if (form.password !== form.repeatPassword) {
			return setWarning((prevState) => ({
				...prevState,
				repeatPassword: 'تکرار رمز بدرستی وارد نشده.',
			}));
			isValid = false;
		}
		return isValid;
	};

	return (
		<form onSubmit={handleSubmit} className='mt-8'>
			<Hr
				className='mb-6 text-sm font-medium cursor-pointer'
				onClick={toggleOpen}
			>
				ساخت حساب جدید
			</Hr>
			<div
				className={`overflow-hidden transition-all duration-500 ease-out ${
					!open && 'max-h-0'
				} ${open && 'max-h-72'}`}
			>
				<Input
					type='text'
					name='username'
					label='شماره موبایل'
					value={form.username}
					onChange={handleChange}
					warning={warning.username}
				/>
				<Input
					type='password'
					name='password'
					label='رمز عبور'
					value={form.password}
					onChange={handleChange}
					warning={warning.password}
				/>
				<Input
					type='password'
					name='repeatPassword'
					label='تکرار رمز'
					value={form.repeatPassword}
					onChange={handleChange}
					warning={warning.repeatPassword}
				/>
				<Button
					type='submit'
					text='ایجاد حساب'
					className='mt-6 bg-d-text w-full'
				/>
			</div>
		</form>
	);
};

export default RegisterForm;

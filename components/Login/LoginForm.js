import Button from 'components/UI/Button/Button';
import Input from 'components/UI/Input/Input';
import { useState } from 'react';
import endpointUrls from 'utils/constants/enpointUrls';
import apiServices from 'utils/services/apiServices';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setLoggedIn } from 'redux/reducers/userReducer/userReducer';

const LoginForm = () => {
	//states
	const [form, setForm] = useState({ username: '', password: '' });
	const [loading, setLoading] = useState(false);
	const [warning, setWarning] = useState({});
	console.log(Buffer.from('سلام').toString('base64'));

	//hooks
	const router = useRouter();
	const dispatch = useDispatch();

	//functions
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!isFormValidate()) return;
		setLoading(true);
		const result = await apiServices.post(endpointUrls.login, {
			Email: form.username,
			Password: form.password,
		});
		setLoading(false);
		console.log(result);
		if (!result.isSuccess) return;
		localStorage.setItem('accessToken', result.data.Data.AccessToken);
		localStorage.setItem('refreshToken', result.data.Data.RefreshToken);
		dispatch(setLoggedIn(true));
		router.push('/');
	};
	const handleChange = (e) => {
		setWarning({});
		setForm((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};
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

		return isValid;
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className='w-full text-center mb-7'>
				<h3 className='font-bold text-2xl '>ورود به حساب</h3>
			</div>
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
			<div className='flex justify-end text-xs hover:underline cursor-pointer'>
				فراموشی رمز
			</div>
			<Button
				text='ورود'
				className='mt-6 w-full'
				primary
				loading={loading}
				type='sbmit'
			/>
		</form>
	);
};

export default LoginForm;

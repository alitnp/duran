import Hr from 'components/UI/Hr/Hr';
import { useState } from 'react';
import RegisterForm from 'components/Login/RegisterForm';
import RegisterOtp from 'components/Login/RegisterOtp';

const Register = ({ redirectLink, toggle, open }) => {
	//states
	const [showOtp, setShowOtp] = useState('');
	const [tempPass, setTempPass] = useState('');

	return (
		<>
			<Hr
				className='mt-4 mb-6 text-sm font-medium cursor-pointer'
				onClick={toggle}
			>
				ساخت حساب جدید
			</Hr>
			<div
				className={`overflow-hidden transition-all duration-500 ease-out ${!open && 'max-h-0'
					} ${open && 'max-h-72'}`}
			>
				{!showOtp && (
					<RegisterForm setShowOtp={setShowOtp} setTempPass={setTempPass} />
				)}
				{showOtp && (
					<RegisterOtp
						phoneNumber={showOtp}
						back={() => {
							setShowOtp(null);
							setTempPass('');
						}}
						password={tempPass}
						setPassword={setTempPass}
						redirectLink={redirectLink}
					/>
				)}
			</div>
		</>
	);
};

export default Register;

import Button from 'components/UI/Button/Button';
import DInputNumber from 'components/UI/DInputNumber/DInputNumber';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { handleLogin } from 'redux/middlewares/user/handleLogin';
import endpointUrls from 'utils/constants/endpointUrls';
import apiServices from 'utils/services/apiServices';

const RegisterOtp = ({ phoneNumber: Phone, back, password }) => {
  //states
  const [otp, setOtp] = useState('');
  const [timeLeft, setTimeLeft] = useState(3);
  const [loading, setLoading] = useState(false);

  //hooks
  const dispatch = useDispatch();
  const router = useRouter();

  //effects
  useEffect(() => {
    const timer = setInterval(() => {
      timeLeft > 0 && setTimeLeft((prevState) => prevState - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  //functions
  const verifyOtp = async () => {
    if (!otp) return toast.warning('کد تایید وارد نشده');
    setLoading(true);
    const result = await apiServices.post(endpointUrls.verifyOtp, {
      Phone,
      Code: otp,
    });
    setLoading(false);
    if (!result.isSuccess) return;
  };
  const resendOtp = async () => {
    if (timeLeft > 0) return;
    setLoading(true);
    const result = await apiServices.post(endpointUrls.resendOtp, { Phone });
    setLoading(false);
    if (!result.isSuccess) return;
    setTimeLeft(60);
    login();
  };
  const login = () =>
    dispatch(handleLogin(Phone, password, setLoading, () => router.push('/')));

  return (
    <div className='w-full'>
      <p className='w-full mb-0 text-center'>
        کد ارسال شده برای شماره تلفن را وارد کنید
      </p>
      <p className='w-full text-center'>شماره شما : {Phone}</p>
      <DInputNumber
        max={9999}
        min={1000}
        style={{ width: '100%' }}
        controls={false}
        disabled={loading}
        value={otp}
        onChange={(e) => setOtp(e)}
      />
      <div className='flex'>
        <p>کدی دریافت نکردید؟</p>
        <p
          className={`mr-2 ${
            !timeLeft
              ? 'text-sky-600 cursor-pointer hover:underline'
              : 'text-gray-400'
          }`}
          onClick={resendOtp}
        >
          ارسال دوباره {`${timeLeft > 0 ? timeLeft : ''}`}
        </p>
      </div>
      <div className='flex justify-between mt-6'>
        <Button
          text='بازگشت'
          back
          className='w-4/12'
          loading={loading}
          onClick={back}
        />
        <Button
          text='ثبت'
          className='w-7/12'
          loading={loading}
          onClick={verifyOtp}
        />
      </div>
    </div>
  );
};

export default RegisterOtp;

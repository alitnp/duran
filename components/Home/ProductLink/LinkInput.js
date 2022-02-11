import Websites from 'components/Home/ProductLink/WebSites';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import routes from 'utils/constants/routes';

const LinkInput = () => {
	//states
	const [link, setLink] = useState("");

	//hooks
	const router = useRouter();

	//functions
	const inputKeyUp = (e) => { if (e.keyCode === 13) handleSubmit(); };
	const handleSubmit = () => {
		if (!link) return;
		router.push(routes.request.path + "?link=" + link.replaceAll("&", "$"));
	};

	return (
		<div
			className='flex flex-col items-center w-full mx-auto md:mx-0 md:pl-4 md:block'
			style={{ maxWidth: '400px' }}
		>
			<h2 className='text-2xl font-bold text-center md:text-right'>
				سفارش کفش از سایت های بزرگ دنیا
			</h2>
			<p className='my-4 text-sm font-normal leading-8 text-center w-80 md:text-right'>
				کفش مورد علاقتو تو بازار یا سایتای داخلی پیدا نمیکنی؟ دوران کفش مورد نظر
				شما رو ثبت سفارش میکنه و تو کمترین زمان درب منزل تحویل شما میده
			</p>
			<div className='flex'>
				<input
					type='text'
					placeholder='لینک صفحه کفش مورد نظر '
					className='w-full pr-4 border border-l-0 outline-none h-14 border-d-text'
					onKeyUp={inputKeyUp}
					value={link}
					onChange={e => setLink(e.target.value)}
				/>
				<button className='flex items-center justify-center flex-shrink-0 text-2xl text-white w-14 bg-d-text h14 hover:bg-d-primary' onClick={handleSubmit}>
					<FiArrowLeft />
				</button>

			</div>
			<Websites />
		</div>
	);
};

export default LinkInput;

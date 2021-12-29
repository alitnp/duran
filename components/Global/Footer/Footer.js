import SocialLink from 'components/Global/Footer/SocialLink';
import Layout from 'components/Layout/Layout';
import Image from 'next/image';

const Footer = () => {
	return (
		<div className='py-10 bg-d-text text-d-gray'>
			<div className='flex flex-col items-center justify-between w-full md:items-start gap-y-8 md:flex-row d-container'>
				<div className=' w-fit'>
					<div className=' w-fit'>
						<Image
							src='/image/logo.png'
							width='120px'
							height='50px'
							objectFit='contain'
							objectPosition='center'
						/>
					</div>
					<p className=''>info@duran.com</p>
					<p className=''>۳۴۵۶۷۸۹۰ - ۰۲۱</p>
				</div>
				<div className='flex '>
					<div className='ml-8 '>
						<p className='mb-1'>دسته بندی</p>
						<p className='text-sm font-thin cursor-pointer text-d-border-gray hover:text-inherit'>
							مردانه
						</p>
						<p className='text-sm font-thin cursor-pointer text-d-border-gray hover:text-inherit'>
							زنانه
						</p>
						<p className='text-sm font-thin cursor-pointer text-d-border-gray hover:text-inherit'>
							کودک
						</p>
					</div>
					<div className='ml-8 '>
						<p className='mb-1'>دسترسی سریع</p>
						<p className='text-sm font-thin cursor-pointer text-d-border-gray hover:text-inherit'>
							حساب کاربری
						</p>
						<p className='text-sm font-thin cursor-pointer text-d-border-gray hover:text-inherit'>
							سبد خرید
						</p>
					</div>
					<div className=''>
						<p className='mb-1'>اطلاعات</p>
						<p className='text-sm font-thin cursor-pointer text-d-border-gray hover:text-inherit'>
							درباره ما
						</p>
						<p className='text-sm font-thin cursor-pointer text-d-border-gray hover:text-inherit'>
							ارتباط با ما
						</p>
					</div>
				</div>
				<div className=''>
					<div className='flex'>
						<SocialLink image='/icons/facebook.png' to='https://facebook.com' />
						<SocialLink
							image='/icons/instagram.png'
							to='https://instagram.com'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;

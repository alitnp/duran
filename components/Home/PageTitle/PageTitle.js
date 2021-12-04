import Image from 'next/image';

const PageTitle = () => {
	return (
		<div className='relative mt-4 ' style={{ height: '500px' }}>
			<Image
				src='/image/page-title-image.png'
				layout='fill'
				objectFit='cover'
				objectPosition='center center'
				priority
			/>
			<div className='absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full text-center'>
				<h1 className='mb-5 text-3xl font-bold md:text-5xl'>فروشگاه دوران</h1>
				<p className='text-lg'>بستر تخصصی اسنیکر</p>
			</div>
		</div>
	);
};

export default PageTitle;

import Image from 'next/image';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHomeBrands } from 'redux/middlewares/home/getHomeBrands';
import style from 'styles/style.module.css';
import useScreenWidth from 'utils/hooks/useScreenWidth';

const brandsTemp = [
	{ path: '/icons/brand1.svg' },
	{ path: '/icons/brand2.svg' },
	{ path: '/icons/brand3.svg' },
	{ path: '/icons/brand4.svg' },
	{ path: '/icons/brand5.svg' },
	{ path: '/icons/brand6.svg' },
];

const BrandsWrapper = () => {
	//states
	const { brands } = useSelector((state) => state.home);

	//hooks
	const dispatch = useDispatch();
	const screenWidth = useScreenWidth();

	//effects
	useEffect(() => {
		if (!brands) dispatch(getHomeBrands());
	}, []);

	return (
		<div className='relative py-16 mb-20'>
			<div
				className='absolute top-0 left-0 w-full h-full'
				style={{ zIndex: -1 }}
			>
				<div className='relative w-full h-full'>
					<Image
						src='/image/brands-bg.jpg'
						layout='fill'
						objectFit='cover'
						objectPosition='center center'
					/>
				</div>
			</div>
			<div className='relative w-10/12 pb-2 mx-auto text-right border-b md:text-center md:w-9/12 border-d-border-gray'>
				<h3 className='text-xl font-bold '>برندهای پرطرفدار</h3>
				<span className='absolute left-0 font-medium transform -translate-y-1/2 top-1/2 text-d-primary'>
					همه
				</span>
			</div>
			<div
				className={`grid justify-between w-10/12 grid-cols-3 mx-auto mt-8 md:flex md:w-9/12 gap-y-8 ${
					screenWidth < 768 && style.IconGridContainer
				}`}
			>
				{brandsTemp.map(({ path }) => {
					return (
						<div className='relative w-14 h-14' key={path}>
							<Image
								src={path}
								key={path}
								layout='fill'
								objectFit='contain'
								objectPosition='center center'
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default BrandsWrapper;

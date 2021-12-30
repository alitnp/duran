import Layout from 'components/Layout/Layout';
import Button from 'components/UI/Button/Button';
import { persianNum, Separator } from 'helpers/persianTools';
import { useEffect, useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BackgroundColorTheif } from 'helpers/background-color-theif';
import { useRef } from 'react';
import Image from 'next/image';

const info = {
	persianName: 'آدیداس - ریسپانس سوپر',
	englishName: 'Adidas - Response Super',
	price: '1700000',
	sizes: ['40', '41', '42'],
	category: 'مردانه',
	model: 'باشگاهی - دویدن',
	color: 'مشکی - سفید',
	madeIn: 'ویتنام',
	material: '',
	desc: `متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
	طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
	سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
	کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
	زیادی در شصت و سه درصد گذشته حال و آینده`,
	comments: [
		{
			sender: 'میثاق امیرفجر',
			message: `متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است`,
		},
		{
			sender: 'یاسین حجازی',
			message: `متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است`,
		},
	],
	images: [
		'/image/shoes/product/1-1.jpg',
		'/image/shoes/product/1-2.jpg',
		'/image/shoes/product/1-3.jpg',
		'/image/shoes/product/1-4.jpg',
		'/image/shoes/product/1-5.jpg',
		'/image/shoes/product/1-6.jpg',
	],
};

const Product = () => {
	//states
	const [liked, setLiked] = useState(false);
	const [rgb, setRgb] = useState([]);
	const [slide, setSlide] = useState(0);

	const imageRef = useRef();

	const getColor = () => {
		if (!imageRef?.current?.complete) return;
		const backgroundColorTheif = new BackgroundColorTheif();
		setRgb(backgroundColorTheif.getBackGroundColor(imageRef.current));
	};

	useEffect(() => {
		if (imageRef.current.naturalHeight !== 0) getColor();
	}, [imageRef.current?.naturalHeight]);

	return (
		<Layout>
			<div className='flex mb-6 mt-6 gap-x-10'>
				<div className='flex flex-col max-w-[260px] '>
					<div className='pb-4 mb-4 border-b border-d-border-gray'>
						<div className='border-b pb-2 mb-2'>
							<h1 className='font-bold text-xl mb-2'>آدیداس - ریسپانس سوپر</h1>
							<h1 className='font-bold text-xl'>Adidas - Response Super</h1>
						</div>
						<div className='flex justify-between'>
							<span>تومان</span>
							<span>{Separator(persianNum(info.price))}</span>
						</div>
						<div className='flex flex-col'>
							<span>انتخاب سایز:</span>
							<div className='flex gap-x-2 justify-end mt-2'>
								{info.sizes.map((item, index) => {
									return (
										<div
											key={index}
											className='border border-d-border-gray w-8 h-8 flex items-center justify-center'
										>
											{persianNum(item)}
										</div>
									);
								})}
							</div>
						</div>
						<div className='flex justify-between items-center gap-x-4 mt-4'>
							<Button text='خرید محصول' />
							<div className='text-2xl flex items-center'>
								<FiShoppingCart className='ml-2' />
								{!liked && (
									<AiOutlineHeart
										className='cursor-pointer '
										onClick={() => setLiked(true)}
									/>
								)}
								{liked && (
									<AiFillHeart
										className='cursor-pointer fill-red-600'
										onClick={() => setLiked(false)}
									/>
								)}
							</div>
						</div>
					</div>
					<div className=''>
						<span className='font-semibold'>توضیحات</span>
						<p className='text-sm'>{info.desc}</p>
					</div>
					<div className='pb-2 mb-2 border-b border-d-border-gray'>
						<span className='font-semibold'>مشخصات</span>
						<div className='group '>
							<div className='flex justify-between text-sm py-1 px-1 bg-gray-100'>
								<span>دسته بندی</span>
								<span>{info.category}</span>
							</div>
							<div className='flex justify-between text-sm py-1 px-1 '>
								<span>مدل</span>
								<span>{info.model}</span>
							</div>
							<div className='flex justify-between text-sm py-1 px-1 bg-gray-100'>
								<span>رنگ</span>
								<span>{info.color}</span>
							</div>
							<div className='flex justify-between text-sm py-1 px-1 '>
								<span>کشور ساخت</span>
								<span>{info.madeIn}</span>
							</div>
							<div className='flex justify-between text-sm py-1 px-1 bg-gray-100'>
								<span>جنس</span>
								<span>{info.material}</span>
							</div>
						</div>
					</div>
					<div className=''>
						<div className='flex justify-between'>
							<span className='font-semibold'>نظرات - ۳۲</span>
							<span className='text-d-primary text-sm'>ثبت نظر</span>
						</div>
						{info.comments.map((comment, index) => {
							return (
								<div className='mt-3' key={index}>
									<div className='flex items-center'>
										<div className='flex items-center justify-center pb-1 w-9 h-9 rounded-full bg-indigo-200 '>
											{comment.sender[0]}
										</div>
										<span className='mr-2'>{comment.sender}</span>
									</div>
									<div className='bg-gray-200/50 px-2 py-3 rounded-md text-sm mt-2'>
										{comment.message}
									</div>
								</div>
							);
						})}
					</div>
				</div>
				<div className='flex flex-col w-full'>
					<div
						className='w-full max-h-96 relative border '
						style={{ backgroundColor: `rgb(${rgb[0]},${rgb[1]},${rgb[2]})` }}
					>
						<img
							src={info.images[slide]}
							alt=''
							ref={imageRef}
							className='w-full h-full object-contain'
							onLoad={(e) => {
								e?.type === 'load' && getColor();
							}}
						/>
					</div>
					<div className=' h-20 w-full gap-x-4 flex justify-center'>
						{info.images.map((image, index) => {
							return (
								<div className='cursor-pointer' onClick={() => setSlide(index)}>
									<div
										className={` rounded-full  w-1/2 mx-auto relative -top-[2px] mb-1 ${
											slide === index
												? 'h-1 bg-d-text'
												: 'h-[2px] bg-d-faded-text'
										}`}
									></div>
									<div>
										<Image
											src={image}
											layout='intrinsic'
											width='80px'
											height='80px'
											objectFit='contain'
										/>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Product;

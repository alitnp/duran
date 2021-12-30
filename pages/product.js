import Layout from 'components/Layout/Layout';
import BuyBox from 'components/Product/BuyBox';
import Specifications from 'components/Product/Specifications';
import Comments from 'components/Product/Comments';
import ProductImages from 'components/Product/ProductImages';
import ProductsRow from 'components/Global/ProductsRow/ProductsRow';

const info = {
	productId: 1,
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
	comments: {
		items: [
			{
				sender: 'میثاق امیرفجر',
				message: `متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است`,
			},
			{
				sender: 'یاسین حجازی',
				message: `متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است`,
			},
		],
		totalComments: 32,
		pageNumber: 1,
		pageSize: 2,
	},

	images: [
		'/image/shoes/product/1-1.jpg',
		'/image/shoes/product/1-2.jpg',
		'/image/shoes/product/1-3.jpg',
		'/image/shoes/product/1-4.jpg',
		'/image/shoes/product/1-5.jpg',
		'/image/shoes/product/1-6.jpg',
	],
	similars: [
		{
			firstImage: '/image/shoes/jordan-2.jpg',
			secondImage: '/image/shoes/jordan-1.webp',
			persianName: 'نایکی - جردن ۱ رترو',
			englishName: 'NIKE - Jordan 1 Retro',
			sizes: ['39', '40', '41', '42'],
			categories: 'مردانه',
			price: 2200000,
		},
		{
			firstImage: '/image/shoes/shoe1-1.jpg',
			secondImage: '/image/shoes/shoe1-2.jpg',
			persianName: 'نایکی - جردن ۱ رترو',
			englishName: 'NIKE - Jordan 1 Retro',
			sizes: ['39', '40', '41', '42'],
			categories: 'مردانه',
			price: 2200000,
		},
		{
			firstImage: '/image/shoes/shoe2-1.jpg',
			secondImage: '/image/shoes/shoe2-2.jpg',
			persianName: 'نایکی - جردن ۱ رترو',
			englishName: 'NIKE - Jordan 1 Retro',
			sizes: ['39', '40', '41', '42'],
			categories: 'مردانه',
			price: 2200000,
		},
	],
};

const Product = () => {
	return (
		<Layout>
			<div className='flex md:flex-row-reverse flex-col mb-6 mt-6 gap-x-10'>
				<div className='flex flex-col grow'>
					<ProductImages images={info.images} />
					<div className='md:grid grid-cols-1 hidden'>
						<ProductsRow name={'محصولات مشابه'} className='mt-10' />
					</div>
				</div>
				<div className='flex flex-col md:max-w-[260px] '>
					<BuyBox
						persianName={info.persianName}
						englishName={info.englishName}
						sizes={info.sizes}
						price={info.price}
					/>
					<Specifications
						desc={info.desc}
						category={info.category}
						model={info.model}
						color={info.color}
						madeIn={info.madeIn}
						material={info.material}
					/>
					<Comments
						comments={info.comments.items}
						total={info.comments.totalComments}
					/>
				</div>
			</div>
		</Layout>
	);
};

export default Product;

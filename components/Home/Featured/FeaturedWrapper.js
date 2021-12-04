import Featured from 'components/Home/Featured/Featured';

const FeaturedWrapper = () => {
	return (
		<div className='grid grid-cols-1 gap-2 md:grid-cols-2'>
			<Featured
				image='/image/featured-1.jpg'
				english='Nike - Adopt Smart'
				persian='نایکی - اداپت اسمارت'
			/>
			<Featured
				image='/image/featured-3.jpg'
				english='Adidas - Clima Cool'
				persian='نایکی - اداپت اسمارت'
			/>
			<Featured
				image='/image/featured-2.jpg'
				english='Adidas - Spring Blade'
				persian='آدیداس - اسپرینگ بلید'
			/>
			<Featured
				image='/image/featured-4.jpg'
				english='Jordan - B430'
				persian='جردن - بی۴۳۰ '
			/>
		</div>
	);
};

export default FeaturedWrapper;

import Image from 'next/image';
import style from 'styles/style.module.css';

const Websites = () => {
	const icons = [
		{ path: '/icons/alibaba.svg', name: 'Alibaba' },
		{ path: '/icons/bestbuy.svg', name: 'Best Buy' },
		{ path: '/icons/ebay.svg', name: 'Ebay' },
		{ path: '/icons/walmart.svg', name: 'walmart' },
		{ path: '/icons/amazon.svg', name: 'Amazon' },
		{ path: '/icons/noon.svg', name: 'Noon' },
	];

	return (
		<div
			className={`grid grid-cols-3 pt-10 mt-4 border-t gap-y-4 border-d-border-gray w-full ${style.iconGridContainer}`}
		>
			{icons.map((item) => {
				return (
					<div className='relative w-9/12 h-14' key={item.name}>
						<Image
							src={item.path}
							layout='fill'
							key={item.name}
							alt={item.name}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default Websites;

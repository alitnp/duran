import { useState } from 'react';
import Image from 'next/image';
import NavItem from 'components/Global/Navbar/NavItem';

const navItems = () => {
	const [collapse, setCollapse] = useState(true);

	const items = [
		{ url: '/', text: 'خانه' },
		{ url: '/new', text: 'تازه رسیده ها' },
		{ url: '/brands', text: 'برند ها' },
	];

	return (
		<>
			<nav className='md:flex items-center list-none hidden'>
				{items.map((item) => {
					return <NavItem text={item.text} url={item.url} key={item.text} />;
				})}
			</nav>
			<div
				className={`border border-d-border-gray rounded-md flex items-center justify-center p-1 cursor-pointer relative overflow-visible md:hidden`}
				onMouseEnter={() => setCollapse(false)}
				onMouseLeave={() => setCollapse(true)}
			>
				<Image
					src='/icons/menu.svg'
					width='20px'
					height='20px'
					objectFit='contain'
				/>
				<nav
					className='absolute right-0 top-full flex flex-col list-none border bg-d-bg-color rounded-md border-d-border-gray overflow-hidden'
					style={{
						borderWidth: collapse ? '0' : '1px',
						transition: 'max-height 0.5s ease-out',
						maxHeight: collapse ? '0rem' : `${40 * items.length}px`,
						width: collapse ? '0' : 'unset',
					}}
				>
					{items.map((item) => {
						return (
							<div
								key={item.text}
								className='text-center pr-4  flex items-center py-2 hover:bg-d-gray'
							>
								<NavItem text={item.text} url={item.url} />
							</div>
						);
					})}
				</nav>
			</div>
		</>
	);
};

export default navItems;

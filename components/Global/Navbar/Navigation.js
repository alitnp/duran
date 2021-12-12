import { useState } from 'react';
import Image from 'next/image';
import NavItem from 'components/Global/Navbar/NavItem';
import style from 'styles/style.module.css';

const navItems = () => {
	const [collapse, setCollapse] = useState(true);

	const items = [
		{ url: '/', text: 'خانه' },
		{ url: '/new', text: 'تازه رسیده ها' },
		{ url: '/brands', text: 'برند ها' },
	];

	return (
		<>
			<nav className='items-center hidden list-none md:flex'>
				{items.map((item) => {
					return <NavItem text={item.text} url={item.url} key={item.text} />;
				})}
			</nav>
			<div
				className={`border border-d-border-gray rounded-md flex items-center justify-center p-1 cursor-pointer relative overflow-visible md:hidden h-8 mt-2 select-none ${style.noSelect}`}
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
					className='absolute right-0 flex flex-col overflow-hidden list-none border rounded-md top-full bg-d-bg-color border-d-border-gray'
					style={{
						borderWidth: collapse ? '0' : '1px',
						transition: 'max-height 0.3s ease-out',
						maxHeight: collapse ? '0rem' : `${40 * items.length}px`,
						width: collapse ? '0' : 'unset',
					}}
				>
					{items.map((item) => {
						return (
							<div
								key={item.text}
								className='flex items-center py-2 pr-4 text-center hover:bg-d-gray'
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

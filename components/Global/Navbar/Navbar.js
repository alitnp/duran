import Navigation from 'components/Global/Navbar/Navigation';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
	return (
		<div className='container border-b border-d-border-gray p-2 mx-auto bg-d-bg-color h-16 flex items-center justify-between '>
			<Navigation />
			<h3 className='font-bold text-lg'>DURAN</h3>
			<div className='flex items-center'>
				<Link href='/'>
					<span className='ml-2'>ورود</span>
				</Link>
				<Image
					src='/icons/profile.svg'
					width='20px'
					height='20px'
					objectFit='contain'
				/>
			</div>
		</div>
	);
};

export default Navbar;

import Navigation from 'components/Global/Navbar/Navigation';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
	return (
		<>
			<div className='h-16 mx-auto d-container' />
			<div className='fixed top-0 z-50 flex items-center justify-between w-full h-16 '>
				<div className='flex justify-between h-full p-2 mx-auto border-b d-container bg-d-bg-color border-d-border-gray'>
					<Navigation />
					<h3 className='fixed text-lg font-bold transform -translate-x-1/2 left-1/2 top-5'>
						DURAN
					</h3>
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
			</div>
		</>
	);
};

export default Navbar;

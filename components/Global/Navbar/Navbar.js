import Navigation from 'components/Global/Navbar/Navigation';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
	return (
		<>
			<div className='h-16 mx-auto d-container' />
			<div className='fixed top-0 z-50 flex items-center justify-between w-full h-16 '>
				<div className='flex justify-between h-full p-2 mx-auto border-b bg-d-bg-color border-d-border-gray d-container'>
					<Navigation />
					<h3 className='fixed text-lg font-bold transform -translate-x-1/2 left-1/2 top-5'>
						DURAN
					</h3>
					<Link href='/login'>
						<div className='flex items-center cursor-pointer'>
							<span className='ml-2'>ورود</span>

							<Image
								src='/icons/profile.svg'
								width='20px'
								height='20px'
								objectFit='contain'
							/>
						</div>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Navbar;

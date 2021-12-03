import Head from 'next/head';
import Navbar from 'components/Global/Navbar/Navbar.js';

const Layout = ({ children }) => {
	return (
		<>
			<Head>
				<link
					rel='preload'
					href='/fonts/IRANSansWeb_Black.woff2'
					as='font'
					crossOrigin=''
				/>
				<link
					rel='preload'
					href='/fonts/IRANSansWeb_Bold.woff2'
					as='font'
					crossOrigin=''
				/>
				<link
					rel='preload'
					href='/fonts/IRANSansWeb_Medium.woff2'
					as='font'
					crossOrigin=''
				/>
				<link
					rel='preload'
					href='/fonts/IRANSansWeb_Light.woff2'
					as='font'
					crossOrigin=''
				/>
				<link
					rel='preload'
					href='/fonts/IRANSansWeb_UltraLight.woff2'
					as='font'
					crossOrigin=''
				/>
				<link
					rel='preload'
					href='/fonts/IRANSansWeb.woff2'
					as='font'
					crossOrigin=''
				/>
			</Head>
			<Navbar />
			<main className='container'>{children}</main>
		</>
	);
};

export default Layout;

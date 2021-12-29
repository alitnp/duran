import '../styles/globals.css';
import Head from 'next/dist/shared/lib/head';
import Navbar from 'components/Global/Navbar/Navbar';
import Carousel from 'components/Global/Carousel/Carousel';
import Footer from 'components/Global/Footer/Footer';
import Cart from 'components/Global/Cart/Cart';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
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
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Navbar />
			<Component {...pageProps} />
			<Carousel />
			<Footer />
			<Cart />
		</>
	);
}

export default MyApp;

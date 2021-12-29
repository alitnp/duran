import Head from 'next/head';
import Navbar from 'components/Global/Navbar/Navbar.js';
import Footer from 'components/Global/Footer/Footer';
import Cart from 'components/Global/Cart/Cart';
import Carousel from 'components/Global/Carousel/Carousel';

const Layout = ({ children }) => {
	return (
		<>
			<Head></Head>
			<Navbar />
			<main
				className='relative mx-auto d-container '
				// style={{ direction: 'rtl' }}
			>
				{children}
			</main>
			<Carousel />
			<Footer />
			<Cart />
		</>
	);
};

export default Layout;

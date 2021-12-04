import Head from 'next/head';
import Navbar from 'components/Global/Navbar/Navbar.js';

const Layout = ({ children }) => {
	return (
		<>
			<Head></Head>
			<Navbar />
			<main className='mx-auto d-container'>{children}</main>
		</>
	);
};

export default Layout;

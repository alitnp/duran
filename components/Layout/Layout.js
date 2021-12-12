import Head from 'next/head';
import Navbar from 'components/Global/Navbar/Navbar.js';
import GlobalContainer from 'components/Global/GlobalContainer/GlobalContainer';

const Layout = ({ children }) => {
	return (
		<>
			<Head></Head>
			<Navbar />
			<main>
				<GlobalContainer>{children}</GlobalContainer>
			</main>
		</>
	);
};

export default Layout;

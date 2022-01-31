import '../styles/globals.css';
import 'antd/dist/antd.css';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/dist/shared/lib/head';
import Navbar from 'components/Global/Navbar/Navbar';
import Footer from 'components/Global/Footer/Footer';
import Cart from 'components/Global/Cart/Cart';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { ToastContainer } from 'react-toastify';
import { ConfigProvider } from 'antd';
import faIR from 'antd/lib/locale/fa_IR';
import AddToCartModal from 'components/Global/AddToCartModal/AddToCartModal';

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
			<Provider store={store}>
				<ConfigProvider local={faIR} direction='rtl'>
					<Navbar />
					<Component {...pageProps} />
					<Footer />
					<Cart />
					<AddToCartModal/>
				</ConfigProvider>
				<ToastContainer rtl position='top-right' pauseOnFocusLoss={false} />
			</Provider>
		</>
	);
}

export default MyApp;

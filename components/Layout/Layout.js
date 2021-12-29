const Layout = ({ children }) => {
	return (
		<main
			className='relative mx-auto d-container '
			// style={{ direction: 'rtl' }}
		>
			{children}
		</main>
	);
};

export default Layout;

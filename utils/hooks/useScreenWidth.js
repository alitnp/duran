import { useState, useEffect } from 'react';

const useScreenWidth = () => {
	const [screenWidth, setScreenWidth] = useState(0);

	useEffect(() => {
		const setWidth = (width) => setScreenWidth(width);

		if (typeof window !== 'undefined') {
			setScreenWidth(window.innerWidth);
			window.addEventListener('resize', () => {
				setWidth(window.innerWidth);
			});
		}
		return () => {
			window.removeEventListener('resize', () => {
				setWidth(window.innerWidth);
			});
		};
	}, []);

	return screenWidth;
};

export default useScreenWidth;

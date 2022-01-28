import { useEffect, useState } from 'react';

const isTouchScreen = () => {
	const [result, setResult] = useState(false);

	useEffect(() => {
		let isTouch = false;
		if (typeof window !== 'undefined') {
			isTouch =
				'ontouchstart' in window ||
				navigator.maxTouchPoints > 0 ||
				navigator.msMaxTouchPoints > 0;
		}
		if (isTouch !== result) setResult(isTouch);
	}, []);

	return result;
};

export default isTouchScreen;

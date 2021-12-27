import { useEffect, useRef, useState } from 'react';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';

const style =
	'flex items-center justify-center w-full snap-center h-16 font-bold border border-red-600 shrink-0';
const array = ['#111111', '22222', '33333', '444444'];
const handleSlides = (slide) => {
	return [
		array[slide - 1 < 0 ? array.length - 1 : slide - 1],
		array[slide],
		array[slide + 1 > array.length - 1 ? 0 : slide + 1],
	];
};

const Carousel = () => {
	//states
	const [slide, setSlide] = useState(0);
	const [renderSlides, setRenderSlides] = useState(handleSlides(slide));

	//hooks
	const ref = useRef();

	//effects
	useEffect(() => {
		if (ref.current.scrollLeft !== (ref.current.scrollWidth / 3) * -1) {
			moveScrollToMiddle(ref);
		}
	}, [ref]);

	//functions
	const moveScrollToMiddle = (ref) => {
		ref.current.className = ref.current.className.replace('scroll-smooth', '');
		ref.current.scrollLeft = (ref.current.scrollWidth / 3) * -1;
		ref.current.className = ref.current.className + ' scroll-smooth';
	};
	const handleRight = () => {
		ref.current.scrollLeft = 0;
		setTimeout(() => {
			setSlide(slide === 0 ? array.length - 1 : slide - 1);
			setRenderSlides(handleSlides(slide === 0 ? array.length - 1 : slide - 1));
			moveScrollToMiddle(ref);
		}, 500);
	};
	const handleLeft = () => {
		ref.current.scrollLeft = ref.current.scrollWidth * -1;
		setTimeout(() => {
			setSlide(slide === array.length - 1 ? 0 : slide + 1);
			setRenderSlides(handleSlides(slide === array.length - 1 ? 0 : slide + 1));
			moveScrollToMiddle(ref);
		}, 500);
	};

	return (
		<>
			<div className='relative mb-16'>
				<div
					className={`absolute flex w-full  snap-x  overflow-auto`}
					ref={ref}
					onScroll={(e) => {}}
				>
					{renderSlides.map((item, index) => (
						<div className={style} key={index}>
							{item}
						</div>
					))}
				</div>
			</div>
			<div className='pt-10'>
				<BsArrowLeftCircle
					onClick={handleLeft}
					// onClick={() => setSlide(slide === 0 ? array.length - 1 : slide - 1)}
				/>
				<BsArrowRightCircle
					onClick={handleRight}
					// onClick={() => setSlide(slide === array.length - 1 ? 0 : slide + 1)}
				/>
			</div>
		</>
	);
};

export default Carousel;

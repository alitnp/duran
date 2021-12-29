import { useEffect, useRef, useState } from 'react';
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from 'react-icons/io';

const style = 'flex items-center justify-center w-full snap-center shrink-0';
const array = ['/image/slides/slide1.png', '/image/slides/slide2.png'];
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
	const [disabled, setDisabled] = useState(false);

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
		if (disabled) return;
		setDisabled(true);
		ref.current.scrollLeft = 0;
		setTimeout(() => {
			setDisabled(false);
			setSlide(slide === 0 ? array.length - 1 : slide - 1);
			setRenderSlides(handleSlides(slide === 0 ? array.length - 1 : slide - 1));
			moveScrollToMiddle(ref);
		}, 700);
	};
	const handleLeft = () => {
		if (disabled) return;
		setDisabled(true);
		ref.current.scrollLeft = ref.current.scrollWidth * -1;
		setTimeout(() => {
			setDisabled(false);
			setSlide(slide === array.length - 1 ? 0 : slide + 1);
			setRenderSlides(handleSlides(slide === array.length - 1 ? 0 : slide + 1));
			moveScrollToMiddle(ref);
		}, 700);
	};

	return (
		<div className=' no-scrollbar'>
			<div className='relative '>
				<div
					className={` flex w-full  snap-x  overflow-auto no-scrollbar`}
					ref={ref}
					onScroll={(e) => {}}
				>
					{renderSlides.map((item, index) => (
						<div className={style} key={index}>
							<img src={item} className='object-cover' />
						</div>
					))}
				</div>
				<div className='absolute top-0 left-0 w-full h-full bg-white/0'>
					<div className='relative w-full h-full '>
						<div className='absolute p-1 -translate-y-1/2 bg-white rounded-full shadow-md cursor-pointer left-2 top-1/2'>
							<IoMdArrowRoundBack
								onClick={handleLeft}
								className='text-xs md:text-base'
							/>
						</div>
						<div className='absolute p-1 -translate-y-1/2 bg-white rounded-full shadow-md cursor-pointer right-2 top-1/2'>
							<IoMdArrowRoundForward
								onClick={handleRight}
								className='text-xs md:text-base'
							/>
						</div>
						<div className='absolute flex justify-center px-2 py-1 translate-x-1/2 rounded-md bottom-2 right-1/2 w-fit backdrop-blur-md'>
							{array.map((item, index) => {
								return (
									<div
										key={index}
										className={`p-[4px] mx-1  rounded-full ${
											index === slide ? 'bg-d-primary' : 'bg-white'
										}`}
									/>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Carousel;

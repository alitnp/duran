import { useEffect, useRef, useState } from 'react';
import { BackgroundColorTheif } from 'helpers/background-color-theif';
import Image from 'next/image';

const ProductImages = ({ images }) => {
	//states
	const [rgb, setRgb] = useState([]);
	const [slide, setSlide] = useState(0);

	const imageRef = useRef();

	const getColor = () => {
		if (!imageRef?.current?.complete) return;
		const backgroundColorTheif = new BackgroundColorTheif();
		setRgb(backgroundColorTheif.getBackGroundColor(imageRef.current));
	};

	useEffect(() => {
		if (imageRef.current.naturalHeight !== 0) getColor();
	}, [imageRef.current?.naturalHeight]);
	return (
		<>
			<div
				className='w-full h-96 relative border '
				style={{ backgroundColor: `rgb(${rgb[0]},${rgb[1]},${rgb[2]})` }}
			>
				<img
					src={images[slide]}
					alt=''
					ref={imageRef}
					className='w-full h-full object-contain'
					onLoad={(e) => {
						e?.type === 'load' && getColor();
					}}
				/>
			</div>
			<div className=' h-20 w-full gap-x-4 flex justify-center mb-10'>
				{images.map((image, index) => {
					return (
						<div className='cursor-pointer' onClick={() => setSlide(index)}>
							<div
								className={` rounded-full  w-1/2 mx-auto relative -top-[2px] mb-1 ${
									slide === index ? 'h-1 bg-d-text' : 'h-[2px] bg-d-faded-text'
								}`}
							></div>
							<div>
								<Image
									src={image}
									layout='intrinsic'
									width='80px'
									height='80px'
									objectFit='contain'
								/>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default ProductImages;

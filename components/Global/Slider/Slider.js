import { Carousel } from 'antd';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from 'react-icons/io';

const slides = ['/image/slides/slide1.png', '/image/slides/slide2.png'];
const contentStyle = {
	height: '160px',
	width: '100%',
	color: '#000',
	lineHeight: '160px',
	textAlign: 'center',
	background: '#364d79',
	border: '1px solid black',
};
const Slider = () => {
	return (
		<div className='bg-red-500'>
			<Carousel autoplay effect='fade'>
				<div className='w-20 h-20 bg-sky-500'>
					<h3 style={contentStyle} className='w-20 h-20 bg-sky-500'>
						asdfasdfa 1
					</h3>
				</div>
				<div className='w-20 h-20 bg-sky-500'>
					<h3 style={contentStyle} className='w-20 h-20 bg-sky-500'>
						asdfasdf 2
					</h3>
				</div>
				<div className='w-20 h-20 bg-sky-500'>
					asdfasdf
					<h3 style={contentStyle} className='w-20 h-20 bg-sky-500'>
						3
					</h3>
				</div>
				<div className='w-20 h-20 bg-sky-500'>
					asdfasdf
					<h3 style={contentStyle} className='w-20 h-20 bg-sky-500'>
						4
					</h3>
				</div>
			</Carousel>
		</div>
	);
};

export default Slider;

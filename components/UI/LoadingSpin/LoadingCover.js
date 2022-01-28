import LoadingSpin from 'components/UI/LoadingSpin/LoadingSpin';

const LoadingCover = () => {
	return (
		<div className='absolute top-0 left-0 z-50 flex items-center justify-center w-full h-full shadow-lg bg-gray-400/20 backdrop-blur-sm '>
			<LoadingSpin className='text-3xl' />
		</div>
	);
};

export default LoadingCover;

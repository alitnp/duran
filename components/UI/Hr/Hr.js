const Hr = ({ position = 'center', className, children, ...props }) => {
	return (
		<div className={`flex items-center ${className}`} {...props}>
			{position !== 'right' && (
				<div className='border-b h-0 w-full border-d-border-gray' />
			)}
			<div
				className={`whitespace-nowrap ${position !== 'right' && 'mr-2'} ${
					position !== 'left' && 'ml-2'
				}`}
			>
				{children}
			</div>
			{position !== 'left' && (
				<div className='border-b h-0 w-full border-d-border-gray' />
			)}
		</div>
	);
};

export default Hr;

import LoadingSpin from 'components/UI/LoadingSpin/LoadingSpin';

const Button = ({
	className,
	text,
	primary,
	secondary,
	disabled,
	loading,
	...props
}) => {
	return (
		<button
			className={`  cursor-pointer transition-all duration-500 ease-out   ${className} ${
				primary && 'bg-d-primary text-d-bg-color'
			} ${secondary && 'bg-d-secondary text-d-text'} ${
				!primary && !secondary && 'bg-d-text text-d-bg-color'
			} ${disabled && 'text-d-border-gray bg-d-text cursor-not-allowed'}${
				loading && ' cursor-not-allowed'
			}`}
			{...props}
			disabled={disabled || loading}
		>
			<div className='w-full h-full bg-white/0 hover:bg-white/10 transition-all duration-500 ease-out px-10 py-2 flex items-center justify-center active:bg-white/20'>
				{loading && <LoadingSpin className='ml-2 text-xl' />}
				{text}
			</div>
		</button>
	);
};

export default Button;

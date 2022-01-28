import LoadingSpin from 'components/UI/LoadingSpin/LoadingSpin';

const Button = ({
	className,
	text,
	primary,
	secondary,
	disabled,
	loading,
	back,
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
			}${
				back &&
				' text-d-text bg-gray-50/0 border border-gray-500 hover:bg-gray-100'
			}`}
			disabled={disabled || loading}
			{...props}
		>
			<div className='flex items-center justify-center w-full h-full px-10 py-2 transition-all duration-500 ease-out bg-white/0 hover:bg-white/10 active:bg-white/20 whitespace-nowrap'>
				{loading && <LoadingSpin className='ml-2 text-xl' />}
				{text}
			</div>
		</button>
	);
};

export default Button;

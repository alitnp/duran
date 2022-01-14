const Input = ({
	label,
	className,
	name,
	labelClassName,
	inputClassName,
	warning,
	...props
}) => {
	return (
		<div
			className={`flex flex-col sm:flex-row gap-y-2 pl-2 sm:items-center w-full py-2 ${className}`}
		>
			<label
				htmlFor={name}
				className={`w-40 block whitespace-nowrap text-right ${labelClassName}`}
			>
				{label + ' : '}
			</label>
			<div className='flex flex-col w-full transition-all duration-500 ease-out'>
				<input
					className={`sm:mr-2  rounded-[4px] text-d-text border w-full px-2 py-1   duration-500 transition-all ease-out ${
						!warning &&
						'hover:border-sky-700 border-d-border-gray ring-offset-4 ring-offset-sky-400  outline-4 outline-sky-400'
					} ${warning && 'border-red-400'}     ${inputClassName}`}
					name={name}
					id={name}
					{...props}
				/>
				{warning && (
					<small className='text-red-500 sm:mr-2 text-xs relative -top-4 -z-10 input-error-message'>
						{warning}
					</small>
				)}
			</div>
		</div>
	);
};

export default Input;

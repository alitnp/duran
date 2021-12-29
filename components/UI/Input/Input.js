const Input = ({
	label,
	className,
	name,
	labelClassName,
	inputClassName,
	...props
}) => {
	return (
		<div className={`flex items-center ${className}`}>
			<label htmlFor={name} className={`${labelClassName}`}>
				{label}
			</label>
			<input
				className={`mr-2 rounded-[4px] text-d-text border w-full ${inputClassName}`}
				name={name}
				id={name}
				{...props}
			/>
		</div>
	);
};

export default Input;

const Checkbox = ({ label, className, name, ...props }) => {
	return (
		<div className={`flex items-center ${className}`}>
			<input
				type='checkbox'
				className='ml-2 rounded-[4px] text-d-text'
				name={name}
				id={name}
				{...props}
			/>
			<label htmlFor={name}>{label}</label>
		</div>
	);
};

export default Checkbox;

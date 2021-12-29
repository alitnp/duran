const Button = ({ className, text, props }) => {
	return (
		<div
			{...props}
			className={`cursor-pointer bg-d-primary px-10 py-[5px] text-center text-d-bg-color ${className}`}
		>
			{text}
		</div>
	);
};

export default Button;

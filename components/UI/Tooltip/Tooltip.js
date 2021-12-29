const Tooltip = ({ children, title }) => {
	return (
		<div className='relative before:absolute before:p-4 before:bg-slate-700'>
			{children}
		</div>
	);
};

export default Tooltip;

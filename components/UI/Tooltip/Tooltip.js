const Tooltip = ({ children, title }) => {
	return (
		<div className='relative group'>
			{children}
			<div className='absolute hidden p-2 mb-2 text-xs text-white -translate-x-1/2 rounded-md shadow-xl group-hover:block bottom-full left-1/2 whitespace-nowrap bg-slate-800'>
				{title}
			</div>
		</div>
	);
};

export default Tooltip;

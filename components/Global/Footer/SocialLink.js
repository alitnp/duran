

const SocialLink = ({ icon, to }) => {
	return (
		<a
			className='flex items-center justify-center w-10 h-10 mx-1 text-xl rounded-full cursor-pointer bg-zinc-700 hover:bg-zinc-500'
			href={to}
			target='_blank'
			rel="noreferrer"
		>
			{icon}
		</a>
	);
};

export default SocialLink;

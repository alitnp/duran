import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';

const NavLi = ({ text, url }) => {
	const { pathname } = useRouter();

	return (
		<li
			className={`ml-6 whitespace-nowrap hover:text-d-text ${
				pathname !== url && 'text-d-faded-text'
			}`}
		>
			<Link href={url}>{text}</Link>
		</li>
	);
};

export default NavLi;

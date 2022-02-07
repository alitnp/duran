import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';

const NavItem = ({ text, url }) => {
  const { pathname } = useRouter();

  return (
    <Link href={url}>
      <li
        className={`ml-6 whitespace-nowrap hover:text-d-text cursor-pointer font-medium ${
          pathname !== url && 'text-d-faded-text font-normal'
        }`}
      >
        {text}
      </li>
    </Link>
  );
};

export default NavItem;

import { useRouter } from "next/dist/client/router";
import Link from "next/link";

const NavItem = ({ text, url }) => {
  const { pathname } = useRouter();

  return (
    <Link href={url} passHref>
      <a>
        <span
          className={`ml-6 whitespace-nowrap hover:text-d-text cursor-pointer font-medium ${
            pathname !== url && "text-d-faded-text font-normal"
          }`}
        >
          {text}
        </span>
      </a>
    </Link>
  );
};

export default NavItem;

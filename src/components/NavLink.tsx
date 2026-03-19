import Link from "next/link";

const NavLink = ({
  linkText,
  linkRoute,
}: {
  linkText: string;
  linkRoute: string;
}) => {
  return (
    <li>
      <Link href={linkRoute}>{linkText}</Link>
    </li>
  );
};

export default NavLink;

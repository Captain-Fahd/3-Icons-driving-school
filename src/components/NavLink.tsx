import Link from "next/link";

const NavLink = ({
  linkText,
  linkRoute,
  className,
  btnStyle,
}: {
  linkText: string;
  linkRoute: string;
  className?: string;
  btnStyle: string;
}) => {
  const styleMap = new Map<string, string>();
  styleMap.set("book", "#B90000");
  styleMap.set("price", "#E9D60A");
  styleMap.set("about", "#FFFF");

  return (
    <Link
      href={linkRoute}
      role="button"
      className={className + " btn shadow nav-btn"}
      style={{
        backgroundColor: styleMap.get(btnStyle),
        color: linkText === "Book Now" ? "#FFFF" : "#000000",
      }}
    >
      {linkText}
    </Link>
  );
};

export default NavLink;

import NavLink from "./NavLink";
import Image from "next/image";
const NavBar = () => {
  const navLinks: { linkText: string; linkRoute: string; btnStyle: string }[] =
    [
      { linkText: "About", linkRoute: "/about", btnStyle: "about" },
      { linkText: "Pricing", linkRoute: "/pricing", btnStyle: "price" },
      { linkText: "Book Now", linkRoute: "/book", btnStyle: "book" },
    ];

  return (
    <nav
      className="navbar navbar-light fixed-top"
      style={{ backgroundColor: "#41B40C" }}
    >
      <a className="navbar-brand" href="#">
        <Image
          className="img-fluid ms-5"
          src="/3Icons.png"
          alt="3-icons logo"
          width={200}
          height={71}
        />
      </a>
      <div className="" role="navigation">
        <ul className="navbar-nav nav-pills d-flex flex-row gap-4 me-5">
          {navLinks.map((link) => (
            <li className="nav-item" key={link.linkText}>
              <NavLink
                linkText={link.linkText}
                linkRoute={link.linkRoute}
                btnStyle={link.btnStyle}
              />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

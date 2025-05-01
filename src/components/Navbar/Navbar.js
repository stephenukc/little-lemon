import { useState } from "react";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import { Link } from "react-router";
import logo from "../../assets/Logo.svg";
import "./navbar.css";

const navLinks = [
  { label: "HOME", to: "/", isRoute: true },
  { label: "ABOUT", to: "#about" },
  { label: "MENU", to: "#menu" },
  { label: "RESERVATIONS", to: "/booking", isRoute: true },
  { label: "ORDER ONLINE", to: "#order" },
  { label: "LOGIN", to: "#login" },
];

const Menu = ({ onClick }) => (
  <>
    {navLinks.map(({ label, to, isRoute }) => (
      <p key={label} onClick={onClick}>
        {isRoute ? <Link to={to}>{label}</Link> : <a href={to}>{label}</a>}
      </p>
    ))}
  </>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className="lemon__navbar section__padding">
      <Link to="/">
        <img className="lemon__navbar-image" src={logo} alt="Lemon Logo" />
      </Link>

      <div className="lemon__navbar-links">
        <Menu />
      </div>

      <div className="lemon__navbar-menu">
        {isMenuOpen ? (
          <RiCloseLine size={27} color="#000" onClick={toggleMenu} />
        ) : (
          <RiMenu3Line size={27} color="#000" onClick={toggleMenu} />
        )}
        {isMenuOpen && (
          <div className="lemon__navbar-menu_container scale-up-center">
            <div className="lemon__navbar-menu_container-links">
              <Menu onClick={toggleMenu} />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

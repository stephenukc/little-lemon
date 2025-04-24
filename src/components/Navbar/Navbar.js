import { useState } from "react";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import "./navbar.css";

const Menu = () => {
  return (
    <>
      <Link to="/home">
        <p>
          <a href="#home">HOME</a>
        </p>
      </Link>
      <p>
        <a href="#about">ABOUT</a>
      </p>
      <p>
        <a href="#menu">MENU</a>
      </p>
      <p>
        <Link to="/booking">
          <a href="/booking">RESERVATIONS</a>
        </Link>
      </p>
      <p>
        <a href="#order">ORDER ONLINE</a>
      </p>
      <p>
        <a href="#login">LOGIN</a>
      </p>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="lemon__navbar section__padding">
      <Link to="/home">
        <img className="lemon__navbar-image" src={logo} alt="logo" />
      </Link>
      <div className="lemon__navbar-links">
        <Menu />
      </div>
      <div className="lemon__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#000"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#000"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="lemon__navbar-menu_container scale-up-center">
            <div className="lemon__navbar-menu_container-links">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

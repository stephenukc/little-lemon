import "./navbar.css";
import logo from "../../assets/Logo.svg";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <Link to="/home">
        <p>
          <a href="#home">Home</a>
        </p>
      </Link>
      <p>
        <a href="#about">About</a>
      </p>
      <p>
        <a href="#highlights">Menu</a>
      </p>
      <p>
        <Link to="/booking">
          <a href="/booking">Reservations</a>
        </Link>
      </p>
      <p>
        <a href="#order">Order Online</a>
      </p>
      <p>
        <a href="#login">Login</a>
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
        {toggleMenu ? <RiCloseLine color="#000" size={27} onClick={() => setToggleMenu(false)} /> : <RiMenu3Line color="#000" size={27} onClick={() => setToggleMenu(true)} />}
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

import React from "react";
import Logo from "./Logo.svg";
import Nav from "./Nav";

export default function Header() {
  return (
    <header>
      <img src={Logo} alt="" />
      <Nav />
    </header>
  );
}

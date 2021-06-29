import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <ul>
        <li>
          <a className="active" href="/Home">
            Sign Up free
          </a>
        </li>
        <li>
          <a href="/">Sign In</a>
        </li>
        <li>
          <a href="/">Pricing</a>
        </li>
        <li>
          <a href="/">Enterprise</a>
        </li>
        <li>
          <a href="/">Why Marvel</a>
        </li>
      </ul>
    </>
  );
};

export default Navbar;

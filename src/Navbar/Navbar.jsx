import React from "react";
import "./Navbar.css";
import { FaShoppingCart } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo" style={{ color: "brown" }}>
        <p style={{ fontSize: "34px", fontWeight: "bold" }}>
          Taaj food delivery App{" "}
        </p>
      </div>

      <div className="navbar-search">
        <input type="text" placeholder="Search for restaurant or food" />
      </div>

      <div className="navbar-links">
        <a
          href="/"
          style={{ color: "Navy", fontSize: "18px", fontWeight: "bold" }}
        >
          Home
        </a>
        <a
          href="/list"
          style={{ color: "Navy", fontSize: "18px", fontWeight: "bold" }}
        >
          Restaurants
        </a>
        <a
          href="/offers"
          style={{ color: "Navy", fontSize: "18px", fontWeight: "bold" }}
        >
          Offers
        </a>
        <a
          href="/about"
          style={{ color: "Navy", fontSize: "18px", fontWeight: "bold" }}
        >
          About
        </a>
        <a
          href="/addresses"
          style={{ color: "Navy", fontSize: "18px", fontWeight: "bold" }}
        >
          Address
        </a>
      </div>
<div className="navbar-auth">
  <a
    href="/login"
    style={{ color: "Navy", fontSize: "18px", fontWeight: "bold" }}
  >
    Log in
  </a>

  <a href="/register" className="signup-btn">
    Sign up
  </a>
</div>
    </nav>
  );
}

export default Navbar;

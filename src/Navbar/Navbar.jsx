
import React from "react";
import "./Navbar.css";
import {FaShoppingCart} from "react-icons/fa"

function Navbar() {
  return (
    <nav className="navbar">

      <div className="navbar-logo">
        <h2>zomato</h2>
      </div>

      <div className="navbar-search">
        <input
          type="text"
          placeholder="Search for restaurant or food"
        />
      </div>

      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="/list">Restaurants</a>
        <a href="/offers">Offers</a>
        <a href="/about">About</a>
      </div>

      <div className="navbar-auth">
        <a href="/login">Log in</a>
        <a href="/signup" className="signup-btn">
          Sign up
        </a>
      </div>
      <div className="navbar-cart">
        <a href="/carts" className="cart-icon">
          <FaShoppingCart size={23}/>
        </a>
      </div>

    </nav>
  );
}

export default Navbar;


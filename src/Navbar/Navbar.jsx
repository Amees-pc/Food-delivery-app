import React from "react";

import { FaShoppingCart } from "react-icons/fa";
import { useLocation } from "react-router-dom";

function Navbar() {
  const loc=useLocation()
  return (
    <nav className="gap-6 pb-1 flex items-center pt-3 px-7">
      <div className="navbar-logo" style={{ color: "brown" }}>
        <p className="mx-4" style={{ fontSize: "34px", fontWeight: "bold" }}>
         Taaj Food
        </p>
      </div>

     
       <input type="text" className="border w-[400px] py-2 outline-none rounded-md px-2 border-gray-300  " placeholder="
       search for food or restauraunts" />
     

      <div className="flex gap-7">
        <a
          href="/home"
          className={`${loc.pathname=="/home"?"border-b-2 border-red-400 text-red-400":"none"}`}
          style={{ color: "brown", fontSize: "18px", fontWeight: "bold" }}
        >
          Home
        </a>
        <a
          href="/list"
          className={`${loc.pathname=="/list"?"border-b-2 border-red-400 text-red-400":"none"}`}
          style={{ color: "brown", fontSize: "18px", fontWeight: "bold" }}
        >
          Restaurants
        </a>
        <a
          href="/offers"
          className={`${loc.pathname=="/offers"?"border-b-2 border-red-400 text-red-400":"none"}`}
          style={{ color: "brown", fontSize: "18px", fontWeight: "bold" }}
        >
          Offers
        </a>
        <a
          href="/about"
          style={{ color: "brown", fontSize: "18px", fontWeight: "bold" }}
        >
          About
        </a>
        <a
          href="/addresses"
          className={`${loc.pathname=="/addresses"?"border-b-2 border-red-400 text-red-400":"none"}`}
          style={{ color: "brown", fontSize: "18px", fontWeight: "bold" }}
        >
          Address
        </a>

          <a
          href="/login"
          style={{ color: "brown", fontSize: "18px", fontWeight: "bold" }}
        >
          Log in
        </a>
      </div>
       <a
          href="/register"
          style={{  fontSize: "18px", fontWeight: "bold" }}
          className="bg-red-400 rounded-md px-2 py-2 ml-4 text-white"
        >
          Sign up
        </a>
      <div className="navbar-auth">
      

       
      </div>
    </nav>
  );
}

export default Navbar;

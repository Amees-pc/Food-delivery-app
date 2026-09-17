import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md font-sans">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-gray-900">
            MyApp
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/profile"
              className="text-sm text-gray-700 hover:text-gray-900 font-medium"
            >
              Profile
            </Link>
            <Link
              to="/login"
              className="text-sm px-4 py-2 border border-gray-900 text-gray-900 rounded-md hover:bg-gray-900 hover:text-white transition-colors"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="text-sm px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
            >
              Register
            </Link>
            <Link
              to="/home"
              className="text-sm px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/address"
              className="text-sm px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
            >
              Address
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-gray-900"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden flex flex-col gap-3 pb-4">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="text-sm text-gray-700 hover:text-gray-900 font-medium"
            >
              Home
            </Link>
            <Link
              to="/profile"
              onClick={() => setIsOpen(false)}
              className="text-sm text-gray-700 hover:text-gray-900 font-medium"
            >
              Profile
            </Link>
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="text-sm px-4 py-2 border border-gray-900 text-gray-900 rounded-md text-center hover:bg-gray-900 hover:text-white transition-colors"
            >
              Login
            </Link>
            <Link
              to="/register"
              onClick={() => setIsOpen(false)}
              className="text-sm px-4 py-2 bg-gray-900 text-white rounded-md text-center hover:bg-gray-800 transition-colors"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

// BottomNavigationBar.js
import React from "react";
import { Link, useLocation } from "react-router-dom";

const BottomNavigationBar = () => {
  const location = useLocation();

  return (
    <nav className="bg-gray-800 text-white py-4 text-center fixed bottom-0 w-full">
      <ul className="flex">
        <li
          className={`flex-1 ${
            location.pathname === "/" ? "text-blue-600" : "text-gray-500"
          }`}
        >
          <Link to="/">Home</Link>
        </li>
        <li
          className={`flex-1 ${
            location.pathname === "/search" ? "text-blue-600" : "text-gray-500"
          }`}
        >
          <Link to="/search">Search</Link>
        </li>
        <li
          className={`flex-1 ${
            location.pathname === "/profile" ? "text-blue-600" : "text-gray-500"
          }`}
        >
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNavigationBar;

// BottomNavigationBar.js
import React from "react";
import { Link, useLocation } from "react-router-dom";

const BottomNavigationBar = () => {
  const location = useLocation();

  return (
    <nav className="bg-white text-black py-4 text-center fixed bottom-0 w-full border-t-2 shadow-sm">
      <ul className="flex justify-between px-20 py-2">
        <li>
          {location.pathname === "/" ? (
            <img src="./images/fire-active.svg"></img>
          ) : (
            <Link to="/">
              {" "}
              <img src="./images/fire-black.svg"></img>
            </Link>
          )}
        </li>
        <li>
          {location.pathname === "/search" ? (
            <img src="./images/search-active.svg"></img>
          ) : (
            <Link to="/search">
              <img src="./images/search-black.svg"></img>
            </Link>
          )}
        </li>
        <li>
          {location.pathname === "/notification" ? (
            <img src="./images/bell-active.svg"></img>
          ) : (
            <Link to="/notification">
              {" "}
              <img src="./images/bell-black.svg"></img>
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default BottomNavigationBar;

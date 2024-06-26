import React, { useState } from "react";
import { BiCameraMovie } from "react-icons/bi";
import { Link } from "react-router-dom";


function Header() {
  const [activeLink, setActiveLink] = useState("/");

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  const linkClass = (path) => 
    `font-extrabold md:text-3xl ${
      activeLink === path ? "text-red-500" : "text-white hover:text-red-500"
    }`;

  return (
    <nav className="bg-purple-400 p-4 shadow-2xl h-24">
      <div className="container mx-auto flex items-center justify-between mt-2">
        <div className="text-purple-600 flex gap-2 justify-center items-center font-bold text-5xl">
          <span className="text-red-500">
            <BiCameraMovie className="" />
          </span>
        </div>

        <ul className="flex gap-7">
          <li>
            <Link
              to="/"
              className={linkClass("/")}
              onClick={() => handleLinkClick("/")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/top"
              className={linkClass("/top")}
              onClick={() => handleLinkClick("/top")}
            >
              Top Rated
            </Link>
          </li>
          <li>
            <Link
              to="/latest"
              className={linkClass("/latest")}
              onClick={() => handleLinkClick("/latest")}
            >
              Latest
            </Link>
          </li>
        </ul>
        <div className="flex items-center space-x-4 text-white">
          <div className="hidden md:block">
            <a
              href="#login"
              className="hover:text-black bg-red-600 p-1 px-1.5 rounded-md"
            >
              Login
            </a>
            <a
              href="#signup"
              className="hover:text-gray-800 hover:bg-blue-600 bg-white text-black p-1 px-1.5 ml-[2rem] rounded-md"
            >
              SignUp
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;

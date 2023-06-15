import React from "react";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import NavbarLinks from "./NavbarLinks";

const Navbar = () => {
  return (
    <nav className="bg-white ">
      <div className="flex items-center font-medium justify-around">
        <div>
          <img src={Logo} alt="logo" className="md:cursor-pointer h-9  " />
        </div>
        <ul className="flex uppercase items-center gap-8 font-[poppins]">
          <li>
            <Link className="py-7 px-3 inline-block" to="/">
              Home
            </Link>
          </li>
          <NavbarLinks />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import NavbarLinks from "./NavbarLinks";
import Button from "../Button";

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-white ">
      <div className="flex flex-col md:flex-row items-center font-medium justify-center">
        <div className="z-50 p-5 md:w-auto w-full  flex justify-between">
          <img src={Logo} alt="logo" className="md:cursor-pointer h-9  " />
          <div className="text-3xl" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[poppins]">
          <li>
            <Link className="py-7 px-3 inline-block" to="/">
              Home
            </Link>
          </li>
          <NavbarLinks />
        </ul>
        <div className="md:block hidden">
            <Button/>
        </div>

        {/* mobile nav */}
        <ul className={`
        md:hidden bg-white  absolute  w-full button-0 py-24 pl-4
        duration-500 top-0 ${open ? "left-0" : "left-[-100vw]"}
        `}>
          <li>
            <Link className="py-7 px-3 inline-block" to="/">
              Home
            </Link>
          </li >
          <NavbarLinks />
          <div className="py-5">
            <Button/>
        </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

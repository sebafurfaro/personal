import React from "react";
import { Link } from 'react-scroll';
import { NavLink } from "react-router-dom";

export const CustomNav = () => {
  return(
    <ul className="custom-nav flex flex-col justify-center font-monumentBold">
      <li className="w-full py-6">
        <NavLink to="/work" className="md:text-9xl text-5xl cursor-pointer link-outlined">
          Work
        </NavLink>
      </li>
      <li className="w-full text-right py-6">
        <Link to="contact" activeClass="active" smooth={true} className="md:text-9xl text-5xl py-6 cursor-pointer link-outlined">
          Contact
        </Link>
      </li>
      <li className="w-full py-6">
        <NavLink to="/about" className="md:text-9xl text-5xl py-6 cursor-pointer link-outlined">
          About
        </NavLink>
      </li>
    </ul>
  )
}
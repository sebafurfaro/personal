import React from "react";
import { Link, Outlet } from 'react-router-dom';

export const Header = () => {
  return(
    <>
      <header className="fixed top-2 left-0 py-2 px-5 w-full" style={{ zIndex: '9998' }}>
        <div className="container-fluid flex items-center justify-between mx-auto">
          <Link to="/" className="font-monumentRegular md:text-3xl text-2xl uppercase text-light-color">
            Furfa.
          </Link>
          <div>
            <Link to="/work" className="md:px-10 px-4 py-2 text-light-color font-inter uppercase border-solid rounded-full lg:border-light-color md:border-2 md:mr-5 mr-0">Work</Link>
            <Link to="/about" className="md:px-10 px-4 py-2 text-light-color font-inter uppercase border-solid rounded-full lg:border-light-color md:border-2">About</Link>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  )
}
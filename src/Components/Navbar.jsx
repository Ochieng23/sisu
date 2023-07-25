import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div>
      <nav
        className="flex items-center justify-between flex-wrap bg-white pb-10 mb-10 mt-0"
        style={{ height: "70px" }}
      >
        <div className="flex items-center flex-shrink-0 text-black mr-6">
          <img
            className="fill-current h-30 w-79 mr-2"
            width="140"
            height="80"
            viewBox="0 0 54 54"
            src="https://res.cloudinary.com/dhz4c0oae/image/upload/v1690229934/hp09jnubbngmsoldhfj0.svg"
          />
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />

          <span className="font-semibold text-xl tracking-tight"></span>
        </div>
        <div className="block lg:hidden m-2">
          <button
            className="flex items-center px-3 py-2 border rounded text-black-200 border-black-200 hover:text-black hover:border-black"
            onClick={toggleMobileMenu}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="https://res.cloudinary.com/dhz4c0oae/image/upload/v1690229934/hp09jnubbngmsoldhfj0.svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full ${
            showMobileMenu ? "block" : "hidden"
          } lg:flex lg:items-center lg:w-auto  `}
        >
          <div className="text-sm lg:flex-grow mr-20 m-6">
            <Link
              to="#responsive-header"
              className="block mt-4 text-base lg:inline-block font-semibold lg:mt-0 text-black-200 hover:text-blue mr-4"
            >
              Solutions
            </Link>
            <Link
              to="#responsive-header"
              className="block mt-4 text-base lg:inline-block font-semibold lg:mt-0 text-black-200 hover:text-blue mr-4"
            >
              About
            </Link>
            <Link
              to="#responsive-header"
              className="block text-base mt-4 lg:inline-block font-semibold lg:mt-0 text-black-200 hover:text-blue"
            >
              Resources
            </Link>
            <Link
              to="#responsive-header"
              className="block mt-4 ml-2 text-base font-semibold lg:inline-block lg:mt-0 text-black-200 hover:text-blue"
            >
              Careers
            </Link>
            <Link
              to="#responsive-header"
              className="block mt-4 ml-2 text-base font-semibold lg:inline-block lg:mt-0 text-black-200 hover:text-blue"
            >
              Contact
            </Link>
          </div>

          <div className="m-12">
            <Link
              to="#"
              className="inline-block text-base font-semibold  px-4 py-2 bg-blue-700 ... leading-none border rounded-full text-black border-white hover:border-transparent hover:text-teal-500 hover:bg-blue mt-4 lg:mt-0 mr-2"
            >
              Schedule a Meeting
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

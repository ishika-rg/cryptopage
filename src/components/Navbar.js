import React from "react";
import logo from "../assests/logo.svg";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className=" px-10 flex justify-between  bg-white h-12">
        <div className="h-10 w-20">
          <img className="h-full w-full" src={logo} alt="logo_img" />
        </div>
        <div className="text-sm font-bold gap-3 hidden sm:flex justify-center items-center">
          <p>Crypto Taxes</p>
          <p>Free Tools</p>
          <p>Resource Center</p>
          <button className="bg-sky-600 text-white px-3 py-2 rounded-lg">
            Get Started
          </button>
        </div>

        <button
          className="block sm:hidden mt-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <IoMenu size={35} />
        </button>
      </div>

      {isOpen ? (
        <div className="bg-white px-10 py-2 flex flex-col justify-center items-start sm:hidden">
          <button className="font-bold hover:text-sky-700 py-1">
            Crypto Taxes
          </button>
          <button className="font-bold hover:text-sky-700 py-1">
            Free Tools
          </button>
          <button className="font-bold hover:text-sky-700 py-1">
            Resource Center
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Navbar;

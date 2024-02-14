import React, { useEffect, useRef } from "react";
import logo from "../../assets/logo-one.png";

import { MdCancel } from "react-icons/md";
import { FaInstagramSquare, FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

function SideBar({ isSideShown, setIsSideShown }) {
  const sideRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!sideRef.current.contains(e.target)) {
        setIsSideShown(false);
      }
    };
    document.addEventListener("mousedown", handler);
  });
  return (
    <div
      ref={sideRef}
      className={`sidebar-shadow fixed h-full w-[100%] md:w-[50%] lg:w-[30%] ${
        isSideShown ? "left-[0px]" : "left-[-100%]"
      } top-0 left-[-100%] bg-white z-20 duration-700 ease-in-out`}
    >
      <MdCancel
        onClick={() => setIsSideShown((prevVal) => !prevVal)}
        className="text-special-red cursor-pointer text-2xl absolute top-[20px] right-[20px]"
      />
      <div className="my-[50px] flex justify-center">
        <img className="w-[100px]" src={logo} alt="logo" />
      </div>
      <ul className="flex flex-col items-center gap-[20px] font-semibold">
        <li className="hover:bg-special-green transition-all hover:text-white px-[10px] py-[5px] rounded-lg">
          <a href="">Welcome</a>
        </li>
        <li className="hover:bg-special-green transition-all hover:text-white px-[10px] py-[5px] rounded-lg">
          <a href="">Competitions</a>
        </li>
        <li className="hover:bg-special-green transition-all hover:text-white px-[10px] py-[5px] rounded-lg">
          <a href="">News</a>
        </li>
        <li className="hover:bg-special-green transition-all hover:text-white px-[10px] py-[5px] rounded-lg">
          <a href="">FAQ</a>
        </li>
        <li className="hover:bg-special-green transition-all hover:text-white px-[10px] py-[5px] rounded-lg">
          <a href="">Athletes</a>
        </li>
        <li className="hover:bg-special-green transition-all hover:text-white px-[10px] py-[5px] rounded-lg">
          <a href="">Partners</a>
        </li>
      </ul>
      <ul className="absolute left-0 bottom-[50px] flex justify-center space-x-4 items-center w-full bg-special-green text-white text-2xl py-[15px]">
        <li>
          <Link className="hover:text-special-yellow">
            <FaFacebook />
          </Link>
        </li>
        <li>
          <Link className="hover:text-special-yellow">
            <FaInstagramSquare />
          </Link>
        </li>
        <li>
          <Link className="hover:text-special-yellow">
            <FaTwitterSquare />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;

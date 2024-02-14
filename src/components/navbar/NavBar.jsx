import React, { useState, useRef, useEffect, useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { TbWorld } from "react-icons/tb";
import britishLogo from "../../assets/british-flag.png";
import algeriaLogo from "../../assets/algeria-flag.png";
import logo from "../../assets/logo-one.png";
import { Link } from "react-router-dom";

import { AppContext } from "../../main";

function NavBar({ setIsSideShown }) {
  const [showLanguagePop, setShowLanguagePop] = useState(false);
  const languageRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!languageRef.current.contains(e.target)) {
        setShowLanguagePop(false);
      }
    };
    document.addEventListener("mousedown", handler);
  });

  const { isArabic, setIsArabic } = useContext(AppContext);
  console.log(isArabic)
  return (
    <header>
      <nav className="nav-shadow flex justify-between items-center px-[20px] py-[10px] nav-shadow bg-gray-50 w-full z-20 relative">
        <div
          onClick={() => setIsSideShown((prevVal) => !prevVal)}
          className="flex items-center space-x-3"
        >
          <GiHamburgerMenu className="text-3xl border-2 border-[#DC383E] p-[4px] rounded-full text-[#337D53] cursor-pointer" />
          <h1 className="font-bold">Menu</h1>
        </div>
        <div>
          <Link to="/">
            <img className="w-[100px]" src={logo} alt="logo" />
          </Link>
        </div>
        <div
          className="cursor-pointer"
          onClick={() => setShowLanguagePop((prevVal) => !prevVal)}
        >
          <TbWorld className="text-3xl" />
        </div>
      </nav>
      <div
        ref={languageRef}
        className={`absolute top-[60px] right-[35px] bg-white z-20 p-3 rounded-md transition language-popup-shadow border ${
          showLanguagePop ? "" : "hidden"
        }`}
      >
        <div onClick={() => setIsArabic(false)} className="flex items-center justify-between space-x-3 mb-2 cursor-pointer">
          <h3>English</h3>
          <img className="w-[30px]" src={britishLogo} alt="british-flag" />
        </div>
        <div onClick={() => setIsArabic(true)} className="flex items-center justify-between space-x-3 cursor-pointer">
          <h3>Arabic</h3>
          <img className="w-[30px]" src={algeriaLogo} alt="algeria-flag" />
        </div>
      </div>
    </header>
  );
}

export default NavBar;

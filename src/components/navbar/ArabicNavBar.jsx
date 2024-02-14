import React, { useState, useRef, useEffect, useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { TbWorld } from "react-icons/tb";
import britishLogo from "../../assets/british-flag.png";
import algeriaLogo from "../../assets/algeria-flag.png";
import logo from "../../assets/logo-one.png";
import { Link } from "react-router-dom";

import { AppContext } from "../../main";

function ArabicNavBar({ setIsSideShown }) {
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
  return (
    <header>
      <nav className="nav-shadow flex flex-row-reverse justify-between items-center px-[20px] py-[10px] nav-shadow bg-gray-50 w-full z-20 relative">
        <div
          onClick={() => setIsSideShown((prevVal) => !prevVal)}
          className="flex items-center space-x-3"
        >
          <h1 className="font-bold">القائمة</h1>
          <GiHamburgerMenu className="text-3xl border-2 border-[#DC383E] p-[4px] rounded-full text-[#337D53] cursor-pointer" />
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
        className={`absolute top-[60px] left-[35px] bg-white z-20 p-3 rounded-md transition language-popup-shadow border ${
          showLanguagePop ? "" : "hidden"
        }`}
      >
        <div onClick={() => setIsArabic(false)} className="flex items-center justify-between space-x-3 mb-2 cursor-pointer">
          <img className="w-[30px]" src={britishLogo} alt="british-flag" />
          <h3>إنجليزية</h3>
        </div>
        <div
          onClick={() => setIsArabic(true)}
          className="flex items-center justify-between space-x-3 cursor-pointer"
        >
          <img className="w-[30px]" src={algeriaLogo} alt="algeria-flag" />
          <h3>عربية</h3>
        </div>
      </div>
    </header>
  );
}

export default ArabicNavBar;

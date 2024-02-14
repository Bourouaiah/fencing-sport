import React, { useState, useContext } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./navbar/NavBar";
import ArabicNavBar from "./navbar/ArabicNavBar";
import ArabicSideBar from "./sidebar/ArabicSideBar";
import SideBar from "./sidebar/SideBar";
import Footer from "./footer/Footer";
import { AppContext } from "../main";
import ArabicFooter from "./footer/ArabicFooter";

export default function Layout() {
  const [isSideShown, setIsSideShown] = useState(false);
  const { isArabic } = useContext(AppContext);
  if (isArabic) {
    return (
      <div className="relative">
        <ArabicNavBar setIsSideShown={setIsSideShown} />
        <ArabicSideBar isSideShown={isSideShown} setIsSideShown={setIsSideShown} />
        <main>
          <Outlet />
        </main>
        <ArabicFooter />
      </div>
    );
  } else {
    return (
      <div className="relative">
        <NavBar setIsSideShown={setIsSideShown} />
        <SideBar isSideShown={isSideShown} setIsSideShown={setIsSideShown} />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    );
  }
}

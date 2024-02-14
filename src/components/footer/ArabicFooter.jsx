import React from "react";
import logo from "../../assets/logo-one.png";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";

function ArabicFooter() {
  return (
    <footer className="bg-special-green p-[50px] px-[100px] mt-[50px]">
      <div className="flex justify-between flex-wrap items-start gap-[50px]">
        <div className="w-full lg:w-auto">
          <h1 className="text-xl text-center text-white font-semibold">
            تواصل معنا
          </h1>
          <ul className="flex justify-center mt-[25px] text-3xl space-x-6 text-special-gray">
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

        <ul className="flex flex-col w-full md:w-auto justify-center items-center gap-[25px] font-semibold text-center">
          <li>
            <a className="text-white hover:text-special-yellow" href="#landing">
              الرئيسية
            </a>
          </li>
          <li>
            <a className="text-white hover:text-special-yellow" href="">
              المسابقات
            </a>
          </li>
          <li>
            <a className="text-white hover:text-special-yellow" href="">
              الأخبار
            </a>
          </li>
          <li>
            <a className="text-white hover:text-special-yellow" href="">
              الأسئلة
            </a>
          </li>
          <li>
            <a className="text-white hover:text-special-yellow" href="">
              الرياضيين
            </a>
          </li>
          <li>
            <a className="text-white hover:text-special-yellow" href="">
              الرعاة
            </a>
          </li>
        </ul>
        <div className="flex items-center justify-center grow md:grow-0 space-x-3">
          <h2 className="text-white text-xs md:text-[16px] font-medium">
            الإتحادية الجزائرية للمبارزة
          </h2>
          <img
            className="w-[70px] md:w-[80px] bg-white rounded-xl"
            src={logo}
            alt="logo"
          />
        </div>
      </div>
      <div className="text-center pt-[25px] mt-[25px] text-white border-t-2 border-special-yellow border-solid">
        <p> جميع الحقوق محفوظة ، 2024 &#169;</p>
        <p>!🤍 تمّ تطويره من طرف ياسر ، و عبد العزيز</p>
      </div>
    </footer>
  );
}

export default ArabicFooter;

import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { news } from "../../../data";

import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagramSquare,
  FaTwitterSquare,
  FaLinkedin,
} from "react-icons/fa";

function NewsDetail() {
  const { id } = useParams();
  const [myNew, setMyNew] = useState(null);
  useEffect(() => {
    const selectedNews = news.find(
      (comp) => comp.id === parseInt(id)
    );
    setMyNew(selectedNews);
  }, [id]);
  return (
    <main className="px-[50px]">
      <div className="flex justify-center md:justify-between items-center my-[50px]">
        <ul className="flex justify-center flex-wrap items-center space-x-2">
          <li className="flex items-center space-x-2">
            <Link to="/" className="text-special-red font-bold">
              Welcome
            </Link>
            <span className="font-bold text-special-green">\</span>
          </li>
          <li className="flex items-center space-x-2">
            <Link className="text-special-red font-bold">News</Link>
            <span className="font-bold text-special-green">\</span>
          </li>
          <li>
            <p className="text-special-green font-medium text-center">
              {myNew?.title}
            </p>
          </li>
        </ul>
        <Link
          to="/"
          className="bg-special-gray text-center hidden md:block font-medium competition-button-shadow py-[6px] px-[12px] rounded-lg"
        >
          Back To Home
        </Link>
      </div>
      <div className="flex justify-center lg:justify-between gap-[25px] items-center flex-wrap md:flex-nowrap lg:flex-nowrap">
        <div className="md:w-[50%]">
          <h1 className="text-2xl md:text-4xl text-center md:text-left mb-[40px] font-bold text-special-green">
            {myNew?.title}
          </h1>
           <p className="font-medium text-sm md:text-lg text-center md:text-left">{myNew?.description}</p>
           <p className="mt-[30px] text-special-red font-bold text-sm text-center md:text-left">{myNew?.date} by faenscrime | Published in {myNew?.type}</p>
        </div>
        <div className="rounded-lg competition-image-shadow overflow-hidden">
          <img className="w-[350px] md:w-[400px] h-[350px] md:h-[400px] object-cover" src={myNew?.image} alt="" />
        </div>
      </div>
    </main>
  );
}

export default NewsDetail;

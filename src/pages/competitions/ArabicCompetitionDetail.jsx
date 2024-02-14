import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { createdCompetetions } from "../../../data";

import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagramSquare,
  FaTwitterSquare,
  FaLinkedin,
} from "react-icons/fa";

function CompetitionDetail() {
  const { id } = useParams();
  const [competition, setCompetition] = useState(null);
  useEffect(() => {
    const selectedCompetition = createdCompetetions.find(
      (comp) => comp.id === parseInt(id)
    );
    setCompetition(selectedCompetition);
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
            <Link className="text-special-red font-bold">Competitions</Link>
            <span className="font-bold text-special-green">\</span>
          </li>
          <li>
            <p className="text-special-green font-medium">
              {competition?.title}
            </p>
          </li>
        </ul>
        <Link
          to="/"
          className="bg-special-gray hidden md:block font-medium competition-button-shadow py-[6px] px-[12px] rounded-lg"
        >
          Back To Home
        </Link>
      </div>
      <div className="flex justify-center lg:justify-between gap-[25px] items-center flex-wrap lg:flex-nowrap">
        <div>
          <h1 className="text-3xl sm:text-4xl text-center mb-[40px] font-semibold text-special-green">
            {competition?.title}
          </h1>
          <ul className="flex flex-col gap-[20px]">
            <li className="info-competition-shadow bg-special-gray flex flex-col sm:flex-row items-center justify-center space-x-2 py-[10px] px-[20px] rounded-2xl">
              <FaCalendarAlt className="text-special-red text-xl" />
              <p className="font-medium text-md">{competition?.date}</p>
            </li>
            <li className="info-competeion-shadow bg-special-gray flex flex-col sm:flex-row items-center justify-center space-x-2 py-[10px] px-[20px] rounded-2xl">
              <FaMapMarkerAlt className="text-special-green text-xl" />
              <p className="font-medium text-md">{competition?.location}</p>
            </li>
            <li className="info-competeion-shadow bg-special-gray text-center py-[10px] px-[20px] rounded-2xl ">
              <p className="font-medium text-md">{competition?.type}</p>
            </li>
          </ul>
        </div>
        <div className="rounded-lg competition-image-shadow overflow-hidden">
          <img className="w-[600px]" src={competition?.image} alt="" />
        </div>
      </div>
      <div className="mt-[80px]">
        <h3 className="text-3xl text-center sm:text-left text-special-red font-medium">
          Share This event!
        </h3>
        <ul className="flex justify-center sm:justify-start items-center space-x-3 text-3xl mt-[15px]">
          <li>
            <a href="https://www.facebook.com/sharer/sharer.php?u=https://www.ffescrime.fr/competition/Mi1zZXBhcmF0b3ItNi1zZXBhcmF0b3ItNC1zZXBhcmF0b3ItMDgwMjI0LXNlcGFyYXRvci0xMTAyMjQtc2VwYXJhdG9yLVRVUklO/">
              <FaFacebook className="text-black" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/">
              <FaInstagramSquare className="text-black" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://www.ffescrime.fr/competition/Mi1zZXBhcmF0b3ItNi1zZXBhcmF0b3ItNC1zZXBhcmF0b3ItMDgwMjI0LXNlcGFyYXRvci0xMTAyMjQtc2VwYXJhdG9yLVRVUklO/">
              <FaLinkedin className="text-black" />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/share?url=https://www.ffescrime.fr/competition/Mi1zZXBhcmF0b3ItNi1zZXBhcmF0b3ItNC1zZXBhcmF0b3ItMDgwMjI0LXNlcGFyYXRvci0xMTAyMjQtc2VwYXJhdG9yLVRVUklO/">
              <FaTwitterSquare className="text-black" />
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default CompetitionDetail;

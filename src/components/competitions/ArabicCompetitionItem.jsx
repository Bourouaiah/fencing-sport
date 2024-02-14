import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function ArabicCompetitionItem({ image, title, type, date, location, id }) {
  return (
    <div className="rounded-lg overflow-hidden">
      <Link to={`competitions/${id}`}>
        <img
          className="rounded-xl overflow-hidden"
          src={image}
          alt="competition"
        />
      </Link>
      <div className="pt-[30px] pb-[70px] px-[10px]">
        <h2 className="text-left font-bold">{title}</h2>
        <div>
          <p>{type}</p>
          <div className="flex items-center space-x-2 my-3">
            <FaCalendarAlt className="text-special-red" />
            <p>{date}</p>
          </div>
          <div className="flex items-center space-x-2 my-3">
            <FaMapMarkerAlt className="text-special-green" />
            <p>{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArabicCompetitionItem;

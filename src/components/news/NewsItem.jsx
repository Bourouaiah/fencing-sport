import React from "react";
import { Link } from "react-router-dom";

function NewsItem({ image, title, type, date, location, id }) {
  return (
    <div className="rounded-lg overflow-hidden">
      <Link to={`news/${id}`}>
        <img
          className="rounded-xl w-[100%] h-[400px] object-cover overflow-hidden"
          src={image}
          alt="news"
        />
      </Link>
      <div className="pt-[30px] pb-[70px] px-[10px]">
        <h2 className="text-2xl font-medium uppercase text-special-red">{type}</h2>
        <div>
          <h3 className="font-bold my-[15px]">{title}</h3>
          <p className="mt-[25px] text-special-green font-bold">{date}</p>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;

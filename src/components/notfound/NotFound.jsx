import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="not-found-container px-[50px]">
      <h1 className="mt-[20px] mb-[10px] text-2xl">Sorry, the page you were looking for was not found.</h1>
      <Link to="/" className="w-[100%] bg-special-green text-white p-[4px] rounded-md">
        Return to Home
      </Link>
    </div>
  );
}

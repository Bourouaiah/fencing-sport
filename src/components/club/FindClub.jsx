import React, { useState } from "react";
import { FaQuestionCircle, FaChevronDown } from "react-icons/fa";

function FindClub() {
  const [isAnsOneShown, SetIsAnsOneShown] = useState(false);
  const [isAnsTwoShown, SetIsAnsTwoShown] = useState(false);
  const [city, setCity] = useState("");
  return (
    <section className="mt-[50px] sm:mt-[0px] bg-special-red-two text-white px-[50px] py-[100px]">
      <div>
        <h1 className="text-3xl md:text-4xl text-center font-bold">Want to practice fencing?</h1>
        <p className="mt-[20px] text-md md:text-lg text-center text-special-gray">
          Easily find the club closest to you!
        </p>
      </div>
      <div>
        <div className="mt-[50px] mb-[30px]">
          <div className="border-b border-special-white border-solid mb-[30px]">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1">
                <FaQuestionCircle />
                <h2 className="text-lg md:text-2xl font-semibold">
                  At What age can you start fencing?
                </h2>
              </div>
              <div
                onClick={() => SetIsAnsOneShown((prevValue) => !prevValue)}
                className="cursor-pointer"
              >
                <FaChevronDown />
              </div>
            </div>
            <p className={`py-[15px] text-sm text-special-gray ${isAnsOneShown ? "visible opacity-100" : "invisible opacity-0"} transition-all`}>
              Fencing can be practiced in clubs from a very young age. Don’t
              hesitate to contact the club closest to you!
            </p>
          </div>
          <div className="border-b border-special-white border-solid">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1">
                <FaQuestionCircle />
                <h2 className="text-lg md:text-2xl font-semibold">
                  Will fencing equipment be loaned to me?
                </h2>
              </div>
              <div
                onClick={() => SetIsAnsTwoShown((prevValue) => !prevValue)}
                className="cursor-pointer"
              >
                <FaChevronDown />
              </div>
            </div>
            <p className={`py-[15px] text-sm text-special-gray ${isAnsTwoShown ? "visible opacity-100" : "invisible opacity-0"} transition-all`}>
              The equipment (jacket, mask, etc.) will be lent to you for your
              first attacks!
            </p>
          </div>
        </div>
        <form className="flex flex-col">
          <input
            className="text-black outline-none p-[7px] rounded-md"
            type="text"
            onChange={(e) => setCity(e.target.value)}
            value={city}
            placeholder="Enter a city"
          />
          <button className="w-fit bg-white m-auto text-black font-medium mt-[20px] py-[7px] px-[25px] rounded-md">
            Find a club
          </button>
        </form>
      </div>
    </section>
  );
}

export default FindClub;

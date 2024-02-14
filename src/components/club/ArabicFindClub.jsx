import React, { useState } from "react";
import { FaQuestionCircle, FaChevronDown } from "react-icons/fa";

function ArabicFindClub() {
  const [isAnsOneShown, SetIsAnsOneShown] = useState(false);
  const [isAnsTwoShown, SetIsAnsTwoShown] = useState(false);
  const [city, setCity] = useState("");
  return (
    <section className="mt-[50px] sm:mt-[0px] bg-special-red-two text-white px-[50px] py-[100px]">
      <div>
        <h1 className="text-3xl md:text-4xl text-center font-bold">
          تريد ممارسة المبارزة ؟
        </h1>
        <p className="mt-[20px] text-md md:text-lg text-center text-special-gray">
          ابحث بسهولة عن النادي الأقرب إليك
        </p>
      </div>
      <div>
        <div className="mt-[50px] mb-[30px]">
          <div className="border-b border-special-white border-solid mb-[30px]">
            <div className="flex items-center justify-between">
              <div
                onClick={() => SetIsAnsOneShown((prevValue) => !prevValue)}
                className="cursor-pointer"
              >
                <FaChevronDown />
              </div>
              <div className="flex items-center space-x-1">
                <h2 className="text-lg md:text-2xl font-semibold">
                  في أي عمر يمكن البدء في ممارسة المبارزة؟
                </h2>
                <FaQuestionCircle />
              </div>
            </div>
            <p
              className={`py-[15px] text-sm text-special-gray ${
                isAnsOneShown ? "visible opacity-100" : "invisible opacity-0"
              } transition-all text-right`}
            >
              يمكن ممارسة المبارزة في النوادي من سن مبكرة جدًا. لا تتردد في
              الاتصال بالنادي الأقرب إليك!
            </p>
          </div>
          <div className="border-b border-special-white border-solid">
            <div className="flex items-center justify-between">
              <div
                onClick={() => SetIsAnsTwoShown((prevValue) => !prevValue)}
                className="cursor-pointer"
              >
                <FaChevronDown />
              </div>
              <div className="flex items-center space-x-1">
                <h2 className="text-lg md:text-2xl font-semibold">
                  هل سيتم إعارة معدات المبارزة لي؟
                </h2>
                <FaQuestionCircle />
              </div>
            </div>
            <p
              className={`py-[15px] text-sm text-special-gray ${
                isAnsTwoShown ? "visible opacity-100" : "invisible opacity-0"
              } transition-all text-right`}
            >
              سيتم إعارة المعدات (السترة، القناع، إلخ) لك خلال هجماتك الأولى
            </p>
          </div>
        </div>
        <form className="flex flex-col">
          <input
            className="text-black text-right outline-none p-[7px] rounded-md"
            type="text"
            onChange={(e) => setCity(e.target.value)}
            value={city}
            placeholder="أدخل نصًا"
          />
          <button className="w-fit bg-white m-auto text-black font-medium mt-[20px] py-[7px] px-[25px] rounded-md">
            ابحث عن نادي
          </button>
        </form>
      </div>
    </section>
  );
}

export default ArabicFindClub;

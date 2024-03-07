import React from "react";
import { useState, useRef } from "react";
import { IoMdAlert } from "react-icons/io";
import { cardData } from "../utils/CardData";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const EventSection = () => {
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  const carddata = cardData;

  //   for scroll:
  const containerRef = useRef(null);
  const [scrollPos, setScrollPos] = useState(0);
  const scrollStep = 200;

  const handleScrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= scrollStep;
      setScrollPos(containerRef.current.scrollLeft);
    }
  };

  const handleScrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += scrollStep;
      setScrollPos(containerRef.current.scrollLeft);
    }
  };

  return (
    <div className="bg-white rounded-lg my-4 p-5 text-slate-800 text-sm">
      <div className="font-bold text-xl pb-3">Sentiment</div>
      <p className="flex items-center font-bold text-slate-600 gap-2">
        Key Events <IoMdAlert />
      </p>

      <div className="relative">
        <div
          className="flex gap-4 my-3 overflow-x-hidden "
          ref={containerRef}
          style={{ scrollBehavior: "smooth" }}
        >
          {carddata.map((ele, i) => (
            <div
              key={i}
              className="p-3 flex min-w-96 bg-sky-50 rounded-lg gap-4 items-start "
            >
              <div
                className="p-4 rounded-full "
                style={{ backgroundColor: COLORS[i] }}
              >
                {ele.icon}
              </div>
              <div>
                <h1 className="font-bold">{ele.heading}</h1>
                <p className="py-3">{ele.desc} </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between ">
          <button
            onClick={handleScrollLeft}
            className="absolute bottom-24  px-3 py-3 mr-2 bg-white rounded-full"
          >
            <IoIosArrowBack />
          </button>
          <button
            onClick={handleScrollRight}
            className=" absolute right-0 bottom-24 p-3 mr-2 bg-white  rounded-full"
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>

      <div>
        <p className="font-bold flex items-center text-slate-600 gap-2">
          Analyst Estimates <IoMdAlert />
        </p>

        <div className="flex items-center my-3 gap-4 text-slate-500">
          <div className="px-6 py-10 sm:px-8 sm:py-12  font-bold rounded-full bg-sky-50 text-green-500 text-3xl">
            76%
          </div>
          <div>
            <div className="flex items-center gap-1 sm:gap-3 ml-3 my-3">
              <h1>Buy</h1>
              <div
                className=" relative  h-2 max-w-80 min-w-16 sm:min-w-40 
                after:absolute after:top-0 after:bottom-0 after:bg-green-500 after:w-10/12"
              >
                {" "}
              </div>
              <p className="">76%</p>
            </div>
            <div className="flex items-center gap-1 sm:gap-3 ml-3 mb-3">
              <h1>Hold</h1>
              <div
                className=" relative  h-2 max-w-80 min-w-16 sm:min-w-40 
                after:absolute after:top-0 after:bottom-0 after:bg-slate-300 after:w-1/12"
              >
                {" "}
              </div>
              <p className="">8%</p>
            </div>
            <div className="flex items-center gap-1 sm:gap-3  ml-3">
              <h1>Sell</h1>
              <div
                className=" relative  h-2 max-w-80 min-w-16 sm:min-w-40 
                after:absolute after:top-0 after:bottom-0 after:bg-red-500 after:w-2/12"
              ></div>
              <p className="">16%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventSection;

import React from "react";
import { IoMdAlert } from "react-icons/io";

import InfoContainer from "./InfoContainer";

const OverviewSection = () => {
  return (
    <div>
      <div className="mt-4  pt-5 flex justify-between items-center font-small font-semibold text-slate-600 overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-700 md:overflow-x-auto">
        <button className="mr-3 hover:text-cyan-600 hover:border-b-cyan-600  border-b-4">
          Overview
        </button>
        <button className="mr-3 hover:text-cyan-600 hover:border-b-cyan-600  border-b-4">
          Fundamentals
        </button>
        <button className="mr-3 hover:text-cyan-600 hover:border-b-cyan-600  border-b-4 inline-flex">
          News&nbsp;Insights
        </button>
        <button className="mr-3 hover:text-cyan-600 hover:border-b-cyan-600  border-b-4">
          Sentiments
        </button>
        <button className="mr-3 hover:text-cyan-600 hover:border-b-cyan-600  border-b-4">
          Team
        </button>
        <button className="mr-3 hover:text-cyan-600 hover:border-b-cyan-600  border-b-4">
          Technicals
        </button>
        <button className="mr-3 hover:text-cyan-600 hover:border-b-cyan-600  border-b-4">
          Tokenomics
        </button>
      </div>

      <div className="h-0.5 bg-slate-300"></div>

      <div className="bg-white rounded-lg my-4 p-5 text-slate-800 text-xs ">
        <div className="font-bold text-xl pb-3">Performance</div>
        <div className="flex justify-between items-center text-slate-600 gap-3">
          <div>
            <h1 className="pb-2">Today's Low</h1>
            <p className="font-semibold">46930.22</p>
          </div>
          <div className="w-80 h-1 rounded-md bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"></div>
          <div>
            <h1 className="pb-2">Today's High</h1>
            <p className="font-semibold">46990.22</p>
          </div>
        </div>
        <div className="mt-4 flex justify-between items-center text-slate-600 gap-3">
          <div>
            <h1 className="pb-2">52W Low</h1>
            <p className="font-semibold">16930.22</p>
          </div>
          <div className=" w-80 h-1 rounded-md bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"></div>
          <div>
            <h1 className="pb-2">52W High</h1>
            <p className="font-semibold">46730.22</p>
          </div>
        </div>

        <div className="my-5">
          <p className="flex items-center font-bold text-base text-slate-600 gap-2">
            Fundamentals <IoMdAlert />
          </p>

          <div>
            <InfoContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewSection;

import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Team from "./Team";
import i4 from "../assests/i4.png";
import BitcoinChart from "./BitcoinChart";
import AboutSection from "./AboutSection";
import TokenSection from "./TokenSection";
import EventSection from "./EventSection";
import TrendingCard from "./TrendingCard";
import OverviewSection from "./OverviewSection";

const HeroSection = () => {
  const [height, setHeight] = useState(400);
  return (
    <>
      <div className="px-10 pt-3 text-sm">
        <span className="text-slate-500">Cruptocurrencies &gt;&gt; </span>{" "}
        Bitcoin
      </div>
      <div className="mx-10 my-5 grid grid-cols-1 md:grid-cols-6 gap-4 ">
        <div className="col-span-4 ">
          <div className="bg-white rounded-lg p-5">
            <BitcoinChart height={height} />
          </div>
          <OverviewSection />
          <EventSection />
          <AboutSection />
          <TokenSection />
          <Team />
        </div>
        <div className="col-span-4 md:col-span-2 ">
          <div className="bg-sky-600 text-white rounded-lg py-5 px-10 text-center min-h-96">
            <div className=" font-bold text-xl  ">
              Get Started with KoinX for FREE
            </div>
            <p className="text-sm pt-5">
              With our range of features that you can equip for free, KoinX
              allows you to be more aducated and aware of your tax reports.
            </p>
            <img className="h-40 w-32 mx-auto" src={i4} />
            <button className="text-black bg-white px-2 md:px-5 py-2 rounded-xl my-3 flex mx-auto items-center gap-2">
              Get Started for FREE <FaArrowRight />{" "}
            </button>
          </div>
          <TrendingCard />
        </div>
      </div>
    </>
  );
};

export default HeroSection;

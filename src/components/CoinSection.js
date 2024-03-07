import React from "react";
import MiniChart from "./MiniChart";
import { useState, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const CoinSection = () => {
  const cryptoSymbols = [
    "BINANCE:BTCUSDT",
    "BINANCE:ETHUSDT",
    "BINANCE:XRPUSDT",
    "BINANCE:BNBUSDT",
    "BINANCE:ADAUSDT",
    "BINANCE:XLMUSDT",
    "BINANCE:LINKUSDT",
    "BINANCE:BCHUSDT",
    "BINANCE:DOGEUSDT",
    "BINANCE:UNIUSDT",
    "BINANCE:SOLUSDT",
    "BINANCE:DOTUSDT",
    "BINANCE:TRXUSDT",
    "BINANCE:VETUSDT",
  ];

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
    <div className="my-7">
      <div className="font-bold text-xl pb-3 ">Trending Coins</div>

      <div className="relative ">
        <div
          className="flex gap-4 overflow-x-hidden "
          ref={containerRef}
          style={{ scrollBehavior: "smooth" }}
        >
          {cryptoSymbols.map((symbol, index) => (
            <MiniChart key={index} symbol={symbol} />
          ))}
        </div>
        <div className="flex justify-between ">
          <button
            onClick={handleScrollLeft}
            className="absolute bottom-20  px-3 py-3 mr-2 bg-slate-200 rounded-full"
          >
            <IoIosArrowBack />
          </button>
          <button
            onClick={handleScrollRight}
            className=" absolute right-0 bottom-20 p-3 mr-2 bg-slate-200 rounded-full"
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoinSection;

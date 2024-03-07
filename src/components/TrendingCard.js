import React from "react";
import { coinsData } from "../utils/FetchData";
import { ApiData } from "../utils/ApiData";
import { TiArrowSortedUp } from "react-icons/ti";

const TrendingCard = () => {
  const trendingCoins = ApiData.coins;
  // console.log("trending", trendingCoins);
  let arr = [];
  const usdChange = () => {
    trendingCoins.map((ele, i) => {
      const oldUsdValue =
        ele.item.data.price_btc - ele.item.data.price_change_percentage_24h.usd;
      const newUsdValue = ele.item.data.price_btc;

      const usdPercentageChange =
        ((newUsdValue - oldUsdValue) / oldUsdValue) * 100;
      arr.push(usdPercentageChange);
    });

    // console.log(arr);
    return arr;
  };

  usdChange();

  return (
    <div className="bg-white rounded-xl my-8 px-8 pb-8 ">
      <div className="font-bold text-xl py-5">Trending Coins (24h)</div>
      {trendingCoins.slice(0, 5).map((ele, i) => (
        <div key={i} className="flex justify-between items-center my-4 mb-2">
          <div className="flex gap-4 items-center">
            <img className="w-8 h-8" src={ele.item.thumb} />
            <h1 className="font-bold"> {ele.item.symbol} </h1>
          </div>
          <div className="bg-sky-50 text-green-500 p-2 flex items-center gap-2">
            <TiArrowSortedUp />
            8.21%
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrendingCard;

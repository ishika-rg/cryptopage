import React from "react";
import { ApiData } from "../utils/ApiData";

const InfoContainer = () => {
  
  const val = ApiData.coins[0].item;
  //  console.log(val)
  return (
    <div className="flex justify-between flex-col md:flex-row my-4 gap-3">
      <div>
        <div className=" mb-3 pb-3 gap-4 flex justify-between border-b-2 border-slate-300">
          <h1 className="text-slate-400 pr-6">Bitcoin Price</h1>
          <p className="font-bold text-slate-800">{val.data.price}</p>
        </div>
        <div className=" mb-3 pb-3 gap-4 flex justify-between border-b-2 border-slate-300">
          <h1 className="text-slate-400 pr-6">24h low / 24h high</h1>
          <p className="font-bold text-slate-800">$16,382.07/$16,387.12</p>
        </div>
        <div className=" mb-3 pb-3 gap-4 flex justify-between border-b-2 border-slate-300">
          <h1 className="text-slate-400 pr-6">7d low / 7d high</h1>
          <p className="font-bold text-slate-800">$16,382.07/$16,387.12</p>
        </div>
        <div className=" mb-3 pb-3 gap-4 flex justify-between border-b-2 border-slate-300">
          <h1 className="text-slate-400 pr-6">Trading Volume</h1>
          <p className="font-bold text-slate-800">{val.data.total_volume} </p>
        </div>
        <div className=" mb-0 mb-md-3 pb-3 gap-4 flex justify-between border-b-2 border-slate-300">
          <h1 className="text-slate-400 pr-6">Market CAP Rank</h1>
          <p className="font-bold text-slate-800">#{val.market_cap_rank}</p>
        </div>
      </div>
      <div>
        <div className=" mb-3 pb-3 gap-4 flex justify-between border-b-2 border-slate-300">
          <h1 className="text-slate-400 pr-6">Market CAP</h1>
          <p className="font-bold text-slate-800">{val.data.market_cap} </p>
        </div>

        <div className=" mb-3 pb-3 gap-4 flex justify-between border-b-2 border-slate-300">
          <h1 className="text-slate-400 pr-6">Market CAP Dominance</h1>
          <p className="font-bold text-slate-800">38.89%</p>
        </div>
        <div className=" mb-3 pb-3 gap-4 flex justify-between border-b-2 border-slate-300">
          <h1 className="text-slate-400 pr-6">Volume / Market CAP</h1>
          <p className="font-bold text-slate-800">0.0718</p>
        </div>
        <div className=" mb-3 pb-3 gap-4 flex justify-between border-b-2 border-slate-300">
          <h1 className="text-slate-400 pr-6">All Time High</h1>
          <p className="font-bold text-slate-800">
            $69,044.78 <span className="text-red-500">-75.6%</span>
          </p>
        </div>
        <div className=" mb-3 pb-3 gap-4 flex justify-between border-b-2 border-slate-300">
          <h1 className="text-slate-400 pr-6">All Time Low</h1>
          <p className="font-bold text-slate-800">
            $69,044.78 <span className="text-green-500">2275.6 </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoContainer;

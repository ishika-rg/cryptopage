import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const TokenSection = () => {
  const data = [
    { name: "Crowdsale Investors", value: 80 },
    { name: "Foundation", value: 20 },
  ];
  const COLORS = ["#0088FE", "#f59e0b"];

  return (
    <div className="bg-white rounded-lg my-4 p-5 text-slate-800 text-sm">
      <div className="font-bold text-xl pb-3">Tokenomics</div>
      <div>
        <h1 className="font-bold ">Initial Distribution</h1>
        <div className="flex items-center">
          <PieChart width={200} height={200}>
            <Pie
              data={data}
              cx={100}
              cy={100}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
          <div className="">
            {data.map((ele, i) => (
              <div className="flex items-center gap-4" key={i}>
                <div
                  className="h-3 w-3 rounded-full "
                  style={{ backgroundColor: COLORS[i] }}
                ></div>
                <p>
                  {ele.name} : {ele.value}%
                </p>
              </div>
            ))}
          </div>
        </div>
        <p className="py-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          consectetur nisl at nisi suscipit, eget pretium libero molestie.
          Pellentesque ultrices pharetra nunc, nec ultricies libero malesuada
          id. Donec nec dolor eget lorem vehicula ullamcorper. Sed consequat
          bibendum consectetur.{" "}
        </p>
      </div>
    </div>
  );
};

export default TokenSection;

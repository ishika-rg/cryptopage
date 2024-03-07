import React from "react";
import { TeamData } from "../utils/TeamData.js";

const Team = () => {
  const memberData = TeamData;
  // console.log(memberData)

  return (
    <div className="bg-white rounded-lg my-4 p-5 text-slate-800 text-sm">
      <div className="font-bold text-xl pb-3">Team</div>
      <p className="pb-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus
        arcu at risus congue, ac bibendum lacus ultricies. Integer vel ultricies
        ligula. Nam eleifend felis non posuere congue. Quisque consequat purus
        id semper rutrum.
      </p>

      {memberData.map((ele, i) => (
        <div
          className="bg-sky-50 flex flex-col md:flex-row p-3 rounded-xl mb-3 gap-4 justify-start items-center text-sm"
          key={i}
        >
          <div className="min-w-32 ">
            <img className="h-20 w-20 rounded-xl mx-auto" src={ele.img} />
            <h3 className="font-bold text-center pt-3">{ele.name}</h3>
            <p className="text-sm text-slate-400 text-center">
              {ele.designation}{" "}
            </p>
          </div>
          <div>{ele.description}</div>
        </div>
      ))}
    </div>
  );
};

export default Team;

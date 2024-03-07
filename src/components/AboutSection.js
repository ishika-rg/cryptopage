import React from "react";
import { FaArrowRight } from "react-icons/fa";
import m1 from "../assests/m1.jpg";
import m2 from "../assests/m2.jpg";

const AboutSection = () => {
  return (
    <div className="bg-white rounded-lg my-4 p-5 text-slate-800 text-sm">
      <div className="font-bold text-xl pb-3">About Bitcoin</div>
      <div>
        <h1 className="font-bold ">What is Bitcoin?</h1>
        <p className="py-2">
          Bitcoin's price today id US$16,951.82, with a 24-hour trading volume
          of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently
          -7.70% from its 7-day all-time high of $18,366.66 and 3.40% from its
          7-day all-time low of $16,394.75. BTC has a circulating supply of
          19.24 M BTC and a max supply of 21 M BTC.
        </p>
      </div>
      <div className="bg-slate-200 h-0.5 my-3"></div>
      <div>
        <h1 className="font-bold ">Lorem ipsum dolor sit amet</h1>
        <p className="py-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          consectetur nisl at nisi suscipit, eget pretium libero molestie.
          Pellentesque ultrices pharetra nunc, nec ultricies libero malesuada
          id. Donec nec dolor eget lorem vehicula ullamcorper. Sed consequat
          bibendum consectetur.{" "}
        </p>
        <p className="py-2">
          {" "}
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia Curae; Ut at nulla ac ex volutpat volutpat ac a leo.
          Sed faucibus nibh id efficitur pharetra. Sed lacinia magna at enim
          placerat, id consectetur ipsum vulputate. Etiam semper magna id sapien
          aliquam, in fermentum mi placerat. Sed pulvinar enim vitae risus
          efficitur tempor. Sed ac diam quis orci lobortis dapibus. Curabitur
          non magna quis tortor sollicitudin lobortis. Vivamus id justo nulla.
        </p>
        <p className="py-2">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          consectetur nisl at nisi suscipit, eget pretium libero molestie.
          Pellentesque ultrices pharetra nunc, nec ultricies libero malesuada
          id. Donec nec dolor eget lorem vehicula ullamcorper. Sed consequat
          bibendum consectetur.{" "}
        </p>
      </div>
      <div className="bg-slate-200 h-0.5 my-2"></div>
      <div className="font-bold text-xl py-3">
        Already Holding Bitcoin?
        <div className="flex flex-col md:flex-row my-3 gap-4">
          <div className="bg-gradient-to-br from-green-400 via-cyan-500 to-cyan-600 flex  p-3 rounded-xl gap-4 text-white text-start items-center">
            <img src={m1} className="h-28 w-28 rounded-xl" />
            <div>
              <h1>Calculate your Profits</h1>
              <button className="text-black text-sm bg-white px-3 py-1 rounded-md my-3 flex items-center gap-2">
                Check Now <FaArrowRight />
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-300 via-red-400 to-red-600 flex  p-3 rounded-xl gap-4 text-white text-start items-center">
            <img src={m2} className="h-28 w-28 rounded-xl" />
            <div>
              <h1>Calculate your tax liability</h1>
              <button className="text-black text-sm bg-white px-3 py-1 rounded-md my-3 flex items-center gap-2">
                Check Now <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-200 h-0.5 my-2"></div>

      <h1 className="py-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur
        nisl at nisi suscipit, eget pretium libero molestie. Pellentesque
        ultrices pharetra nunc, nec ultricies libero malesuada id. Donec nec
        dolor eget lorem vehicula ullamcorper. Sed consequat bibendum
        consectetur.{" "}
      </h1>
    </div>
  );
};

export default AboutSection;

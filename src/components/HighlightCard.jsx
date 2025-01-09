import React from "react";
import { Activity, ArrowRight, Calendar, Layers, Table } from "react-feather";

const HighlightCard = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-center gap-[24px] px-4 lg:px-0">
      <a
        href="https://www.linkedin.com/in/whoshriyansh/"
        target="blank"
        className="w-full md:w-3/6  bg-orange flex flex-col px-4 py-10 gap-3 text-white rounded-2xl hover:cursor-pointer hover:scale-110 duration-300"
      >
        <Activity />
        <p className="font-medium text-xl">Join me on Linkedin</p>
        <div className="px-1 py-1 border-[1px] border-white w-10 rounded-xl items-end">
          <ArrowRight />
        </div>
      </a>
      <a
        href="https://calendly.com/whoshriyansh"
        target="blank"
        className="w-full md:w-4/6 bg-green flex flex-col px-4 py-10 gap-3 text-black rounded-2xl hover:cursor-pointer hover:scale-110 duration-300"
      >
        <Calendar />
        <p className="font-medium text-xl">Schedule a meet on Calendly</p>
        <div className="px-1 py-1 border-[1px] border-black w-10 rounded-xl items-end">
          <ArrowRight />
        </div>
      </a>
    </div>
  );
};

export default HighlightCard;

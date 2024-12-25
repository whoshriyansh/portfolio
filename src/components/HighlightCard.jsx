import React from "react";
import { ArrowRight, Layers, Table } from "react-feather";

const HighlightCard = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-center gap-[24px] px-12 lg:px-0">
      <div className="w-3/6 bg-orange flex flex-col px-4 py-10 gap-3 rounded-2xl">
        <Layers />
        <p className="font-medium text-xl">DYNAMIC ANIMATION, MOTION DESIGN</p>
        <div className="px-1 py-1 border-[1px] border-white w-10 rounded-xl items-end">
          <ArrowRight />
        </div>
      </div>
      <div className="w-4/6 bg-green flex flex-col px-4 py-10 gap-3 text-black rounded-2xl">
        <Table />
        <p className="font-medium text-xl">FRAMER, FIGMA, WORDPRESS, REACTJS</p>
        <div className="px-1 py-1 border-[1px] border-black w-10 rounded-xl items-end">
          <ArrowRight />
        </div>
      </div>
    </div>
  );
};

export default HighlightCard;

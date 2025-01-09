import React from "react";
import ProfileImg from "../components/ProfileImg";
import ContactForm from "../components/ContactForm";
import ToolsCard from "../components/ToolsCard";

const Tools = () => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row">
      <div className="w-full lg:w-7/12 overflow-y-auto scrollbar-hidden mt-40 md:mt-10 lg:mt-28">
        <div className="space-y-20 flex flex-col justify-center items-center lg:items-start">
          <ToolsCard />
          {/* <ContactForm /> */}
        </div>
      </div>
      <div className="w-full lg:w-5/12 lg:h-screen lg:sticky lg:top-0 flex items-center justify-center lg:px-32 md:mt-10 lg:mt-0 ">
        <ProfileImg />
      </div>
    </div>
  );
};

export default Tools;

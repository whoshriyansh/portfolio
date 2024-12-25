import React from "react";
import { GitHub, Instagram, Linkedin, Mail } from "react-feather";

const ProfileImg = () => {
  return (
    <div className="w-full h-[344px] md:h-[540px] lg:h-[640px]">
      <div className="bg-white rounded-lg flex flex-col gap-5 items-center justify-center py-10">
        <div className="rounded-2xl w-[260px] h-[210px] md:w-[240] md:h-[284px] lg:w-[240] lg:h-[284px] bg-orange">
          <img src="" alt="Profile Photos" />
        </div>

        <div className="text-center flex flex-col gap-3">
          <h1 className="font-bold text-black text-4xl">Shriyansh Kr. Lohia</h1>
          <p className="font-medium  text-base text-dark_gray">
            A Software Engineer who has <br /> developed countless innovative{" "}
            <br />
            solutions.
          </p>
        </div>

        <div className="flex items-center gap-10 text-orange">
          <a href="">
            <Linkedin />
          </a>
          <a href="">
            <GitHub />
          </a>
          <a href="">
            <Mail />
          </a>
          <a href="">
            <Instagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileImg;

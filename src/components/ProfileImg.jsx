import React from "react";
import { GitHub, Instagram, Linkedin, Mail } from "react-feather";

const ProfileImg = () => {
  return (
    <div className="w-full h-[344px] md:h-[540px] lg:h-[640px]">
      <div className="bg-white rounded-lg flex flex-col gap-5 items-center justify-center py-10">
        <div className="rounded-2xl w-64">
          <img
            src="/assets/profile.jpg"
            alt="Profile Photos"
            className="rounded-2xl"
          />
        </div>

        <div className="text-center flex flex-col gap-3">
          <h1 className="font-bold text-black text-4xl">Shriyansh Kr. Lohia</h1>
          <p className="font-medium  text-base text-dark_gray">
            Full-Stack Developer | MERN + Next.js 15 | CI/CD & DevOps Ready
          </p>
        </div>

        <div className="flex items-center gap-10 text-orange">
          <a href="https://www.linkedin.com/in/whoshriyansh/" target="blank">
            <Linkedin />
          </a>
          <a href="https://github.com/whoshriyansh" target="blank">
            <GitHub />
          </a>
          <a href="mailto:shriyanshlohia0@gmail.com" target="blank">
            <Mail />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileImg;

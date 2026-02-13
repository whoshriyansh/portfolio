import { GitHub, Linkedin, Mail } from "react-feather";

const ProfileImg = () => {
  return (
    <div className="w-full h-[344px] md:h-[540px] lg:h-[640px]">
      <div className=" rounded-lg flex flex-col gap-5 items-center justify-center py-10">
        <div className="rounded-2xl w-96">
          <img
            src="/assets/profile2.png"
            alt="Profile Photos"
            className="rounded-2xl"
          />
        </div>

        <div className="text-center flex flex-col gap-2">
          <h1 className="font-bold text-white text-3xl">Shriyansh Kr. Lohia</h1>
          <p className="font-normal text-sm text-gray p-1 lg:px-4">
            Full-Stack Developer | JavaScrript | Python | MERN + Next.js 15 |
            React Native
          </p>
        </div>

        <div className="flex items-center gap-10 text-orange">
          <a href="https://www.linkedin.com/in/whoshriyansh/" target="blank">
            <Linkedin />
          </a>
          <a href="https://github.com/whoshriyansh" target="blank">
            <GitHub />
          </a>
          <a href="mailto:whoshriyansh@gmail.com" target="blank">
            <Mail />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileImg;

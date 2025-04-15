import React from "react";
import {
  Home,
  Folder,
  Tool,
  Edit,
  Briefcase,
  Command,
  MessageSquare,
} from "react-feather";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-transparent w-full flex justify-center">
      <div className="w-[90%] sm:w-[60%] md:w-[40%] lg:w-[30%] xl:w-[20%] flex gap-4 items-center px-2 py-2 justify-center mt-5 mb-10 bg-dark_gray/10 rounded-2xl">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `p-2 rounded-md flex items-center justify-center ${
              isActive ? "text-orange" : "text-white"
            }`
          }
        >
          <Home width={20} height={20} />
        </NavLink>

        <NavLink
          to="/reviews"
          className={({ isActive }) =>
            `p-2 rounded-md flex items-center justify-center ${
              isActive ? "text-orange" : "text-white"
            }`
          }
        >
          <MessageSquare width={20} height={20} />
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `p-2 rounded-md flex items-center justify-center ${
              isActive ? "text-orange" : "text-white"
            }`
          }
        >
          <Folder width={20} height={20} />
        </NavLink>
        <NavLink
          to="/experience"
          className={({ isActive }) =>
            `p-2 rounded-md flex items-center justify-center ${
              isActive ? "text-orange" : "text-white"
            }`
          }
        >
          <Briefcase width={20} height={20} />
        </NavLink>
        <NavLink
          to="/skills"
          className={({ isActive }) =>
            `p-2 rounded-md flex items-center justify-center ${
              isActive ? "text-orange" : "text-white"
            }`
          }
        >
          <Command width={20} height={20} />
        </NavLink>
        <NavLink
          to="/tools"
          className={({ isActive }) =>
            `p-2 rounded-md flex items-center justify-center ${
              isActive ? "text-orange" : "text-white"
            }`
          }
        >
          <Tool width={20} height={20} />
        </NavLink>
        <NavLink
          to="/thoughts"
          className={({ isActive }) =>
            `p-2 rounded-md flex items-center justify-center ${
              isActive ? "text-orange" : "text-white"
            }`
          }
        >
          <Edit width={20} height={20} />
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;

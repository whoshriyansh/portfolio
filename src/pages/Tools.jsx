import ProfileImg from "../components/ProfileImg";
import ToolsCard from "../components/ToolsCard";

const Tools = () => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row">
      <div className="w-full lg:w-7/12 overflow-y-auto scrollbar-hidden mt-40 md:mt-10 lg:mt-28">
        <ToolsCard />
      </div>
      <div className="w-full lg:w-5/12 lg:h-screen lg:sticky lg:top-0 flex items-center justify-center lg:px-32 md:mt-10 lg:mt-0 ">
        <ProfileImg />
      </div>
    </div>
  );
};

export default Tools;

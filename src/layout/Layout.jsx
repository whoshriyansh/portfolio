import { Outlet } from "react-router-dom";
import CustomCursor from "../components/CustomCursor";
import GrainOverlay from "../components/GrainOverlay";
import IconNav from "../components/IconNav";

const Layout = () => {
  return (
    <div className="relative min-h-screen bg-black">
      <CustomCursor />
      <GrainOverlay />
      <IconNav />
      <Outlet />
    </div>
  );
};

export default Layout;

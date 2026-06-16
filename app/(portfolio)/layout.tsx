import CustomCursor from "@/components/CustomCursor";
import GrainOverlay from "@/components/GrainOverlay";
import IconNav from "@/components/IconNav";

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-black">
      <CustomCursor />
      <GrainOverlay />
      <IconNav />
      {children}
    </div>
  );
}

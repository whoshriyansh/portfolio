
const CountCard = () => {
  return (
    <div className="w-1/2 flex justify-center items-center gap-6">
      <div>
        <h1 className="text-[50px] md:text-[60px] lg:text-[70px] font-bold text-white leading-none">
          +2
        </h1>
        <p className="text-[16px]  font-bold text-soft_gray/20 leading-none">
          YEARS OF EXPERIENCE
        </p>
      </div>
      <div>
        <h1 className="text-[50px] md:text-[60px] lg:text-[70px] font-bold text-white leading-none">
          +12
        </h1>
        <p className="text-[16px]  font-bold text-soft_gray/20 leading-none">
          PROJECTS COMPLETED
        </p>
      </div>
      <div>
        <h1 className="text-[50px] md:text-[60px] lg:text-[70px] font-bold text-white leading-none">
          +3
        </h1>
        <p className="text-[16px]  font-bold text-soft_gray/20 leading-none">
          WORLDWIDE CLIENTS
        </p>
      </div>
    </div>
  );
};

export default CountCard;

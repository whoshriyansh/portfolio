const IntroCard = () => {
  return (
    <div className="w-full flex flex-col gap-0 text-center lg:text-start mt-10 md:mt-0">
      <h1 className="text-[52px] md:text-[86px] lg:text-7xl font-bold text-white leading-none">
        FULL STACK
        <br />
        <span className="text-[52px] md:text-[86px] lg:text-6xl font-bold text-soft_gray/20">
          DEVELOPER
        </span>
      </h1>
      <p className="text-gray px-2 text-center text-xs md:text-sm  lg:text-left">
        I'm a full-stack developer specializing in the MERN stack, with deep
        experience in building and deploying scalable applications using the
        latest Next.js 15. I implement CI/CD pipelines and integrate DevOps
        tools to ensure production-grade delivery.
      </p>
    </div>
  );
};

export default IntroCard;

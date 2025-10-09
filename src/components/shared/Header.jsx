const Header = ({ firstWord, secondWord, description }) => {
  return (
    <>
      <h1 className="text-[52px] md:text-[86px] lg:text-6xl font-bold text-white text-center lg:text-start">
        {firstWord} <span className="text-soft_gray/20">{secondWord}</span>
      </h1>
      <p className="text-gray px-2 text-center lg:text-left text-sm">
        {description}
      </p>
    </>
  );
};

export default Header;

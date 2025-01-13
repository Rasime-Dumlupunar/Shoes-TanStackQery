import { Link } from "react-router-dom";
import hamburger from "../../assets/Vector.png";

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-white-fa p-4 xl:px-8 md:px-5 lg:p-6 text-gray-dark rounded-[12] md:rounded-[16px] lg:rounded-[20px] xl:rounded-[24] mb-6 md:mb-10 lg:mb-14 xl:mb-20">
      <nav className=" flex gap-3 md:gap-6 lg:gap-8 xl:gap-10 font-semibold max-lg:hidden">
        <a href="">New Drops 🔥</a>
        <a href="">Men</a>
        <a href="">Women</a>
      </nav>
      <button className="lg:hidden">
        <img src={hamburger} alt="hamburger-menu" className="size-4" />
      </button>
      <Link to="/" className="w-[16%] max-w-[128px] max-h-[32px]">
        <img src="logo.svg" className="size-full" />
      </Link>

      <div className="flex items-center gap-5 lg:gap-10">
        <img className="size-5 md:size-6 lg:size-7 xl:size-7" src="/user.svg" />
        <img
          className="size-5 md:size-6 lg:size-7 xl:size-7 max-lg:hidden"
          src="/search.svg"
        />
        <span className="bg-yellow size-[24px] md:size-[30px] lg:size-[40px] md:text-lg rounded-full grid place-items-center font-open font-semibold  px-2">
          0
        </span>
      </div>
    </header>
  );
};

export default Header;

import banner from "../../assets/home-image.svg";
import rec1 from "../../assets/Rec-1.svg";
import rec2 from "../../assets/Rec-2.svg";
const Hero = () => {
  return (
    <div className="relative ">
      <p className=" absolute bg-gray-900 opacity-85 w-7 xl:w-12 text-xs writing-mode-vertical-rl justify-center items-center rounded-tr-md rounded-br-md text-white-default top-6 lg:text-md md:text-xs md:top-9 md:w-8 lg:top-10 xl:top-20 xl:text-lg  font-thin lg:w-9 p-2">
        Nike product of the year
      </p>
      <div className="absolute top-2/3 transform -translate-y-8 ps-4 md:ps-6 lg:ps-8 xl:ps-6 w-full">
        <h1 className="text-[24px] font-semibold md:text-[30px] lg:text-[50px] xl:text-[74px] text-white-default tracking-wider">
          NIKE AIR MAX
        </h1>
        <p className="text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px] font-open text-gray-100 w-3/5 tracking-wider">
          Nike introducing the new air max for everyone's comfort
        </p>
        <button className="text-white-fa bg-bluee rounded-md px-4 py-2 text-xs md:text-sm lg:text-lg xl:text-lg xl:px-6 mt-4">
          SHOP NOW
        </button>
        <div className=" absolute bottom-0 right-3 ">
          <img
            src={rec1}
            alt="rec-1"
            className="w-20 h-20 m-2 md:w-32 md:h-32 lg:w-50 lg:h-50 xl:w-[170px] xl:h-[170px]"
          />
          <img
            src={rec2}
            alt="rec-2"
            className="w-20 h-20 m-2 md:w-32 md:h-32 lg:w-50 lg:h-50 xl:w-[170px] xl:h-[170px]"
          />
        </div>
      </div>
      <div className="h-full w-full">
        <img src={banner} alt="" className="w-full h-full mt-6 mb-6" />
      </div>
    </div>
  );
};

export default Hero;

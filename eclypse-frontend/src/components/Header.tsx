import "../App.css";
import Image from "../assets/Frame 8.png";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="fixed top-0 w-full z-50 ">
      <div className="flex justify-start items-center h-[75px] bg-black px-[60px]">
        <img
          src={Image}
          alt="Logo"
          className="w-[48.79px] h-[45.46px] rounded-[5px]"
        />
        <Link
          to="/"
          className="w-[79px] h-[23px]  absolute top-[25px] left-[914px] font-sans font-normal text-[19.35px] text-white leading-[100%] tracking-[-0.02em]"
        >
          About Us
        </Link>
        <Link
          to="/"
          className="w-[60px] h-[23px]  absolute top-[25px] left-[1063px] font-sans font-normal text-[19.35px] text-white leading-[100%] tracking-[-0.02em]"
        >
          Waitlist
        </Link>
        <Link
          to="/"
          className="w-[36px] h-[23px]  absolute top-[25px] left-[1193px] font-sans font-normal text-[19.35px] text-white leading-[100%] tracking-[-0.02em]"
        >
          Cart
        </Link>

        <button
          onClick={(e) => e}
          className="w-[111.38px] h-[53.02px] absolute top-[12px] bg-white cursor-pointer  font-normal font-sans text-black left-[1278px] rounded-[8.71px] pt-[14.51px] pr-[38.69px] pb-[14.51px] pl-[38.69px] gap-[24.18px]"
        >
          <div className="w-[34px] h-[24px] font-sans font-medium text-[19.35px]">
            Buy
          </div>
        </button>
      </div>
    </div>
  );
};

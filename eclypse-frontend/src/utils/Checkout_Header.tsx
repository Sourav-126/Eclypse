import "../App.css";
import Image from "../assets/Frame 8.png";
import { Link } from "react-router-dom";

export const Checkout_Header = () => {
  return (
    <div className=" top-0 h-[87px] w-screen bg-white flex justify-between  items-center ">
      <nav className="w-[1316px] h-[45.46px] top-[20.9px] left-[60px] rounded-[5px]">
        <img
          src={Image}
          alt="Logo"
          className="w-[48.79px] h-[45.46px] rounded-[5px] absolute  top-[20.9px] left-[60px] transition-all ease-out duration-300"
        />
        <Link
          to="/"
          className="absolute w-[79px] h-[23px] top-[33px] left-[1061px] opacity-[0.36] font-[Helvetica\ Neue] font-normal text-[19.35px] leading-[100%] tracking-[-0.02em]

"
        >
          About Us
        </Link>
        <Link
          to="/"
          className="absolute w-[60px] h-[23px] text-black top-[33px] left-[1210px] opacity-[0.36] font-[Helvetica\ Neue] font-normal text-[19.35px] leading-[100%] tracking-[-0.02em]

"
        >
          Waitlist
        </Link>
        <Link
          to="/"
          className="absolute w-[36px] h-[23px] top-[33px] left-[1340px] font-[Helvetica\ Neue] font-normal text-[19.35px] leading-[100%] tracking-[-2%] underline

"
        >
          Cart
        </Link>
      </nav>
    </div>
  );
};

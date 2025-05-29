import guitar from "../assets/guitar.jpg";
import phu from "../assets/phu.jpg";
import yuki from "../assets/yuki.jpg";
export const Lowerbody = () => {
  return (
    <div>
      <div
        className=" text-white absolute w-[800px] h-[38px] font-[Neue Montreal] font-normal text-[32px] leading-[100%] tracking-[-0.02em]
 top-[3946px] left-[50px] 
"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className=" w-[31.23px] h-[31.23px] absolute  left-[1300.8px] 
"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
          />
        </svg>
        Size & Fit
      </div>
      <div className="absolute w-[1342px] h-[2px] top-[4024px] left-[50px] bg-gray-400"></div>
      <div
        className=" text-white absolute w-[800px] h-[38px] font-[Neue Montreal] font-normal text-[32px] leading-[100%] tracking-[-0.02em]
 top-[4099px] left-[50px] 
"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className=" w-[31.23px] h-[31.23px] absolute  left-[1300.8px] 
"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
          />
        </svg>
        Delivery & Returns
      </div>
      <div className="absolute w-[1342px] h-[2px] top-[4177px] left-[50px] bg-gray-400"></div>
      <div
        className=" text-white absolute w-[800px] h-[38px] font-[Neue Montreal] font-normal text-[32px] leading-[100%] tracking-[-0.02em]
 top-[4252px] left-[50px] 
"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className=" w-[31.23px] h-[31.23px] absolute  left-[1300.8px] 
"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
          />
        </svg>
        How This Was Made
      </div>
      <div className="absolute w-[1342px] h-[2px] top-[4330px] left-[50px] bg-gray-400"></div>
      <div className="font-[Roboto] font-medium  text-[16px] leading-[100%] tracking-[-0.02em] text-white absolute w-[191px] h-[19px] top-[4483px] left-[50px]">
        OUR CUSTOMERS
      </div>
      <div
        className=" flex-1 w-[46px] h-[143px] absolute top-[4575px] left-[66px] font-[Coolvetica] font-normal text-[118.84px] leading-[100%] tracking-[0] text-[#F7F7F7]
"
      >
        "
      </div>
      <div
        className="w-[750px] h-[104px] absolute top-[4595px] left-[134px]
font-[Neue_Montreal] font-normal text-[48px] leading-[109%] tracking-[0] text-[#D2D2D2]
"
      >
        Understated, but unforgettable. It feels like it was made for me
      </div>
      <div></div>// need to be done
      <img
        src={guitar}
        alt="guitar"
        className="w-[126px] h-[126px] absolute top-[4580px] p-4 left-[1255px] transform:scale(1.4) rounded-full object-top object-cover"
      />
      <img
        src={phu}
        alt="name"
        className="w-[69px] h-[69px] absolute top-[4736px] left-[1283px]  overflow-hidden rounded-full transform scale-110 object-cover object-top opacity-[26%] scale-crop"
      />
      <img
        src={yuki}
        alt="yuki"
        className="w-[69px] h-[69px] absolute top-[4826px] left-[1283px] rounded-full opacity-[26%] transform scale-110 object-cover object-top overflow-hidden"
      />
      <div className="w-[169px] h-[36px] absolute top-[4787px] left-[132px] text-white font-[Neue_Montreal] font-normal text-[24px] leading-[150%] tracking-[0]">
        Random Woman
      </div>
      <div
        className="w-[58px] h-[24px] absolute top-[4835px] text-[#535353] left-[134px] font-[Neue_Montreal] font-medium text-[16px] leading-[150%] tracking-[0]
"
      >
        NY,USA
      </div>
      <div
        className="w-[1342px] absolute bg-white top-[4996px] left-[50px] border-[1px]
"
      ></div>
    </div>
  );
};

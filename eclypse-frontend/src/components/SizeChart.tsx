import { useState } from "react";

export const SizeChart = ({ left, text }: { left: string; text: string }) => {
  const [clicked, setClicked] = useState(false);
  return (
    <button
      onClick={() => {
        setClicked(true);
      }}
      className={`w-[82px] cursor-pointer bg-[#D9D9D9] ${
        clicked ? `bg-black text-white` : ``
      }  text-[#767676] h-[49px] absolute top-[604px] left-[${left}] rounded-[4px] pt-[15px] pr-[31px] pb-[15px] pl-[31px] gap-[10px]`}
    >
      {text}
    </button>
  );
};

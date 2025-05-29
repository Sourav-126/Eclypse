export const Checkout_inputBox = ({
  label,
  left,
  width,
  top,
  labelTop,
}: {
  label: string;
  width: string;
  left: string;
  top: string;
  labelTop: string;
}) => {
  return (
    <div>
      <label
        style={{ left, top: labelTop }}
        className="absolute w-[120px] h-[21px]   font-[Helvetica\ Neue] font-normal text-[18px] leading-[100%] tracking-[0]"
      >
        {label}
      </label>
      <input
        className="absolute w-[303px] h-[67px]  rounded-[8px] border-[2px] border-gray-400"
        style={{ left, width, top }}
      ></input>
    </div>
  );
};

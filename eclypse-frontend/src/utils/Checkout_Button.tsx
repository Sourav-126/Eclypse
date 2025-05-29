import "../App.css";

export const Checkout_Button = ({
  width,
  borderColor,
  top,
  left,
  text,
  backgroundColor,
  color,
  onClick,
}: {
  width: string;
  borderColor: string;
  top: string;
  left: string;
  text: string;
  backgroundColor: string;
  color: string;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        width,
        borderInlineColor: borderColor,
        backgroundColor,
        top,
        left,
        color,
      }}
      className="absolute cursor-pointer h-[67px] hover:transition duration-300 hover:ease-in-out hover:bg-white rounded-[8.71px] pt-[14.51px] pr-[137px] pb-[14.51px] pl-[137px] gap-[24.18px]"
    >
      {text}
    </button>
  );
};

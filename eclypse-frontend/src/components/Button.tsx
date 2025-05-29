export const Button = ({
  height,
  width,
  text,
  bgColor,
  border,
  className,
  borderColor,
  textColor,
}: {
  height: string;
  width: string;
  border: string;
  text: string;
  bgColor: string;
  className?: string;
  borderColor?: string;
  textColor: string;
}) => {
  return (
    <button
      style={{
        height,
        width,
        backgroundColor: bgColor,
        border: borderColor ? `${border} solid ${borderColor}` : border,
        color: textColor,
        paddingTop: "14.51px",
        paddingBottom: "14.51px",
        paddingLeft: "137px",
        paddingRight: "137px",
      }}
      className={`gap-[24.18px] absolute rounded-[8.71px] ${className}`}
    >
      {text}
    </button>
  );
};

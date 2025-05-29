export const Line = ({
  width,
  top,
  left,
  border,
  color,
}: {
  width: string;
  top: string;
  left: string;
  border: string;
  color: string;
}) => {
  return (
    <div
      className={`w-[${width}] h-[1px] absolute  z-1000 top-[${top}] left-[${left}] border border-[${border}] bg-[${color}]`}
    ></div>
  );
};

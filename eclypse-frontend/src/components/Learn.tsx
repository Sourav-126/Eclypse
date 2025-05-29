export const Learn = () => {
  return (
    <div className="absolute text-white top-[1320px] left-[50px]">
      <div className="group flex flex-col w-[335.97px] hover:w-[335px] transition-all duration-500 bg-transparent hover:bg-white p-2 rounded cursor-pointer">
        <div className="flex items-start gap-2">
          <div
            className="font-sans font-normal text-[24px] leading-[100%] tracking-[0.02em]
              transition-all duration-300 group-hover:translate-x-2 group-hover:text-black"
          >
            Learn more about Eclypse
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 mt-1 transition-opacity duration-300 group-hover:opacity-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </div>

        <div className="w-[300px] h-[1px] bg-gray-300 mt-3 transition-opacity duration-300 group-hover:opacity-0"></div>
      </div>
    </div>
  );
};

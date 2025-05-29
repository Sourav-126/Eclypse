import photo2 from "../assets/photo2.jpg";
import photo3 from "../assets/photo3.jpg";
import photo4 from "../assets/photo4.jpg";
import photo5 from "../assets/photo5.jpg";
import video3 from "../assets/video3.mp4";
import video from "../assets/video1.mp4";
import photo9 from "../assets/photo9.jpg";
import photo1 from "../assets/Hero_header.png";
import photo10 from "../assets/photo10.jpg";
import photo11 from "../assets/photo11.jpg";
import { SizeChart } from "./SizeChart";
import { Checkout_Button } from "../utils/Checkout_Button";

export const PhotosSection = () => {
  return (
    <div className="relative">
      <div className="absolute top-[1510px] left-[50px]">
        <div className="flex gap-[31px] mb-[28px]">
          <video
            src={video3}
            autoPlay
            loop
            muted
            className="w-[883px] h-[489px] rounded-[5px] object-cover"
          />
          <div className="relative w-[424px] h-[489px] group overflow-hidden rounded-[5px]">
            <img
              src={photo2}
              alt="photo2"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>

            <div
              className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent 
               text-white text-3xl font-medium p-4 opacity-0 group-hover:opacity-100 
               transition-opacity duration-300"
            >
              Premium wool blend in signature vermillion
            </div>
          </div>
        </div>

        <div className="flex gap-[35px]">
          <div className="relative w-[424px] h-[400px] group overflow-hidden rounded-[5px]">
            <img
              src={photo3}
              alt="photo3"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>

            <div
              className="absolute bottom-4 left-0 w-full text-white text-3xl font-medium 
                px-4 py-2 opacity-0 group-hover:opacity-100 from-black/70 to-transparent
               transition-opacity duration-300"
            >
              Discreet side pocket to clean finish
            </div>
          </div>
          <div className="relative w-[424px] h-[400px] group overflow-hidden rounded-[5px]">
            <img
              src={photo4}
              alt="photo4"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>

            <div
              className="absolute bottom-4 left-0 w-full text-white text-3xl font-medium 
                px-4 py-2 opacity-0 group-hover:opacity-100 from-white to-transparent
               transition-opacity duration-300"
            >
              Hand-cut and assembled in small batches
            </div>
          </div>

          <div className="relative w-[424px] h-[397px] rounded-[5px] overflow-hidden cursor-pointer group">
            <img
              src={photo5}
              alt="photo5"
              className="w-full h-full rounded-[5px] object-cover transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-80 rounded-[5px]"></div>

            <img
              src={photo1}
              alt="hover image"
              className="absolute top-30 left-10 w-90 h-30 rounded-[5px] object-fill opacity-0 scale-95 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-100"
              style={{ objectPosition: "center center" }}
            />
          </div>
        </div>
      </div>

      <div className="absolute w-[800px] h-[58px] text-white top-[2608px] left-[43px] font-sans font-normal text-[48px] leading-[100%] tracking-[0.02em]">
        Silhouette No. 1 – Vermilion
      </div>

      <div className="absolute w-[1440px] h-[912px] bg-white top-[2850px] left-[1px]">
        <video
          src={video}
          autoPlay
          loop
          muted
          className="w-[704px] h-[913px] absolute top-[1px] left-0 object-cover"
        />

        <div className="absolute top-0 left-[736px] w-[704px] h-full">
          <div className="absolute w-[539px] h-[54px] text-black font-sans font-medium text-[15px] leading-[100%] tracking-[0.02em] top-[54px] left-0">
            A tailored composition in motion. Cut from structured wool with a
            sculpted shoulder and softened hem, this piece captures presence
            without force. Worn here in the stillness of a city in motion.
          </div>

          <img
            src={photo9}
            alt="photo9"
            className="w-[207.95px] h-[198.87px] absolute top-[153px] left-0 object-cover object-bottom"
          />
          <img
            src={photo10}
            alt="photo10"
            className="w-[207.95px] h-[198.87px] absolute top-[153px] left-[217.95px] object-cover object-center"
          />
          <img
            src={photo11}
            alt="photo11"
            className="w-[207.95px] h-[198.87px] absolute top-[153px] left-[446px] object-cover"
          />

          <div className="w-[116px] h-[44px] absolute top-[456px] text-black font-medium font-sans text-[36px] leading-[100%] tracking-[0.02em] left-0">
            ₹7,999
          </div>
          <div className="w-[135px] h-[18px] text-gray-400 absolute top-[474px] left-[128px] font-sans font-normal text-[15px] leading-[100%] tracking-[-0.02em]">
            MRP incl. of all taxes
          </div>

          <div className="w-[174px] h-[24px] top-[538px] absolute text-gray-400 left-0 font-sans font-medium leading-[100%] tracking-[-0.02em]">
            Please select a size
          </div>
          <div className="w-[67px] h-[18px] text-gray-400 absolute top-[541px] left-[197px] font-sans font-medium text-[15px] leading-[100%] tracking-[-0.02em] underline">
            Size chart
          </div>

          <div className="absolute  left-0">
            <SizeChart left="0px" text="XS" />
          </div>
          <div className="absolute  left-[114px]">
            <SizeChart left="0px" text="S" />
          </div>
          <div className="absolute  left-[229px]">
            <SizeChart left="0px" text="M" />
          </div>
          <div className="absolute  left-[358px]">
            <SizeChart left="0px" text="L" />
          </div>
          <div className="absolute  left-[457px]">
            <SizeChart left="0px" text="XL" />
          </div>

          <div className="w-[654px] h-[1px] absolute top-[707px] left-0 border-1 bg-gray-400"></div>

          <button className="text-black absolute w-[196px] h-[66px] top-[750px] left-0 border-[1px] border-black bg-white rounded">
            Add to Cart
          </button>
          <div className="absolute top-[750px] left-[244px]">
            <Checkout_Button
              width="428px"
              borderColor="black"
              top="0px"
              backgroundColor="black"
              color="white"
              text="Buy"
              left="0px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

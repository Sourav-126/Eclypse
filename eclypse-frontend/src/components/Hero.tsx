import Hero_Header from "../assets/Hero_header.png";
import copyright from "../assets/image.png";
import video2 from "../assets/video2.mp4";
export const Hero = () => {
  return (
    <div>
      <div className="w-[383px] h-[129px] absolute top-[125px] left-[44px]">
        <img src={Hero_Header} alt="Hero-Header" />
        <div className="w-[50.94px] h-[18px] absolute top-[308.51px] left-[1339px]">
          <img
            src={copyright}
            alt="copyright"
            className="w-[11.12px] h-[10.93px] text-white"
          />
        </div>
      </div>
      <div>
        <video
          src={video2}
          autoPlay
          loop
          muted
          className="absolute w-[1339px] h-[530px] top-[353px] left-[50px] rounded-[5px] object-cover"
        />
        <div
          className=" w-[474px] h-[41px] absolute top-[829px] left-[920px] font-[Helvetica_Neue] text-white font-light text-[34.62px] leading-[100%] tracking-[-0.02em]
"
        >
          A silhouette worth remembering
        </div>
      </div>
    </div>
  );
};

/* eslint-disable react/prop-types */
import { Bounce, Fade, Zoom } from "react-reveal";
import commonImage from "../../assets/Common-image/common.png";

const CommonAction = ({ title, subTitle }) => {
  //************************ / common action start here ***************************
  return (
    <div className="relative">
      <div
        className="w-full h-[430px] 2xl:h-[500px] absolute"
        style={{ backgroundColor: "rgba(70, 64, 96, 0.30)" }}
      ></div>
      <img
        className="w-full h-[430px] 2xl:h-[500px]"
        src={commonImage}
        alt=""
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <Fade>
        <h1 className="text-white lg:text-[102px] md:text-[56px] text-[32px] font-Teko font-bold uppercase leading-[102px]"
          style={{ textShadow: "0px 4px 60px rgba(199, 198, 198, 0.30)" }}
        >
          {title}
        </h1>
       
        <p className="text-white font-Lato lg:text-[56px] md:text-[32px] text-[24px] font-bold">
          {subTitle}
        </p>
        </Fade>
      </div>
    </div>
    //************************ / common action end here ***************************
  );
};

export default CommonAction;

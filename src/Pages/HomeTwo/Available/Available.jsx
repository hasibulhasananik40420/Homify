import image1 from "../../../assets/Available-image/image-1.png";
import image3 from "../../../assets/Available-image/image-3.png";
import image4 from "../../../assets/Available-image/image-4.png";
import image5 from "../../../assets/Available-image/image-5.png";
import image6 from "../../../assets/Available-image/image-6.png";
import { Rotate } from "react-reveal";

const Available = () => {
  //******************** available section start here **************************//
  //******************** ##########################  ********************************//
  return (
    <div className="max-w-container mx-auto lg:px-8 2xl:px-0 px-4 md:px-8 2xl:pt-32 lg:pt-[100px] md:pt-[80px] pt-16">
      <h1 className="text-[#3E348F] lg:text-[82px] md:text-[56px] text-[32px] font-Teko font-bold leading-[56px] text-right">
        <span className="text-[#181C21] ">Where We </span> Are Available
      </h1>
      <p className="text-[#4E4D4D] text-[16px] font-Lato font-normal leading-8 text-right">
        {" "}
        Lorem Ipsum dollar Why do you choose us , We have some core services
        that really benefited for you
      </p>

      <div className="mt-20 lg:flex gap-5">
      <Rotate bottom right cascade>
        <div className=" relative 2xl:w-[491px] lg:w-[450px] w-full h-[656px]">
          <img
            src={image1}
            alt=""
            className="absolute w-full h-full object-cover"
          />
          <div
            className="absolute bottom-0 left-0 w-full h-[50%]"
            style={{
              background:
                "linear-gradient(1deg, #504594 17.32%, rgba(80, 69, 148, 0.00) 100%)",
            }}
          >
            <h1 className=" text-white font-Teko text-[32px] font-bold text-center mt-[200px]">
              New york, USA
            </h1>
            <p className=" text-white font-Teko text-[16px] font-normal text-center">
              ( 139 Properties )
            </p>
          </div>
        </div>
        </Rotate>
        <Rotate bottom right cascade>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 2xl:grid-cols-3 gap-5 lg:w-[900px] 2xl:w-[1000px] w-full ">
       
          <div className=" relative 2xl:w-[309px] lg:w-[260px] w-full 2xl:h-[308px] lg:h-[308px] md:h-[450px] h-[308px] mt-10 md:mt-10 lg:mt-0 2xl:mt-0">
            <img
              src={image1}
              alt=""
              className="absolute w-full h-full object-cover"
            />
            <div
              className="absolute bottom-0 left-0 w-full h-[70%]"
              style={{
                background:
                  "linear-gradient(1deg, #504594 17.32%, rgba(80, 69, 148, 0.00) 100%)",
              }}
            >
              <h1 className=" text-white font-Teko text-[32px] font-bold text-center mt-[110px]">
                New Jercy, USA
              </h1>
              <p className=" text-white font-Teko text-[16px] font-normal text-center">
                ( 67 Properties )
              </p>
            </div>
          </div>
         
       
          <div className=" relative 2xl:w-[372px] lg:w-[340px] w-full 2xl:h-[308px] lg:h-[308px] md:h-[450px] h-[308px] mt-10 md:mt-10 lg:mt-0 2xl:mt-0 lg:-ml-2 2xl:ml-0 ml-0">
            <img
              src={image3}
              alt=""
              className="absolute w-full h-full object-cover"
            />
            <div
              className="absolute bottom-0 left-0 w-full h-[70%]"
              style={{
                background:
                  "linear-gradient(1deg, #504594 17.32%, rgba(80, 69, 148, 0.00) 100%)",
              }}
            >
              <h1 className=" text-white font-Teko text-[32px] font-bold text-center mt-[110px]">
                Buffalo, USA
              </h1>
              <p className=" text-white font-Teko text-[16px] font-normal text-center">
                ( 45 Properties )
              </p>
            </div>
          </div>

          <div className=" relative 2xl:w-[240px] lg:w-[200px] w-full 2xl:h-[308px] lg:h-[308px] md:h-[450px] h-[308px] mt-10 md:mt-10 lg:mt-0 2xl:mt-0 2xl:ml-[63px] lg:ml-[68px] ml-0">
            <img
              src={image4}
              alt=""
              className="absolute w-full h-full object-cover"
            />
            <div
              className="absolute bottom-0 left-0 w-full h-[70%]"
              style={{
                background:
                  "linear-gradient(1deg, #504594 17.32%, rgba(80, 69, 148, 0.00) 100%)",
              }}
            >
              <h1 className=" text-white font-Teko text-[32px] font-bold text-center mt-[110px]">
                Texas, USA
              </h1>
              <p className=" text-white font-Teko text-[16px] font-normal text-center">
                ( 97 Properties )
              </p>
            </div>
          </div>

          <div className=" relative 2xl:w-[562px] lg:w-[475px] w-full 2xl:h-[328px] lg:h-[328px] md:h-[450px] h-[308px] mt-10 md:mt-10 lg:mt-0 2xl:mt-0">
            <img
              src={image5}
              alt=""
              className="absolute w-full h-full object-cover"
            />
            <div
              className="absolute bottom-0 left-0 w-full h-[70%]"
              style={{
                background:
                  "linear-gradient(1deg, #504594 17.32%, rgba(80, 69, 148, 0.00) 100%)",
              }}
            >
              <h1 className=" text-white font-Teko text-[32px] font-bold text-center mt-[110px]">
                Connecticut, USA
              </h1>
              <p className=" text-white font-Teko text-[16px] font-normal text-center">
                ( 75 Properties )
              </p>
            </div>
          </div>

          <div className=" relative 2xl:w-[367px] lg:w-[345px] w-full 2xl:h-[328px] lg:h-[328px] md:h-[450px] h-[308px] mt-10 md:mt-10 lg:mt-0 2xl:mt-0 2xl:ml-[260px] lg:ml-[210px] ml-0">
            <img
              src={image6}
              alt=""
              className="absolute w-full h-full object-cover"
            />
            <div
              className="absolute bottom-0 left-0 w-full h-[70%]"
              style={{
                background:
                  "linear-gradient(1deg, #504594 17.32%, rgba(80, 69, 148, 0.00) 100%)",
              }}
            >
              <h1 className=" text-white font-Teko text-[32px] font-bold text-center mt-[110px]">
                Florida, USA
              </h1>
              <p className=" text-white font-Teko text-[16px] font-normal text-center">
                ( 55 Properties )
              </p>
            </div>
          </div>
        </div>
        </Rotate>
      </div>
    </div>

    //******************** available section start here **************************//
    //******************** ##########################  ********************************//
  );
};

export default Available;

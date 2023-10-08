import sellPropertyImageTwo from "../../../assets/Sell-property-image/property-two.png";
import { LuCheckCircle } from "react-icons/lu";
import { ImPlus } from "react-icons/im";
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';


const SellPropertyTwo = () => {
  return (
     //********************  sell property section start here **************************//
    //******************** ##########################  **************************//
    <div>
         <div className="max-w-container mx-auto lg:px-8 2xl:px-0 px-4 md:px-8 2xl:pt-32 lg:pt-[100px] md:pt-[80px] pt-16">
       
       
        <h1 className="text-[#3E348F] lg:text-[82px] md:text-[56px] text-[32px] font-Teko font-bold leading-[82px]">
        <span className="text-[#181C21]">Add Property</span> For Sale
        </h1>

        <p className="text-[#4E4D4D] text-[16px] font-Lato font-normal  ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="lg:flex lg:justify-between mt-20">
          <div>
            <h1 className="text-[#3E348F] text-[32px] font-Teko font-bold leading-8">
              Steps of Sell Properties
            </h1>
            <Fade top cascade>
            <div className="flex flex-col gap-4 mt-10 lg:ml-8 2xl:ml-12">
              <span className="flex items-center gap-3">
                <LuCheckCircle className="text-[20px]" />
                <p className="text-black text-[16px] font-Lato font-normal leading-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscin sit amet
                  doller sum.
                </p>
              </span>

              <span className="flex items-center gap-3">
                <LuCheckCircle className="text-[20px]" />
                <p className="text-black text-[16px] font-Lato font-normal leading-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscin sit amet
                </p>
              </span>

              <span className="flex items-center gap-3">
                <LuCheckCircle className="text-[20px]" />
                <p className="text-black text-[16px] font-Lato font-normal leading-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscin sit amet
                  doller sum.
                </p>
              </span>

              <span className="flex items-center gap-3">
                <LuCheckCircle className="text-[20px]" />
                <p className="text-black text-[16px] font-Lato font-normal leading-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscin sit amet
                </p>
              </span>

              <span className="flex items-center gap-3">
                <LuCheckCircle className="text-[20px]" />
                <p className="text-black text-[16px] font-Lato font-normal leading-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscin sit amet
                  doller sum.
                </p>
              </span>

              <span className="flex items-center gap-3">
                <LuCheckCircle className="text-[20px]" />
                <p className="text-black text-[16px] font-Lato font-normal leading-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscin sit amet
                </p>
              </span>

              <span className="flex items-center gap-3">
                <LuCheckCircle className="text-[20px]" />
                <p className="text-black text-[16px] font-Lato font-normal leading-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscin sit amet
                  doller sum.
                </p>
              </span>

              <span className="flex items-center gap-3">
                <LuCheckCircle className="text-[20px]" />
                <p className="text-black text-[16px] font-Lato font-normal leading-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscin sit amet
                </p>
              </span>
            </div>
            </Fade>
          </div>
          <Slide right>
          <div className="2xl:w-[697px] lg:w-[600px] w-full relative">
            <img
              className="lg:w-[697px] h-[500px] w-full mt-16 md:mt-16 lg:mt-0 2xl:mt-0"
              style={{ borderRadius: "60px 60px 60px 0px" }}
              src={sellPropertyImageTwo}
              alt=""
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="w-[70px] h-[70px] rounded-md flex justify-center items-center bg-white border cursor-pointer">
                <ImPlus className="text-2xl" />
              </span>

              <p className="text-white text-[20px] font-Lato font-normal leading-8 mt-2">
                Add your property here
              </p>
            </div>
          </div>
          </Slide>
        </div>
    </div>
    </div>

     //********************  sell property section end here **************************//
    //******************** ##########################  **************************//
  )
}

export default SellPropertyTwo
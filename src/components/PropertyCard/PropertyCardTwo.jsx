/* eslint-disable react/prop-types */
import { LiaBathSolid, LiaBedSolid, LiaSquare } from "react-icons/lia";
import { FiEye } from "react-icons/fi";
import { RiHeartAddLine } from "react-icons/ri";
import { CgPlayTrackNextR } from "react-icons/cg";
import { Link } from "react-router-dom";
import { Fade, Slide } from "react-reveal";

const PropertyCardTwo = ({ data }) => {
  const {
    image,
    price,
    name,
    details,
    squarefeet,
    bathrooms,
    bedrooms,
    agentTitle,
    agentName,
    agentImage,
  } = data;
  return (
    //******************** property card two section start here **************************//
    //******************** ##########################  ********************************//
    <div>
      <Slide bottom cascade>
        <div className="cursor-pointer">
          <div className="2xl:w-[467px] lg:w-[380px] md:w-[350px] w-full relative">
            <Link to="/property-details">
              <img
                className=" 2xl:w-[467px] lg:w-[400px] md:w-[467px] w-full h-[400px] lg:h-[300px] 2xl:h-[400px] md:h-[400px] cursor-pointer"
                src={image}
                alt=""
              />
            </Link>
            <span className="bg-secondaryColor  w-[140px] h-[60px] flex justify-center items-center absolute top-6 right-6">
              <p className="text-[20px] font-Lato font-bold leading-8 text-white">
                {" "}
                FOR SALE
              </p>
            </span>

            <div
              className="bg-white 2xl:pt-6 lg:pt-2 md:pt-3 pt-3"
              style={{
                boxShadow: "0px 4px 45px 0px rgba(180, 178, 178, 0.30)",
              }}
            >
              <p className="text-secondaryColor text-[32px] font-bold font-Teko 2xl:pl-8 lg:pl-4 pl-2">
                $ {price}
              </p>
              <p className="text-black 2xl:text-[32px] text-[24px] font-bold font-Lato 2xl:pl-8 lg:pl-4 pl-2">
                {name}
              </p>
              <p className="text-[#6B6969] text-[16px] font-normal 2xl:leading-8 leading-6 font-Lato 2xl:w-[394px] lg:w-[340px] w-full pt-1 pb-6 2xl:pl-8 lg:pl-4 pl-2">
                {details}
              </p>

              <div className="flex lg:gap-6 2xl:gap-8 gap-3 border-b-[1px] pb-5">
                <div className="2xl:pl-8 lg:pl-4 pl-2">
                  <span className="flex  gap-3">
                    <p className="text-black font-Teko font-bold text-[20px]">
                      {bedrooms}
                    </p>
                    <LiaBedSolid className="text-2xl" />
                  </span>
                  <h4 className="text-black  text-[16px] font-Lato font-normal leading-[20px]">
                    Bedrooms
                  </h4>
                </div>
                <div className="border-r-[1px] border-r-[#181C21]"></div>
                <div className=" ">
                  <span className="flex  gap-3">
                    <p className="text-black font-Teko font-bold text-[20px]">
                      {bathrooms}
                    </p>
                    <LiaBathSolid className="text-2xl" />
                  </span>
                  <h4 className="text-black text-[16px] font-Lato font-normal leading-[20px]">
                    Bathrooms
                  </h4>
                </div>
                <div className="border-r-[1px] border-r-[#181C21]"></div>
                <div className="">
                  <span className="flex  gap-3">
                    <p className="text-black font-Teko font-bold text-[20px]">
                      {squarefeet}
                    </p>
                    <LiaSquare className="text-2xl" />
                  </span>
                  <h4 className="text-black text-[16px] font-Lato font-normal leading-[20px] ">
                    Square Feet
                  </h4>
                </div>
              </div>

              <div className="flex lg:gap-10 gap-5 items-center py-2 2xl:pl-8 lg:pl-4 pl-2">
                <div className="flex items-center gap-3">
                  <img
                    className="w-12 h-12 rounded-full"
                    src={agentImage}
                    alt=""
                  />

                  <span>
                    <h1 className="text-black 2xl:text-[16px] lg:text-[12px] text-[12px] font-Lato font-bold leading-8">
                      {agentName}
                    </h1>

                    <h1 className="text-[#263238] text-[12px] font-Teko font-normal leading-8">
                      {agentTitle}
                    </h1>
                  </span>
                </div>

                <div className="flex gap-4">
                  <span className="w-10 h-10 rounded-[8px] bg-[#F7F2F2] flex justify-center items-center cursor-pointer hover:bg-secondaryColor duration-500 group">
                    <FiEye className="text-xl text-black group-hover:text-white" />
                  </span>

                  <span className="w-10 h-10 rounded-[8px] bg-[#F7F2F2] flex justify-center items-center cursor-pointer hover:bg-secondaryColor duration-500 group">
                    <RiHeartAddLine className="text-xl text-black group-hover:text-white" />
                  </span>

                  <span className="w-10 h-10 rounded-[8px] bg-[#F7F2F2] flex justify-center items-center cursor-pointer hover:bg-secondaryColor duration-500 group">
                    <CgPlayTrackNextR className="text-xl text-black group-hover:text-white" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slide>
    </div>

    //******************** property card two section end here **************************//
    //******************** ##########################  ********************************//
  );
};

export default PropertyCardTwo;

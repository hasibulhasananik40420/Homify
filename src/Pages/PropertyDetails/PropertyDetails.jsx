/* eslint-disable no-unused-vars */
import React from "react";
import CommonAction from "../../components/CommonAction/CommonAction";
import propertyDetails from "../../assets/Property-image/property-details-image.jpg";
import { GrCheckbox, GrLocation } from "react-icons/gr";
import { LiaBathSolid, LiaBedSolid } from "react-icons/lia";
import SimiliarProperty from "../../components/SimiliarProperty/SimiliarProperty";
import { AiOutlineShareAlt } from "react-icons/ai";
const PropertyDetails = () => {
  return (
    //********************  Property details section start here **************************//
    <div>
      <CommonAction
        title={"Property Details"}
        subTitle={"Home> Property Details"}
      />

      <div className="max-w-container mx-auto lg:px-8 2xl:px-0 px-4 md:px-4 pt-32">
        <div className="">
          <h1 className="text-[32px] text-primary font-Teko font-bold tracking-[ 3.2px]">
            Property Details Infomation
          </h1>

          <p className="text-black text-[16px] font-Lato font-normal leading-8 2xl:w-[999px] lg:w-[700px] w-full mt-5">
            Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do
            eiusmod tempor incididunt soluta nobis assumenda labore quod
            maxime.Lorem ipsum dolor sit amet consectetur adipiscing elit, sed
            do eiusmod tempor incididunt soluta nobis assumenda labore quod
            maxime. dolor sit amet consectetur adipiscing elit, sed do eiusmod
            tempor incididunt soluta nobis assumenda labore quod.
          </p>

          {/* ********************  Property details card start here ************************** */}
          <div className="mt-20 lg:flex 2xl:flex 2xl:gap-[120px] lg:gap-20">
            <div className="2xl:w-[674px] lg:w-[600px]">
              <img
                className="2xl:w-[674px] lg:w-[600px] 2xl:h-[815px] lg:h-[810px] h-[450px] custom-border"
                src={propertyDetails}
                alt=""
              />
            </div>

            <div className="lg:w-[630px] 2xl:w-[630px] w-full">
              <div className="flex gap-3 items-center mt-10 md:mt-10 lg:mt-0 2xl:mt-0">
                <GrLocation className="text-black text-2xl" />
                <p className="text-[20px] font-Lato font-normal text-black">
                  235/A, Newyork, YK, USA
                </p>
              </div>

              <h1 className="text-[32px] text-primary font-Teko font-bold tracking-[ 3.2px] mt-5">
                Riverview Home
              </h1>

              <p className="text-[56px] text-secondaryColor font-Teko font-bold ">
                $ 11,79,237
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-3 mt-5 2xl:w-[480px] lg:w-[470px] md:w-[480px] w-[350px] justify-items-center md:justify-items-center gap-y-9">
                <div
                  className="flex flex-col justify-center items-center gap-3 w-[145px] h-[150px] bg-secondaryColor "
                  style={{
                    borderRadius: "15px 15px 15px 0px",
                    boxShadow: "0px 4px 60px 0px rgba(234, 231, 231, 0.30)",
                  }}
                >
                  <LiaBedSolid className="text-2xl text-black" />
                  <p className="text-black font-Lato text-[20px] font-bold">
                    4
                  </p>
                  <p className="text-black font-Lato text-[16px] font-normal">
                    Bedrooms
                  </p>
                </div>

                <div
                  className="flex flex-col justify-center items-center gap-3 w-[145px] h-[150px] bg-[#FFF]"
                  style={{
                    borderRadius: "15px 15px 15px 0px",
                    boxShadow: "0px 4px 60px 0px rgba(234, 231, 231, 0.30)",
                  }}
                >
                  <LiaBathSolid className="text-2xl text-black" />
                  <p className="text-black font-Lato text-[20px] font-bold">
                    4
                  </p>
                  <p className="text-black font-Lato text-[16px] font-normal">
                    Bathrooms
                  </p>
                </div>

                <div
                  className="flex flex-col justify-center items-center gap-3 w-[145px] h-[150px] bg-[#FFF]"
                  style={{
                    borderRadius: "15px 15px 15px 0px",
                    boxShadow: "0px 4px 60px 0px rgba(234, 231, 231, 0.30)",
                  }}
                >
                  <GrCheckbox className="text-2xl text-black" />
                  <p className="text-black font-Lato text-[20px] font-bold">
                    5360
                  </p>
                  <p className="text-black font-Lato text-[16px] font-normal">
                    Square Feet
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-4 mt-5 2xl:w-[630px] lg:w-[630px] md:w-[480px] w-[350px] justify-items-center md:justify-items-center gap-y-9">
                <div
                  className="flex flex-col justify-center items-center gap-3 w-[145px] h-[150px] bg-secondaryColor "
                  style={{
                    borderRadius: "15px 15px 15px 0px",
                    boxShadow: "0px 4px 60px 0px rgba(234, 231, 231, 0.30)",
                  }}
                >
                  <LiaBedSolid className="text-2xl text-black" />
                  <p className="text-black font-Lato text-[20px] font-bold">
                    4
                  </p>
                  <p className="text-black font-Lato text-[16px] font-normal">
                    Bedrooms
                  </p>
                </div>

                <div
                  className="flex flex-col justify-center items-center gap-3 w-[145px] h-[150px] bg-[#FFF]"
                  style={{
                    borderRadius: "15px 15px 15px 0px",
                    boxShadow: "0px 4px 60px 0px rgba(234, 231, 231, 0.30)",
                  }}
                >
                  <LiaBathSolid className="text-2xl text-black" />
                  <p className="text-black font-Lato text-[20px] font-bold">
                    4
                  </p>
                  <p className="text-black font-Lato text-[16px] font-normal">
                    Bathrooms
                  </p>
                </div>

                <div
                  className="flex flex-col justify-center items-center gap-3 w-[145px] h-[150px] bg-[#FFF]"
                  style={{
                    borderRadius: "15px 15px 15px 0px",
                    boxShadow: "0px 4px 60px 0px rgba(234, 231, 231, 0.30)",
                  }}
                >
                  <GrCheckbox className="text-2xl text-black" />
                  <p className="text-black font-Lato text-[20px] font-bold">
                    5360
                  </p>
                  <p className="text-black font-Lato text-[16px] font-normal">
                    Square Feet
                  </p>
                </div>
                <div
                  className="flex flex-col justify-center items-center gap-3 w-[145px] h-[150px] bg-[#FFF]"
                  style={{
                    borderRadius: "15px 15px 15px 0px",
                    boxShadow: "0px 4px 60px 0px rgba(234, 231, 231, 0.30)",
                  }}
                >
                  <GrCheckbox className="text-2xl text-black" />
                  <p className="text-black font-Lato text-[20px] font-bold">
                    5360
                  </p>
                  <p className="text-black font-Lato text-[16px] font-normal">
                    Square Feet
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <p className="text-[16px] text-black font-Lato font-normal leading-8">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do
                  eiusmod tempo incididunt soluta nobis assumenda labore quod
                  maxime.Lorem ipsum dolor sit amet consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt soluta nobis assumenda labore
                  quod maxime.Lorem ipsum dolor sit amet consectetur adipiscing
                  elit,
                </p>

                <div className="flex items-center gap-7 mt-[40px]">
                <button className="bg-[#F90] text-white text-[16px] font-Lato font-bold w-[190px] h-[56px] custom-border-property hover:bg-primary duration-500 ">
                Book
               </button>
               
                <button className="bg-white border-2 border-secondaryColor flex justify-center items-center w-[119px] h-[56px] custom-border-property hover:bg-primary hover:border-0  duration-500 group">
                 <AiOutlineShareAlt className="text-secondaryColor text-[24px] group-hover:text-white"/>
               </button>
                </div>

              </div>
            </div>
          </div>
          {/* ********************  Property details card end here ************************** */}
       
       
       
       
       
        </div>




             <div className="pt-32">
               <h1 className="text-primary text-[56px] font-Teko font-bold leading-[80px]">Similiar Property Here</h1>

                <div>
                    <SimiliarProperty/>
                </div>
             </div>







      </div>
    </div>

    //********************  Property details section end here **************************//
  );
};

export default PropertyDetails;

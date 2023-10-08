/* eslint-disable react/no-unescaped-entities */

import { LiaHandPointRightSolid } from "react-icons/lia";
import image from "../../../assets/Core-service-image/core-service-two.png";
import { FiArrowDownCircle } from "react-icons/fi";
import { Fade } from "react-reveal";

const CoreServiceTwo = () => {
  return (
    //********************  Core service two section start here **************************//
    //******************** ##########################  **************************//
    <div className="max-w-container mx-auto lg:px-8 2xl:px-0 px-4 md:px-8 2xl:pt-32 lg:pt-[100px] md:pt-[80px] pt-16 lg:flex 2xl:gap-[124px] lg:gap-20">
      <Fade left>
      <div className="lg:w-[731px]  w-full">
        <h1 className="lg:text-[82px] md:text-[56px] text-[32px] text-[#534994] font-Teko font-bold text-left">
          <span className="text-[#181C21]">Our Core</span> Services
        </h1>

        <p className="text-[#415057] text-[16px] font-Lato font-normal leading-8 mt-6 ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry'smake a type specimen
          book. It has been survived not only .industry'smake a type specimen
          book. It has survived not on the..
        </p>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-16 gap-y-6">
          <div className="flex items-center gap-5">
            <LiaHandPointRightSolid className="text-primary text-3xl" />
            <p className="text-black text-[20px] font-Lato font-normal leading-8">
              24 Hours Support
            </p>
          </div>
          <div className="flex items-center gap-5">
            <LiaHandPointRightSolid className="text-primary text-3xl" />
            <p className="text-black text-[20px] font-Lato font-normal leading-8">
              Buy and Sale your property
            </p>
          </div>
          <div className="flex items-center gap-5">
            <LiaHandPointRightSolid className="text-primary text-3xl" />
            <p className="text-black text-[20px] font-Lato font-normal leading-8">
              Help to find your dream
            </p>
          </div>
          <div className="flex items-center gap-5">
            <LiaHandPointRightSolid className="text-primary text-3xl" />
            <p className="text-black text-[20px] font-Lato font-normal leading-8">
              Choose from any cities of USA
            </p>
          </div>
          <div className="flex items-center gap-5">
            <LiaHandPointRightSolid className="text-primary text-3xl" />
            <p className="text-black text-[20px] font-Lato font-normal leading-8">
              Fit your right choice
            </p>
          </div>
          <div className="flex items-center gap-5">
            <LiaHandPointRightSolid className="text-primary text-3xl" />
            <p className="text-black text-[20px] font-Lato font-normal leading-8">
              Best Property at Low price
            </p>
          </div>
        </div>

        <div className="lg:flex md:flex gap-7 mt-[60px]">
          <button className="bg-[#F90] text-white text-[16px] font-Lato font-bold w-[248px] h-[56px] custom-border-property  hover:bg-[#375E97] duration-500">
            Appointment
          </button>

          <button className="flex justify-center items-center gap-2 border-[2px] border-[#F90] text-black text-[16px]  font-Lato font-bold w-[248px] h-[56px] custom-border-property  hover:bg-[#375E97] duration-500 hover:text-white hover:border-0 mt-10 md:mt-0 lg:mt-0 2xl:mt-0">
            <span>
              <FiArrowDownCircle className="text-xl" />
            </span>

            <span>Download Brochure</span>
          </button>
        </div>
      </div>
      </Fade>
      <Fade right>
      <div>
        <img
          className="2xl:w-[583px] lg:w-[500px] w-full lg:h-[614px] md:h-[500px] h-[450px] mt-20 md:mt-20 lg:mt-0 2xl:mt-0"
          src={image}
          alt=""
        />
      </div>
      </Fade>
    </div>

    //********************  Core service two section end here **************************//
    //******************** ##########################  **************************//
  );
};

export default CoreServiceTwo;

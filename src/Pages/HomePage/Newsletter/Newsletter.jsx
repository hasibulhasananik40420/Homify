/* eslint-disable no-unused-vars */
import React from "react";

const Newsletter = () => {
  return (
    //******************** Newsletter section start here **************************//
    //******************** ##########################  **************************//

    <div className="max-w-container mx-auto lg:px-8 2xl:px-0 px-4 md:px-8 2xl:py-32 lg:py-[100px] md:py-[80px] py-16">
      <div
        className="lg:w-[1054px] w-full h-full lg:h-[500px] bg-white border mx-auto pt-[50px] lg:pb-0 pb-16"
        style={{
          borderRadius: "45px",
          boxShadow: "0px 4px 60px 0px rgba(0, 0, 0, 0.25)",
        }}
      >
        <h1 className="lg:text-[56px] text-[24px] md:text-[56px] text-[#504594] font-bold font-Teko text-center ">
          Subscribe our Newsletter
        </h1>
        <p className="text-[#676565] font-normal font-Lato md:text-[20px] text-[14px] text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl
          elit, vulputate at leo in,
        </p>

        <div className="lg:px-[150px] md:px-[50px] px-2">
          <div className="lg:flex md:flex gap-10 mt-6 md:mt-[34px] lg:mt-[34px]">
            <div className="flex flex-col gap-5 w-full">
              <label
                className="text-black font-Teko font-normal text-[24px] leading-6"
                htmlFor="name"
              >
                First Name
              </label>
              <input
                className="lg:w-full md:w-full w-full h-[56px] pl-10 rounded-[60px] border-[1px] border-[#878383] text-[#2F2D2D] font-Lato text-[12px] font-normal leading-6 outline-none focus:border-primary focus:ring-primary focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-primary transition-all duration-700"
                type="name"
                placeholder="Write your first name"
              />
            </div>
            <div className="flex flex-col gap-5 w-full mt-6 md:mt-0 lg:mt-0">
              <label
                className="text-black font-Teko font-normal text-[24px] leading-6"
                htmlFor="name"
              >
                Last Name
              </label>
              <input
                className="lg:w-full md:w-full w-full h-[56px] pl-10 rounded-[60px] border-[1px] border-[#878383] text-[#2F2D2D] font-Lato text-[12px] font-normal leading-6 outline-none focus:border-primary focus:ring-primary focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-primary transition-all duration-700"
                type="name"
                placeholder="Write your last name"
              />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-5 w-full mt-6 md:mt-[34px] lg:mt-[34px]  relative">
              <label
                className="text-black font-Teko font-normal text-[24px] leading-6"
                htmlFor="name"
              >
                Email ID
              </label>
              <input
                className=" lg:w-full md:w-full w-full h-[56px] pl-10 rounded-[60px] border-[1px] border-[#878383] text-[#2F2D2D] font-Lato text-[12px] font-normal leading-6 outline-none focus:border-primary focus:ring-primary focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-primary transition-all duration-700"
                type="name"
                placeholder="Write your email ID"
              />

              <button className="text-white text-[16px] font-Lato font-bold lg:w-[192px] md:w-[192px] w-[110px] h-[48px] absolute right-1 top-[48px] bg-secondaryColor custom-border-property hover:bg-primary duration-500">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    //******************** Newsletter section start here **************************//
    //******************** ##########################  **************************//
  );
};

export default Newsletter;

/* eslint-disable no-unused-vars */
import React from "react";
import CommonAction from "../../components/CommonAction/CommonAction";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import details from "../../assets/About-us-image/about-hero.png";

const AddProperty = () => {
  //********************  Add property section start here **************************//
  //******************** ##########################  ********************************//
  return (
    <div>
      <CommonAction title={"Add Property "} subTitle={"Home> Add Property"} />

      {/******************* Image slider section part start here *******************/}
      <div className="max-w-container mx-auto lg:px-8 2xl:px-0 px-4 md:px-8 2xl:pt-32 lg:pt-[100px] md:pt-[80px] pt-16">
        <div>
          <h3 className="text-[#375E97] text-[20px] font-Teko font-bold leading-8">
            More Images of this Property
          </h3>

          <ImageSlider />
        </div>

        {/* ********************  Add property details section start here ************************* */}
        <div className="2xl:pt-32 lg:pt-[100px] md:pt-[80px] pt-16">
           <h1 className="text-[#375E97] text-[32px] font-Teko font-bold leading-8 mb-5">Add Property Details</h1>
          <div className="lg:flex lg:gap-20 2xl:gap-[121px]">
            <div className="lg:w-[602px] lg:h-[800px] 2xl:h-[907px] md:h-[700px] h-[500px] w-full">
              <img
                className="lg:w-[602px] lg:h-[800px] 2xl:h-[907px] md:h-[700px] h-[500px] w-full"
                src={details}
                alt=""
              />
            </div>

            <div className="lg:w-[716px]">
              <div className="lg:flex md:flex gap-5 md:gap-10 2xl:mt-0 lg:mt-0 md:mt-[45px] mt-[45px]">
                <div className="flex flex-col gap-5 w-full">
                  <label
                    className="text-black font-Teko font-normal text-[24px] leading-6"
                    htmlFor="name"
                  >
                    Your First Name
                  </label>
                  <input
                    className="lg:w-full md:w-[320px] w-full h-[56px] pl-10 rounded-[60px] border-[1px] border-[#878383] text-[#2F2D2D] font-Lato text-[16px] font-normal leading-6 outline-none focus:border-primary focus:ring-primary focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-primary transition-all duration-700"
                    type="name"
                    placeholder="Write your first name here"
                  />
                </div>
                <div className="flex flex-col gap-5 w-full mt-6 md:mt-0 lg:mt-0">
                  <label
                    className="text-black font-Teko font-normal text-[24px] leading-6"
                    htmlFor="name"
                  >
                    Your Last Name
                  </label>
                  <input
                    className="lg:w-full md:w-[320px] w-full h-[56px] pl-10 rounded-[60px] border-[1px] border-[#878383] text-[#2F2D2D] font-Lato text-[16px] font-normal leading-6 outline-none focus:border-primary focus:ring-primary focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-primary transition-all duration-700"
                    type="name"
                    placeholder="Write your last name here"
                  />
                </div>
              </div>

              <div className="lg:flex md:flex gap-5 md:gap-10 2xl:mt-[45px] lg:mt-6 md:mt-[45px] mt-[45px]">
                <div className="flex flex-col gap-5 w-full">
                  <label
                    className="text-black font-Teko font-normal text-[24px] leading-6"
                    htmlFor="name"
                  >
                    Your First Name
                  </label>
                  <input
                    className="lg:w-full md:w-[320px] w-full h-[56px] pl-10 rounded-[60px] border-[1px] border-[#878383] text-[#2F2D2D] font-Lato text-[16px] font-normal leading-6 outline-none focus:border-primary focus:ring-primary focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-primary transition-all duration-700"
                    type="name"
                    placeholder="Write your first name here"
                  />
                </div>
                <div className="flex flex-col gap-5 w-full mt-6 md:mt-0 lg:mt-0">
                  <label
                    className="text-black font-Teko font-normal text-[24px] leading-6"
                    htmlFor="name"
                  >
                    Your Last Name
                  </label>
                  <input
                    className="lg:w-full md:w-[320px] w-full h-[56px] pl-10 rounded-[60px] border-[1px] border-[#878383] text-[#2F2D2D] font-Lato text-[16px] font-normal leading-6 outline-none focus:border-primary focus:ring-primary focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-primary transition-all duration-700"
                    type="name"
                    placeholder="Write your last name here"
                  />
                </div>
              </div>

              <div className="lg:flex md:flex gap-5 md:gap-10 2xl:mt-[45px] lg:mt-6 md:mt-[45px] mt-[45px]">
                <div className="flex flex-col gap-5 w-full">
                  <label
                    className="text-black font-Teko font-normal text-[24px] leading-6"
                    htmlFor="name"
                  >
                    Your First Name
                  </label>
                  <input
                    className="lg:w-full md:w-[320px] w-full h-[56px] pl-10 rounded-[60px] border-[1px] border-[#878383] text-[#2F2D2D] font-Lato text-[16px] font-normal leading-6 outline-none focus:border-primary focus:ring-primary focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-primary transition-all duration-700"
                    type="name"
                    placeholder="Write your first name here"
                  />
                </div>
                <div className="flex flex-col gap-5 w-full mt-6 md:mt-0 lg:mt-0">
                  <label
                    className="text-black font-Teko font-normal text-[24px] leading-6"
                    htmlFor="name"
                  >
                    Your Last Name
                  </label>
                  <input
                    className="lg:w-full md:w-[320px] w-full h-[56px] pl-10 rounded-[60px] border-[1px] border-[#878383] text-[#2F2D2D] font-Lato text-[16px] font-normal leading-6 outline-none focus:border-primary focus:ring-primary focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-primary transition-all duration-700"
                    type="name"
                    placeholder="Write your last name here"
                  />
                </div>
              </div>
              <div className="lg:flex md:flex gap-5 md:gap-10 2xl:mt-[45px] lg:mt-6 md:mt-[45px] mt-[45px]">
                <div className="flex flex-col gap-5 w-full">
                  <label
                    className="text-black font-Teko font-normal text-[24px] leading-6"
                    htmlFor="name"
                  >
                    Your First Name
                  </label>
                  <input
                    className="lg:w-full md:w-[320px] w-full h-[56px] pl-10 rounded-[60px] border-[1px] border-[#878383] text-[#2F2D2D] font-Lato text-[16px] font-normal leading-6 outline-none focus:border-primary focus:ring-primary focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-primary transition-all duration-700"
                    type="name"
                    placeholder="Write your first name here"
                  />
                </div>
                <div className="flex flex-col gap-5 w-full mt-6 md:mt-0 lg:mt-0">
                  <label
                    className="text-black font-Teko font-normal text-[24px] leading-6"
                    htmlFor="name"
                  >
                    Your Last Name
                  </label>
                  <input
                    className="lg:w-full md:w-[320px] w-full h-[56px] pl-10 rounded-[60px] border-[1px] border-[#878383] text-[#2F2D2D] font-Lato text-[16px] font-normal leading-6 outline-none focus:border-primary focus:ring-primary focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-primary transition-all duration-700"
                    type="name"
                    placeholder="Write your last name here"
                  />
                </div>
              </div>
              <div className="lg:flex md:flex gap-5 md:gap-10 2xl:mt-[45px] lg:mt-6 md:mt-[45px] mt-[45px]">
                <div className="flex flex-col gap-5 w-full">
                  <label
                    className="text-black font-Teko font-normal text-[24px] leading-6"
                    htmlFor="name"
                  >
                    Your First Name
                  </label>
                  <input
                    className="lg:w-full md:w-[320px] w-full h-[56px] pl-10 rounded-[60px] border-[1px] border-[#878383] text-[#2F2D2D] font-Lato text-[16px] font-normal leading-6 outline-none focus:border-primary focus:ring-primary focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-primary transition-all duration-700"
                    type="name"
                    placeholder="Write your first name here"
                  />
                </div>
                <div className="flex flex-col gap-5 w-full mt-6 md:mt-0 lg:mt-0">
                  <label
                    className="text-black font-Teko font-normal text-[24px] leading-6"
                    htmlFor="name"
                  >
                    Your Last Name
                  </label>
                  <input
                    className="lg:w-full md:w-[320px] w-full h-[56px] pl-10 rounded-[60px] border-[1px] border-[#878383] text-[#2F2D2D] font-Lato text-[16px] font-normal leading-6 outline-none focus:border-primary focus:ring-primary focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-primary transition-all duration-700"
                    type="name"
                    placeholder="Write your last name here"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-5 2xl:mt-[45px] lg:mt-6 md:mt-[45px] mt-[45px]">
                <label
                  className="text-black font-Teko font-normal text-[24px] leading-6"
                  htmlFor="email"
                >
                  Your Message
                </label>
                <textarea
                  name=""
                  id=""
                  className="lg:w-full md:w-[680px] w-full h-[140px] pl-10 rounded-[45px] border-[1px] pt-7 border-[#878383] text-[#2F2D2D] font-Lato text-[16px] font-normal leading-6 outline-none focus:border-primary focus:ring-primary focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-primary transition-all duration-700"
                  type="text"
                  placeholder="Write your message  here "
                ></textarea>
              </div>
            </div>
          </div>
        </div>

        {/* ********************  Add property details section end here ************************* */}
      </div>

      {/******************* Image slider section part end here *******************/}
    </div>
  );

  //********************  Add property section end here **************************//
  //******************** ##########################  ********************************//
};

export default AddProperty;

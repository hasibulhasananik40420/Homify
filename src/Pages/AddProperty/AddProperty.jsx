/* eslint-disable no-unused-vars */
import React from "react";
import CommonAction from "../../components/CommonAction/CommonAction";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import details from "../../assets/About-us-image/about-hero.png";
import image1 from "../../assets/Property-image/image1.png";
import { Fade, Zoom } from "react-reveal";

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

        {/******************* Image slider section part end here *******************/}

        {/* ********************  Add property details section start here ************************* */}
        <div className="2xl:pt-32 lg:pt-[100px] md:pt-[80px] pt-16">
          <h1 className="text-[#375E97] text-[32px] font-Teko font-bold leading-8 mb-5">
            Add Property Details
          </h1>
          <div className="lg:flex lg:gap-20 2xl:gap-[121px]">
            <div className="lg:w-[602px] lg:h-[800px] 2xl:h-[907px] md:h-[700px] h-[500px] w-full">
              <Zoom>
                <img
                  style={{ borderRadius: "60px 60px 60px 0px" }}
                  className="lg:w-[602px] lg:h-[800px] 2xl:h-[907px] md:h-[700px] h-[500px] w-full"
                  src={details}
                  alt=""
                />
              </Zoom>
            </div>

            <Fade bottom cascade>
              <div className="lg:w-[716px]">
                <div className="lg:flex md:flex gap-5 md:gap-10 2xl:mt-0 lg:mt-0 md:mt-[45px] mt-[45px]">
                  <div className="flex flex-col gap-5 w-full">
                    <label
                      className="text-black font-Teko font-normal text-[24px] leading-6"
                      htmlFor="name"
                    >
                      Property Address
                    </label>
                    <input
                      className="lg:w-full md:w-[320px] w-full h-[56px] pl-10 rounded-[60px] border-[1px] border-[#878383] text-[#2F2D2D] font-Lato text-[12px] font-normal leading-6 outline-none focus:border-primary focus:ring-primary focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-primary transition-all duration-700"
                      type="name"
                      placeholder="Write your property address"
                    />
                  </div>
                  <div className="flex flex-col gap-5 w-full mt-6 md:mt-0 lg:mt-0">
                    <label
                      className="text-black font-Teko font-normal text-[24px] leading-6"
                      htmlFor="name"
                    >
                      Property’s Asking Price
                    </label>
                    <input
                      className="lg:w-full md:w-[320px] w-full h-[56px] pl-10 rounded-[60px] border-[1px] border-[#878383] text-[#2F2D2D] font-Lato text-[12px] font-normal leading-6 outline-none focus:border-primary focus:ring-primary focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-primary transition-all duration-700"
                      type="name"
                      placeholder="Write your property’s  asking price"
                    />
                  </div>
                </div>

                <div className="lg:flex md:flex gap-5 md:gap-10 2xl:mt-[45px] lg:mt-6 md:mt-[45px] mt-[45px]">
                  <div className="flex flex-col gap-5 w-full">
                    <label
                      className="text-black font-Teko font-normal text-[24px] leading-6"
                      htmlFor="name"
                    >
                      Bedrooms
                    </label>
                    <input
                      className="lg:w-full md:w-[320px] w-full h-[56px] pl-10 rounded-[60px] border-[1px] border-[#878383] text-[#2F2D2D] font-Lato text-[12px] font-normal leading-6 outline-none focus:border-primary focus:ring-primary focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-primary transition-all duration-700"
                      type="name"
                      placeholder="Write your property’s bedroom number"
                    />
                  </div>
                  <div className="flex flex-col gap-5 w-full mt-6 md:mt-0 lg:mt-0">
                    <label
                      className="text-black font-Teko font-normal text-[24px] leading-6"
                      htmlFor="name"
                    >
                      Bathrooms
                    </label>
                    <input
                      className="lg:w-full md:w-[320px] w-full h-[56px] pl-10 rounded-[60px] border-[1px] border-[#878383] text-[#2F2D2D] font-Lato text-[12px] font-normal leading-6 outline-none focus:border-primary focus:ring-primary focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-primary transition-all duration-700"
                      type="name"
                      placeholder="Write your property’s bathroom number"
                    />
                  </div>
                </div>

                <div className="lg:flex md:flex gap-5 md:gap-10 2xl:mt-[45px] lg:mt-6 md:mt-[45px] mt-[45px]">
                  <div className="flex flex-col gap-5 w-full">
                    <label
                      className="text-black font-Teko font-normal text-[24px] leading-6"
                      htmlFor="name"
                    >
                      Area(Sft.)
                    </label>
                    <input
                      className="lg:w-full md:w-[320px] w-full h-[56px] pl-10 rounded-[60px] border-[1px] border-[#878383] text-[#2F2D2D] font-Lato text-[12px] font-normal leading-6 outline-none focus:border-primary focus:ring-primary focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-primary transition-all duration-700"
                      type="name"
                      placeholder="Write your property’s area (Sft.)"
                    />
                  </div>
                  <div className="flex flex-col gap-5 w-full mt-6 md:mt-0 lg:mt-0">
                    <label
                      className="text-black font-Teko font-normal text-[24px] leading-6"
                      htmlFor="name"
                    >
                      Car Parking Capacity
                    </label>
                    <input
                      className="lg:w-full md:w-[320px] w-full h-[56px] pl-10 rounded-[60px] border-[1px] border-[#878383] text-[#2F2D2D] font-Lato text-[12px] font-normal leading-6 outline-none focus:border-primary focus:ring-primary focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-primary transition-all duration-700"
                      type="name"
                      placeholder="Write your  house car parking capacity"
                    />
                  </div>
                </div>
                <div className="lg:flex md:flex gap-5 md:gap-10 2xl:mt-[45px] lg:mt-6 md:mt-[45px] mt-[45px]">
                  <div className="flex flex-col gap-5 w-full">
                    <label
                      className="text-black font-Teko font-normal text-[24px] leading-6"
                      htmlFor="name"
                    >
                      Metro Station Distance
                    </label>
                    <input
                      className="lg:w-full md:w-[320px] w-full h-[56px] pl-10 rounded-[60px] border-[1px] border-[#878383] text-[#2F2D2D] font-Lato text-[12px] font-normal leading-6 outline-none focus:border-primary focus:ring-primary focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-primary transition-all duration-700"
                      type="name"
                      placeholder="Write metro station distance from your house"
                    />
                  </div>
                  <div className="flex flex-col gap-5 w-full mt-6 md:mt-0 lg:mt-0">
                    <label
                      className="text-black font-Teko font-normal text-[24px] leading-6"
                      htmlFor="name"
                    >
                      College Distance
                    </label>
                    <input
                      className="lg:w-full md:w-[320px] w-full h-[56px] pl-10 rounded-[60px] border-[1px] border-[#878383] text-[#2F2D2D] font-Lato text-[12px] font-normal leading-6 outline-none focus:border-primary focus:ring-primary focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-primary transition-all duration-700"
                      type="name"
                      placeholder="Write your college distance from your house "
                    />
                  </div>
                </div>
                <div className="lg:flex md:flex gap-5 md:gap-10 2xl:mt-[45px] lg:mt-6 md:mt-[45px] mt-[45px]">
                  <div className="flex flex-col gap-5 w-full">
                    <label
                      className="text-black font-Teko font-normal text-[24px] leading-6"
                      htmlFor="name"
                    >
                      Primary School Distance
                    </label>
                    <input
                      className="lg:w-full md:w-[320px] w-full h-[56px] pl-10 rounded-[60px] border-[1px] border-[#878383] text-[#2F2D2D] font-Lato text-[12px] font-normal leading-6 outline-none focus:border-primary focus:ring-primary focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-primary transition-all duration-700"
                      type="name"
                      placeholder="Write your primary distance from your house "
                    />
                  </div>
                  <div className="flex flex-col gap-5 w-full mt-6 md:mt-0 lg:mt-0">
                    <label
                      className="text-black font-Teko font-normal text-[24px] leading-6"
                      htmlFor="name"
                    >
                      High Way Road Distance
                    </label>
                    <input
                      className="lg:w-full md:w-[320px] w-full h-[56px] pl-10 rounded-[60px] border-[1px] border-[#878383] text-[#2F2D2D] font-Lato text-[12px] font-normal leading-6 outline-none focus:border-primary focus:ring-primary focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-primary transition-all duration-700"
                      type="name"
                      placeholder="Write your road distance from your house"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-5 2xl:mt-[45px] lg:mt-6 md:mt-[45px] mt-[45px]">
                  <label
                    className="text-black font-Teko font-normal text-[24px] leading-6"
                    htmlFor="email"
                  >
                    Property More Details
                  </label>
                  <textarea
                    name=""
                    id=""
                    className="lg:w-full md:w-[680px] w-full h-[140px] pl-10 rounded-[45px] border-[1px] pt-7 border-[#878383] text-[#2F2D2D] font-Lato text-[12px] font-normal leading-6 outline-none focus:border-primary focus:ring-primary focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-primary transition-all duration-700"
                    type="text"
                    placeholder="Write your property more details  "
                  ></textarea>
                </div>
              </div>
            </Fade>
          </div>
        </div>

        <div className="lg:flex 2xl:gap-[121px] lg:gap-20 2xl:py-32 lg:py-[100px] md:py-[80px] py-16">
          <div className="w-full">
            <h1 className="text-[#375E97] text-[32px] font-Teko font-bold leading-8 mb-5">
              Add Amenities
            </h1>

            <div className="flex flex-col gap-10">
              <Fade bottom cascade>
                <div>
                  <p className="text-black font-Lato font-semibold text-[20px] pb-5">
                    Interior Details
                  </p>

                  <div className="lg:grid grid-cols-3 gap-6 md:flex justify-between =">
                    <div className="flex flex-col gap-4">
                      <div className="flex gap-4 items-center">
                        <input
                          className="w-6 h-6 border-[1px] !rounded-[6px] border-black transition-colors duration-300 ease-in-out"
                          type="checkbox"
                          name="checkbox"
                          id="checkbox"
                        />
                        <p className="text-[16px] font-Lato text-black font-normal leading-6">
                          Stylish Drawing Room
                        </p>
                      </div>
                      <div className="flex gap-4 items-center">
                        <input
                          className="w-6 h-6 border-[1px] !rounded-[6px] border-black transition-colors duration-300 ease-in-out"
                          type="checkbox"
                          name="checkbox"
                          id="checkbox"
                        />
                        <p className="text-[16px] font-Lato text-black font-normal leading-6">
                          Equipped Kichen Room
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4 pt-5 md:pt-0 lg:pt-0">
                      <div className="flex gap-4 items-center">
                        <input
                          className="w-6 h-6 border-[1px] !rounded-[6px] border-black transition-colors duration-300 ease-in-out"
                          type="checkbox"
                          name="checkbox"
                          id="checkbox"
                        />
                        <p className="text-[16px] font-Lato text-black font-normal leading-6">
                          Gym
                        </p>
                      </div>
                      <div className="flex gap-4 items-center">
                        <input
                          className="w-6 h-6 border-[1px] !rounded-[6px] border-black transition-colors duration-300 ease-in-out"
                          type="checkbox"
                          name="checkbox"
                          id="checkbox"
                        />
                        <p className="text-[16px] font-Lato text-black font-normal leading-6">
                          Steam Bath
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4 pt-5 md:pt-0 lg:pt-0">
                      <div className="flex gap-4 items-center">
                        <input
                          className="w-6 h-6 border-[1px] !rounded-[6px] border-black transition-colors duration-300 ease-in-out"
                          type="checkbox"
                          name="checkbox"
                          id="checkbox"
                        />
                        <p className="text-[16px] font-Lato text-black font-normal leading-6">
                          Laundry Facility
                        </p>
                      </div>
                      <div className="flex gap-4 items-center">
                        <input
                          className="w-6 h-6 border-[1px] !rounded-[6px] border-black transition-colors duration-300 ease-in-out"
                          type="checkbox"
                          name="checkbox"
                          id="checkbox"
                        />
                        <p className="text-[16px] font-Lato text-black font-normal leading-6">
                          Equipped Kichen
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
              <Fade bottom cascade>
                <div>
                  <p className="text-black font-Lato font-semibold text-[20px] pb-5">
                    Outdoor Details
                  </p>

                  <div className="lg:grid grid-cols-3 gap-6 md:flex justify-between ">
                    <div className="flex flex-col gap-4">
                      <div className="flex gap-4 items-center">
                        <input
                          className="w-6 h-6 border-[1px] !rounded-[6px] border-black transition-colors duration-300 ease-in-out"
                          type="checkbox"
                          name="checkbox"
                          id="checkbox"
                        />
                        <p className="text-[16px] font-Lato text-black font-normal leading-6">
                          Attached Garage
                        </p>
                      </div>
                      <div className="flex gap-4 items-center">
                        <input
                          className="w-6 h-6 border-[1px] !rounded-[6px] border-black transition-colors duration-300 ease-in-out"
                          type="checkbox"
                          name="checkbox"
                          id="checkbox"
                        />
                        <p className="text-[16px] font-Lato text-black font-normal leading-6">
                          Nice Backyard
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4 pt-5 md:pt-0 lg:pt-0">
                      <div className="flex gap-4 items-center">
                        <input
                          className="w-6 h-6 border-[1px] !rounded-[6px] border-black transition-colors duration-300 ease-in-out"
                          type="checkbox"
                          name="checkbox"
                          id="checkbox"
                        />
                        <p className="text-[16px] font-Lato text-black font-normal leading-6">
                          Badminton Court
                        </p>
                      </div>
                      <div className="flex gap-4 items-center">
                        <input
                          className="w-6 h-6 border-[1px] !rounded-[6px] border-black transition-colors duration-300 ease-in-out"
                          type="checkbox"
                          name="checkbox"
                          id="checkbox"
                        />
                        <p className="text-[16px] font-Lato text-black font-normal leading-6">
                          Hot Bath
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4 pt-5 md:pt-0 lg:pt-0">
                      <div className="flex gap-4 items-center">
                        <input
                          className="w-6 h-6 border-[1px] !rounded-[6px] border-black transition-colors duration-300 ease-in-out"
                          type="checkbox"
                          name="checkbox"
                          id="checkbox"
                        />
                        <p className="text-[16px] font-Lato text-black font-normal leading-6">
                          Pool
                        </p>
                      </div>
                      <div className="flex gap-4 items-center">
                        <input
                          className="w-6 h-6 border-[1px] !rounded-[6px] border-black transition-colors duration-300 ease-in-out"
                          type="checkbox"
                          name="checkbox"
                          id="checkbox"
                        />
                        <p className="text-[16px] font-Lato text-black font-normal leading-6">
                          Font yard
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
              <Fade bottom cascade>
                <div>
                  <p className="text-black font-Lato font-semibold text-[20px] pb-5">
                    Utilities Details
                  </p>

                  <div className="lg:grid grid-cols-3 gap-6 md:flex justify-between">
                    <div className="flex flex-col gap-4">
                      <div className="flex gap-4 items-center">
                        <input
                          className="w-6 h-6 border-[1px] !rounded-[6px] border-black transition-colors duration-300 ease-in-out"
                          type="checkbox"
                          name="checkbox"
                          id="checkbox"
                        />
                        <p className="text-[16px] font-Lato text-black font-normal leading-6">
                          Central A/C
                        </p>
                      </div>
                      <div className="flex gap-4 items-center">
                        <input
                          className="w-6 h-6 border-[1px] !rounded-[6px] border-black transition-colors duration-300 ease-in-out"
                          type="checkbox"
                          name="checkbox"
                          id="checkbox"
                        />
                        <p className="text-[16px] font-Lato text-black font-normal leading-6">
                          Gas Connection
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4 pt-5 md:pt-0 lg:pt-0">
                      <div className="flex gap-4 items-center">
                        <input
                          className="w-6 h-6 border-[1px] !rounded-[6px] border-black transition-colors duration-300 ease-in-out"
                          type="checkbox"
                          name="checkbox"
                          id="checkbox"
                        />
                        <p className="text-[16px] font-Lato text-black font-normal leading-6">
                          Ventilation
                        </p>
                      </div>
                      <div className="flex gap-4 items-center">
                        <input
                          className="w-6 h-6 border-[1px] !rounded-[6px] border-black transition-colors duration-300 ease-in-out"
                          type="checkbox"
                          name="checkbox"
                          id="checkbox"
                        />
                        <p className="text-[16px] font-Lato text-black font-normal leading-6">
                          Electricity
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4 pt-5 md:pt-0 lg:pt-0">
                      <div className="flex gap-4 items-center">
                        <input
                          className="w-6 h-6 border-[1px] !rounded-[6px] border-black transition-colors duration-300 ease-in-out"
                          type="checkbox"
                          name="checkbox"
                          id="checkbox"
                        />
                        <p className="text-[16px] font-Lato text-black font-normal leading-6">
                          Heating System
                        </p>
                      </div>
                      <div className="flex gap-4 items-center">
                        <input
                          className="w-6 h-6 border-[1px] !rounded-[6px] border-black transition-colors duration-300 ease-in-out"
                          type="checkbox"
                          name="checkbox"
                          id="checkbox"
                        />
                        <p className="text-[16px] font-Lato text-black font-normal leading-6">
                          Water Supply
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
              <Fade bottom cascade>
                <div>
                  <p className="text-black font-Lato font-semibold text-[20px] pb-5">
                    Other Features
                  </p>

                  <div className="lg:grid grid-cols-3 gap-6 md:flex justify-between">
                    <div className="flex flex-col gap-4">
                      <div className="flex gap-4 items-center">
                        <input
                          className="w-6 h-6 border-[1px] !rounded-[6px] border-black transition-colors duration-300 ease-in-out"
                          type="checkbox"
                          name="checkbox"
                          id="checkbox"
                        />
                        <p className="text-[16px] font-Lato text-black font-normal leading-6">
                          Smoke Detector
                        </p>
                      </div>
                      <div className="flex gap-4 items-center">
                        <input
                          className="w-6 h-6 border-[1px] !rounded-[6px] border-black transition-colors duration-300 ease-in-out"
                          type="checkbox"
                          name="checkbox"
                          id="checkbox"
                        />
                        <p className="text-[16px] font-Lato text-black font-normal leading-6">
                          Washer and Dryer
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4 pt-5 md:pt-0 lg:pt-0">
                      <div className="flex gap-4 items-center">
                        <input
                          className="w-6 h-6 border-[1px] !rounded-[6px] border-black transition-colors duration-300 ease-in-out"
                          type="checkbox"
                          name="checkbox"
                          id="checkbox"
                        />
                        <p className="text-[16px] font-Lato text-black font-normal leading-6">
                          Elevator
                        </p>
                      </div>
                      <div className="flex gap-4 items-center">
                        <input
                          className="w-6 h-6 border-[1px] !rounded-[6px] border-black transition-colors duration-300 ease-in-out"
                          type="checkbox"
                          name="checkbox"
                          id="checkbox"
                        />
                        <p className="text-[16px] font-Lato text-black font-normal leading-6">
                          Wheel Chair Access
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4 pt-5 md:pt-0 lg:pt-0">
                      <div className="flex gap-4 items-center">
                        <input
                          className="w-6 h-6 border-[1px] !rounded-[6px] border-black transition-colors duration-300 ease-in-out"
                          type="checkbox"
                          name="checkbox"
                          id="checkbox"
                        />
                        <p className="text-[16px] font-Lato text-black font-normal leading-6">
                          Fireplace
                        </p>
                      </div>
                      <div className="flex gap-4 items-center">
                        <input
                          className="w-6 h-6 border-[1px] !rounded-[6px] border-black transition-colors duration-300 ease-in-out"
                          type="checkbox"
                          name="checkbox"
                          id="checkbox"
                        />
                        <p className="text-[16px] font-Lato text-black font-normal leading-6">
                          WiFi Connection
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>

            <button className="bg-[#F90] text-white text-[16px] font-Lato font-bold w-[245px] h-[56px] custom-border-property mt-10 hover:bg-primary duration-500">
              Submit Property
            </button>
          </div>
          <Zoom>
            <img
              style={{ borderRadius: "60px 60px 60px 0px" }}
              className="2xl:w-[658.971px] lg:w-[550px] md:w-full md:h-[730px] h-[500px] w-full mt-20 md:mt-20 lg:mt-0 2xl:mt-0"
              src={image1}
              alt=""
            />
          </Zoom>
        </div>

        {/* ********************  Add property details section end here ************************* */}
      </div>
    </div>
  );

  //********************  Add property section end here **************************//
  //******************** ##########################  ********************************//
};

export default AddProperty;

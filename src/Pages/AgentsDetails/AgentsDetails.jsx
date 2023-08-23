/* eslint-disable no-unused-vars */
import React from "react";
import CommonAction from "../../components/CommonAction/CommonAction";
import contact from "../../../src/assets/Agents-images/contact-agent.png";
import agent from "../../../src/assets/Agents-images/single-agents.png";
import { FaFacebookF, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import { AiOutlineMail, AiOutlineTwitter } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
const AgentsDetails = () => {
  return (
    <div>
      {/********************** common action section start here ****************************/}
      <CommonAction
        title={" Agents Details"}
        subTitle={" Home> Agents Details"}
      />
      {/********************** common action section end  here ****************************/}

      <div className="max-w-container mx-auto lg:px-8 2xl:px-0 px-4 md:px-8 2xl:pt-32 lg:pt-[100px] md:pt-[80px] pt-16">
      

       <div className="lg:flex lg:justify-between 2xl:gap-[121px]">
       <div className="lg:w-[550px] w-full 2xl:h-[783px] lg:h-[650px] md:h-[700px] relative">
          <div className="group">
            <img className="lg:w-[550px] w-full 2xl:h-[783px] lg:h-[650px] md:h-[700px] cursor-pointer" src='https://img.freepik.com/free-photo/handsome-blond-young-man-posing-studio_158595-3385.jpg?size=626&ext=jpg&ga=GA1.1.1166836568.1647150580&semt=ais' alt="" />
            <div className="bg-[#181C21] lg:w-[550px] w-full h-[150px] absolute bottom-0 transform translate-y-full transition-transform duration-1000 group-hover:translate-y-0 hidden group-hover:block cursor-pointer">
              <h1 className="text-[20px] font-Lato font-normal text-white text-center pt-8">
                Connect With Our Agent
              </h1>
              <div className="flex gap-5 justify-center mt-5">
                <span className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-blue-600 hover:bg-secondaryColor duration-500 transform ease-in-out hover:translate-y-2">
                  <FaFacebookF className="text-white text-[25px]" />
                </span>

                <span className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-blue-600 hover:bg-secondaryColor duration-500 transform ease-in-out hover:translate-y-2">
                  <FaLinkedinIn className="text-white text-[25px]" />
                </span>

                <span className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-blue-600 hover:bg-secondaryColor duration-500 transform ease-in-out hover:translate-y-2">
                  <AiOutlineTwitter className="text-white text-[25px]" />
                </span>

                <span className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-blue-600 hover:bg-secondaryColor duration-500 transform ease-in-out hover:translate-y-2">
                  <FaTelegramPlane className="text-white text-[25px]" />
                </span>
              </div>
            </div>
          </div>
        </div>



            <div className="2xl:w-[691px] lg:w-[630px] w-full mt-16 md:mt-16 lg:mt-0 2xl:mt-6">
               <h1 className="text-[#504594] text-[32px] font-Teko font-bold leading-8">Jone Michal</h1>

                <p className="text-black text-[20px] font-Lato font-bold leading-8 mt-3">Real Estate Agents</p>


                <p className="2xl:w-[691px] lg:w-[630px] w-full text-[#4E5A6] text-[16px] font-Lato font-normal mt-10">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis aspernatur, aliquid explicabo veniam earum provident? Quia eaque adipisci, pariatur vero provident neque in voluptatem enim ut libero asperiores tempore consectetur?
                </p>

              <p className="2xl:w-[691px] lg:w-[630px] w-full text-[#4E5A6] text-[16px] font-Lato font-normal mt-10">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis aspernatur, aliquid explicabo veniam earum provident? Quia eaque adipisci, pariatur vero provident neque in voluptatem enim ut libero asperiores tempore consectetur? Quia eaque adipisci, pariatur vero provident neque in voluptatem enim ut libero asperiores tempore consectetur?
                </p>


                <p className="2xl:w-[691px] lg:w-[630px] w-full text-[#4E5A6] text-[16px] font-Lato font-normal mt-10">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis aspernatur, aliquid explicabo veniam earum provident? Quia eaque adipisci, pariatur vero provident neque in voluptatem enim ut libero 
                </p>

               <p className="2xl:w-[691px] lg:w-[630px] w-full text-[#4E5A6] text-[16px] font-Lato font-normal mt-10 2xl:block hidden">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis aspernatur, aliquid explicabo veniam earum provident? Quia eaque adipisci, pariatur vero provident neque in voluptatem enim ut liberoQuia eaque adipisci, pariatur vero provident neque in voluptatem enim ut libero 
                </p>

              




                <div className="flex items-center gap-5 mt-8">
                 <span className="w-[40px] h-[40px] rounded flex justify-center items-center bg-primary cursor-pointer">
                 <SlLocationPin className="text-white text-[20px]" />
                 </span>
                <h2 className=" text-[#0A0F06] text-[20px] font-Lato font-normal">
                  234/1/B, XYZ Ave. West Newyork,
                </h2>
              </div>

              <div className="flex items-center gap-5 mt-5">
              <span className="w-[40px] h-[40px] rounded flex justify-center items-center bg-primary cursor-pointer">
                 <BsTelephone className="text-white text-[20px]" />
                 </span>
               
                <span>
                  <h2 className=" text-[#0A0F06] text-[20px] font-Lato font-normal">
                    +123 456 66778
                  </h2>
                  <h2 className=" text-[#0A0F06] text-[20px] font-Lato font-normal">
                    +123 467 56778
                  </h2>
                </span>
              </div>

              <div className="flex items-center gap-5 mt-4">
              <span className="w-[40px] h-[40px] rounded flex justify-center items-center bg-primary cursor-pointer">
                 <AiOutlineMail className="text-white text-[20px]" />
                 </span>
                <span>
                  <h2 className=" text-[#0A0F06] text-[20px] font-Lato font-normal">
                    propertyadmin@gmail.com
                  </h2>
                  <h2 className=" text-[#0A0F06] text-[20px] font-Lato font-normal">
                    propertyceomail@gmail.com
                  </h2>
                </span>
              </div>









            </div>



       </div>


        {/********************* Contact With Our Agent section statr here ********************/}
        <div className="2xl:pt-32 lg:pt-[100px] md:pt-[80px] pt-16">
          <h1 className="text-primary font-Teko font-bold text-[56px] leading-[56px] text-center">
            Contact With Our Agent
          </h1>

          <p className="text-black font-Lato font-normal leading-10 text-[20px] text-center lg:w-[1208px] mx-auto w-full mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            hendrerit quis libero eu tempor. Aliquam vehicula dolor sed semper
            hendrerit. Morbi erat odio, laoreet id tempus ut, scelerisque sed
            libero. Morbi fermentum rutrum nulla, sit amet iaculis urna
            tincidunt non.
          </p>

          <div className="lg:flex lg:flex-row-reverse gap-[122px] mt-20">
            <div>
            
              
               <img
                className="lg:w-[884px] lg:h-[884px] w-full h-[500px] md:w-full md:h-[500px] md:mx-auto custom-border"
                src='https://img.freepik.com/premium-photo/skyscraper-burning-nighttime-contemporary-tall-skyscraper-with-bright-flame-night-generative-ai_629315-10924.jpg?size=626&ext=jpg&ga=GA1.2.1166836568.1647150580&semt=ais'
                alt=""
              />
            </div>

            <div className="md:w-[600px] md:mx-auto">
              <form>
                <div className="flex flex-col gap-5 mt-[45px]">
                  <label
                    className="text-black font-Teko font-normal text-[24px] leading-6"
                    htmlFor="email"
                  >
                    Your Name
                  </label>
                  <input
                    className="lg:w-[429px] md:w-[550px] w-full h-[56px] pl-10 rounded-[60px] border-[1px] border-[#878383] text-[#2F2D2D] font-Lato text-[16px] font-normal leading-6 outline-none focus:border-primary focus:ring-primary focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-primary transition-all duration-700"
                    type="text"
                    placeholder="Write your name here"
                  />
                </div>

                <div className="flex flex-col gap-5 mt-[45px]">
                  <label
                    className="text-black font-Teko font-normal text-[24px] leading-6"
                    htmlFor="email"
                  >
                    Your Email
                  </label>
                  <input
                    className="lg:w-[429px] md:w-[550px] w-full h-[56px] pl-10 rounded-[60px] border-[1px] border-[#878383] text-[#2F2D2D] font-Lato text-[16px] font-normal leading-6 outline-none focus:border-primary focus:ring-primary focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-primary transition-all duration-700"
                    type="email"
                    placeholder="Write your email id"
                  />
                </div>

                <div className="flex flex-col gap-5 mt-[45px]">
                  <label
                    className="text-black font-Teko font-normal text-[24px] leading-6"
                    htmlFor="email"
                  >
                    Your Mobile Number
                  </label>
                  <input
                    className="lg:w-[429px] md:w-[550px] w-full h-[56px] pl-10 rounded-[60px] border-[1px] border-[#878383] text-[#2F2D2D] font-Lato text-[16px] font-normal leading-6 outline-none focus:border-primary focus:ring-primary focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-primary transition-all duration-700"
                    type="text"
                    placeholder="Write your mobile number here"
                  />
                </div>

                <div className="flex flex-col gap-5 mt-[45px]">
                  <label
                    className="text-black font-Teko font-normal text-[24px] leading-6"
                    htmlFor="email"
                  >
                    Subject
                  </label>
                  <input
                    className="lg:w-[429px] md:w-[550px] w-full h-[56px] pl-10 rounded-[60px] border-[1px] border-[#878383] text-[#2F2D2D] font-Lato text-[16px] font-normal leading-6 outline-none focus:border-primary focus:ring-primary focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-primary transition-all duration-700"
                    type="text"
                    placeholder="Write your message subject"
                  />
                </div>

                <div className="flex flex-col gap-5 mt-[45px]">
                  <label
                    className="text-black font-Teko font-normal text-[24px] leading-6"
                    htmlFor="email"
                  >
                    Your Message
                  </label>
                  <textarea
                    name=""
                    id=""
                    className="lg:w-[429px] md:w-[550px] w-full h-[140px] pl-10 rounded-[45px] border-[1px] pt-7 border-[#878383] text-[#2F2D2D] font-Lato text-[16px] font-normal leading-6 outline-none focus:border-primary focus:ring-primary focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-primary transition-all duration-700"
                    type="text"
                    placeholder="Write your message "
                  ></textarea>
                </div>

                <button className="bg-[#F90] text-white text-[16px] font-Lato font-bold w-[210px] h-[56px] custom-border-property mt-8 hover:bg-primary duration-500">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentsDetails;

/* eslint-disable no-unused-vars */
import React from "react";
import CommonAction from "../../components/CommonAction/CommonAction";
import contact from "../../../src/assets/Agents-images/contact-agent.png";
import agent from "../../../src/assets/Agents-images/single-agents.png";
import { FaFacebookF, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
const AgentsDetails = () => {
  return (
    <div>
      {/********************** common action section start here ****************************/}
      <CommonAction
        title={" Agents Details"}
        subTitle={" Home> Agents Details"}
      />
      {/********************** common action section end  here ****************************/}

      <div className="max-w-container mx-auto lg:px-8 2xl:px-0 px-4 md:px-4 ">
        {/* <div className='w-[550px] h-[783px] relative'>
    <div className='group'>
        <img className='w-[550px] h-[783px]' src={agent} alt="" />
        <div className='bg-[#181C21] w-[550px] h-[150px] absolute bottom-0 transform translate-y-full transition-transform duration-500 opacity-0 group-hover:opacity-100 group-hover:translate-y-0'>
            <h1 className='text-[20px] font-Lato font-normal text-white text-center pt-8'>Connect With Our Agent</h1>
            <div className='flex gap-5 justify-center mt-5'>
                <span className='w-[40px] h-[40px] rounded-full flex justify-center items-center bg-blue-600 hover:bg-secondaryColor duration-500 transform ease-in-out hover:translate-y-2'>
                    <FaFacebookF className='text-white text-[25px]' />
                </span> 

                <span className='w-[40px] h-[40px] rounded-full flex justify-center items-center bg-blue-600 hover:bg-secondaryColor duration-500 transform ease-in-out hover:translate-y-2'>
                    <FaLinkedinIn className='text-white text-[25px]' />
                </span>

                <span className='w-[40px] h-[40px] rounded-full flex justify-center items-center bg-blue-600 hover:bg-secondaryColor duration-500 transform ease-in-out hover:translate-y-2'>
                    <AiOutlineTwitter className='text-white text-[25px]' />
                </span> 

                <span className='w-[40px] h-[40px] rounded-full flex justify-center items-center bg-blue-600 hover:bg-secondaryColor duration-500 transform ease-in-out hover:translate-y-2'>
                    <FaTelegramPlane className='text-white text-[25px]' />
                </span>
            </div>
        </div>
    </div>
        </div> */}

        <div className="lg:w-[550px] w-full h-[783px] relative">
          <div className="group">
            <img className="lg:w-[550px] w-full h-[783px]" src={agent} alt="" />
            <div className="bg-[#181C21] lg:w-[550px] w-full h-[150px] absolute bottom-0 transform translate-y-full transition-transform duration-1000 group-hover:translate-y-0 hidden group-hover:block">
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

        {/********************* Contact With Our Agent section statr here ********************/}
        <div className="mt-32">
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
                  <img className="lg:w-[884px] lg:h-[884px] w-full h-[500px] md:w-[660px] md:h-[500px] md:mx-auto custom-border" src={contact} alt="" />
                 </div>



                <div className="md:w-[450px] md:mx-auto">
                <form>
            <div className="flex flex-col gap-5 mt-[45px]">
              <label
                className="text-black font-Teko font-normal text-[24px] leading-6"
                htmlFor="email"
              >
                Your Name
              </label>
              <input
                className="lg:w-[429px] md:w-[429px] w-full h-[56px] pl-10 rounded-[60px] border-[1px] border-[#878383] text-[#2F2D2D] font-Lato text-[16px] font-normal leading-6 outline-none focus:border-primary focus:ring-primary focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-primary transition-all duration-700"
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
                className="lg:w-[429px] md:w-[429px] w-full h-[56px] pl-10 rounded-[60px] border-[1px] border-[#878383] text-[#2F2D2D] font-Lato text-[16px] font-normal leading-6 outline-none focus:border-primary focus:ring-primary focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-primary transition-all duration-700"
                type="email"
                placeholder="Write your email id"
              />
            </div>


                <div className="flex flex-col gap-5 mt-[45px]">
              <label
                className="text-black font-Teko font-normal text-[24px] leading-6"
                htmlFor="email"
              >
                Your  Mobile Number
              </label>
              <input
                className="lg:w-[429px] md:w-[429px] w-full h-[56px] pl-10 rounded-[60px] border-[1px] border-[#878383] text-[#2F2D2D] font-Lato text-[16px] font-normal leading-6 outline-none focus:border-primary focus:ring-primary focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-primary transition-all duration-700"
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
                className="lg:w-[429px] md:w-[429px] w-full h-[56px] pl-10 rounded-[60px] border-[1px] border-[#878383] text-[#2F2D2D] font-Lato text-[16px] font-normal leading-6 outline-none focus:border-primary focus:ring-primary focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-primary transition-all duration-700"
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
                <textarea name="" id="" className="lg:w-[429px] md:w-[429px] w-full h-[140px] pl-10 rounded-[45px] border-[1px] pt-7 border-[#878383] text-[#2F2D2D] font-Lato text-[16px] font-normal leading-6 outline-none focus:border-primary focus:ring-primary focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-primary transition-all duration-700"
                type="text" placeholder="Write your message "></textarea>
              
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

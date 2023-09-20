/* eslint-disable react/prop-types */
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";

const OurAgentsCardTwo = ({ data }) => {
  const { image, name, email, phone, agentTitle } = data;

  return (
    <div>
      {/******************* agent card start here *******************/}

      <div className="2xl:w-[466px] lg:w-[400px] md:w-[350px] w-full relative">
       
       <img
          className="2xl:w-[466px] lg:w-[400px] md:w-[350px] w-full h-[420px]"
          src={image}
          alt=""
        />
     

        {/********************** socal media icon start here *************************/}

        <div className="flex gap-5 justify-center absolute inset-0 pt-20 items-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-500 cursor-pointer">
          <span className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-blue-600 hover:bg-secondaryColor duration-500 transform ease-in-out hover:translate-y-2 cursor-pointer">
            <FaFacebookF className="text-white text-[25px]" />
          </span>

          <span className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-blue-600 hover:bg-secondaryColor duration-500 transform ease-in-out hover:translate-y-2 cursor-pointer">
            <FaLinkedinIn className="text-white text-[25px]" />
          </span>

          <span className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-blue-600 hover:bg-secondaryColor duration-500 transform ease-in-out hover:translate-y-2 cursor-pointer">
            <AiOutlineTwitter className="text-white text-[25px]" />
          </span>

          <span className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-blue-600 hover:bg-secondaryColor duration-500 transform ease-in-out hover:translate-y-2 cursor-pointer">
            <FaTelegramPlane className="text-white text-[25px]" />
          </span>
        </div>

        {/********************** socal media icon end here *************************/}

        <div
          className="bg-white pt-6 lg:pl-12 2xl:pl-20 md:pl-6 pl-6 pb-8"
          style={{ boxShadow: "0px 4px 45px 0px rgba(155, 153, 153, 0.30)" }}
        >
          <h1 className="text-primary text-[32px] font-Teko font-bold">
            {name}
          </h1>
          <p className="text-black text-[20px] font-Lato font-bold ">
            {agentTitle}
          </p>
          <p className="text-black text-[20px] font-Lato font-bold pt-[2px]">
            Email: {email}
          </p>
          <p className="text-black text-[20px] font-Lato font-bold pt-[2px]">
            Phone: {phone}
          </p>
        </div>

        {/******************* agent card end here *******************/}
      </div>
    </div>
  );
};

export default OurAgentsCardTwo;

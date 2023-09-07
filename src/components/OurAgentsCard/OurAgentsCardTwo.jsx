import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import agents1 from "../../assets/Agents-images/agent-v2.png";
import agents2 from "../../assets/Agents-images/agent-v2-2.png";
import agents3 from "../../assets/Agents-images/agent-v2-3.png";
import agents4 from "../../assets/Agents-images/agent-v4.png";
import agents5 from "../../assets/Agents-images/agent-v5.png";
import agents6 from "../../assets/Agents-images/agent-v6.png";

const OurAgentsCardTwo = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3  gap-x-[20px] gap-y-[50px] justify-items-center pt-20">
       
        {/******************* agent card 1 start here *******************/}
        <div className="2xl:w-[466px] lg:w-[400px] md:w-[350px] w-full relative">
          <img
            className="2xl:w-[466px] lg:w-[400px] md:w-[350px] w-full h-[420px]"
            src={agents1}
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
              Water Smith
            </h1>
            <p className="text-black text-[20px] font-Lato font-bold ">
              Real Estate Agent
            </p>
            <p className="text-black text-[20px] font-Lato font-bold pt-[2px]">
              Email: watersmiths@gmail.com
            </p>
            <p className="text-black text-[20px] font-Lato font-bold pt-[2px]">
              Phone: +12343 896 678
            </p>
          </div>
        </div>
        {/******************* agent card 1 end here *******************/}


        {/******************* agent card 2 start here *******************/}
        <div className="2xl:w-[466px] lg:w-[400px] md:w-[350px] w-full relative">
          <img
            className="2xl:w-[466px] lg:w-[400px] md:w-[350px] w-full h-[420px]"
            src={agents2}
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
              Lilly Little
            </h1>
            <p className="text-black text-[20px] font-Lato font-bold ">
              Real Estate Agent
            </p>
            <p className="text-black text-[20px] font-Lato font-bold pt-[2px]">
              Email: lillylittle@gmail.com
            </p>
            <p className="text-black text-[20px] font-Lato font-bold pt-[2px]">
              Phone: +12343 896 678
            </p>
          </div>
        </div>
        {/******************* agent card 2 end here *******************/}



        {/******************* agent card 3 start here *******************/}
        <div className="2xl:w-[466px] lg:w-[400px] md:w-[350px] w-full relative">
          <img
            className="2xl:w-[466px] lg:w-[400px] md:w-[350px] w-full h-[420px]"
            src={agents3}
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
              Jellah Herman
            </h1>
            <p className="text-black text-[20px] font-Lato font-bold ">
              Real Estate Agent
            </p>
            <p className="text-black text-[20px] font-Lato font-bold pt-[2px]">
              Email: jellahherman@gmail.com
            </p>
            <p className="text-black text-[20px] font-Lato font-bold pt-[2px]">
              Phone: +12343 896 678
            </p>
          </div>
        </div>
        {/******************* agent card 3 end here *******************/}


        {/******************* agent card 4 start here *******************/}
        <div className="2xl:w-[466px] lg:w-[400px] md:w-[350px] w-full relative">
          <img
            className="2xl:w-[466px] lg:w-[400px] md:w-[350px] w-full h-[420px]"
            src={agents4}
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
            Hassie Lander
            </h1>
            <p className="text-black text-[20px] font-Lato font-bold ">
              Real Estate Agent
            </p>
            <p className="text-black text-[20px] font-Lato font-bold pt-[2px]">
              Email: hassielander@gmail.com
            </p>
            <p className="text-black text-[20px] font-Lato font-bold pt-[2px]">
              Phone: +12343 896 678
            </p>
          </div>
        </div>
        {/******************* agent card 4 end here *******************/}



        {/******************* agent card 5 start here *******************/}
        <div className="2xl:w-[466px] lg:w-[400px] md:w-[350px] w-full relative">
          <img
            className="2xl:w-[466px] lg:w-[400px] md:w-[350px] w-full h-[420px]"
            src={agents5}
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
            Ricki Martine
            </h1>
            <p className="text-black text-[20px] font-Lato font-bold ">
              Real Estate Agent
            </p>
            <p className="text-black text-[20px] font-Lato font-bold pt-[2px]">
              Email: rickimartine@gmail.com
            </p>
            <p className="text-black text-[20px] font-Lato font-bold pt-[2px]">
              Phone: +12343 896 678
            </p>
          </div>
        </div>
        {/******************* agent card 5 end here *******************/}



        {/******************* agent card 6 start here *******************/}
        <div className="2xl:w-[466px] lg:w-[400px] md:w-[350px] w-full relative">
          <img
            className="2xl:w-[466px] lg:w-[400px] md:w-[350px] w-full h-[420px]"
            src={agents6}
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
            Camelia Rose Star
            </h1>
            <p className="text-black text-[20px] font-Lato font-bold ">
              Real Estate Agent
            </p>
            <p className="text-black text-[20px] font-Lato font-bold pt-[2px]">
              Email: cameliarosestar@gmail.com
            </p>
            <p className="text-black text-[20px] font-Lato font-bold pt-[2px]">
              Phone: +12343 896 678
            </p>
          </div>
        </div>
        {/******************* agent card 6 end here *******************/}

       

     

        
      </div>
    </div>
  );
};

export default OurAgentsCardTwo;

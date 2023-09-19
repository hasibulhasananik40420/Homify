/* eslint-disable react/prop-types */
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
const OurAgentsCard = ({agent}) => {

  const {image,name,phone,email,news} = agent

  return (
   
      <div>
        {/****************** agent card start here  ******************/}
        <div className="bg-[#504594] 2xl:w-[345px] lg:w-[290px] md:w-[345px] w-[300px] h-[420px] custom-border relative hover:bg-secondaryColor hover:cursor-pointer duration-500 transform ease-in-out group">
          <div className="pt-[105px] pl-8 2xl:pl-[70px] md:pl-[70px] lg:pl-[40px]">
            <h1 className="text-[20px] font-Teko font-bold text-white">
              {name}
            </h1>
            <p className="text-[16px] font-Lato font-normal text-white mt-[9px]">
              {news}
            </p>

            <div className="flex gap-3 items-center mt-5">
              <BsTelephone className="text-white text-3xl" />
              <p className="text-[16px] font-Lato font-normal text-white mt-[9px]">
               {phone}
              </p>
            </div>
            <div className="flex gap-3 items-center mt-5">
              <MdOutlineMailOutline className="text-white text-3xl" />
              <p className="text-[16px] font-Lato font-normal text-white">
                {email}
              </p>
            </div>

            <button className="w-[190px] h-[56px] bg-[#F90] text-white font-Lato font-bold text-[16px] text-center custom-border-button flex-shrink-0 mt-[30px] hover:bg-[#504594] border border-[#F90] transform duration-500 group-hover:bg-primary">
              Contact
            </button>
          </div>
          <img
            className="absolute top-[-50px] md:top-[-80px] lg:top-[-55px] 2xl:top-[-80px] left-1/2 transform -translate-x-1/2 2xl:w-[150px] 2xl:h-[150px] lg:w-[110px] lg:h-[110px] md:w-[150px] md:h-[150px] w-[100px] h-[100px] rounded-full"
            src={image}
            alt=""
          />
        </div>
        {/****************** agent card end here  ******************/}

   
{/*    
    <div className="bg-[#504594] 2xl:w-[345px] lg:w-[290px] md:w-[345px] w-full h-[420px] custom-border relative hover:bg-secondaryColor duration-500 transform ease-in-out group">
        <div className="flex flex-col 2xl:ml-20 lg:ml-10 ml-20 mt-[120px]">
          <h1 className="text-[20px] font-Teko font-bold text-white">
            John Smith
          </h1>
          <p className="text-[16px] font-Lato font-normal text-white mt-[5px]">
            Real Estate Agent
          </p>

          <div className="flex gap-3 items-center mt-4">
            <BsTelephone className="text-white text-2xl" />
            <p className="text-[16px] font-Lato font-normal text-white mt-[5px]">
              0123 786 88567
            </p>
          </div>
          <div className="flex gap-3 items-center mt-4">
            <MdOutlineMailOutline className="text-white text-2xl" />
            <p className="text-[16px] font-Lato font-normal text-white">
              mackalexa@gmail.com
            </p>
          </div>

          <button className="w-[190px] h-[56px] bg-[#F90] text-white font-Lato font-bold text-[16px] text-center custom-border-button flex-shrink-0 mt-[30px] hover:bg-[#504594] border border-[#F90] transform duration-500 group-hover:bg-primary">
            Contact
          </button>
        </div>
        <img
          className="absolute top-[-90px] left-[76px] md:left-[76px] lg:left-[45px] 2xl:left-[74px] w-[200px] h-[200px]  rounded-full flex-shrink-0"
          src={agent1}
          alt=""
        />
      </div>
  
    */}
  
   
   
   
   
   
  
   
   
   
   
   
   
   
   
   
    </div>
  );
};

export default OurAgentsCard;

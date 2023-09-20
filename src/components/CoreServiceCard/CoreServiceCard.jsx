import {FaHandsHelping} from 'react-icons/fa'
import {SlHandbag} from 'react-icons/sl'
import { IoNewspaperOutline } from 'react-icons/io5';
import { FcBusinessman } from 'react-icons/fc';
const CoreServiceCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4 justify-items-center 2xl:gap-x-5 lg:gap-x-10 md:gap-x-5 gap-y-20 mt-20 ">
     
     
      {/************** Core service card 1 start here ********************/}
      <div className="2xl:w-[345px] lg:w-[290px] md:w-[320px] w-full h-[420px] bg-[#fffefe] core-service group hover:bg-primary duration-500 hover:cursor-pointer">
        <div className="flex justify-center">
        <FaHandsHelping className="text-[100px] group-hover:text-white mt-16"/>
        </div>
        <div className="2xl:ml-[48px] lg:ml-[25px] md:ml-[30px] ml-[48px] mt-[45px]">
          <h1
            className={`text-primary font-Teko text-[20px] font-bold group-hover:text-white`}
          >
            Buy Property
          </h1>
          <p
            className={`font-Lato font-normal text-[16px] leading-8 w-[260px] mt-5 group-hover:text-white`}
          >
            Lorem ipsum dolor sit amet. Aut vol up sunt suscipit qui Quis illo
            sed quam ipsum. At temporibus autem
          </p>
        </div>
      </div>
      {/************** Core service card 1 end here ********************/}

      {/************** Core service card 2 start here ********************/}
      <div className="2xl:w-[345px] lg:w-[290px] md:w-[320px] w-full h-[420px] bg-secondaryColor core-service hover:bg-primary duration-500 hover:cursor-pointer">
        <div className="flex justify-center">
        <SlHandbag className="text-[90px] text-white mt-16"/>
        </div>
        <div className="2xl:ml-[48px] lg:ml-[25px] md:ml-[30px] ml-[48px] mt-[45px]">
          <h1 className="text-white font-Teko text-[20px] font-bold">
           Sell Property
          </h1>
          <p className="text-white font-Lato font-normal text-[16px] leading-8 w-[260px] mt-5">
            Lorem ipsum dolor sit amet. Aut vol up sunt suscipit qui Quis illo
            sed quam ipsum. At temporibus autem{" "}
          </p>
        </div>
      </div>

      {/************** Core service card 2 end here ********************/}

      {/************** Core service card 3 start here ********************/}
      <div className="2xl:w-[345px] lg:w-[290px] md:w-[320px] w-full h-[420px] bg-[#fffefe] core-service group hover:bg-primary duration-500 hover:cursor-pointer">
        <div className="flex justify-center">
        <IoNewspaperOutline className="text-[90px] group-hover:text-white mt-16"/>
        </div>
        <div className="2xl:ml-[48px] lg:ml-[25px] md:ml-[30px] ml-[48px] mt-[45px]">
          <h1
            className={`text-primary font-Teko text-[20px] font-bold group-hover:text-white`}
          >
           Legal/Documentation Help
          </h1>
          <p
            className={`font-Lato font-normal text-[16px] leading-8 w-[260px] mt-5 group-hover:text-white`}
          >
            Lorem ipsum dolor sit amet. Aut vol up sunt suscipit qui Quis illo
            sed quam ipsum. At temporibus autem
          </p>
        </div>
      </div>

      {/************** Core service card 3 end here ********************/}

      {/************** Core service card 4 start here ********************/}
      <div className="2xl:w-[345px] lg:w-[290px] md:w-[320px] w-full h-[420px] bg-[#fffefe] core-service group hover:bg-primary duration-500 hover:cursor-pointer">
        <div className="flex justify-center">
        <FcBusinessman className="text-[90px] group-hover:text-white mt-16"/>
        </div>
        <div className="2xl:ml-[48px] lg:ml-[25px] md:ml-[30px] ml-[48px] mt-[45px]">
          <h1
            className={`text-primary font-Teko text-[20px] font-bold group-hover:text-white`}
          >
           Agent Consultancy
          </h1>
          <p
            className={`font-Lato font-normal text-[16px] leading-8 w-[260px] mt-5 group-hover:text-white`}
          >
            Lorem ipsum dolor sit amet. Aut vol up sunt suscipit qui Quis illo
            sed quam ipsum. At temporibus autem
          </p>
        </div>
      </div>

      {/************** Core service card 4 end here ********************/}
    </div>
  );
};

export default CoreServiceCard;

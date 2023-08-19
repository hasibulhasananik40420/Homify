import buy from "../../../src/assets/Core-service-image/buy.svg";
const CoreServiceCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4 justify-items-center 2xl:gap-x-5 lg:gap-x-10 md:gap-x-5 gap-y-20 mt-20 ">
      {/************** Core service card 1 start here ********************/}
      <div className="2xl:w-[345px] lg:w-[290px] md:w-[320px] w-full h-[420px] bg-[#fffefe] core-service group hover:bg-primary duration-500">
    <div className='flex justify-center'>
        <img className='mt-20' src={buy} alt="" />
    </div>
    <div className='2xl:ml-[48px] lg:ml-[25px] md:ml-[30px] ml-[48px] mt-[45px]'>
        <h1 className={`text-primary font-Teko text-[20px] font-bold group-hover:text-white`}>Buy Property</h1>
        <p className={`font-Lato font-normal text-[16px] leading-8 w-[260px] mt-5 group-hover:text-white`}>
            Lorem ipsum dolor sit amet. Aut vol up sunt suscipit qui Quis illo sed quam ipsum. At temporibus autem
        </p>
    </div>
</div>


      {/************** Core service card 1 end here ********************/}

      {/************** Core service card 1 start here ********************/}
      <div className="2xl:w-[345px] lg:w-[290px] md:w-[320px] w-full h-[420px] bg-primary core-service">
        <div className="flex justify-center">
          <img className=" mt-20" src={buy} alt="" />
        </div>
        <div className="2xl:ml-[48px] lg:ml-[25px] md:ml-[30px] ml-[48px] mt-[45px]">
          <h1 className="text-white font-Teko text-[20px] font-bold">
            Buy Property
          </h1>
          <p className="text-white font-Lato font-normal text-[16px] leading-8 w-[260px] mt-5">
            Lorem ipsum dolor sit amet. Aut vol up sunt suscipit qui Quis illo
            sed quam ipsum. At temporibus autem{" "}
          </p>
        </div>
      </div>

      {/************** Core service card 1 end here ********************/}

      {/************** Core service card 1 start here ********************/}
      <div className="2xl:w-[345px] lg:w-[290px] md:w-[320px] w-full h-[420px] bg-[#fffefe] core-service">
        <div className="flex justify-center">
          <img className=" mt-20" src={buy} alt="" />
        </div>
        <div className="2xl:ml-[48px] lg:ml-[25px] md:ml-[30px] ml-[48px] mt-[45px]">
          <h1 className="text-primary font-Teko text-[20px] font-bold">
            Buy Property
          </h1>
          <p className="text-black font-Lato font-normal text-[16px] leading-8 w-[260px] mt-5">
            Lorem ipsum dolor sit amet. Aut vol up sunt suscipit qui Quis illo
            sed quam ipsum. At temporibus autem{" "}
          </p>
        </div>
      </div>

      {/************** Core service card 1 end here ********************/}

      {/************** Core service card 1 start here ********************/}
      <div className="2xl:w-[345px] lg:w-[290px] md:w-[320px] w-full h-[420px] bg-[#fffefe] core-service">
        <div className="flex justify-center">
          <img className=" mt-20" src={buy} alt="" />
        </div>
        <div className="2xl:ml-[48px] lg:ml-[25px] md:ml-[30px] ml-[48px] mt-[45px]">
          <h1 className="text-primary font-Teko text-[20px] font-bold">
            Buy Property
          </h1>
          <p className="text-black font-Lato font-normal text-[16px] leading-8 w-[260px] mt-5">
            Lorem ipsum dolor sit amet. Aut vol up sunt suscipit qui Quis illo
            sed quam ipsum. At temporibus autem{" "}
          </p>
        </div>
      </div>

      {/************** Core service card 1 end here ********************/}
    </div>
  );
};

export default CoreServiceCard;

import { Fade, Zoom } from "react-reveal";
import choseimage from "../../../../src/assets/Chose-us-image/chose-vector.svg";
const ChoseUs = () => {
  return (
    //********************  Chose us section start here **************************//
    //******************** ##########################  **************************//

    <div className="max-w-container mx-auto lg:px-8 2xl:px-0 px-4 md:px-8 2xl:pt-32 lg:pt-[100px] md:pt-[80px] pt-16">
      <div className="lg:flex 2xl:flex lg:gap-[50px] 2xl:gap-[50px] justify-between">
        <Zoom>
          <div className="2xl:w-[607px] lg:w-[607px] w-full">
            <img
              className="2xl:w-[607px] lg:w-[607px] w-full lg:h-[460px] 2xl:h-[460px] h-full"
              src={choseimage}
              alt=""
            />
          </div>
        </Zoom>
        <Fade bottom cascade>
        <div className="2xl:w-[717px] lg:w-[660px]">
          <h1 className="lg:text-[56px] md:text-[56px] text-[32px] mt-16 md:mt-16 lg:mt-0 2xl:mt-0 font-Teko font-bold text-[#375E97]">
            Why Chose us?
          </h1>
          <p className="2xl:w-[717px] text-justify lg:w-[660px] font-Lato text-[16px] font-normal text-black leading-8 pt-[20px]">
            Lorem ipsum dolor sit amet. Aut voluptatum unde aut odit reiciendis
            aut a sunt suscipit qui Quis illo sed quam quisquam et consequatur
            ipsum. At temporibus autem sed eveniet cupiditate etmodi laborio sam
            aut quia delectus qui nihil doloruma tenetur totam 33 ratione
            praesentium. Ea enim aliquid ex accusamus omnis ut necessitatibus
            consequatur aut facere iste id illo omnis eum assumenda doloremque
            aut aliquid ratione. Quis illo sed quam quisquam et consequatur
            ipsum. At temporibus autem sed eveniet Quis illo sed quam quisquam
            et consequatur ipsum. At temporibus autem sed eveniet Quis illo sed
            quam quisquam et consequatur ipsum. At temporibus autem sed eveniet
            seed quim
          </p>

          <button className="bg-[#F90] text-white text-[16px] mt-[35px] font-Lato font-bold w-[170px] h-[56px] custom-border-property  hover:bg-[#375E97] duration-500">
            Read More
          </button>
        </div>
        </Fade>
      </div>
    </div>

    //********************  Chose us section end here **************************//
    //******************** ########################  **************************//
  );
};

export default ChoseUs;

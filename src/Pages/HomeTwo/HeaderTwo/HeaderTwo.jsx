/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */

import NavbarTwo from "../../../components/Navbar/NavbarTwo";
import hero2 from '../../../assets/Header/hero-image2.png'
import videoIcon from '../../../assets/Header/videoicon-2.svg'

const HeaderTwo = () => {
  return (
    <div className="header-bg bg-fixed bg-cover bg-no-repeat bg-center lg:h-[100vh]  h-auto flex flex-col justify-center items-center">
      <NavbarTwo />


        <div className="lg:flex 2xl:gap-[182px] lg:gap-[100px] lg:px-8 2xl:px-8 px-4 md:px-8">
      <div>
        <h1 className="text-white lg:leading-[80px] md:leading-[80px] font-Teko lg:text-[70px] md:text-[70px] leading-[50px] text-[38px] font-bold  uppercase tracking-[4.32px] 2xl:w-[578px] lg:w-[560px] w-full mt-8 md:mt-16 lg:mt-0 2xl:mt-0">
          New standard  for <span className="text-secondaryColor">new living...</span>
        </h1>

        <p className="text-white 2xl:text-[20px] lg:text-[16px] md:text-[16px] text-[14px]  font-Lato font-normal 2xl:leading-10 lg:leading-8 md:leading-9 leading-7 lg:w-[528px] w-full 2xl:mt-7 mt-6 uppercase">Lorem  Ipsum is simply dummy text of the best printing and typesetting industry. Lorem  has been the industry's make  a  type .</p>

        <button className="text-white text-[16px] font-Lato font-bold lg:w-[246px] md:w-[246px] w-[190px] h-[56px] 2xl:mt-[60px] mt-10 bg-secondaryColor custom-border-property hover:bg-primary duration-500">
            Contact Us
          </button>
      </div>


       <div className="relative">
        <img className="2xl:w-[768px] lg:w-[650px] 2xl:h-[484px] lg:h-[450px] w-full md:h-[450px] h-[400px] my-20 md:my-24 lg:my-0 md:mt-24 lg:mt-0 2xl:mt-0" src={hero2} alt="" />

         <div className="absolute inset-0 flex  items-center justify-center">
          <img className="w-16 h-16 rounded-full cursor-pointer" src={videoIcon} alt="" />
         </div>
       </div>
       </div>

      
    </div>
  );
};

export default HeaderTwo;

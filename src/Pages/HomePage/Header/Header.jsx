import NavbarTwo from "../../../components/Navbar/NavbarTwo";
import heroImage from '../../../assets/Header/hero-image.png'



const Header = () => {
  return (
    <div>
      <div className="header-image 2xl:h-[100vh] lg:h-[100vh] h-full bg-cover bg-fixed bg-no-repeat bg-center flex flex-col justify-center items-center">
      <NavbarTwo />
        <div className="lg:flex 2xl:gap-14 lg:gap-20  mx-auto lg:px-8 2xl:px-8 px-4 md:px-8">

         <div className="2xl:mt-16 lg:mt-[40px] md:mt-[90px] mt-[50px] w-full">
         <h1 className="text1 2xl:text-[82px] lg:text-[56px] md:text-[76px] text-[32px]  font-bold font-Teko 2xl:leading-[110px] lg:leading-[70px] md:leading-[90px] leading-[46px] tracking-[2.46px] 2xl:w-[821px] lg:w-[630px] w-full">
          The Real Destination to Buy and Sell your Properties.
          </h1>
           <p className="text-white 2xl:text-[20px] lg:text-[16px] md:text-[16px] text-[14px]  font-Lato font-normal 2xl:leading-10 lg:leading-10 md:leading-10 leading-7 2xl:w-[791px] lg:w-[630px] w-full mt-3">Lorem Ipsum dollar Many Landlords and Property owners wants to Lend their property safe and secured via online platform but most of the online platform made by Real Estate Company or brokers party. Those who want to rent and want to lend both .</p>

           <div className="flex  gap-5 mt-10">
          <button className="text-white text-[16px] font-Lato font-bold lg:w-[200px] md:w-[200px] w-full h-[56px]   bg-secondaryColor custom-border-property hover:bg-primary duration-500">
            Contact Us
          </button>

          <button className="text-secondaryColor text-[16px] font-Lato font-bold lg:w-[200px] md:w-[200px] w-full  h-[56px]   bg-transparent border-[2px] border-secondaryColor custom-border-property hover:bg-primary hover:border-0 duration-300">
          Read More
          </button>



        </div> 

         </div>


         <div className="w-full">
          <img className="2xl:w-[730px] 2xl:h-[650px] lg:w-[560px] lg:h-[500px] md:w-[600px] md:h-[520px] md:mx-auto lg:mx-0 2xl:mx-0  md:mt-24 md:mb-24 mb-24 lg:mb-0 2xl:mb-0 lg:mt-2 2xl:mt-2 mt-20 w-full h-full" src={heroImage} alt="" />
         </div>


         
        </div>
      </div>

     
    </div>
  );
};

export default Header;

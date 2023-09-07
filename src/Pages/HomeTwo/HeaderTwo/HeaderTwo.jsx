/* eslint-disable react/no-unescaped-entities */
import NavbarTwo from "../../../components/Navbar/NavbarTwo";

const HeaderTwo = () => {
  return (
    <div className="herader-bg bg-cover bg-no-repeat bg-center h-[100vh] flex  justify-center items-center">
      <NavbarTwo />

      <div className="">
        <h1 className="text-white leading-[102px] font-Teko text-[102px] font-bold text-center lg:w-[728px] mx-auto w-full uppercase">
          Find your dream houses By us
        </h1>

         <p className="text-white 2xl:text-[20px] text-[16px] font-Lato font-medium 2xl:leading-10 lg:left-7 uppercase 2xl:w-[1055px] lg:w-[900px] mx-auto pt-5 text-center ">Lorem  Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'smake a type specimen book. It has survived not only </p>
            

            <div className="flex justify-center mt-10">
              <button className="text-white text-[16px] font-Lato font-bold w-[244px] h-[56px] tracking-[2px] leading-8 uppercase flex justify-center items-center bg-secondaryColor custom-border-property hover:bg-primary duration-500" >Contact Us</button>
              
  
            </div>
    
    
      </div>


       


    </div>
  );
};

export default HeaderTwo;

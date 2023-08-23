import { FaFacebookF, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import footerLogo from "../../assets/Footer-image/footer-logo.png";
import { AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  //********************  Footer section start here **************************//
  //******************** ##########################  ************************//

  return (
    <div className="lg:h-[630px] h-full w-full footer-bg bg-cover bg-no-repeat bg-center border">
      <div className="max-w-container mx-auto lg:px-8 2xl:px-0 px-4 md:px-8 ">
        <div className="flex items-center gap-3 pt-10  border-b-[1px] border-b-white pb-10">
          <img
            className="lg:w-[180px] lg:h-[110px] md:w-[180px] md:h-[110px] w-[100px] h-[80px] border"
            src={footerLogo}
            alt=""
          />
          <h1 className="text-[#F5F5F5] lg:text-[56px] text-[20px] font-Teko font-bold">
            poperty.com
          </h1>
        </div>

        {/********************** main content *************************/}

        <div className="lg:flex flex-wrap lg:justify-between md:grid md:grid-cols-2 md:gap-16 pt-[30px] border-b-[1px] border-b-white pb-10">
          {/*********************** first part start here ***********************/}
          <div className="lg:w-[363px] w-full">
            <h4 className="lg:w-[363px] w-full text-[#F5F5F5] text-16px] md:text-[20px] lg:text-[16px] font-Lato font-normal leading-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing Pellentesque ut
              accumsan odio. Nullam vestibulum, tellus a blandit ultrices, ante
              ante viverra augue, vel placerat velit nisi in nisl. Aliquam in
              fermentu
            </h4>

            <p className="text-white text-[12px] md:text-[24px] lg:text-[12px] font-Teko font-normal tracking-[0.72px] mt-[70px]">
              Connect with our social media
            </p>

            {/********************** socal media icon start here *************************/}

            <div className="flex gap-5 justify-start mt-2">
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
          </div>
          {/*********************** first part end here ***********************/}

          {/*********************** second part start here ***********************/}
          <div>
            <h4 className="text-white lg:text-[20px] md:text-[40px] text-[30px]  font-Teko font-medium leading-8 mt-10 md:mt-0 lg:mt-0">
              About property.com
            </h4>
            <span className="flex flex-col gap-1 mt-5 md:mt-5 lg:mt-3">
              <p className="text-white text-[16px] md:text-[20px] lg:text-[16px] font-Lato font-bold leading-8">
                Our Products
              </p>
              <p className="text-white text-[16px] md:text-[20px] lg:text-[16px] font-Lato font-bold leading-8">
                Our Services
              </p>
              <p className="text-white text-[16px] md:text-[20px] lg:text-[16px] font-Lato font-bold leading-8">
                Our Vision
              </p>
              <p className="text-white text-[16px] md:text-[20px] lg:text-[16px] font-Lato font-bold leading-8">
                Our Mission
              </p>
              <p className="text-white text-[16px] md:text-[20px] lg:text-[16px] font-Lato font-bold leading-8">
                Tesimonials
              </p>
            </span>
          </div>
          {/*********************** second part end here ***********************/}

          {/*********************** third part start here ***********************/}
          <div>
            <h4 className="text-white lg:text-[20px] md:text-[40px] text-[30px] font-Teko font-medium leading-8 mt-10 md:mt-10 lg:mt-0">
              Products and Services
            </h4>
            <span className="flex flex-col gap-1 mt-5 md:mt-5 lg:mt-3">
              <p className="text-white text-[16px] md:text-[20px] lg:text-[16px] font-Lato font-bold leading-8">
                Our Products
              </p>
              <p className="text-white text-[16px] md:text-[20px] lg:text-[16px] font-Lato font-bold leading-8">
                Our Services
              </p>
              <p className="text-white text-[16px] md:text-[20px] lg:text-[16px] font-Lato font-bold leading-8">
                Our Vision
              </p>
              <p className="text-white text-[16px] md:text-[20px] lg:text-[16px] font-Lato font-bold leading-8">
                Our Mission
              </p>
              <p className="text-white text-[16px] md:text-[20px] lg:text-[16px] font-Lato font-bold leading-8">
                Tesimonials
              </p>
            </span>
          </div>
          {/*********************** third part end here ***********************/}

          {/*********************** forth part start here ***********************/}
          <div>
            <h4 className="text-white lg:text-[20px] md:text-40px] text-[30px] font-Teko font-medium leading-8 mt-10 md:mt-10 lg:mt-0">
              Products and Services
            </h4>
            <span className="flex flex-col gap-1 mt-5 md:mt-5 lg:mt-3">
              <p className="text-white text-[16px] md:text-[20px] lg:text-[16px] font-Lato font-bold leading-8">
                Our Products
              </p>
              <p className="text-white text-[16px] md:text-[20px] lg:text-[16px] font-Lato font-bold leading-8">
                Our Services
              </p>
              <p className="text-white text-[16px] md:text-[20px] lg:text-[16px] font-Lato font-bold leading-8">
                Our Vision
              </p>
              <p className="text-white text-[16px] md:text-[20px] lg:text-[16px] font-Lato font-bold leading-8">
                Our Mission
              </p>
              <p className="text-white text-[16px] md:text-[20px] lg:text-[16px] font-Lato font-bold leading-8">
                Tesimonials
              </p>
            </span>
          </div>
          {/*********************** forth part end here ***********************/}

          {/*********************** fifth part start here ***********************/}
          <div>
            <h4 className="text-white lg:text-[20px] md:text-30px] text-[30px] font-Teko font-medium leading-8 mt-10 md:mt-10 lg:mt-0">
              Products and Services
            </h4>
            <span className="flex flex-col gap-1 mt-5 md:mt-5 lg:mt-3">
              <p className="text-white text-[16px] md:text-[20px] lg:text-[16px] font-Lato font-bold leading-8">
                Our Products
              </p>
              <p className="text-white text-[16px] md:text-[20px] lg:text-[16px] font-Lato font-bold leading-8">
                Our Services
              </p>
              <p className="text-white text-[16px] md:text-[20px] lg:text-[16px] font-Lato font-bold leading-8">
                Our Vision
              </p>
              <p className="text-white text-[16px] md:text-[20px] lg:text-[16px] font-Lato font-bold leading-8">
                Our Mission
              </p>
              <p className="text-white text-[16px] md:text-[20px] lg:text-[16px] font-Lato font-bold leading-8">
                Tesimonials
              </p>
            </span>
          </div>
          {/*********************** fifth part end here ***********************/}
        </div>

        <div>
          <p className="text-white text-[12px] md:text-16px] lg:text-[12px] font-Lato font-normal leading-8 text-center mt-10 md:mt-5 lg:mt-10">
            All Rights Reserved 2023
          </p>
        </div>
      </div>
    </div>
  );
};

//********************  Footer section end here **************************//
//******************** ##########################  ************************//

export default Footer;

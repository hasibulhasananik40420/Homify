import image1 from "../../../assets/Chose-us-image/Frame.svg";
import image2 from "../../../assets/Chose-us-image/realhouse.svg";
import image3 from "../../../assets/Chose-us-image/Frame (3).svg";
import image4 from "../../../assets/Chose-us-image/Frame (4).svg";
import image5 from "../../../assets/Chose-us-image/Frame (5).svg";
import image6 from "../../../assets/Chose-us-image/real-market.svg";
import image7 from "../../../assets/Chose-us-image/house-smart.svg";

const OurPartner = () => {
  return (
    //******************** our partner section start here **************************//
    //******************** ##########################  ********************************//

    <div className="max-w-container mx-auto lg:px-8 2xl:px-0 px-4 md:px-8 2xl:pt-32 lg:pt-[100px] md:pt-[80px] pt-16">
      <h1 className="lg:text-[82px] text-[30px] md:text-[56px] text-[#3E348F] font-bold font-Teko text-right ">
        <span className="text-[#181C21]">Our</span> partners
      </h1>

      <p className="text-[#263238] text-[16px] font-Lato font-normal leading-7 tracking-[1.6px] text-right">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
        <br />
        dummy text ever since the 1500s, when an unknown printer took a galley
        of type an
      </p>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
        <div
          className="2xl:w-[344px] lg:w-[300px] md:w-[340px] w-full h-[230px] bg-white flex justify-center items-center hover:bg-hoverColor duration-500 hover:cursor-pointer"
          style={{ boxShadow: "0px 4px 60px 0px rgba(226, 211, 211, 0.20)" }}
        >
          <img src={image1} alt="" />
        </div>

        <div
          className="2xl:w-[344px] lg:w-[300px] md:w-[340px] w-full h-[230px] bg-white flex justify-center items-center hover:bg-hoverColor duration-500 hover:cursor-pointer"
          style={{ boxShadow: "0px 4px 60px 0px rgba(226, 211, 211, 0.20)" }}
        >
          <img src={image2} alt="" />
        </div>

        <div
          className="2xl:w-[344px] lg:w-[300px] md:w-[340px] w-full h-[230px] bg-hoverColor flex justify-center items-center hover:bg-white duration-500 hover:cursor-pointer"
          style={{ boxShadow: "0px 4px 60px 0px rgba(226, 211, 211, 0.20)" }}
        >
          <img src={image3} alt="" />
        </div>

        <div
          className="2xl:w-[344px] lg:w-[300px] md:w-[340px] w-full h-[230px] bg-white flex justify-center items-center hover:bg-hoverColor duration-500 hover:cursor-pointer"
          style={{ boxShadow: "0px 4px 60px 0px rgba(226, 211, 211, 0.20)" }}
        >
          <img src={image4} alt="" />
        </div>

        <div
          className="2xl:w-[344px] lg:w-[300px] md:w-[340px] w-full h-[230px] bg-white flex justify-center items-center hover:bg-hoverColor duration-500 hover:cursor-pointer"
          style={{ boxShadow: "0px 4px 60px 0px rgba(226, 211, 211, 0.20)" }}
        >
          <img src={image5} alt="" />
        </div>

        <div
          className="2xl:w-[344px] lg:w-[300px] md:w-[340px] w-full h-[230px] bg-white flex justify-center items-center hover:bg-hoverColor duration-500 hover:cursor-pointer"
          style={{ boxShadow: "0px 4px 60px 0px rgba(226, 211, 211, 0.20)" }}
        >
          <img src={image6} alt="" />
        </div>

        <div
          className="2xl:w-[344px] lg:w-[300px] md:w-[340px] w-full h-[230px] bg-white flex justify-center items-center hover:bg-hoverColor duration-500 hover:cursor-pointer"
          style={{ boxShadow: "0px 4px 60px 0px rgba(226, 211, 211, 0.20)" }}
        >
          <img src={image7} alt="" />
        </div>

        <div
          className="2xl:w-[344px] lg:w-[300px] md:w-[340px] w-full h-[230px] bg-white flex justify-center items-center hover:bg-hoverColor duration-500 hover:cursor-pointer"
          style={{ boxShadow: "0px 4px 60px 0px rgba(226, 211, 211, 0.20)" }}
        >
          <img src={image1} alt="" />
        </div>
      </div>
    </div>

    //******************** our pertner section start here **************************//
    //******************** ##########################  ********************************//
  );
};

export default OurPartner;

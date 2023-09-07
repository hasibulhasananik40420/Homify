/* eslint-disable react/no-unescaped-entities */
import image1 from "../../assets/Chose-us-image/Vector (1).svg";
import image2 from "../../assets/Chose-us-image/lock.svg";
import image3 from "../../assets/Chose-us-image/hand.svg";
const ChooseUsCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3  gap-x-[20px] gap-y-[50px] justify-items-center mt-20">
      <div
        className="2xl:w-[467px] lg:w-[400px] md:w-[350px] w-full h-[500px] 2xl:pl-[50px] lg:pl-[40px] pl-6 py-[56px] hover:bg-hoverColor duration-500 hover:cursor-pointer"
        style={{ boxShadow: " 0px 4px 45px 0px rgba(154, 149, 149, 0.25)" }}
      >
        <img className="w-20 h-20" src={image1} alt="" />
        <h1 className="text-[#504594] lg:text-[28px] 2xl:text-[32px] text-[24px] font-Lato font-bold lg:leading-[50px] leading-10 lg:w-[376px] w-full mt-4">
          Search Property From Anywhere.
        </h1>

        <p className="text-[#415057] text-[16px] font-Lato font-normal leading-8 2xl:w-[378px] lg:w-[340px] w-full mt-2 2xl:mt-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry'smake a type specimen
          book. It has been survived not only .industry'smake a type specimen
          book. It has survived not on the..
        </p>
      </div>

      <div className="2xl:w-[467px] lg:w-[400px] bg-[#504594] md:w-[350px] w-full h-[500px] ">
        <div
          className="2xl:pl-[50px] lg:pl-[40px] pl-6 py-[56px] bg-white h-[500px]"
          style={{
            borderRadius: "150px 0px",
            boxShadow: "0px 4px 45px 0px rgba(154, 149, 149, 0.25)",
          }}
        >
          <img className="w-20 h-20" src={image2} alt="" />
          <h1 className="text-[#504594] lg:text-[28px] 2xl:text-[32px] text-[24px] font-Lato font-bold lg:leading-[50px] leading-10  w-full mt-4">
            Buy and Sale your dream Property.
          </h1>

          <p className="text-[#415057] text-[16px] font-Lato font-normal leading-8 2xl:w-[378px] lg:w-[340px] w-full mt-2 2xl:mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry'smake a type specimen
            book. It has been survived not only .industry'smake a type specimen
            book. It has survived not on the..
          </p>
        </div>
      </div>



      <div
        className="2xl:w-[467px] lg:w-[400px] md:w-[350px] w-full h-[500px] 2xl:pl-[50px] lg:pl-[40px] pl-6 py-[56px] hover:bg-hoverColor duration-500 hover:cursor-pointer"
        style={{ boxShadow: " 0px 4px 45px 0px rgba(154, 149, 149, 0.25)" }}
      >
        <img className="w-20 h-20" src={image3} alt="" />
        <h1 className="text-[#504594] lg:text-[28px] 2xl:text-[32px] text-[24px] font-Lato font-bold lg:leading-[50px] leading-10  w-full mt-4">
          Professional and Customer Friendly Agents.
        </h1>

        <p className="text-[#415057] text-[16px] font-Lato font-normal leading-8 2xl:w-[378px] lg:w-[340px] w-full mt-2 2xl:mt-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry'smake a type specimen
          book. It has been survived not only .industry'smake a type specimen
          book. It has survived not on the..
        </p>
      </div>
    </div>
  );
};

export default ChooseUsCard;

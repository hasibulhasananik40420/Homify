/* eslint-disable react/no-unescaped-entities */
// import { AiFillStar } from "react-icons/ai";
// import image1 from "../../../assets/Reviews-image/reviews-1.png";
// import { FaQuoteLeft } from "react-icons/fa";




 import { BiSolidQuoteAltLeft } from "react-icons/bi";
import man from "../../../assets/Reviews-image/man.png";



const Reviews = () => {
  return (
    //******************** reviews section start here **************************//
    //******************** ##########################  **************************//
    <div>
      <div className="max-w-container mx-auto lg:px-8 2xl:px-0 px-4 md:px-8 2xl:pt-32 lg:pt-[100px] md:pt-[80px] pt-16">
        <h1 className="text-[#3E348F] lg:text-[82px] md:text-[56px] text-[32px] font-Teko font-bold leading-[82px]">
          <span className="text-[#181C21]"> Our</span> Clients Review
        </h1>

        <p className="lg:w-[875px] w-full mt-1 text-[#263238] text-[16px] font-Lato font-medium leading-8 tracking-[1.6px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. dummy text ever since the 1500s, when an unknown printer
          took a galley of type an
        </p>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-32">
       
          <div
            className="2xl:w-[466px] lg:w-[400px] md:w-[350px] w-full h-[470px] bg-white relative"
            style={{ boxShadow: "0px 4px 45px 0px rgba(154, 149, 149, 0.25)" }}
          >
            <p className="text-[#415057] text-[16px] font-Lato font-normal leading-8 lg:ml-10 2xl:ml-10 p-4 md:p-4 lg:p-0 2xl:p-0 2xl:w-[379px] lg:w-[340px] w-full lg:mt-[70px] 2xl:mt-[80px] mt-12">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry'smake a type specimen
              book. It has been survived not only .industry'smake a type
              specimen book. It has survived not only industry'smake a type
              specimen book. It has survived not only industr.
            </p>

            <div className="flex gap-5 lg:ml-10 lg:mt-9 p-4 md:p-4 lg:p-0 2xl:p-0">
              <img
                className="lg:w-[110px] lg:h-[110px] w-20 h-20 rounded-full"
                src={image1}
                alt=""
              />

              <span>
                <h1 className="text-[#3E348F] text-[20px] font-Teko font-bold ">
                  Melania Katherin
                </h1>

                <p className="text-black text-[16px] font-Lato font-normal leading-8">
                  Our Customer
                </p>

                <span className="flex gap-2 lg:mt-2 mt-0">
                  <AiFillStar className="text-xl text-secondaryColor" />
                  <AiFillStar className="text-xl text-secondaryColor" />
                  <AiFillStar className="text-xl text-secondaryColor" />
                  <AiFillStar className="text-xl text-secondaryColor" />
                  <AiFillStar className="text-xl text-secondaryColor" />
                </span>
              </span>
            </div>

            <FaQuoteLeft className="absolute -top-12 left-20 text-[100px] text-blue-600" />
          </div>

          <div
            className="2xl:w-[466px] lg:w-[400px] md:w-[350px] w-full h-[470px] bg-white relative"
            style={{ boxShadow: "0px 4px 45px 0px rgba(154, 149, 149, 0.25)" }}
          >
            <p className="text-[#415057] text-[16px] font-Lato font-normal leading-8 lg:ml-10 2xl:ml-10 p-4 md:p-4 lg:p-0 2xl:p-0 2xl:w-[379px] lg:w-[340px] w-full lg:mt-[70px] 2xl:mt-[80px] mt-12">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry'smake a type specimen
              book. It has been survived not only .industry'smake a type
              specimen book. It has survived not only industry'smake a type
              specimen book. It has survived not only industr.
            </p>

            <div className="flex gap-5 lg:ml-10 lg:mt-9 p-4 md:p-4 lg:p-0 2xl:p-0">
              <img
                className="lg:w-[110px] lg:h-[110px] w-20 h-20 rounded-full"
                src={image1}
                alt=""
              />

              <span>
                <h1 className="text-[#3E348F] text-[20px] font-Teko font-bold ">
                  Melania Katherin
                </h1>

                <p className="text-black text-[16px] font-Lato font-normal leading-8">
                  Our Customer
                </p>

                <span className="flex gap-2 lg:mt-2 mt-0">
                  <AiFillStar className="text-xl text-secondaryColor" />
                  <AiFillStar className="text-xl text-secondaryColor" />
                  <AiFillStar className="text-xl text-secondaryColor" />
                  <AiFillStar className="text-xl text-secondaryColor" />
                  <AiFillStar className="text-xl text-secondaryColor" />
                </span>
              </span>
            </div>

            <FaQuoteLeft className="absolute -top-12 left-20 text-[100px] text-blue-600" />
          </div>

          <div
            className="2xl:w-[466px] lg:w-[400px] md:w-[350px] w-full h-[470px] bg-white relative"
            style={{ boxShadow: "0px 4px 45px 0px rgba(154, 149, 149, 0.25)" }}
          >
            <p className="text-[#415057] text-[16px] font-Lato font-normal leading-8 lg:ml-10 2xl:ml-10 p-4 md:p-4 lg:p-0 2xl:p-0 2xl:w-[379px] lg:w-[340px] w-full lg:mt-[70px] 2xl:mt-[80px] mt-12">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry'smake a type specimen
              book. It has been survived not only .industry'smake a type
              specimen book. It has survived not only industry'smake a type
              specimen book. It has survived not only industr.
            </p>

            <div className="flex gap-5 lg:ml-10 lg:mt-9 p-4 md:p-4 lg:p-0 2xl:p-0">
              <img
                className="lg:w-[110px] lg:h-[110px] w-20 h-20 rounded-full"
                src={image1}
                alt=""
              />

              <span>
                <h1 className="text-[#3E348F] text-[20px] font-Teko font-bold ">
                  Melania Katherin
                </h1>

                <p className="text-black text-[16px] font-Lato font-normal leading-8">
                  Our Customer
                </p>

                <span className="flex gap-2 lg:mt-2 mt-0">
                  <AiFillStar className="text-xl text-secondaryColor" />
                  <AiFillStar className="text-xl text-secondaryColor" />
                  <AiFillStar className="text-xl text-secondaryColor" />
                  <AiFillStar className="text-xl text-secondaryColor" />
                  <AiFillStar className="text-xl text-secondaryColor" />
                </span>
              </span>
            </div>

            <FaQuoteLeft className="absolute -top-12 left-20 text-[100px] text-blue-600" />
          </div>

        
        </div>

        <div className="flex gap-3 justify-center mt-4">
        <button className="w-4 h-4 rounded-full bg-gray-400"></button>
        <button className="w-4 h-4 rounded-full bg-gray-400"></button>
        <button className="w-4 h-4 rounded-full bg-primary"></button>
        <button className="w-4 h-4 rounded-full bg-gray-400"></button>
        <button className="w-4 h-4 rounded-full bg-gray-400"></button>
       
      </div> */}

        <div className="relative h-[540px] mt-20">
          <div className="">
            <img className=" h-[540px]" src={man} alt="" />
          </div>

          <div className="absolute  top-[0px]  review-bg bg-cover bg-no-repeat bg-left h-[540px] lg:p-[74px] lg:pl-[500px] p-8 md:p-20">
             <span className="w-8 h-8 rounded-full bg-secondaryColor flex justify-center items-center">
                <BiSolidQuoteAltLeft className="text-white text-xl"/>
             </span>
            <p className=" text-white lg:text-[20px] md:text-[16px] md:leading-8 text-[16px] lg:leading-10 font-Lato font-normal mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's make a type specimen
              book. It has been survived not only .industry's make a type
              specimen book. It has survived not on the not only .industry's
              make a type specimen book. It has survived not on the. industry's
              make a type specimen book. It has survived not . the industry's
              make a type.
            </p>

            <div className="lg:flex items-center gap-52">
            <div className="flex items-center gap-8 mt-6">
             <img className="lg:w-[100px] lg:h-[100px] md:w-[100px] md:h-[100px] w-20 h-20 rounded-full" src={man} alt="" />

             <span>
              <h3 className="text-secondaryColor lg:text-[32px] md:text-[32px] text-[20px] font-Lato font-bold leading-10">Water Smiths</h3>

              <p className="text-white text-[16px] font-Lato font-medium leading-8">Business man</p>
             </span>
             </div>
               
               <div className="lg:mt-20 mt-8 flex items-center gap-4">
                 <button className="w-4 h-4 rounded-full bg-white"></button>
                 <button className="w-5 h-5 rounded-full bg-[#5743eb]"></button>
                 <button className="w-4 h-4 rounded-full bg-white"></button>
                 <button className="w-4 h-4 rounded-full bg-white"></button>
               </div>


            </div>
          </div>
        </div>
      </div>
    </div>

    //******************** reviews section end here **************************//
    //******************** ##########################  **************************//
  );
};

export default Reviews;

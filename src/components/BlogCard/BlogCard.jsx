import { CiUser } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";
import blog1 from '../../assets/Property-image/blog1.png'
import blog2 from '../../assets/Property-image/property-9.jpg'
import blog3 from '../../assets/Property-image/blogfacing.png'
import blog4 from '../../assets/Property-image/image4.png'
import blog5 from '../../assets/Core-service-image/core-service-two.png'

import { Link } from "react-router-dom";
const BlogCard = () => {
  return (
    <div>
         {/******************* blog card 1 start here *******************/}
         <div className="lg:flex 2xl:gap-32 lg:gap-20">
          <div className="2xl:w-[915px] lg:w-[915px] w-full">
           <Link to={'/blog-details'}>
           <img
              className="2xl:w-[915px] lg:w-[915px] w-full h-[500px] object-cover  cursor-pointer"
              src={blog1}
              style={{ borderRadius: "60px 60px 60px 0px" }}
              alt=""
            />
           </Link>

            <p className="text-black text-[20px] font-Lato font-normal mt-14">
              Real Estate Marketing Ideas
            </p>

            <h1 className=" lg:w-[725px] w-full mt-6">
              <span className="text-[#3E348F] lg:text-[56px] md:text-[56px] text-[32px] font-Teko font-bold lg:leading-[70px] md:leading-[70px] leading-[40px]">
                4 Ways to Boost Your Marketing{" "}
              </span>
              <span className="text-secondaryColor lg:text-[56px] md:text-[56px] text-[32px] font-Teko font-bold lg:leading-[70px] md:leading-[70px] leading-[40px]">
                in a Down Market
              </span>
            </h1>

            <p className="text-black text-[16px] font-Lato font-normal leading-8 mt-4">
              Navigating a down market can be challenging, but that doesn’t mean
              you should pump the brakes on your marketing. In fact, you should
              be kicking it into overdrive so you come out stronger when
              listings come back! With the right and a proactive mindset, you
              can stay ahead of the game and maintain your success. In this
              article, we will explore four practical ideas to help you stay
              active during a down market, ensuring your marketing efforts
              continue to yield fruitful results.
            </p>

            <div className="lg:flex gap-5 mt-6">
              <span className="flex items-center gap-4">
                <CiUser className="text-[30px]" />
                <p className="text-black text-[20px] font-Lato font-normal">
                  By Michael Yates{" "}
                </p>
              </span>

              <span className="flex items-center gap-4 pt-2 md:pt-2 lg:pt-0 2xl:pt-0">
                <GoDotFill className="text-[30px]" />
                <p className="text-black text-[20px] font-Lato font-normal">
                  Last Updated June 9, 2023{" "}
                </p>
              </span>

              <span className="flex items-center gap-4 pt-2 md:pt-2 lg:pt-0 2xl:pt-0">
                <GoDotFill className="text-[30px]" />
                <p className="text-black text-[20px] font-Lato font-normal">
                  {" "}
                  3 Min Read{" "}
                </p>
              </span>
            </div>
          </div>

          <div className="lg:w-[391px] w-full lg:mt-2 md:mt-8 mt-8">
            <h1 className="text-black text-[32px] font-Lato font-bold leading-8">
              Popular Category
            </h1>

            <div
              className="flex flex-col mt-10"
              style={{
                boxShadow: "0px 4px 60px 0px rgba(208, 202, 202, 0.30)",
              }}
            >
              <div className="flex justify-between items-center border border-[#D4D1D1] p-4 hover:bg-primary duration-500 hover:cursor-pointer group">
                <h3 className="text-black text-[20px] font-Lato font-bold leading-8 group-hover:text-white">
                  Single Family House
                </h3>
                <p className="text-black text-[20px] font-Lato font-bold leading-8 group-hover:text-white">
                  (13)
                </p>
              </div>

              <div className="flex justify-between items-center border border-[#D4D1D1] border-t-0 p-4 hover:bg-primary duration-500 hover:cursor-pointer group">
                <h3 className="text-black text-[20px] font-Lato font-normal leading-8 group-hover:text-white">
                  Condo House
                </h3>
                <p className="text-[#696565] text-[20px] font-Lato font-normal leading-8 group-hover:text-white">
                  (37)
                </p>
              </div>

              <div className="flex justify-between items-center border border-[#D4D1D1] border-t-0 p-4 hover:bg-primary duration-500 hover:cursor-pointer group">
                <h3 className="text-black text-[20px] font-Lato font-normal leading-8 group-hover:text-white">
                  Condo House
                </h3>
                <p className="text-[#696565] text-[20px] font-Lato font-normal leading-8 group-hover:text-white">
                  (37)
                </p>
              </div>

              <div className="flex justify-between items-center border border-[#D4D1D1] border-t-0 p-4 hover:bg-primary duration-500 hover:cursor-pointer group">
                <h3 className="text-black text-[20px] font-Lato font-normal leading-8 group-hover:text-white">
                  Condo House
                </h3>
                <p className="text-[#696565] text-[20px] font-Lato font-normal leading-8 group-hover:text-white">
                  (37)
                </p>
              </div>

              <div className="flex justify-between items-center border border-[#D4D1D1] border-t-0 p-4 hover:bg-primary duration-500 hover:cursor-pointer group">
                <h3 className="text-black text-[20px] font-Lato font-normal leading-8 group-hover:text-white">
                  Condo House
                </h3>
                <p className="text-[#696565] text-[20px] font-Lato font-normal leading-8 group-hover:text-white">
                  (37)
                </p>
              </div>

              <div className="flex justify-between items-center border border-[#D4D1D1] border-t-0 p-4 hover:bg-primary duration-500 hover:cursor-pointer group">
                <h3 className="text-black text-[20px] font-Lato font-normal leading-8 group-hover:text-white">
                  Condo House
                </h3>
                <p className="text-[#696565] text-[20px] font-Lato font-normal leading-8 group-hover:text-white">
                  (37)
                </p>
              </div>
            </div>

            <h1 className="text-black text-[32px] font-Lato font-bold leading-8 mt-20">
              Latest Property News
            </h1>

            <div className="flex flex-col gap-9 mt-10">
              <div className="flex gap-5">
                <span>
                  <img
                    className="w-[94px] h-[100px] rounded-[15px]"
                    src={blog3}
                    alt=""
                  />
                </span>

                <span>
                  <h1 className="text-black text-[20px] font-Lato font-bold leading-8">
                    Sea Facing House
                  </h1>
                  <h1 className="text-black text-[16px] font-Lato font-normal leading-8">
                    223/1/A, New Astoria, NY, USA{" "}
                  </h1>

                  <h1 className="text-secondaryColor text-[16px] font-Lato font-normal leading-8">
                    Price: $ 13, 57, 279
                  </h1>
                </span>
              </div>

              <div className="flex gap-5">
                <span>
                  <img
                    className="w-[94px] h-[100px] rounded-[15px]"
                    src={blog4}
                    alt=""
                  />
                </span>

                <span>
                  <h1 className="text-black text-[20px] font-Lato font-bold leading-8">
                  River View Villa
                  </h1>
                  <h1 className="text-black text-[16px] font-Lato font-normal leading-8">
                    223/1/A, New Astoria, NY, USA{" "}
                  </h1>

                  <h1 className="text-secondaryColor text-[16px] font-Lato font-normal leading-8">
                    Price: $ 13, 57, 279
                  </h1>
                </span>
              </div>

              <div className="flex gap-5">
                <span>
                  <img
                    className="w-[94px] h-[100px] rounded-[15px]"
                    src={blog5}
                    alt=""
                  />
                </span>

                <span>
                  <h1 className="text-black text-[20px] font-Lato font-bold leading-8">
                  South Breez Villa
                  </h1>
                  <h1 className="text-black text-[16px] font-Lato font-normal leading-8">
                    223/1/A, New Astoria, NY, USA{" "}
                  </h1>

                  <h1 className="text-secondaryColor text-[16px] font-Lato font-normal leading-8">
                    Price: $ 13, 57, 279
                  </h1>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/******************* blog card 1 end here *******************/}

        {/******************* blog card 2 start here *******************/}
        <div className="lg:flex 2xl:gap-32 lg:gap-20 mb-20 mt-16 ">
          <div className="2xl:w-[915px] lg:w-[915px] w-full">
            <Link to={'/blog-details'}>
            <img
              className="2xl:w-[915px] lg:w-[915px] w-full h-[500px] object-cover  cursor-pointer"
              src={blog2}
              style={{ borderRadius: "60px 60px 60px 0px" }}
              alt=""
            />
            </Link>

            <p className="text-black text-[20px] font-Lato font-normal mt-14">
              Real Estate Marketing Ideas
            </p>

            <h1 className=" lg:w-[725px] w-full mt-6">
              <span className="text-[#3E348F] lg:text-[56px] md:text-[56px] text-[32px] font-Teko font-bold lg:leading-[70px] md:leading-[70px] leading-[40px]">
                4 Ways to Boost Your Marketing{" "}
              </span>
              <span className="text-secondaryColor lg:text-[56px] md:text-[56px] text-[32px] font-Teko font-bold lg:leading-[70px] md:leading-[70px] leading-[40px]">
                in a Down Market
              </span>
            </h1>

            <p className="text-black text-[16px] font-Lato font-normal leading-8 mt-4">
              Navigating a down market can be challenging, but that doesn’t mean
              you should pump the brakes on your marketing. In fact, you should
              be kicking it into overdrive so you come out stronger when
              listings come back! With the right and a proactive mindset, you
              can stay ahead of the game and maintain your success. In this
              article, we will explore four practical ideas to help you stay
              active during a down market, ensuring your marketing efforts
              continue to yield fruitful results.
            </p>

            <div className="lg:flex gap-5 mt-6">
              <span className="flex items-center gap-4">
                <CiUser className="text-[30px]" />
                <p className="text-black text-[20px] font-Lato font-normal">
                  By Michael Yates{" "}
                </p>
              </span>

              <span className="flex items-center gap-4 pt-2 md:pt-2 lg:pt-0 2xl:pt-0">
                <GoDotFill className="text-[30px]" />
                <p className="text-black text-[20px] font-Lato font-normal">
                  Last Updated June 9, 2023{" "}
                </p>
              </span>

              <span className="flex items-center gap-4 pt-2 md:pt-2 lg:pt-0 2xl:pt-0">
                <GoDotFill className="text-[30px]" />
                <p className="text-black text-[20px] font-Lato font-normal">
                  {" "}
                  3 Min Read{" "}
                </p>
              </span>
            </div>
          </div>

          <div className="lg:w-[391px] w-full lg:mt-2 md:mt-8 mt-8">
            <h1 className="text-black text-[32px] font-Lato font-bold leading-8">
              Archives
            </h1>

            <div
              className="flex flex-col mt-10"
              style={{
                boxShadow: "0px 4px 60px 0px rgba(208, 202, 202, 0.30)",
              }}
            >
              <div className="flex justify-between items-center border border-[#D4D1D1] p-4 hover:bg-primary duration-500 hover:cursor-pointer group">
                <h3 className="text-[#555353] text-[20px] font-Lato font-normal leading-8 group-hover:text-white">
                January
                </h3>
                <p className="text-[#555353] text-[20px] font-Lato font-normal leading-8 group-hover:text-white">
                2023
                </p>
              </div>

              <div className="flex justify-between items-center border border-[#D4D1D1] border-t-0 p-4 hover:bg-primary duration-500 hover:cursor-pointer group">
                <h3 className="text-[#555353] text-[20px] font-Lato font-normal leading-8 group-hover:text-white">
                February
                </h3>
                <p className="text-[#555353] text-[20px] font-Lato font-normal leading-8 group-hover:text-white">
                2023
                </p>
              </div>

              <div className="flex justify-between items-center border border-[#D4D1D1] border-t-0 p-4 hover:bg-primary duration-500 hover:cursor-pointer group">
                <h3 className="text-[#555353] text-[20px] font-Lato font-normal leading-8 group-hover:text-white">
                March
                </h3>
                <p className="text-[#555353] text-[20px] font-Lato font-normal leading-8 group-hover:text-white">
                2023
                </p>
              </div>

              <div className="flex justify-between items-center border border-[#D4D1D1] border-t-0 p-4 hover:bg-primary duration-500 hover:cursor-pointer group">
                <h3 className="text-[#555353] text-[20px] font-Lato font-normal leading-8 group-hover:text-white">
                April
                </h3>
                <p className="text-[#555353] text-[20px] font-Lato font-normal leading-8 group-hover:text-white">
                2023
                </p>
              </div>

              <div className="flex justify-between items-center border border-[#D4D1D1] border-t-0 p-4 hover:bg-primary duration-500 hover:cursor-pointer group">
                <h3 className="text-[#555353] text-[20px] font-Lato font-normal leading-8 group-hover:text-white">
                May
                </h3>
                <p className="text-[#555353] text-[20px] font-Lato font-normal leading-8 group-hover:text-white">
                2023
                </p>
              </div>

              <div className="flex justify-between items-center border border-[#D4D1D1] border-t-0 p-4 hover:bg-primary duration-500 hover:cursor-pointer group">
                <h3 className="text-black text-[20px] font-Lato font-bold leading-8 group-hover:text-white">
                June
                </h3>
                <p className="text-black text-[20px] font-Lato font-bold leading-8 group-hover:text-white">
                2023
                </p>
              </div>
            </div>
          </div>
        </div>
        {/******************* blog card 2 end here *******************/}
    </div>
  )
}

export default BlogCard
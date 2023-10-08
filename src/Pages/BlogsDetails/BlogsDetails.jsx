/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import CommonAction from "../../components/CommonAction/CommonAction";
import blogDetails from "../../assets/Property-image/blog1.png";
import blogDetails2 from "../../assets/Blog-details-image/blog-3.png";
import blogDetails3 from "../../assets/Blog-details-image/blog-4.png";
import blog2 from "../../assets/Blog-details-image/blog-2.png";
import blogMan from "../../assets/Blog-details-image/blogman-2.png";
import playImage from "../../assets/Blog-details-image/play-image.png";
import { GoDotFill } from "react-icons/go";
import videoIcon from "../../assets/Header/video-icon.svg";
import BlogRelatedCard from "../../components/BlogRelatedCard/BlogRelatedCard";
import manImage from "../../assets/Blog-image/man1.png";
import womenImage from "../../assets/Blog-image/women1.png";
import agent1 from '../../assets/Agents-images/agent5.jpg'
import agent2 from '../../assets/Agents-images/agent2.jpg'
import agent3 from '../../assets/Agents-images/agent6.jpg'
import agent4 from '../../assets/Agents-images/agent4.jpg'
import agent5 from '../../assets/Agents-images/agent7.jpg'
import agent6 from '../../assets/Agents-images/agent8.jpg'

const BlogsDetails = () => {
  return (
    //********************  Blog details section start here **************************//
    //******************** ##########################  ********************************//
    <div>
      <CommonAction title={"Blog Details "} subTitle={"Home> Blog Details "} />

      {/******************* blog details part start here *******************/}
      {/*------------------------------------------------------------ */}
      <div className="max-w-container mx-auto lg:px-8 2xl:px-0 px-4 md:px-8 2xl:py-32 lg:py-[100px] md:py-[80px] py-16">
        <h1 className="text-[#504592] 2xl:text-[56px] lg:text-[56px] md:text-[56px]  text-[32px] font-Teko font-bold 2xl:leading-[56px] lg:leading-[56px]">
          Every Real Estate Agent Needs a Website
        </h1>

        <p className="text-[#28282A] 2xl:text-[20px] lg:text-[20px] md:text-[32px] text-[20px] font-Lato font-normal">
          June 17th, 2023 By Property.com
        </p>

        <div className=" 2xl:flex 2xl:gap-[122px] lg:flex lg:gap-20 mt-20">
          <div className="2xl:w-[950px] lg:w-[950px] w-full h-full">
            <img
              className="2xl:w-[950px] lg:w-[950px] 2xl:h-[500px] lg:h-[500px] md:h-[500px] h-[400px]"
              src={blogDetails}
              alt=""
            />
            <p className="text-black text-[16px] font-Lato font-normal leading-8 mt-10">
              No matter their age, demographic, or experience with
              buying/selling homes, most clients start their search for a real
              estate agent online. What will they find if they start searching
              for agents in your market area? If they can't find you, then it
              will be harder to earn new business online. Every real estate
              agent needs a website because it will often be your first point of
              contact with prospects and clients. Make it easier to find your
              personal brand online, and you'll have a steady, reliable source
              of qualified leads who are looking for the right agent to help
              them achieve their real estate goals.
            </p>

            <h2 className="text-[#504592] text-[32px] font-Teko font-bold mt-10">
              Why Every Agent Needs A Real Estate Website
            </h2>

            <div className="flex flex-col gap-2 ml-4 mt-4">
              <span className="flex gap-1">
                <GoDotFill className="text-[30px]" />

                <p className="text-black text-[16px] font-Lato font-normal leading-8">
                  Leverage the Power of Search Engine OptimizationWhen a
                  prospective buyer or seller starts to look for a real estate
                  agent online, chances are they will head straight for Google
                  or their favorite search engine.
                </p>
              </span>

              <span className="flex gap-1">
                <GoDotFill className="text-[30px]" />

                <p className="text-black text-[16px] font-Lato font-normal leading-8">
                  Leverage the Search engine optimization (SEO), which makes
                  your business much easier to find in search engine results,
                  should be one of your biggest marketing assets, and you can't
                  have successful SEO
                </p>
              </span>

              <span className="flex gap-1">
                <GoDotFill className="text-[30px]" />

                <p className="text-black text-[16px] font-Lato font-normal leading-8">
                  Leverage the without a real estate website. The higher you
                  appear in search results, the more leads your website will
                  generate. With high-quality local SEO, you make it easier for
                  people searching{" "}
                </p>
              </span>

              <span className="flex gap-1">
                <GoDotFill className="text-[30px]" />

                <p className="text-black text-[16px] font-Lato font-normal leading-8">
                  Leverage the for homes in your market areas to find your name
                  first. Leverage the for homes in your market areas to find
                  your name first. Leverage the for homes in your market areas
                  to find your name first.
                </p>
              </span>

              <span className="flex gap-1">
                <GoDotFill className="text-[30px]" />

                <p className="text-black text-[16px] font-Lato font-normal leading-8">
                  Learn more about your brand, discover new neighborhoods, fall
                  in love with properties in your markets, and contact you
                  directly to take their next steps. A Constant Source of
                  Qualified LeadsNo matter where.
                </p>
              </span>

              <span className="flex gap-1">
                <GoDotFill className="text-[30px]" />

                <p className="text-black text-[16px] font-Lato font-normal leading-8">
                  time of day is, or how much they know about your markets, your
                  real estate website is always there to help them build a
                  connection with your brand. Once they find your website,
                  contact forms.
                </p>
              </span>

              <span className="flex gap-1">
                <GoDotFill className="text-[30px]" />

                <p className="text-black text-[16px] font-Lato font-normal leading-8">
                  steady supply of informative content and integration with your
                  other online marketing platforms, your website makes it easy
                  for shoppers to connect with your brand in a way that's most
                  convenient for their needs.
                </p>
              </span>
            </div>

            <h2 className="text-[#504592] text-[32px] font-Teko font-bold mt-10">
              How To Get A Great Real Estate Website
            </h2>

            <div className="flex flex-col gap-2 ml-4 mt-4">
              <span className="flex gap-1">
                <GoDotFill className="text-[30px]" />

                <p className="text-black text-[16px] font-Lato font-normal leading-8">
                  Leverage the Power of Search Engine OptimizationWhen a
                  prospective buyer or seller starts to look for a real estate
                  agent online, chances are they will head straight for Google
                  or their favorite search engine.
                </p>
              </span>

              <span className="flex gap-1">
                <GoDotFill className="text-[30px]" />

                <p className="text-black text-[16px] font-Lato font-normal leading-8">
                  Leverage the Search engine optimization (SEO), which makes
                  your business much easier to find in search engine results,
                  should be one of your biggest marketing assets, and you can't
                  have successful SEO
                </p>
              </span>

              <span className="flex gap-1">
                <GoDotFill className="text-[30px]" />

                <p className="text-black text-[16px] font-Lato font-normal leading-8">
                  Leverage the without a real estate website. The higher you
                  appear in search results, the more leads your website will
                  generate. With high-quality local SEO, you make it easier for
                  people searching{" "}
                </p>
              </span>

              <span className="flex gap-1">
                <GoDotFill className="text-[30px]" />

                <p className="text-black text-[16px] font-Lato font-normal leading-8">
                  Leverage the for homes in your market areas to find your name
                  first. Leverage the for homes in your market areas to find
                  your name first. Leverage the for homes in your market areas
                  to find your name first.
                </p>
              </span>
            </div>

            <p className="text-black text-[16px] font-Lato font-normal leading-8 mt-8">
              Are you ready to create a real estate website that takes your
              brand to the next level with an innovative team that knows how to
              reach your target audience? Contact us to learn more about website
              design, and all of the ways we can help grow your business online.
            </p>
          </div>

          <div className="2xl:w-[368px] lg:w-[368px] md:w-[550px] md:mx-auto md:mt-24 lg:mt-0 2xl:mt-0 mt-16 w-full flex flex-col 2xl:gap-y-32 lg:gap-y-[80px]">
            <div className="relative 2xl:w-[368px] lg:w-[368px] md:w-[550px] w-full">
              <img
                className="2xl:w-[368px] lg:w-[368px] md:w-[550px] w-full h-[500px]"
                src={blog2}
                alt=""
              />
              <div className="bg-[#504592] h-[148px] pl-8 pt-8 absolute bottom-0 ">
                <h1 className="text-white text-[20px] md:text-[32px] lg:text-[20px] 2xl:text-[20px] font-Lato font-bold leading-10 2xl:leading-10 lg:leading-10 md:leading-[46px]">
                  How To Get A Great Real Estate Website with low cost.
                </h1>
              </div>
            </div>

            <div className="relative group 2xl:w-[368px] lg:w-[368px] md:w-[550px] w-full mt-16 md:mt-24 lg:mt-0 2xl:mt-0">
              <img
                className="2xl:w-[368px] lg:w-[368px] md:w-[550px] w-full h-[500px]"
                src={blogDetails2}
                alt=""
              />
              <div className="bg-[#504592] 2xl:w-[368px] lg:w-[368px] md:w-[550px] w-full h-[148px] pl-8 pt-8 absolute bottom-0 transform translate-y-full transition-transform duration-1000 group-hover:translate-y-0 hidden group-hover:block">
                <h1 className="text-white text-[20px] md:text-[32px] lg:text-[20px] 2xl:text-[20px] font-Lato font-bold leading-10 2xl:leading-10 lg:leading-10 md:leading-[46px]">
                  Best 10 tips for buying you dream Properties with Low budget.
                </h1>
              </div>
            </div>

            <div className="relative group 2xl:w-[368px] lg:w-[368px] md:w-[550px] w-full mt-16 md:mt-24 lg:mt-0 2xl:mt-0">
              <img
                className="2xl:w-[368px] lg:w-[368px] md:w-[550px] w-full h-[500px]"
                src={blogDetails3}
                alt=""
              />
              <div className="bg-[#504592] 2xl:w-[368px] lg:w-[368px] md:w-[550px] w-full h-[148px] pl-8 pt-8 absolute bottom-0 transform translate-y-full transition-transform duration-1000 group-hover:translate-y-0 hidden group-hover:block">
                <h1 className="text-white text-[20px] md:text-[32px] lg:text-[20px] 2xl:text-[20px] font-Lato font-bold leading-10 2xl:leading-10 lg:leading-10 md:leading-[46px]">
                  Top Tips for those who want to sale their Properties without
                  any hassle.
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/******************* blog hero part start here *******************/}
        {/*------------------------------------------------------------ */}
        <div className="lg:flex lg:justify-center 2xl:pt-32 lg:pt-[100px] md:pt-[80px] pt-16">
          <div className="2xl:w-[720px] 2xl:h-[600px] lg:w-full lg:h-[550px] w-full h-[550px] md:h-[600px] bg-[#181C21] 2xl:py-[118px] 2xl:px-[110px] hover:bg-secondaryColor duration-500 hover:cursor-pointer">
            <div className="flex gap-5 items-center lg:pl-10 2xl:pl-0 lg:pt-20 2xl:pt-0 pl-5 md:pl-10 pt-16 md:pt-20">
              <span>
                <img
                  className="w-[100px] h-[100px] rounded-[8px]"
                  src={blogMan}
                  alt=""
                />
              </span>

              <span>
                <h1 className="text-white text-[32px] font-Teko font-bold tracking-[3.2px]">
                  John Martin
                </h1>
                <p className="text-white lg:text-[20px] 2xl:text-[20px] md:text-[20px] text-[12px] font-Lato font-light">
                  Real Estate Expert Agent
                </p>
              </span>
            </div>

            <h1 className="text-white lg:text-[56px] 2xl:text-[56px] md:text-[56px] text-[32px] font-Lato font-bold mt-1 lg:pl-10 2xl:pl-0 md:pl-10 pl-5 pt-6 md:pt-10 lg:pt-0 2xl:pt-0">
              How To Get A Great Real Estate House.
            </h1>
            <p className="mt-5 text-white text-[16px] md:text-[20px] lg:text-[16px] 2xl:text-[16px] font-Lato font-normal leading-8 2xl:w-[536px] lg:pl-10 2xl:pl-0 pl-5 md:pl-10">
              Are you ready to create a real estate website that takes your
              brand to the next level with an innovative team that knows how to
              reach that an your target audience?
              <span className="text-white text-[16px] font-Lato font-normal leading-8 underline hover:text-secondaryColor hover:cursor-pointer duration-500">
                {" "}
                Contact us
              </span>{" "}
              to learn team level that .
            </p>
          </div>

          <div className="2xl:w-[720px] 2xl:h-[600px] lg:w-full lg:h-[550px] md:h-[600px] h-[550px] relative ">
            <img
              className="2xl:w-[720px] 2xl:h-[600px] lg:w-full lg:h-[550px] md:h-[600px] h-[550px]"
              src={playImage}
              alt=""
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
              <img
                className="h-[120px] w-[120px] rounded-full cursor-pointer"
                src={videoIcon}
                alt=""
              />
            </div>
          </div>
        </div>

       

        {/******************* blog comments part start here *******************/}
        <div>
          <h3 className="text-[#3E348F] text-[56px] font-bold leading-[70px]">
            Commnts
          </h3>

          <div className="lg:flex 2xl:flex items-center lg:gap-80 2xl:gap-[120px] mt-10">
            <div>
              <div className="lg:flex">
                <img
                  className="lg:w-[246px] lg:h-[236px] md:w-[140px] md:h-[140px] w-[100px] h-[100px] mx-auto rounded-full lg:rounded-[15px] lg:mt-8 z-30"
                  src={manImage}
                  alt=""
                />

                <div className="lg:w-[744px] w-full lg:h-[300px] md:h-[300px] h-[400px] bg-[#3E348F] rounded-[15px]  lg:ml-[-90px] mt-[-50px] md:mt-[-60px] lg:mt-0 hover:bg-secondaryColor duration-500 hover:cursor-pointer group ">
                  <div className="lg:pl-36 lg:pt-10 pt-16 px-6">
                    <h2>
                      <span className="text-white text-[20px] font-Lato font-bold leading-8">
                        Paul Jones,
                      </span>{" "}
                      <span className="text-white text-[16px] font-Lato font-normal leading-8">
                        August 29, 2017
                      </span>
                    </h2>

                    <p className="text-[#FFF] text-[16px] font-Lato font-normal leading-8 lg:w-[494px] w-full mt-4">
                      Cosmic ocean science Tunguska event the only home we’ve
                      ever known Orion’s sword, concept of the one billions upon
                      billions paroxysm concept of the one billions upon
                      billions concept of the.
                    </p>

                    <button className="w-[146px] h-[56px] bg-[#F90] text-white font-Lato font-normal text-[16px] text-center custom-border-button flex-shrink-0 mt-[20px] group-hover:bg-[#504594] border border-[#F90] transform duration-500 ">
                      Reply
                    </button>
                  </div>
                </div>
              </div>

              <div className="lg:flex mt-20">
                <img
                  className="lg:w-[246px] lg:h-[236px] md:w-[140px] md:h-[140px] w-[100px] h-[100px] mx-auto rounded-full lg:rounded-[15px] lg:mt-8 z-30"
                  src={womenImage}
                  alt=""
                />

                <div className="lg:w-[744px] w-full lg:h-[300px] md:h-[300px] h-[400px] bg-[#3E348F] rounded-[15px]  lg:ml-[-90px] mt-[-50px] md:mt-[-60px] lg:mt-0 hover:bg-secondaryColor duration-500 hover:cursor-pointer group ">
                  <div className="lg:pl-36 lg:pt-10 pt-16 px-6">
                    <h2>
                      <span className="text-white text-[20px] font-Lato font-bold leading-8">
                        Paul Jones,
                      </span>{" "}
                      <span className="text-white text-[16px] font-Lato font-normal leading-8">
                        August 29, 2017
                      </span>
                    </h2>

                    <p className="text-[#FFF] text-[16px] font-Lato font-normal leading-8 lg:w-[494px] w-full mt-4">
                      Cosmic ocean science Tunguska event the only home we’ve
                      ever known Orion’s sword, concept of the one billions upon
                      billions paroxysm concept of the one billions upon
                      billions concept of the.
                    </p>

                    <button className="w-[146px] h-[56px] bg-[#F90] text-white font-Lato font-normal text-[16px] text-center custom-border-button flex-shrink-0 mt-[20px] group-hover:bg-[#504594] border border-[#F90] transform duration-500 ">
                      Reply
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-[391px] w-full mt-16 md:mt-16 lg:mt-0 2xl:mt-0">
              <h1 className="text-black text-[32px] font-Lato font-bold leading-8">
                Meta Tag
              </h1>

              <div
                className="flex flex-col mt-10"
                style={{
                  boxShadow: "0px 4px 60px 0px rgba(208, 202, 202, 0.30)",
                }}
              >
                <div className=" border border-[#D4D1D1] pl-4 py-3 hover:bg-primary duration-500 hover:cursor-pointer group">
                  <h3 className="text-[#676565] text-[20px] font-Lato font-normal leading-8 group-hover:text-white">
                    Sign In
                  </h3>
                </div>

                <div className=" border border-[#D4D1D1] border-t-0 pl-4 py-3 hover:bg-primary duration-500 hover:cursor-pointer group">
                  <h3 className="text-[#676565] text-[20px] font-Lato font-normal leading-8 group-hover:text-white">
                    Sign Out
                  </h3>
                </div>

                <div className=" border border-[#D4D1D1] border-t-0 pl-4 py-3 hover:bg-primary duration-500 hover:cursor-pointer group">
                  <h3 className="text-[#676565] text-[20px] font-Lato font-normal leading-8 group-hover:text-white">
                    Registration
                  </h3>
                </div>

                <div className=" border border-[#D4D1D1] border-t-0 pl-4 py-3 hover:bg-primary duration-500 hover:cursor-pointer group">
                  <h3 className="text-[#676565] text-[20px] font-Lato font-normal leading-8 group-hover:text-white">
                    Comments Feedback
                  </h3>
                </div>

                <div className=" border border-[#D4D1D1] border-t-0 pl-4 py-3 hover:bg-primary duration-500 hover:cursor-pointer group">
                  <h3 className="text-[#676565] text-[20px] font-Lato font-normal leading-8 group-hover:text-white">
                    Entries Feedback
                  </h3>
                </div>

                <div className=" border border-[#D4D1D1] border-t-0 pl-4 py-3 hover:bg-primary duration-500 hover:cursor-pointer group">
                  <h3 className="text-[#676565] text-[20px] font-Lato font-normal leading-8 group-hover:text-white">
                    Modern Duplex House
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/******************* blog comments part end here *******************/}

        {/******************* blog comments reply part start here *******************/}

        <div className="2xl:pt-32 lg:pt-[100px] md:pt-[80px] pt-16 2xl:pb-32 lg:pb-[100px] md:pb-[80px] pb-16">
          <h3 className="text-[#3E348F] text-[56px] font-bold leading-[70px]">
            Comment Here
          </h3>

          <div className="lg:flex lg:gap-20 2xl:gap-[120px]">
            <div className="lg:w-[820px] 2xl:w-[900px] md:w-full w-full">
              <div className="lg:flex gap-5 mt-[45px] lg:w-[820px] 2xl:w-[900px] md:w-full w-full">
                <div className="flex flex-col gap-5 ">
                  <label
                    className="text-black font-Teko font-normal text-[24px] leading-6"
                    htmlFor="name"
                  >
                    Your First Name
                  </label>
                  <input
                    className="lg:w-[400px] 2xl:w-[440px] md:w-full w-full h-[56px] pl-10 rounded-[60px] border-[1px] border-[#878383] text-[#2F2D2D] font-Lato text-[16px] font-normal leading-6 outline-none focus:border-primary focus:ring-primary focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-primary transition-all duration-700"
                    type="name"
                    placeholder="Write your first name here"
                  />
                </div>

                <div className="flex flex-col gap-5 mt-7 md:mt-7 lg:mt-0 2xl:mt-0">
                  <label
                    className="text-black font-Teko font-normal text-[24px] leading-6"
                    htmlFor="name"
                  >
                    Your Last Name
                  </label>
                  <input
                    className="lg:w-[400px] 2xl:w-[440px] md:w-full w-full h-[56px] pl-10 rounded-[60px] border-[1px] border-[#878383] text-[#2F2D2D] font-Lato text-[16px] font-normal leading-6 outline-none focus:border-primary focus:ring-primary focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-primary transition-all duration-700"
                    type="name"
                    placeholder="Write your last name here"
                  />
                </div>
              </div>

              <div className="lg:flex gap-5 mt-[45px]">
                <div className="flex flex-col gap-5  mt-7 md:mt-7 lg:mt-0 2xl:mt-0">
                  <label
                    className="text-black font-Teko font-normal text-[24px] leading-6"
                    htmlFor="name"
                  >
                    Your Email Address
                  </label>
                  <input
                    className="lg:w-[400px] 2xl:w-[440px] md:w-full w-full h-[56px] pl-10 rounded-[60px] border-[1px] border-[#878383] text-[#2F2D2D] font-Lato text-[16px] font-normal leading-6 outline-none focus:border-primary focus:ring-primary focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-primary transition-all duration-700"
                    type="name"
                    placeholder="Write your email address here"
                  />
                </div>
                <div className="flex flex-col gap-5 mt-7 md:mt-7 lg:mt-0 2xl:mt-0">
                  <label
                    className="text-black font-Teko font-normal text-[24px] leading-6"
                    htmlFor="name"
                  >
                    Your Subject
                  </label>
                  <input
                    className="lg:w-[400px] 2xl:w-[440px] md:w-full w-full h-[56px] pl-10 rounded-[60px] border-[1px] border-[#878383] text-[#2F2D2D] font-Lato text-[16px] font-normal leading-6 outline-none focus:border-primary focus:ring-primary focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-primary transition-all duration-700"
                    type="name"
                    placeholder="Write your subject here"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-5 mt-[45px]">
                <label
                  className="text-black font-Teko font-normal text-[24px] leading-6"
                  htmlFor="email"
                >
                  Your Message
                </label>
                <textarea
                  name=""
                  id=""
                  className="lg:w-full md:w-full w-full h-[140px] pl-10 rounded-[45px] border-[1px] pt-7 border-[#878383] text-[#2F2D2D] font-Lato text-[16px] font-normal leading-6 outline-none focus:border-primary focus:ring-primary focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-primary transition-all duration-700"
                  type="text"
                  placeholder="Write your message  here "
                ></textarea>
              </div>

              <button className="bg-[#F90] text-white text-[16px] font-Lato font-bold w-[210px] h-[56px] custom-border-property mt-10 hover:bg-primary duration-500">
                Post Comments
              </button>
            </div>

            <div className="mt-10 md:mt-10 lg:mt-0 2xl:mt-0">
              <h3 className="text-[#3E348F] text-[32px] font-bold leading-[70px]">
                Recent Comments
              </h3>

              <div className="flex flex-col gap-5 mt-10">
                <span className="flex gap-3">
                  <img
                    className="w-10 h-10 rounded-[8px]"
                    src={agent1}
                    alt=""
                  />
                  <p className="text-[#3E348F] 2xl:text-[20px] text-[16px] font-Lato font-normal">
                    Admin on Luxury Modern Duplex Home
                  </p>
                </span>

                <span className="flex gap-3">
                  <img
                    className="w-10 h-10 rounded-[8px]"
                    src={agent2}
                    alt=""
                  />
                  <p className="text-[#3E348F] 2xl:text-[20px] text-[16px] font-Lato font-normal">
                    Smiths on Luxury Modern Duplex Home
                  </p>
                </span>

                <span className="flex gap-3">
                  <img
                    className="w-10 h-10 rounded-[8px]"
                    src={agent3}
                    alt=""
                  />
                  <p className="text-[#3E348F] 2xl:text-[20px] text-[16px] font-Lato font-normal">
                    Waters Loo on Luxury Modern Home
                  </p>
                </span>

                <span className="flex gap-3">
                  <img
                    className="w-10 h-10 rounded-[8px]"
                    src={agent4}
                    alt=""
                  />
                  <p className="text-[#3E348F] 2xl:text-[20px] text-[16px] font-Lato font-normal">
                    Bryan on Luxury Modern Duplex Home
                  </p>
                </span>

                <span className="flex gap-3">
                  <img
                    className="w-10 h-10 rounded-[8px]"
                    src={agent5}
                    alt=""
                  />
                  <p className="text-[#3E348F] 2xl:text-[20px] text-[16px] font-Lato font-normal">
                    Jesica on Luxury Modern Duplex Home
                  </p>
                </span>

                <span className="flex gap-3">
                  <img
                    className="w-10 h-10 rounded-[8px]"
                    src={agent6}
                    alt=""
                  />
                  <p className="text-[#3E348F] 2xl:text-[20px] text-[16px] font-Lato font-normal">
                    Admin on Luxury Modern Duplex Home
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/******************* blog comments reply part end here *******************/}
         {/******************* blog hero part end here *******************/}
         <div className="">
          <h1 className="lg:text-[56px] md:text-[56px] text-[32px] mt-20 text-[#3E348F] font-Teko font-bold ">
            See Related Post
          </h1>

          <BlogRelatedCard />
        </div>
        {/*------------------------------------------------------------ */}
      </div>

      {/******************* blog details part end here *******************/}
      {/*------------------------------------------------------------ */}
      {/******************* blog related section start  here *******************/}

      {/******************* blog related section end  here *******************/}
    </div>

    //********************  Blog details section End here **************************//
    //******************** ##########################  ********************************//
  );
};

export default BlogsDetails;

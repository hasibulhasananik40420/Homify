/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import CommonAction from "../../components/CommonAction/CommonAction";
import blogDetails from "../../assets/Blog-details-image/blog-details.png";
import blog2 from "../../assets/Blog-details-image/blog-2.png";
import blogMan from "../../assets/Blog-details-image/blogman-2.png";
import playImage from "../../assets/Blog-details-image/play-image.png";
import { GoDotFill } from "react-icons/go";
import BlogRelatedCard from "../../components/BlogRelatedCard/BlogRelatedCard";

const BlogsDetails = () => {
  return (
    //********************  Blog details section start here **************************//
    //******************** ##########################  ********************************//
    <div>
      <CommonAction title={"Blog Details "} subTitle={"Home> Blog Details "} />

      {/******************* blog details part start here *******************/}
      {/*------------------------------------------------------------ */}
      <div className="max-w-container mx-auto lg:px-8 2xl:px-0 px-4 md:px-8 2xl:pt-32 lg:pt-[100px] md:pt-[80px] pt-16">
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
                  How To Get A Great Real Estate Website
                </h1>
              </div>
            </div>

            <div className="relative group 2xl:w-[368px] lg:w-[368px] md:w-[550px] w-full mt-16 md:mt-24 lg:mt-0 2xl:mt-0">
              <img
                className="2xl:w-[368px] lg:w-[368px] md:w-[550px] w-full h-[500px]"
                src={blog2}
                alt=""
              />
              <div className="bg-[#504592] 2xl:w-[368px] lg:w-[368px] md:w-[550px] w-full h-[148px] pl-8 pt-8 absolute bottom-0 transform translate-y-full transition-transform duration-1000 group-hover:translate-y-0 hidden group-hover:block">
                <h1 className="text-white text-[20px] md:text-[32px] lg:text-[20px] 2xl:text-[20px] font-Lato font-bold leading-10 2xl:leading-10 lg:leading-10 md:leading-[46px]">
                  How To Get A Great Real Estate Website
                </h1>
              </div>
            </div>

            <div className="relative group 2xl:w-[368px] lg:w-[368px] md:w-[550px] w-full mt-16 md:mt-24 lg:mt-0 2xl:mt-0">
              <img
                className="2xl:w-[368px] lg:w-[368px] md:w-[550px] w-full h-[500px]"
                src={blog2}
                alt=""
              />
              <div className="bg-[#504592] 2xl:w-[368px] lg:w-[368px] md:w-[550px] w-full h-[148px] pl-8 pt-8 absolute bottom-0 transform translate-y-full transition-transform duration-1000 group-hover:translate-y-0 hidden group-hover:block">
                <h1 className="text-white text-[20px] md:text-[32px] lg:text-[20px] 2xl:text-[20px] font-Lato font-bold leading-10 2xl:leading-10 lg:leading-10 md:leading-[46px]">
                  How To Get A Great Real Estate Website
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

          <div
            className="2xl:w-[720px] 2xl:h-[600px] lg:w-full lg:h-[550px] md:h-[600px] h-[550px] "
            style={{ background: "rgba(62, 52, 143, 0.60)" }}
          >
            <img
              className="2xl:w-[720px] 2xl:h-[600px] lg:w-full lg:h-[550px] md:h-[600px] h-[550px] opacity-40 hover:opacity-70 hover:cursor-pointer duration-500"
              src={playImage}
              alt=""
            />
          </div>
        </div>

        {/******************* blog hero part end here *******************/}
        {/*------------------------------------------------------------ */}

        {/******************* blog releted post card start here *******************/}
        {/*---------------------------------------------------------------------- */}

        <div className="2xl:pt-32 lg:pt-[100px] md:pt-[80px] pt-16">
          <h1 className="text-[#3E348F] text-[56px] font-Teko font-bold leading-[70px]">
            See Related Post
          </h1>

           <div>
             <BlogRelatedCard/>
           </div>
        </div>

        {/******************* blog releted post card end here *******************/}
        {/*---------------------------------------------------------------------- */}
      </div>

      {/******************* blog details part end here *******************/}
      {/*------------------------------------------------------------ */}
    </div>

    //********************  Blog details section start here **************************//
    //******************** ##########################  ********************************//
  );
};

export default BlogsDetails;

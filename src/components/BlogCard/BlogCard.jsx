import { CiUser } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";
import blog1 from "../../assets/Property-image/blog1.png";
import blog2 from "../../assets/Property-image/property-9.jpg";

import blog6 from "../../assets/Property-image/blog-related-image1.jpg";
import blog7 from "../../assets/Property-image/blog-related-image2.jpg";
import blog8 from "../../assets/Property-image/image4.png";
import blog9 from "../../assets/Property-image/image5.png";

import { Link } from "react-router-dom";
import { Fade } from "react-reveal";
const BlogCard = () => {
  return (
    <div>
      {/******************* blog card 1 start here *******************/}
      <Fade big>
      <div className="bg-white p-2 mb-8 rounded  shadow-sm 2xl:w-[915px] lg:w-[915px] w-full border">
        <Link to={"/blog-details"}>
          <img
            className="2xl:w-[915px] lg:w-[915px] w-full h-[500px] object-cover  cursor-pointer"
            src={blog1}
            style={{ borderRadius: "60px 60px 60px 0px" }}
            alt=""
          />
        </Link>

        <p className="text-black text-[20px] font-Lato font-normal mt-8">
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
          Navigating a down market can be challenging, but that doesn’t mean you
          should pump the brakes on your marketing. In fact, you should be
          kicking it into overdrive so you come out stronger when listings come
          back! With the right and a proactive mindset, you can stay ahead of
          the game and maintain your success. In this article, we will explore
          four practical ideas to help you stay active during a down market,
          ensuring your marketing efforts continue to yield fruitful results.
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
      </Fade>
      {/******************* blog card 1 end here *******************/}

      {/******************* blog card 2 start here *******************/}
      <Fade big>
      <div className="bg-white p-2 mb-8 rounded  shadow-sm 2xl:w-[915px] lg:w-[915px] w-full">
        <Link to={"/blog-details"}>
          <img
            className="2xl:w-[915px] lg:w-[915px] w-full h-[500px] object-cover  cursor-pointer"
            src={blog2}
            style={{ borderRadius: "60px 60px 60px 0px" }}
            alt=""
          />
        </Link>

        <p className="text-black text-[20px] font-Lato font-normal mt-8">
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
          Navigating a down market can be challenging, but that doesn’t mean you
          should pump the brakes on your marketing. In fact, you should be
          kicking it into overdrive so you come out stronger when listings come
          back! With the right and a proactive mindset, you can stay ahead of
          the game and maintain your success. In this article, we will explore
          four practical ideas to help you stay active during a down market,
          ensuring your marketing efforts continue to yield fruitful results.
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
      </Fade>
      {/******************* blog card 2 end here *******************/}

      {/******************* blog card 3 start here *******************/}
      <Fade big>
      <div className="bg-white p-2 mb-8 rounded  shadow-sm 2xl:w-[915px] lg:w-[915px] w-full">
        <Link to={"/blog-details"}>
          <img
            className="2xl:w-[915px] lg:w-[915px] w-full h-[500px] object-cover  cursor-pointer"
            src={blog6}
            style={{ borderRadius: "60px 60px 60px 0px" }}
            alt=""
          />
        </Link>

        <p className="text-black text-[20px] font-Lato font-normal mt-8">
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
          Navigating a down market can be challenging, but that doesn’t mean you
          should pump the brakes on your marketing. In fact, you should be
          kicking it into overdrive so you come out stronger when listings come
          back! With the right and a proactive mindset, you can stay ahead of
          the game and maintain your success. In this article, we will explore
          four practical ideas to help you stay active during a down market,
          ensuring your marketing efforts continue to yield fruitful results.
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
      </Fade>
      {/******************* blog card 3 end here *******************/}

      {/******************* blog card 4 start here *******************/}
      <Fade big>
      <div className=" bg-white p-2 mb-8 rounded  shadow-sm 2xl:w-[915px] lg:w-[915px] w-full">
        <Link to={"/blog-details"}>
          <img
            className="2xl:w-[915px] lg:w-[915px] w-full h-[500px] object-cover  cursor-pointer"
            src={blog7}
            style={{ borderRadius: "60px 60px 60px 0px" }}
            alt=""
          />
        </Link>

        <p className="text-black text-[20px] font-Lato font-normal mt-8">
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
          Navigating a down market can be challenging, but that doesn’t mean you
          should pump the brakes on your marketing. In fact, you should be
          kicking it into overdrive so you come out stronger when listings come
          back! With the right and a proactive mindset, you can stay ahead of
          the game and maintain your success. In this article, we will explore
          four practical ideas to help you stay active during a down market,
          ensuring your marketing efforts continue to yield fruitful results.
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
      </Fade>
      {/******************* blog card 4 end here *******************/}

      {/******************* blog card 5 start here *******************/}
      <Fade big>
      <div className="bg-white p-2 mb-8 rounded  shadow-sm 2xl:w-[915px] lg:w-[915px] w-full">
        <Link to={"/blog-details"}>
          <img
            className="2xl:w-[915px] lg:w-[915px] w-full h-[500px] object-cover  cursor-pointer"
            src={blog8}
            style={{ borderRadius: "60px 60px 60px 0px" }}
            alt=""
          />
        </Link>

        <p className="text-black text-[20px] font-Lato font-normal mt-8">
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
          Navigating a down market can be challenging, but that doesn’t mean you
          should pump the brakes on your marketing. In fact, you should be
          kicking it into overdrive so you come out stronger when listings come
          back! With the right and a proactive mindset, you can stay ahead of
          the game and maintain your success. In this article, we will explore
          four practical ideas to help you stay active during a down market,
          ensuring your marketing efforts continue to yield fruitful results.
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
      </Fade>
      {/******************* blog card 5 end here *******************/}

      {/******************* blog card 6 start here *******************/}
      <Fade big>
      <div className="bg-white p-2 mb-8 rounded  shadow-sm 2xl:w-[915px] lg:w-[915px] w-full">
        <Link to={"/blog-details"}>
          <img
            className="2xl:w-[915px] lg:w-[915px] w-full h-[500px] object-cover  cursor-pointer"
            src={blog9}
            style={{ borderRadius: "60px 60px 60px 0px" }}
            alt=""
          />
        </Link>

        <p className="text-black text-[20px] font-Lato font-normal mt-8">
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
          Navigating a down market can be challenging, but that doesn’t mean you
          should pump the brakes on your marketing. In fact, you should be
          kicking it into overdrive so you come out stronger when listings come
          back! With the right and a proactive mindset, you can stay ahead of
          the game and maintain your success. In this article, we will explore
          four practical ideas to help you stay active during a down market,
          ensuring your marketing efforts continue to yield fruitful results.
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
      </Fade>
      {/******************* blog card 6 end here *******************/}
    </div>
  );
};

export default BlogCard;

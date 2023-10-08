import React from "react";
import blog3 from "../../assets/Property-image/blogfacing.png";
import blog4 from "../../assets/Property-image/image4.png";
import blog5 from "../../assets/Core-service-image/core-service-two.png";
const BlogSidebar = () => {
  return (
    <div>
      {/* Side Bar 1 */}
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
          <div className="flex justify-between items-center border  p-4 hover:bg-primary duration-500 hover:cursor-pointer group">
            <h3 className="text-black text-[20px] font-Lato font-bold leading-8 group-hover:text-white">
              Single Family House
            </h3>
            <p className="text-black text-[20px] font-Lato font-bold leading-8 group-hover:text-white">
              (13)
            </p>
          </div>

          <div className="flex justify-between items-center border  border-t-0 p-4 hover:bg-primary duration-500 hover:cursor-pointer group">
            <h3 className="text-black text-[20px] font-Lato font-normal leading-8 group-hover:text-white">
            Craftsman
            </h3>
            <p className="text-[#696565] text-[20px] font-Lato font-normal leading-8 group-hover:text-white">
              (35)
            </p>
          </div>

          <div className="flex justify-between items-center border  border-t-0 p-4 hover:bg-primary duration-500 hover:cursor-pointer group">
            <h3 className="text-black text-[20px] font-Lato font-normal leading-8 group-hover:text-white">
            Contemporary
            </h3>
            <p className="text-[#696565] text-[20px] font-Lato font-normal leading-8 group-hover:text-white">
              (23)
            </p>
          </div>

          <div className="flex justify-between items-center border  border-t-0 p-4 hover:bg-primary duration-500 hover:cursor-pointer group">
            <h3 className="text-black text-[20px] font-Lato font-normal leading-8 group-hover:text-white">
            Mediterranean
            </h3>
            <p className="text-[#696565] text-[20px] font-Lato font-normal leading-8 group-hover:text-white">
              (14)
            </p>
          </div>

          <div className="flex justify-between items-center border  border-t-0 p-4 hover:bg-primary duration-500 hover:cursor-pointer group">
            <h3 className="text-black text-[20px] font-Lato font-normal leading-8 group-hover:text-white">
            Bungalow
            </h3>
            <p className="text-[#696565] text-[20px] font-Lato font-normal leading-8 group-hover:text-white">
              (12)
            </p>
          </div>

          <div className="flex justify-between items-center border  border-t-0 p-4 hover:bg-primary duration-500 hover:cursor-pointer group">
            <h3 className="text-black text-[20px] font-Lato font-normal leading-8 group-hover:text-white">
            Cape Cod
            </h3>
            <p className="text-[#696565] text-[20px] font-Lato font-normal leading-8 group-hover:text-white">
              (57)
            </p>
          </div>
        </div>

        <h1 className="text-black text-[32px] font-Lato font-bold leading-8 mt-20">
          Latest Property News
        </h1>

        <div style={{
            boxShadow: "0px 4px 60px 0px rgba(208, 202, 202, 0.30)",
          }} className="flex flex-col gap-4 mt-10 p-2 border ">
          <div className="flex gap-5 bg-white border-b p-2">
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

          <div className="flex gap-5 bg-white border-b p-2">
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

          <div className="flex gap-5 bg-white p-2">
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
      {/* Side Bar 2 */}
      <div className="lg:w-[391px] w-full lg:mt-14 md:mt-8 mt-8">
            <h1 className="text-black text-[32px] font-Lato font-bold leading-8">
              Archives
            </h1>

            <div
              className="flex flex-col mt-10"
              style={{
                boxShadow: "0px 4px 60px 0px rgba(208, 202, 202, 0.30)",
              }}
            >
              <div className="flex justify-between items-center border  p-4 hover:bg-primary duration-500 hover:cursor-pointer group">
                <h3 className="text-[#555353] text-[20px] font-Lato font-normal leading-8 group-hover:text-white">
                January
                </h3>
                <p className="text-[#555353] text-[20px] font-Lato font-normal leading-8 group-hover:text-white">
                2023
                </p>
              </div>

              <div className="flex justify-between items-center border  border-t-0 p-4 hover:bg-primary duration-500 hover:cursor-pointer group">
                <h3 className="text-[#555353] text-[20px] font-Lato font-normal leading-8 group-hover:text-white">
                February
                </h3>
                <p className="text-[#555353] text-[20px] font-Lato font-normal leading-8 group-hover:text-white">
                2023
                </p>
              </div>

              <div className="flex justify-between items-center border  border-t-0 p-4 hover:bg-primary duration-500 hover:cursor-pointer group">
                <h3 className="text-[#555353] text-[20px] font-Lato font-normal leading-8 group-hover:text-white">
                March
                </h3>
                <p className="text-[#555353] text-[20px] font-Lato font-normal leading-8 group-hover:text-white">
                2023
                </p>
              </div>

              <div className="flex justify-between items-center border  border-t-0 p-4 hover:bg-primary duration-500 hover:cursor-pointer group">
                <h3 className="text-[#555353] text-[20px] font-Lato font-normal leading-8 group-hover:text-white">
                April
                </h3>
                <p className="text-[#555353] text-[20px] font-Lato font-normal leading-8 group-hover:text-white">
                2023
                </p>
              </div>

              <div className="flex justify-between items-center border  border-t-0 p-4 hover:bg-primary duration-500 hover:cursor-pointer group">
                <h3 className="text-[#555353] text-[20px] font-Lato font-normal leading-8 group-hover:text-white">
                May
                </h3>
                <p className="text-[#555353] text-[20px] font-Lato font-normal leading-8 group-hover:text-white">
                2023
                </p>
              </div>

              <div className="flex justify-between items-center border  border-t-0 p-4 hover:bg-primary duration-500 hover:cursor-pointer group">
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
  );
};

export default BlogSidebar;

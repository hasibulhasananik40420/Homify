/* eslint-disable react/prop-types */
import { HiOutlineBookmark } from "react-icons/hi";
import { PiCalendar, PiUserCircle } from "react-icons/pi";

const BlogCardTwo = ({data}) => {

   const {image,name,publish,news} = data

  return (
    <div >


      {/******************* blog v2 card start here *******************/}
      <div className="2xl:w-[466px] lg:w-[400px] md:w-[350px] w-full">
        <img
          className="2xl:w-[466px] lg:w-[400px] md:w-[350px] w-full h-[420px]"
          src={image}
          alt=""
        />

        <div
          className="bg-white"
          style={{ boxShadow: "0px 4px 45px 0px rgba(155, 153, 153, 0.30)" }}
        >
          <div className="border-b pb-5">
            <div className="flex justify-between px-5 pt-2">
              <span className="flex gap-3 items-center">
                <PiUserCircle className="text-[20px] text-secondaryColor" />
                <p className="text-black lg:text-[16px] md:text-[16px] text-[12px] font-Lato font-normal leading-8">
                  By: Admin
                </p>
              </span>

              <span className="flex gap-3 items-center">
                <HiOutlineBookmark className="text-[20px] text-primary" />
                <p className="text-black lg:text-[16px] md:text-[16px] text-[12px] font-Lato font-normal leading-8">
                  {news}
                </p>
              </span>
            </div>

            <h2 className="text-primary text-[32px] font-Teko font-bold leading-[45px] lg:w-[389.3px] w-full px-5 pt-2">
              {name}
            </h2>
          </div>

          <div className="flex justify-between px-5 py-3">
            <span className="flex gap-3 items-center">
              <PiCalendar className="text-[20px] text-secondaryColor" />
              <p className="text-black lg:text-[16px] md:text-[16px] text-[12px] font-Lato font-normal leading-8">
               {publish}
              </p>
            </span>

            <span className="flex gap-3 items-center">
              <HiOutlineBookmark className="text-[20px] text-secondaryColor" />
              <p className="text-secondaryColor underline cursor-pointer lg:text-[16px] md:text-[16px] text-[12px]font-Lato font-bold leading-8">
                Read More
              </p>
            </span>
          </div>
        </div>
      </div>
      {/******************* blog v2 card end here *******************/}



    </div>
  );
};

export default BlogCardTwo;

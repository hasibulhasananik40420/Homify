/* eslint-disable react/no-unescaped-entities */

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewsSlider from "./ReviewsSlider";

const Reviews = () => {
 

  return (
    <div className="relative">
      <div className="max-w-container mx-auto lg:px-8 2xl:px-0 px-4 md:px-8 2xl:pt-32 lg:pt-[100px] md:pt-[80px] pt-16">
        <h1 className="text-[#3E348F] lg:text-[82px] md:text-[56px] text-[32px] font-Teko font-bold leading-[82px]">
          <span className="text-[#181C21]"> Our</span> Clients Review
        </h1>
        <p className="lg:w-[875px] mb-20 w-full mt-1 text-[#263238] text-[16px] font-Lato font-medium leading-8 tracking-[1.6px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. dummy text ever since the 1500s, when an unknown printer
          took a galley of type an
        </p>
        
          {/************* slider component here ***************/}
         <ReviewsSlider/>
          {/************* slider component here ***************/}



      </div>
    </div>
  );
};

export default Reviews;

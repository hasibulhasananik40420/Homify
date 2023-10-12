/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import Slider from "react-slick";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import man from "../../../assets/Reviews-image/man.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ReviewsSlider = () => {

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1, // Adjust the number of slides to show at a time
        slidesToScroll: 1, // Adjust the number of slides to scroll
        autoplay: true,
    
        autoplaySpeed: 5000, // Adjust the autoplay speed in milliseconds
      };


  return (
    <div>
        {/* Add the Slider component here */}
        <Slider {...sliderSettings}>
          {/* Review Item */}
          <div className="relative h-[540px]">
            <div className="">
              <img
                className="h-[540px]"
                src="https://st.depositphotos.com/2931363/3703/i/450/depositphotos_37034497-stock-photo-young-black-man-smiling-at.jpg"
                alt=""
              />
            </div>

            <div className="absolute top-[0px] review-bg bg-cover bg-no-repeat bg-left h-[540px] lg:p-[74px] lg:pl-[500px] p-8 md:p-20">
              <span className="w-8 h-8 rounded-full bg-secondaryColor flex justify-center items-center">
                <BiSolidQuoteAltLeft className="text-white text-xl" />
              </span>
              <p className="text-white lg:text-[20px] md:text-[16px] md:leading-8 text-[16px] lg:leading-10 font-Lato font-normal mt-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's make a type
                specimen book. It has been survived not only .industry's make a
                type specimen book. It has survived not on the not only
                .industry's make a type specimen book. It has survived not on
                the. industry's make a type specimen book. It has survived not .
                the industry's make a type.
              </p>

              <div className="lg:flex items-center gap-52">
                <div className="flex items-center gap-8 mt-6">
                  <img
                    className="lg:w-[100px] lg:h-[100px] md:w-[100px] md:h-[100px] w-20 h-20 rounded-full"
                    src="https://st.depositphotos.com/2931363/3703/i/450/depositphotos_37034497-stock-photo-young-black-man-smiling-at.jpg"
                    alt=""
                  />

                  <span>
                    <h3 className="text-secondaryColor lg:text-[32px] md:text-[32px] text-[20px] font-Lato font-bold leading-10">
                      Water Smiths
                    </h3>

                    <p className="text-white text-[16px] font-Lato font-medium leading-8">
                      Business man
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Slider Item End */}
          {/* Review Item */}
          <div className="relative h-[540px]">
            <div className="">
              <img
                className="h-[540px]"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVJDluM9eKiKqhZde3i_WH0bgI4dFuUqTfLNff1mJbfkhBODJ5QX72S8IiEzgdFaisnqk&usqp=CAU"
                alt=""
              />
            </div>

            <div className="absolute top-[0px] review-bg bg-cover bg-no-repeat bg-left h-[540px] lg:p-[74px] lg:pl-[500px] p-8 md:p-20">
              <span className="w-8 h-8 rounded-full bg-secondaryColor flex justify-center items-center">
                <BiSolidQuoteAltLeft className="text-white text-xl" />
              </span>
              <p className="text-white lg:text-[20px] md:text-[16px] md:leading-8 text-[16px] lg:leading-10 font-Lato font-normal mt-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's make a type
                specimen book. It has been survived not only .industry's make a
                type specimen book. It has survived not on the not only
                .industry's make a type specimen book. It has survived not on
                the. industry's make a type specimen book. It has survived not .
                the industry's type.
              </p>

              <div className="lg:flex items-center gap-52">
                <div className="flex items-center gap-8 mt-6">
                  <img
                    className="lg:w-[100px] lg:h-[100px] md:w-[100px] md:h-[100px] w-20 h-20 rounded-full"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVJDluM9eKiKqhZde3i_WH0bgI4dFuUqTfLNff1mJbfkhBODJ5QX72S8IiEzgdFaisnqk&usqp=CAU"
                    alt=""
                  />

                  <span>
                    <h3 className="text-secondaryColor lg:text-[32px] md:text-[32px] text-[20px] font-Lato font-bold leading-10">
                      Water Smiths
                    </h3>

                    <p className="text-white text-[16px] font-Lato font-medium leading-8">
                      Business man
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Slider Item End */}
          {/* Review Item */}
          <div className="relative h-[540px]">
            <div className="">
              <img className="h-[540px]" src={man} alt="" />
            </div>

            <div className="absolute top-[0px] review-bg bg-cover bg-no-repeat bg-left h-[540px] lg:p-[74px] lg:pl-[500px] p-8 md:p-20">
              <span className="w-8 h-8 rounded-full bg-secondaryColor flex justify-center items-center">
                <BiSolidQuoteAltLeft className="text-white text-xl" />
              </span>
              <p className="text-white lg:text-[20px] md:text-[16px] md:leading-8 text-[16px] lg:leading-10 font-Lato font-normal mt-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's make a type
                specimen book. It has been survived not only .industry's make a
                type specimen book. It has survived not on the not only
                .industry's make a type specimen book. It has survived not on
                the. industry's make a type specimen book. It has survived not .
                the industry's make a type.
              </p>

              <div className="lg:flex items-center gap-52">
                <div className="flex items-center gap-8 mt-6">
                  <img
                    className="lg:w-[100px] lg:h-[100px] md:w-[100px] md:h-[100px] w-20 h-20 rounded-full"
                    src={man}
                    alt=""
                  />

                  <span>
                    <h3 className="text-secondaryColor lg:text-[32px] md:text-[32px] text-[20px] font-Lato font-bold leading-10">
                      Water Smiths
                    </h3>

                    <p className="text-white text-[16px] font-Lato font-medium leading-8">
                      Business man
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Slider Item End */}
          {/* Review Item */}
          <div className="relative h-[540px]">
            <div className="">
              <img
                className="h-[540px]"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjuRtEVy5TRNcB_7FzqMy-nJWZWQlWP12_tA&usqp=CAU"
                alt=""
              />
            </div>

            <div className="absolute top-[0px] review-bg bg-cover bg-no-repeat bg-left h-[540px] lg:p-[74px] lg:pl-[500px] p-8 md:p-20">
              <span className="w-8 h-8 rounded-full bg-secondaryColor flex justify-center items-center">
                <BiSolidQuoteAltLeft className="text-white text-xl" />
              </span>
              <p className="text-white lg:text-[20px] md:text-[16px] md:leading-8 text-[16px] lg:leading-10 font-Lato font-normal mt-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's make a type
                specimen book. It has been survived not only .industry's make a
                type specimen book. It has survived not on the not only
                .industry's make a type specimen book. It has survived not on
                the. industry's make a type specimen book. It has survived not .
                the industry's make a type.
              </p>

              <div className="lg:flex items-center gap-52">
                <div className="flex items-center gap-8 mt-6">
                  <img
                    className="lg:w-[100px] lg:h-[100px] md:w-[100px] md:h-[100px] w-20 h-20 rounded-full"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjuRtEVy5TRNcB_7FzqMy-nJWZWQlWP12_tA&usqp=CAU"
                    alt=""
                  />

                  <span>
                    <h3 className="text-secondaryColor lg:text-[32px] md:text-[32px] text-[20px] font-Lato font-bold leading-10">
                      Water Smiths
                    </h3>

                    <p className="text-white text-[16px] font-Lato font-medium leading-8">
                      Business man
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Slider Item End */}

          {/* Add more Review Items as needed */}
        </Slider>
    </div>
  )
}

export default ReviewsSlider
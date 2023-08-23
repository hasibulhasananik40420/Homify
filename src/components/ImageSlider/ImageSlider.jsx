/* eslint-disable no-unused-vars */
// import { HiOutlineArrowCircleLeft, HiOutlineArrowCircleRight } from "react-icons/hi";

// const ImageSlider = () => {
//   return (
//     <div>
//           <div className="mt-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-5">
//       <img
//         className="2xl:w-[261px] lg:w-[220px] w-[280px] md:w-[220px] h-[200px] mx-auto md:mx-0 lg:mx-0 2xl:mx-0"
//         style={{ borderRadius: "45px 45px 45px 0px" }}
//         src="https://img.freepik.com/free-photo/large-house-with-lawn-large-lawn-with-flowers-it_1340-45729.jpg?size=626&ext=jpg&ga=GA1.2.1166836568.1647150580&semt=ais"
//         alt=""
//       />

//       <img
//         className="2xl:w-[261px] lg:w-[220px] w-[280px] md:w-[220px] h-[200px] mx-auto md:mx-0 lg:mx-0 2xl:mx-0"
//         style={{ borderRadius: "45px 45px 45px 0px" }}
//         src="https://img.freepik.com/free-photo/large-house-with-lawn-large-lawn-with-flowers-it_1340-45729.jpg?size=626&ext=jpg&ga=GA1.2.1166836568.1647150580&semt=ais"
//         alt=""
//       />

//       <img
//         className="2xl:w-[261px] lg:w-[220px] w-[280px] md:w-[220px] h-[200px] mx-auto md:mx-0 lg:mx-0 2xl:mx-0"
//         style={{ borderRadius: "45px 45px 45px 0px" }}
//         src="https://img.freepik.com/free-photo/large-house-with-lawn-large-lawn-with-flowers-it_1340-45729.jpg?size=626&ext=jpg&ga=GA1.2.1166836568.1647150580&semt=ais"
//         alt=""
//       />

//       <img
//         className="2xl:w-[261px] lg:w-[220px] w-[280px] md:w-[220px] h-[200px] mx-auto md:mx-0 lg:mx-0 2xl:mx-0"
//         style={{ borderRadius: "45px 45px 45px 0px" }}
//         src="https://img.freepik.com/free-photo/large-house-with-lawn-large-lawn-with-flowers-it_1340-45729.jpg?size=626&ext=jpg&ga=GA1.2.1166836568.1647150580&semt=ais"
//         alt=""
//       />

//       <img
//         className="2xl:w-[261px] lg:w-[220px] w-[280px] md:w-[220px] h-[200px] mx-auto md:mx-0 lg:mx-0 2xl:mx-0"
//         style={{ borderRadius: "45px 45px 45px 0px" }}
//         src="https://img.freepik.com/free-photo/large-house-with-lawn-large-lawn-with-flowers-it_1340-45729.jpg?size=626&ext=jpg&ga=GA1.2.1166836568.1647150580&semt=ais"
//         alt=""
//       />
//     </div>

//      <div className=" flex justify-center gap-8 mt-10 ">

//         <HiOutlineArrowCircleLeft className="text-[30px] cursor-pointer"/>
//         <HiOutlineArrowCircleRight className="text-[30px] cursor-pointer"/>

//      </div>
//     </div>
//   );
// };

// export default ImageSlider;














import React, { useRef } from "react";
import Slider from "react-slick";
import {
  HiOutlineArrowCircleLeft,
  HiOutlineArrowCircleRight,
} from "react-icons/hi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const sliderRef = useRef(null);

  const goToNextSlide = () => {
    sliderRef.current.slickNext();
  };

  const goToPrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 640, // Small devices (e.g. smartphones)
          settings: {
            slidesToShow: 1,
          },
        },

        {
          breakpoint: 768, // Medium devices (e.g. tablets)
          settings: {
            slidesToShow: 3,
          },
        },

        {
            breakpoint: 820, // Medium devices (e.g. tablets)
            settings: {
              slidesToShow: 3,
            },
          },
         {
          breakpoint: 835, // Medium devices (e.g. tablets)
          settings: {
            slidesToShow: 3,
          },
        },
       

        {
          breakpoint: 1024, // Large devices (e.g. laptops)
          settings: {
            slidesToShow: 5,
          },
        },
      ],
  };

  return (
    <div className="max-w-container mx-auto mt-10">
      <div className="">
        <Slider ref={sliderRef} {...settings}>
          <div className="outline-0">
            <img
              className="2xl:w-[261px] lg:w-[220px] w-[280px] md:w-[220px] h-[200px] mx-auto md:mx-0 lg:mx-0 2xl:mx-0"
              style={{ borderRadius: "45px 45px 45px 0px" }}
              src="https://img.freepik.com/free-photo/large-house-with-lawn-large-lawn-with-flowers-it_1340-45729.jpg?size=626&ext=jpg&ga=GA1.2.1166836568.1647150580&semt=ais"
              alt=""
            />
          </div>
          <div className="outline-0">
            <img
              className="2xl:w-[261px] lg:w-[220px] w-[280px] md:w-[220px] h-[200px] mx-auto md:mx-0 lg:mx-0 2xl:mx-0"
              style={{ borderRadius: "45px 45px 45px 0px" }}
              src="https://img.freepik.com/free-photo/large-house-with-lawn-large-lawn-with-flowers-it_1340-45729.jpg?size=626&ext=jpg&ga=GA1.2.1166836568.1647150580&semt=ais"
              alt=""
            />
          </div>

          <div className="outline-0">
            <img
              className="2xl:w-[261px] lg:w-[220px] w-[280px] md:w-[220px] h-[200px] mx-auto md:mx-0 lg:mx-0 2xl:mx-0"
              style={{ borderRadius: "45px 45px 45px 0px" }}
              src="https://img.freepik.com/free-photo/large-house-with-lawn-large-lawn-with-flowers-it_1340-45729.jpg?size=626&ext=jpg&ga=GA1.2.1166836568.1647150580&semt=ais"
              alt=""
            />
          </div>

          <div className="outline-0">
            <img
              className="2xl:w-[261px] lg:w-[220px] w-[280px] md:w-[220px] h-[200px] mx-auto md:mx-0 lg:mx-0 2xl:mx-0"
              style={{ borderRadius: "45px 45px 45px 0px" }}
              src="https://img.freepik.com/free-photo/large-house-with-lawn-large-lawn-with-flowers-it_1340-45729.jpg?size=626&ext=jpg&ga=GA1.2.1166836568.1647150580&semt=ais"
              alt=""
            />
          </div>

          <div className="outline-0">
            <img
              className="2xl:w-[261px] lg:w-[220px] w-[280px] md:w-[220px] h-[200px] mx-auto md:mx-0 lg:mx-0 2xl:mx-0"
              style={{ borderRadius: "45px 45px 45px 0px" }}
              src="https://img.freepik.com/free-photo/large-house-with-lawn-large-lawn-with-flowers-it_1340-45729.jpg?size=626&ext=jpg&ga=GA1.2.1166836568.1647150580&semt=ais"
              alt=""
            />
          </div>
          <div className="outline-0">
            <img
              className="2xl:w-[261px] lg:w-[220px] w-[280px] md:w-[220px] h-[200px] mx-auto md:mx-0 lg:mx-0 2xl:mx-0"
              style={{ borderRadius: "45px 45px 45px 0px" }}
              src="https://img.freepik.com/free-photo/large-house-with-lawn-large-lawn-with-flowers-it_1340-45729.jpg?size=626&ext=jpg&ga=GA1.2.1166836568.1647150580&semt=ais"
              alt=""
            />
          </div>
          <div className="outline-0">
            <img
              className="2xl:w-[261px] lg:w-[220px] w-[280px] md:w-[220px] h-[200px] mx-auto md:mx-0 lg:mx-0 2xl:mx-0"
              style={{ borderRadius: "45px 45px 45px 0px" }}
              src="https://img.freepik.com/free-photo/large-house-with-lawn-large-lawn-with-flowers-it_1340-45729.jpg?size=626&ext=jpg&ga=GA1.2.1166836568.1647150580&semt=ais"
              alt=""
            />
          </div>
          <div className="outline-0">
            <img
              className="2xl:w-[261px] lg:w-[220px] w-[280px] md:w-[220px] h-[200px] mx-auto md:mx-0 lg:mx-0 2xl:mx-0"
              style={{ borderRadius: "45px 45px 45px 0px" }}
              src="https://img.freepik.com/free-photo/large-house-with-lawn-large-lawn-with-flowers-it_1340-45729.jpg?size=626&ext=jpg&ga=GA1.2.1166836568.1647150580&semt=ais"
              alt=""
            />
          </div>
          <div className="outline-0">
            <img
              className="2xl:w-[261px] lg:w-[220px] w-[280px] md:w-[220px] h-[200px] mx-auto md:mx-0 lg:mx-0 2xl:mx-0"
              style={{ borderRadius: "45px 45px 45px 0px" }}
              src="https://img.freepik.com/free-photo/large-house-with-lawn-large-lawn-with-flowers-it_1340-45729.jpg?size=626&ext=jpg&ga=GA1.2.1166836568.1647150580&semt=ais"
              alt=""
            />
          </div>
          <div className="outline-0">
            <img
              className="2xl:w-[261px] lg:w-[220px] w-[280px] md:w-[220px] h-[200px] mx-auto md:mx-0 lg:mx-0 2xl:mx-0"
              style={{ borderRadius: "45px 45px 45px 0px" }}
              src="https://img.freepik.com/free-photo/large-house-with-lawn-large-lawn-with-flowers-it_1340-45729.jpg?size=626&ext=jpg&ga=GA1.2.1166836568.1647150580&semt=ais"
              alt=""
            />
          </div>
          <div className="outline-0">
            <img
              className="2xl:w-[261px] lg:w-[220px] w-[280px] md:w-[220px] h-[200px] mx-auto md:mx-0 lg:mx-0 2xl:mx-0"
              style={{ borderRadius: "45px 45px 45px 0px" }}
              src="https://img.freepik.com/free-photo/large-house-with-lawn-large-lawn-with-flowers-it_1340-45729.jpg?size=626&ext=jpg&ga=GA1.2.1166836568.1647150580&semt=ais"
              alt=""
            />
          </div>
          <div className="outline-0">
            <img
              className="2xl:w-[261px] lg:w-[220px] w-[280px] md:w-[220px] h-[200px] mx-auto md:mx-0 lg:mx-0 2xl:mx-0"
              style={{ borderRadius: "45px 45px 45px 0px" }}
              src="https://img.freepik.com/free-photo/large-house-with-lawn-large-lawn-with-flowers-it_1340-45729.jpg?size=626&ext=jpg&ga=GA1.2.1166836568.1647150580&semt=ais"
              alt=""
            />
          </div>

          <div></div>
        </Slider>
      </div>
      <div className="flex justify-center gap-8 mt-10">
        <HiOutlineArrowCircleLeft
          className="text-[30px] cursor-pointer"
          onClick={goToNextSlide}
        />
        <HiOutlineArrowCircleRight
          className="text-[30px] cursor-pointer"
          onClick={goToPrevSlide}
        />
      </div>
    </div>
  );
};

export default ImageSlider;

import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
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
    <div className="container mx-auto mt-10">
      <Slider ref={sliderRef} {...settings}>
   
           <div  className="outline-0">
           <img
             className="2xl:w-[261px] lg:w-[220px] w-[280px] md:w-[220px] h-[200px] mx-auto md:mx-0 lg:mx-0 2xl:mx-0"
             style={{ borderRadius: "45px 45px 45px 0px" }}
             src="https://img.freepik.com/free-photo/large-house-with-lawn-large-lawn-with-flowers-it_1340-45729.jpg?size=626&ext=jpg&ga=GA1.2.1166836568.1647150580&semt=ais"
             alt=""
           />
         </div>
           <div  className="outline-0">
           <img
             className="2xl:w-[261px] lg:w-[220px] w-[280px] md:w-[220px] h-[200px] mx-auto md:mx-0 lg:mx-0 2xl:mx-0"
             style={{ borderRadius: "45px 45px 45px 0px" }}
             src="https://img.freepik.com/free-photo/large-house-with-lawn-large-lawn-with-flowers-it_1340-45729.jpg?size=626&ext=jpg&ga=GA1.2.1166836568.1647150580&semt=ais"
             alt=""
           />
         </div>
           <div  className="outline-0">
           <img
             className="2xl:w-[261px] lg:w-[220px] w-[280px] md:w-[220px] h-[200px] mx-auto md:mx-0 lg:mx-0 2xl:mx-0"
             style={{ borderRadius: "45px 45px 45px 0px" }}
             src="https://img.freepik.com/free-photo/large-house-with-lawn-large-lawn-with-flowers-it_1340-45729.jpg?size=626&ext=jpg&ga=GA1.2.1166836568.1647150580&semt=ais"
             alt=""
           />
         </div>
           <div  className="outline-0">
           <img
             className="2xl:w-[261px] lg:w-[220px] w-[280px] md:w-[220px] h-[200px] mx-auto md:mx-0 lg:mx-0 2xl:mx-0"
             style={{ borderRadius: "45px 45px 45px 0px" }}
             src="https://img.freepik.com/free-photo/large-house-with-lawn-large-lawn-with-flowers-it_1340-45729.jpg?size=626&ext=jpg&ga=GA1.2.1166836568.1647150580&semt=ais"
             alt=""
           />
         </div>
           <div  className="outline-0">
           <img
             className="2xl:w-[261px] lg:w-[220px] w-[280px] md:w-[220px] h-[200px] mx-auto md:mx-0 lg:mx-0 2xl:mx-0"
             style={{ borderRadius: "45px 45px 45px 0px" }}
             src="https://img.freepik.com/free-photo/large-house-with-lawn-large-lawn-with-flowers-it_1340-45729.jpg?size=626&ext=jpg&ga=GA1.2.1166836568.1647150580&semt=ais"
             alt=""
           />
         </div>
           <div  className="outline-0">
           <img
             className="2xl:w-[261px] lg:w-[220px] w-[280px] md:w-[220px] h-[200px] mx-auto md:mx-0 lg:mx-0 2xl:mx-0"
             style={{ borderRadius: "45px 45px 45px 0px" }}
             src="https://img.freepik.com/free-photo/large-house-with-lawn-large-lawn-with-flowers-it_1340-45729.jpg?size=626&ext=jpg&ga=GA1.2.1166836568.1647150580&semt=ais"
             alt=""
           />
         </div>
           <div  className="outline-0">
           <img
             className="2xl:w-[261px] lg:w-[220px] w-[280px] md:w-[220px] h-[200px] mx-auto md:mx-0 lg:mx-0 2xl:mx-0"
             style={{ borderRadius: "45px 45px 45px 0px" }}
             src="https://img.freepik.com/free-photo/large-house-with-lawn-large-lawn-with-flowers-it_1340-45729.jpg?size=626&ext=jpg&ga=GA1.2.1166836568.1647150580&semt=ais"
             alt=""
           />
         </div>
           <div  className="outline-0">
           <img
             className="2xl:w-[261px] lg:w-[220px] w-[280px] md:w-[220px] h-[200px] mx-auto md:mx-0 lg:mx-0 2xl:mx-0"
             style={{ borderRadius: "45px 45px 45px 0px" }}
             src="https://img.freepik.com/free-photo/large-house-with-lawn-large-lawn-with-flowers-it_1340-45729.jpg?size=626&ext=jpg&ga=GA1.2.1166836568.1647150580&semt=ais"
             alt=""
           />
         </div>
           <div  className="outline-0">
           <img
             className="2xl:w-[261px] lg:w-[220px] w-[280px] md:w-[220px] h-[200px] mx-auto md:mx-0 lg:mx-0 2xl:mx-0"
             style={{ borderRadius: "45px 45px 45px 0px" }}
             src="https://img.freepik.com/free-photo/large-house-with-lawn-large-lawn-with-flowers-it_1340-45729.jpg?size=626&ext=jpg&ga=GA1.2.1166836568.1647150580&semt=ais"
             alt=""
           />
         </div>
           <div  className="outline-0">
           <img
             className="2xl:w-[261px] lg:w-[220px] w-[280px] md:w-[220px] h-[200px] mx-auto md:mx-0 lg:mx-0 2xl:mx-0"
             style={{ borderRadius: "45px 45px 45px 0px" }}
             src="https://img.freepik.com/free-photo/large-house-with-lawn-large-lawn-with-flowers-it_1340-45729.jpg?size=626&ext=jpg&ga=GA1.2.1166836568.1647150580&semt=ais"
             alt=""
           />
         </div>
           <div  className="outline-0">
           <img
             className="2xl:w-[261px] lg:w-[220px] w-[280px] md:w-[220px] h-[200px] mx-auto md:mx-0 lg:mx-0 2xl:mx-0"
             style={{ borderRadius: "45px 45px 45px 0px" }}
             src="https://img.freepik.com/free-photo/large-house-with-lawn-large-lawn-with-flowers-it_1340-45729.jpg?size=626&ext=jpg&ga=GA1.2.1166836568.1647150580&semt=ais"
             alt=""
           />
         </div>
           <div  className="outline-0">
           <img
             className="2xl:w-[261px] lg:w-[220px] w-[280px] md:w-[220px] h-[200px] mx-auto md:mx-0 lg:mx-0 2xl:mx-0"
             style={{ borderRadius: "45px 45px 45px 0px" }}
             src="https://img.freepik.com/free-photo/large-house-with-lawn-large-lawn-with-flowers-it_1340-45729.jpg?size=626&ext=jpg&ga=GA1.2.1166836568.1647150580&semt=ais"
             alt=""
           />
         </div>
    
      </Slider>

    </div>
  );
};

export default ImageSlider;

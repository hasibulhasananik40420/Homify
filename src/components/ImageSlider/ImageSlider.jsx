/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from '../../assets/Property-image/image5.png'
import image2 from '../../assets/Property-image/image6.png'
import image3 from '../../assets/Property-image/property-1.jpg'
import image4 from '../../assets/Property-image/property-2.jpg'
import image5 from '../../assets/Property-image/property-3.jpg'
import image6 from '../../assets/Property-image/property-4.jpg'
import image7 from '../../assets/Property-image/property-5.jpg'
import image8 from '../../assets/Property-image/property-6.jpg'




const ImageSlider = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
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
    <div className="container mx-auto mt-10 overflow-hidden">
      <Slider ref={sliderRef} {...settings}>
   
           <div  className="outline-0">
           <img
             className="2xl:w-[261px] lg:w-[220px] w-[280px] md:w-[220px] h-[200px] mx-auto md:mx-0 lg:mx-0 2xl:mx-0"
             style={{ borderRadius: "45px 45px 45px 0px" }}
             src={image1}
             alt=""
           />
         </div>
           <div  className="outline-0">
           <img
             className="2xl:w-[261px] lg:w-[220px] w-[280px] md:w-[220px] h-[200px] mx-auto md:mx-0 lg:mx-0 2xl:mx-0"
             style={{ borderRadius: "45px 45px 45px 0px" }}
             src={image2}
             alt=""
           />
         </div>
           <div  className="outline-0">
           <img
             className="2xl:w-[261px] lg:w-[220px] w-[280px] md:w-[220px] h-[200px] mx-auto md:mx-0 lg:mx-0 2xl:mx-0"
             style={{ borderRadius: "45px 45px 45px 0px" }}
             src={image3}
             alt=""
           />
         </div>
           <div  className="outline-0">
           <img
             className="2xl:w-[261px] lg:w-[220px] w-[280px] md:w-[220px] h-[200px] mx-auto md:mx-0 lg:mx-0 2xl:mx-0"
             style={{ borderRadius: "45px 45px 45px 0px" }}
             src={image4}
             alt=""
           />
         </div>
           <div  className="outline-0">
           <img
             className="2xl:w-[261px] lg:w-[220px] w-[280px] md:w-[220px] h-[200px] mx-auto md:mx-0 lg:mx-0 2xl:mx-0"
             style={{ borderRadius: "45px 45px 45px 0px" }}
             src={image5}
             alt=""
           />
         </div>
           <div  className="outline-0">
           <img
             className="2xl:w-[261px] lg:w-[220px] w-[280px] md:w-[220px] h-[200px] mx-auto md:mx-0 lg:mx-0 2xl:mx-0"
             style={{ borderRadius: "45px 45px 45px 0px" }}
             src={image6}
             alt=""
           />
         </div>
           <div  className="outline-0">
           <img
             className="2xl:w-[261px] lg:w-[220px] w-[280px] md:w-[220px] h-[200px] mx-auto md:mx-0 lg:mx-0 2xl:mx-0"
             style={{ borderRadius: "45px 45px 45px 0px" }}
             src={image7}
             alt=""
           />
         </div>
           <div  className="outline-0">
           <img
             className="2xl:w-[261px] lg:w-[220px] w-[280px] md:w-[220px] h-[200px] mx-auto md:mx-0 lg:mx-0 2xl:mx-0"
             style={{ borderRadius: "45px 45px 45px 0px" }}
             src={image8}
             alt=""
           />
         </div>
          
          
         
         
    
      </Slider>

    </div>
  );
};

export default ImageSlider;

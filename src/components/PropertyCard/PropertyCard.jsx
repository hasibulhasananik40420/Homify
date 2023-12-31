/* eslint-disable react/prop-types */
import { LiaBathSolid, LiaBedSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";


const PropertyCard = ({property}) => {

  const {name,image,price,location,bathRooms,bedRooms,propertyid} = property

  return (

    <Fade bottom cascade>
     <div>
      {/************** property card start here ********************/}
      <div className="2xl:w-[467px] lg:w-[400px] md:w-[350px] w-full">
        <img
          className="2xl:w-[467px] lg:w-[400px] md:w-[467px] w-full h-[400px]"
          src={image}
          alt=""
          style={{borderRadius:'60px 60px 60px 0px'}}
        />
        <div className="mt-[20px]">
          <div className="flex items-center gap-[50px]">
            <p className="text-black font-Lato font-normal md:text-[16px] text-[13px]">
              Property ID-{propertyid}
            </p>
            <p className="text-[#F90] font-Teko font-bold tracking-[3.84px] md:text-[24px] text-[16px]">
              $ {price}
            </p>
          </div>

          <div className="flex items-center gap-[50px] mt-2">
            <p className="text-[#504594] font-Teko font-bold md:text-[20px] text-[16px]">
              {name}
            </p>
            <span className="flex items-center gap-3">
              <LiaBedSolid className="text-2xl" />
              <p className="text-black font-Lato font-normal md:text-[16px] text-[13px]">
               {bedRooms} Bed Rooms
              </p>
            </span>
          </div>

          <div className="flex items-center gap-[35px] mt-2">
            <p className="text-black font-Lato font-normal md:text-[16px] text-[13px]">
              {location}
            </p>
            <span className="flex items-center gap-3">
              <LiaBathSolid className="text-2xl" />
              <p className="text-black font-Lato font-normal md:text-[16px] text-[13px]">
                {bathRooms} Bath Rooms
              </p>
            </span>
          </div>

          <div className="flex items-center md:gap-[35px] gap-5 mt-5">
            <button className="text-[#F90] text-[16px] font-Lato font-bold md:w-[170px] w-[140px] h-[56px] custom-border-property border-[2px] border-[#F90] hover:bg-[#F90] duration-500 hover:text-white">
              Book
            </button>

           <Link to={'/property-details'}>
           <button className="bg-[#F90] text-white text-[16px] font-Lato font-bold md:w-[170px] w-[140px] h-[56px] custom-border-property hover:border-[2px] hover:border-[#F90] hover:bg-white duration-500 hover:text-[#F90]">
              View
            </button>
           </Link>
          </div>
        </div>
      </div>
      {/************** property card end here ********************/}
     </div>
     </Fade>
  );
};

export default PropertyCard;

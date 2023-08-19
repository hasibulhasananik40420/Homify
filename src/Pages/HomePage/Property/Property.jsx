import PropertyCard from "../../../components/PropertyCard/PropertyCard"
import { BiSolidDownArrow } from "react-icons/bi";

const Property = () => {
  return (
     //********************  Our property section start here **************************//
     <div className="max-w-container mx-auto lg:px-8 2xl:px-0 px-4 md:px-4 pt-32">
     <h1 className="lg:text-[56px] text-[30px] md:text-[56px] text-[#504594] font-bold font-Teko text-center ">
     Buy Your Dream Property from here
     </h1>
     <p className="text-[#4F4E4E] font-normal font-Lato text-[20px] text-center">
     We have huge properties collection, Chose you dream house.
     </p>


     <div className="flex justify-center items-center gap-5 w-full mt-20 ">
          <div className="w-[591px] h-[56px] rounded-l-full rounded-r-0 border-[2px] border-primary">
            <div className="flex gap-[47px] items-center px-16 h-[50px]">
              <div className="flex items-center gap-5">
                <h1 className="text-black font-Lato font-normal text-[16px]">
                  Location
                </h1>
                <BiSolidDownArrow className="text-[16px] text-black" />
              </div>
              <div className="flex items-center gap-5">
                <h1 className="text-black font-Lato font-normal text-[16px]">
                  Property Size
                </h1>
                <BiSolidDownArrow className="text-[16px] text-black" />
              </div>
              <div className="flex items-center gap-5">
                <h1 className="text-black font-Lato font-normal text-[16px]">
                  Price Range $
                </h1>
                <BiSolidDownArrow className="text-[16px] text-black" />
              </div>
            </div>
          </div>

          <div>
            <button className="bg-[#F90] text-white text-[16px] font-Lato font-bold w-[170px] h-[56px] custom-border-property  hover:bg-primary transform ease-in-out duration-500 ">
              Search
            </button>
          </div>
        </div>

    
     <div>
        <PropertyCard/>
     </div>
    
   </div>
   //********************  Our property section end here **************************//
  )
}

export default Property
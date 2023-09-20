import PropertyCard from "../../../components/PropertyCard/PropertyCard"
import { BiSearch, BiSolidDownArrow } from "react-icons/bi";
import property1 from '../../../assets/Property-image/property-1.jpg'
import property2 from '../../../assets/Property-image/property-2.jpg'
import property3 from '../../../assets/Property-image/property-3.jpg'
import property4 from '../../../assets/Property-image/property-4.jpg'
import property5 from '../../../assets/Property-image/property-5.jpg'
import property6 from '../../../assets/Property-image/property-6.jpg'

const Property = () => {


  const propertis = [
    {
      _id: 1,
      image: property1,
      price:'10,00,000',
      name: "Lake View Castle",
      bedRooms: 3,
      bathRooms: 3,
      location: "773/2, New york, USA",
    },

     {
      _id: 2,
      image:property2 ,
      propertyid:'007654',
      price:'13,79,590',
      name: "Southbreez Castle",
      bedRooms: 4,
      bathRooms: 3,
      location: "773/2, Dallas City, USA",
    },

 {
      _id: 3,
      image:property3 ,
      propertyid:'007654',
      price:'19,57,599',
      name: "Sea View Villa",
      bedRooms: 6,
      bathRooms: 5,
      location: "773/2, California, USA",
    },

 {
      _id: 4,
      image:property4 ,
      propertyid:'007654',
      price:'12,89,990',
      name: "Rose Garden Condo",
      bedRooms: 3,
      bathRooms: 3,
      location: "773/2, New york, USA",
    },
 {
      _id: 5,
      image:property5 ,
      propertyid:'007654',
      price:'17,57,999',
      name: "Castle Panaroma",
      bedRooms: 4,
      bathRooms: 3,
      location: "773/2, Texas, USA",
    },
{
      _id: 6,
      image:property6 ,
      propertyid:'007654',
      price:'19, 75,897',
      name: "Dream House Condo",
      bedRooms: 3,
      bathRooms: 3,
      location: "773/2, New york, USA",
    },




  ]





  return (
     //********************  Our property section start here **************************//
     <div className="max-w-container mx-auto lg:px-8 2xl:px-0 px-4 md:px-8 2xl:pt-32 lg:pt-[100px] md:pt-[80px] pt-16">
     <h1 className="lg:text-[56px] text-[32px] md:text-[56px] text-[#504594] font-bold font-Teko text-center ">
     Buy Your Dream Property from here
     </h1>
     <p className="text-[#4F4E4E] font-normal font-Lato text-[20px] text-center">
     We have huge properties collection, Chose you dream house.
     </p>


       <div className="lg:flex md:flex justify-center items-center gap-5 w-full mt-20 lg:block md:block hidden">
          <div className="lg:w-[591px] md:w-full w-full h-[56px] rounded-l-full rounded-r-0 border-[2px] border-primary">
            <div className="flex gap-[47px] items-center lg:px-16 md:pl-6 h-[50px]">
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

         <div className="mt-20 relative lg:hidden md:hidden block">
           <input className="w-full h-[56px] border-[1px] border-secondaryColor outline-0 text-[20px] font-Lato font-medium pl-5 rounded-s-full" type="search" name="" id="" placeholder="Search Property"/>
           <span className="absolute right-0 w-[60px] bg-secondaryColor h-[56px] cursor-pointer">
            <BiSearch className="text-[40px] mt-2 ml-2 text-white"/>
           </span>
         </div>

    
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3  gap-x-[20px] gap-y-[50px] justify-items-center mt-20">
        {
          propertis?.map(property => <PropertyCard key={property._id} property={property}/>)
        }
     </div>

          <div className="flex justify-center mt-20">
            <button className="bg-[#F90] text-white text-[16px] font-Lato font-bold w-[280px] h-[56px] custom-border-property  hover:bg-primary transform ease-in-out duration-500 ">
            Load More Properties
            </button>
          </div>
    
   </div>
   //********************  Our property section end here **************************//
  )
}

export default Property
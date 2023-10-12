import PropertyCard from "../../../components/PropertyCard/PropertyCard";
import property1 from "../../../assets/Property-image/property-1.jpg";
import property2 from "../../../assets/Property-image/property-2.jpg";
import property3 from "../../../assets/Property-image/property-3.jpg";
import property4 from "../../../assets/Property-image/property-4.jpg";
import property5 from "../../../assets/Property-image/property-5.jpg";
import property6 from "../../../assets/Property-image/property-6.jpg";
import { Link } from "react-router-dom";

const Property = () => {
  const propertis = [
    {
      _id: 1,
      image: property1,
      price: "10,00,000",
      name: "Lake View Castle",
      bedRooms: 3,
      bathRooms: 3,
      location: "773/2, New york, USA",
    },

    {
      _id: 2,
      image: property2,
      propertyid: "007654",
      price: "13,79,590",
      name: "Southbreez Castle",
      bedRooms: 4,
      bathRooms: 3,
      location: "773/2, Dallas City, USA",
    },

    {
      _id: 3,
      image: property3,
      propertyid: "007654",
      price: "19,57,599",
      name: "Sea View Villa",
      bedRooms: 6,
      bathRooms: 5,
      location: "773/2, California, USA",
    },

    {
      _id: 4,
      image: property4,
      propertyid: "007654",
      price: "12,89,990",
      name: "Rose Garden Condo",
      bedRooms: 3,
      bathRooms: 3,
      location: "773/2, New york, USA",
    },
    {
      _id: 5,
      image: property5,
      propertyid: "007654",
      price: "17,57,999",
      name: "Castle Panaroma",
      bedRooms: 4,
      bathRooms: 3,
      location: "773/2, Texas, USA",
    },
    {
      _id: 6,
      image: property6,
      propertyid: "007654",
      price: "19, 75,897",
      name: "Dream House Condo",
      bedRooms: 3,
      bathRooms: 3,
      location: "773/2, New york, USA",
    },
  ];

  return (
    //********************  Our property section start here **************************//
    <div className="max-w-container mx-auto lg:px-8 2xl:px-0 px-4 md:px-8 2xl:pt-32 lg:pt-[100px] md:pt-[80px] pt-16">
      <h1 className="lg:text-[56px] text-[32px] md:text-[56px] text-[#504594] font-bold font-Teko text-center ">
        Buy Your Dream Property from here
      </h1>
      <p className="text-[#4F4E4E] font-normal font-Lato text-[20px] text-center">
        We have huge properties collection, Chose you dream house.
      </p>

       {/******************* search property here *********************/}
       <div>
            <div className="mt-20 lg:w-[750px] w-full mx-auto relative">
             
              <input
                className=" lg:w-full md:w-full w-full h-[56px] pl-10 rounded-[60px] border-[1px] border-[#878383] text-[#2F2D2D] font-Lato text-[14px] font-normal leading-6 outline-none focus:border-primary focus:ring-primary focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-primary transition-all duration-700"
                type="name"
                placeholder="Search your property here"
              />

              <button className="text-white text-[16px] font-Lato font-bold lg:w-[192px] md:w-[192px] w-[110px] h-[48px] absolute right-1 top-[4px] bg-secondaryColor custom-border-property hover:bg-primary duration-500">
                Search
              </button>
            </div>
              </div>
           {/******************* search property here *********************/}


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3  gap-x-[20px] gap-y-[50px] justify-items-center mt-20">
        {propertis?.map((property) => (
          <PropertyCard key={property._id} property={property} />
        ))}
      </div>

      <div className="flex justify-center mt-20">
       <Link to={'/property-grid'}>
       <button className="bg-[#F90] text-white text-[16px] font-Lato font-bold w-[280px] h-[56px] custom-border-property  hover:bg-primary transform ease-in-out duration-500 ">
          Load More Properties
        </button>
       </Link>
      </div>
    </div>
    //********************  Our property section end here **************************//
  );
};

export default Property;

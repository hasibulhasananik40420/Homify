import PropertyCardTwo from "../../../components/PropertyCard/PropertyCardTwo";

const PropertyTwo = () => {
  return (
    //******************** property two section start here **************************//
    //******************** ##########################  ********************************//
    <div>
      <div className="max-w-container mx-auto lg:px-8 2xl:px-0 px-4 md:px-8 2xl:mt-32 lg:mt-[100px] md:mt-20 mt-16">
        <h1 className="lg:text-[56px] text-[30px] md:text-[56px] text-[#504594] font-bold font-Teko text-center ">
        Property For Sale
        </h1>
        <p className="text-[#4F4E4E] font-normal font-Lato text-[20px] text-center">
          We have huge properties collection, Chose you dream house.
        </p>

        <div>
           <PropertyCardTwo/>
        </div>
      </div>
    </div>

    //******************** property two section start here **************************//
    //******************** ##########################  ********************************//
  );
};

export default PropertyTwo;

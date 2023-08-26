import CommonAction from "../../components/CommonAction/CommonAction"
import PropertyListCardTwo from "../../components/PropertyListCard/PropertyListCardTwo"

const PropertyListTwo = () => {
  return (
  //******************** property list two section start here **************************//
  //******************** ##########################  ********************************//
    <div>
         <CommonAction title={"Property grid two"} subTitle={"Home> Property Grid two "} />

         <div className="max-w-container mx-auto lg:px-8 2xl:px-0 px-4 md:px-8 2xl:mt-32 lg:mt-[100px] md:mt-20 mt-16">

         <h1 className="lg:text-[56px] text-[30px] md:text-[56px] text-[#504594] font-bold font-Teko text-center ">
          Buy Your Dream Property from here
        </h1>
        <p className="text-[#4F4E4E] font-normal font-Lato text-[20px] text-center">
          We have huge properties collection, Chose you dream house.
        </p>



           <div>
             <PropertyListCardTwo/>
           </div>



         </div>
        
    </div>

     //******************** property list two section end here **************************//
  //******************** ##########################  ********************************//
  )
}

export default PropertyListTwo
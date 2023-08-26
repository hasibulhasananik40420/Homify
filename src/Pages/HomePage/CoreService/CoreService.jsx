import CoreServiceCard from "../../../components/CoreServiceCard/CoreServiceCard"

const CoreService = () => {
  return (
     //********************  Core service section start here **************************//
    //******************** ##########################  **************************//
    <div className="max-w-container mx-auto lg:px-8 2xl:px-0 px-4 md:px-8 2xl:pt-32 lg:pt-[100px] md:pt-[80px] pt-16">
        <h1 className="lg:text-[56px] md:text-[56px] text-[32px] text-[#375E97] font-Teko font-bold text-center">Our Core Services</h1>
        <p className="text-[20px] font-Lato font-normal text-[#4E4D4D] text-center">Why do you choose us ? We have some core services that really benefited for you</p>
  
         <div>
          <CoreServiceCard/>
         </div>
  
    </div>

     //********************  Core service section end here **************************//
    //******************** ##########################  **************************//
  )
}

export default CoreService
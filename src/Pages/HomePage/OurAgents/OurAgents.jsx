import OurAgentsCard from "../../../components/OurAgentsCard/OurAgentsCard";

const OurAgents = () => {
  return (
    //********************  Our agents section start here **************************//
    <div className="max-w-container mx-auto lg:px-8 2xl:px-0 px-4 md:px-8 2xl:pt-32 lg:pt-[100px] md:pt-[80px] pt-16">
      <h1 className="lg:text-[56px] text-[32px] md:text-[56px] text-[#504594] font-bold font-Teko text-center ">
        Consult with our Skilled Agents
      </h1>
      <p className="text-[#4F4E4E] font-normal font-Lato text-[20px] text-center">
        Your any kind of information, contact our skilled and sophisticated team
        and take their help.
      </p>

     
      <div>
         <OurAgentsCard/>
      </div>
     
    </div>
    //********************  Our agents section end here **************************//
  );
};

export default OurAgents;

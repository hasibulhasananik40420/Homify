import AgentsListCard from "../../components/AgentsListCard/AgentsListCard"
import CommonAction from "../../components/CommonAction/CommonAction"

const AgentsList = () => {
  return (
     //********************  Our agents list section end here **************************//
     //******************** ##########################  ********************************//
    <div>
        <CommonAction title={'Agents list'} subTitle={'Home> Agents List'}/>

        <div className="max-w-container mx-auto lg:px-8 2xl:px-0 px-4 md:px-8 2xl:mt-20 mt-12">
      <h1 className="lg:text-[56px] text-[30px] md:text-[56px] text-[#504594] font-bold font-Teko text-center ">
        Consult with our Skilled Agents
      </h1>
      <p className="text-[#4F4E4E] font-normal font-Lato text-[20px] text-center">
        Your any kind of information, contact our skilled and sophisticated team
        and take their help.
      </p>

      {/* ********************  Our agents list card section end here ************************** */}
      <div>
        <AgentsListCard/>
      </div>
      {/* ********************  Our agents list card section end here ************************** */}
    </div>
    </div>
     //********************  Our agents list section end here **************************//
  )
}

export default AgentsList
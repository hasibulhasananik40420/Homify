import CommonAction from "../../components/CommonAction/CommonAction"

import agent1 from '../../assets/Agents-images/agent1.jpg'
import agent2 from '../../assets/Agents-images/agent2.jpg'
import agent3 from '../../assets/Agents-images/agent3.jpg'
import agent4 from '../../assets/Agents-images/agent4.jpg'
import agent5 from '../../assets/Agents-images/agent5.jpg'
import agent6 from '../../assets/Agents-images/agent6.jpg'
import agent7 from '../../assets/Agents-images/agent7.jpg'
import agent8 from '../../assets/Agents-images/agent8.jpg'
import OurAgentsCard from "../../components/OurAgentsCard/OurAgentsCard"




const AgentsList = () => {

   const agents = [
    
    {
      _id: 1,
      image: agent1,
      name: "Mack Alexa",
      news: "Real Estate Agent",
      phone: '0123 786 88567',
      email:'mackalexa@gmail.com'
    },
     {
      _id: 2,
      image: agent2,
      name: "Mack Alexa",
      news: "Real Estate Agent",
      phone: '0123 786 88567',
      email:'mackalexa@gmail.com'
    },
 {
      _id: 3,
      image: agent3,
      name: "Mack Alexa",
      news: "Real Estate Agent",
      phone: '0123 786 88567',
      email:'mackalexa@gmail.com'
    },

 {
      _id: 4,
      image: agent4,
      name: "Mack Alexa",
      news: "Real Estate Agent",
      phone: '0123 786 88567',
      email:'mackalexa@gmail.com'
    },

 {
      _id: 5,
      image: agent5,
      name: "Mack Alexa",
      news: "Real Estate Agent",
      phone: '0123 786 88567',
      email:'mackalexa@gmail.com'
    },

 {
      _id: 6,
      image: agent6,
      name: "Mack Alexa",
      news: "Real Estate Agent",
      phone: '0123 786 88567',
      email:'mackalexa@gmail.com'
    },

 {
      _id: 7,
      image: agent7,
      name: "Mack Alexa",
      news: "Real Estate Agent",
      phone: '0123 786 88567',
      email:'mackalexa@gmail.com'
    },

 {
      _id: 8,
      image: agent8,
      name: "Mack Alexa",
      news: "Real Estate Agent",
      phone: '0123 086 88567',
      email:'mackalexa@gmail.com'
    },



   ]


  return (
     //********************  Our agents list section end here **************************//
     //******************** ##########################  ********************************//
    <div>
        <CommonAction title={'Agents list'} subTitle={'Home> Agents List'}/>

        <div className="max-w-container mx-auto lg:px-8 2xl:px-0 px-4 md:px-8 2xl:mt-20 mt-12">
      <h1 className="lg:text-[56px] text-[32px] md:text-[56px] text-[#504594] font-bold font-Teko text-center ">
        Consult with our Skilled Agents
      </h1>
      <p className="text-[#4F4E4E] font-normal font-Lato text-[20px] text-center">
        Your any kind of information, contact our skilled and sophisticated team
        and take their help.
      </p>

      {/* ********************  Our agents list card section start here ************************** */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4 gap-x-[20px] gap-y-[100px] justify-items-center pt-28">
        {
          agents?.map(agent => <OurAgentsCard key={agent?._id} agent={agent}/>)
        }
     
      </div>
      {/* ********************  Our agents list card section end here ************************** */}
    </div>


      {/****************** pagination start here  ******************/}
      <div className="flex justify-center items-center gap-5 mt-20 2xl:mb-32 lg:mb-[100px] md:mb-[80px] mb-16 lg:px-0 2xl:px-0 px-4 md:px-0">
        <button className="w-[100px] h-[56px] flex justify-center items-center text-white font-Lato text-[16px] font-bold leading-8 bg-secondaryColor rounded-[8px] hover:bg-primary transform duration-500  ">
          Previous
        </button>

        <button className="w-[56px] h-[56px] text-white font-Lato text-[16px] font-bold leading-8 bg-primary rounded-[8px] hover:bg-secondaryColor transform duration-500  ">
          1
        </button>
        <button className="w-[56px] h-[56px] text-black font-Lato text-[16px] font-bold leading-8 bg-[#C5C4CA] rounded-[8px] hover:bg-secondaryColor transform duration-500  ">
          2
        </button>
        <button className="w-[56px] h-[56px] text-black font-Lato text-[16px] font-bold leading-8 bg-[#C5C4CA] rounded-[8px] hover:bg-secondaryColor transform duration-500  ">
          3
        </button>
        <button className="w-[56px] h-[56px] text-white font-Lato text-[16px] font-bold leading-8 bg-secondaryColor rounded-[8px] hover:bg-primary transform duration-500  ">
          Next
        </button>
      </div>
      {/****************** pagination end here  ******************/}



    </div>
     //********************  Our agents list section end here **************************//
  )
}

export default AgentsList
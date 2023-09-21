import CommonAction from "../../components/CommonAction/CommonAction"
import OurAgentsCardTwo from "../../components/OurAgentsCard/OurAgentsCardTwo"
import agents1 from "../../assets/Agents-images/agent6.jpg";
import agents2 from "../../assets/Agents-images/agent-v2-2.png";
import agents3 from "../../assets/Agents-images/agent-v2-3.png";
import agents4 from "../../assets/Agents-images/agent-v4.png";
import agents5 from "../../assets/Agents-images/agent-v5.png";
import agents6 from "../../assets/Agents-images/agent-v6.png";
import agents7 from "../../assets/Agents-images/agent7.jpg";
import agents8 from "../../assets/Agents-images/agent8.jpg";
import agents9 from "../../assets/Agents-images/agent2.jpg";





const AgentsListVersionTwo = () => {

  const agents = [

    {
     _id:1,
     image:agents1,
     name:'Water Smith',
     email:'watersmiths@gmail.com',
     phone:'+12343 896 678',
     agentTitle:'Real Estate Agent'
    },

     {
     _id:2,
     image:agents2,
     name:'Lilly Little',
     email:'lillylittle@gmail.com',
     phone:'+12343 896 678',
     agentTitle:'Real Estate Agent'
    },
 {
     _id:3,
     image:agents3,
     name:'Jellah Herman',
     email:'jellahherman@gmail.com',
     phone:'+12343 896 678',
     agentTitle:'Real Estate Agent'
    },

    {
     _id:4,
     image:agents6,
     name:'Camelia Rose Star',
     email:'cameliarosestar@gmail.com',
     phone:'+12343 896 678',
     agentTitle:'Real Estate Agent'
    },
  {
     _id:5,
     image:agents5,
     name:'Ricki Martine',
     email:'rickimartine@gmail.com',
     phone:'+12343 896 678',
     agentTitle:'Real Estate Agent'
    },

      {
     _id:6,
     image:agents4,
     name:'Hassie Lander',
     email:'hassielander@gmail.com',
     phone:'+12343 896 678',
     agentTitle:'Real Estate Agent'
    },
    
    {
     _id:7,
     image:agents7,
     name:'Jasmin Lander',
     email:'jasminlander@gmail.com',
     phone:'+12343 896 678',
     agentTitle:'Real Estate Agent'
    },

    
 {
     _id:8,
     image:agents8,
     name:'Hasib Luni',
     email:'hasibluni@gmail.com',
     phone:'+12343 896 678',
     agentTitle:'Real Estate Agent'
    },
 {
     _id:9,
     image:agents9,
     name:'Mack Alexa',
     email:'mackalexa@gmail.com',
     phone:'+12343 896 678',
     agentTitle:'Real Estate Agent'
    },

    

]


  return (
     //********************  Agents list version two section end here **************************//
    //******************** ##########################  ********************************//
    <div>
         <CommonAction title={"Agents List "} subTitle={"Home> Agents List Two"} />


         <div className="max-w-container mx-auto lg:px-8 2xl:px-0 px-4 md:px-8 2xl:pt-32 lg:pt-[100px] md:pt-20 pt-16">
             


             <h1 className="text-[#3E348F] lg:text-[56px] md:text-[56px] text-[32px] font-Teko font-bold leading-[56px] text-center">Meet With Our  Skilled Agent</h1>
               <p className="text-black text-[20px] font-Lato font-normal leading-8 text-center"> Lorem Ipsum dollar Why do you choose us , We have some core services that really benefited for you</p>


               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3  gap-x-[20px] gap-y-[50px] justify-items-center pt-20">

                  {
                 agents?.map(data => <OurAgentsCardTwo key={data._id} data={data}/>)
                  }

                  </div>


                   {/****************** pagination start here  ******************/}
      <div className="flex justify-center items-center gap-5 mt-20 2xl:mb-32 lg:mb-[100px] md:mb-[80px] mb-16">
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
        
    </div>

     //********************  Agents list version two section end here **************************//
    //******************** ##########################  ********************************//
  )
}

export default AgentsListVersionTwo
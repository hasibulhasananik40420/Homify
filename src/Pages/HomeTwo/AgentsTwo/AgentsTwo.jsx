import OurAgentsCardTwo from "../../../components/OurAgentsCard/OurAgentsCardTwo"
import agents1 from "../../../assets/Agents-images/agent-v2.png";
import agents2 from "../../../assets/Agents-images/agent-v2-2.png";
import agents3 from "../../../assets/Agents-images/agent-v2-3.png";
import agents4 from "../../../assets/Agents-images/agent-v4.png";
import agents5 from "../../../assets/Agents-images/agent-v5.png";
import agents6 from "../../../assets/Agents-images/agent-v6.png";


const AgentsTwo = () => {

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

    

]
    



    return (
        //********************  Agents two  section start here **************************//
       //******************** ##########################  ********************************//
       <div>
   
   
            <div className="max-w-container mx-auto lg:px-8 2xl:px-0 px-4 md:px-8 2xl:pt-32 lg:pt-[100px] md:pt-20 pt-16">
                
   
   
                <h1 className="text-[#3E348F] lg:text-[82px] md:text-[56px] text-[32px] font-Teko font-bold leading-[56px] "><span className="text-[#181C21]">Meet With Our</span> Skilled Agent</h1>
                  <p className="text-[#4E4D4D] text-[16px] font-Lato font-normal leading-8 "> Lorem Ipsum dollar Why do you choose us , We have some core services that really benefited for you</p>
   
   
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3  gap-x-[20px] gap-y-[50px] justify-items-center pt-20">

                  {
                 agents?.map(data => <OurAgentsCardTwo key={data._id} data={data}/>)
                  }

                  </div>
   
   
   
            </div>
           
       </div>
   
        //********************  Agents two section end here **************************//
       //******************** ##########################  ********************************//
     )
   }

export default AgentsTwo
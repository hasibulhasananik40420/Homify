import CommonAction from "../../components/CommonAction/CommonAction"
import PropertyCardTwo from "../../components/PropertyCard/PropertyCardTwo"
import property1 from '../../assets/Property-image/image1.png'
import property2 from '../../assets/Property-image/image2.png'
import property3 from '../../assets/Property-image/image3.png'
import property4 from '../../assets/Property-image/image4.png'
import property5 from '../../assets/Property-image/image5.png'
import property6 from '../../assets/Property-image/image6.png'
import property7 from '../../assets/Property-image/property-1.jpg'
import property8 from '../../assets/Property-image/property-2.jpg'
import property9 from '../../assets/Property-image/property-3.jpg'
import agent1 from '../../assets/Agents-images/agent2.jpg'
import agent2 from '../../assets/Agents-images/agent1.jpg'
import agent3 from '../../assets/Agents-images/agent3.jpg'
import agent4 from '../../assets/Agents-images/agent5.jpg'
import agent5 from '../../assets/Agents-images/agent6.jpg'
import agent6 from '../../assets/Agents-images/agent7.jpg'
import agent7 from '../../assets/Agents-images/agent-v2-2.png'
import agent8 from '../../assets/Agents-images/agent-v2-3.png'
import agent9 from '../../assets/Agents-images/agent-v4.png'




const PropertyListTwo = () => {


  const properties = [

    {
     _id:1,
     image:property1,
     price:'13,27,269',
     name:'Sweet Dream for Comfort',
     details:'Lorem ipsum dolor sit amet. Aut vol up sunt suscipit qui Quis illo sed quam ipsum.',
     bedrooms:3,
     bathrooms:3,
     squarefeet:5765,
     agentImage:agent1,
     agentName:'Water Smiths',
     agentTitle:'Real Estate Agent'
    },

      {
     _id:2,
     image:property2,
     price:'11,57, 239',
     name:'Nayagra View House',
     details:'Lorem ipsum dolor sit amet. Aut vol up sunt suscipit qui Quis illo sed quam ipsum.',
     bedrooms:3,
     bathrooms:3,
     squarefeet:4875,
     agentImage:agent2,
     agentName:'Brayan Gislason',
     agentTitle:'Real Estate Agent'
    },

{
     _id:3,
     image:property3,
     price:'16,37, 358',
     name:'Texas New Castle Home',
     details:'Lorem ipsum dolor sit amet. Aut vol up sunt suscipit qui Quis illo sed quam ipsum.',
     bedrooms:3,
     bathrooms:3,
     squarefeet:3760,
     agentImage:agent3,
     agentName:'Alina Kuti',
     agentTitle:'Real Estate Agent'
    },

{
     _id:4,
     image:property4,
     price:'14,39, 217',
     name:'Nayagra View House',
     details:'Lorem ipsum dolor sit amet. Aut vol up sunt suscipit qui Quis illo sed quam ipsum.',
     bedrooms:3,
     bathrooms:3,
     squarefeet:3390,
     agentImage:agent4,
     agentName:'Odie Homenick',
     agentTitle:'Real Estate Agent'
    },

{
     _id:5,
     image:property5,
     price:'17,67, 339',
     name:'Sweet Heaven Condonium',
     details:'Lorem ipsum dolor sit amet. Aut vol up sunt suscipit qui Quis illo sed quam ipsum.',
     bedrooms:3,
     bathrooms:3,
     squarefeet:3720,
     agentImage:agent5,
     agentName:'Jallel Herman',
     agentTitle:'Real Estate Agent'
    },

     {
     _id:6,
     image:property6,
     price:'12,39, 459',
     name:'Miami Sea Beach Palace',
     details:'Lorem ipsum dolor sit amet. Aut vol up sunt suscipit qui Quis illo sed quam ipsum.',
     bedrooms:3,
     bathrooms:3,
     squarefeet:4780,
     agentImage:agent6,
     agentName:'Lilly Little',
     agentTitle:'Real Estate Agent'
    },
    
    {
     _id:7,
     image:property7,
     price:'11,29,137',
     name:'Lake View Castle',
     details:'Lorem ipsum dolor sit amet. Aut vol up sunt suscipit qui Quis illo sed quam ipsum.',
     bedrooms:4,
     bathrooms:3,
     squarefeet:4980,
     agentImage:agent7,
     agentName:'Anzu Sami',
     agentTitle:'Real Estate Agent'
    },
    
    {
     _id:8,
     image:property8,
     price:'13,79,590',
     name:'Southbreez Castle',
     details:'Lorem ipsum dolor sit amet. Aut vol up sunt suscipit qui Quis illo sed quam ipsum.',
     bedrooms:4,
     bathrooms:3,
     squarefeet:3780,
     agentImage:agent8,
     agentName:'Rahul Hamid',
     agentTitle:'Real Estate Agent'
    }, 
    {
     _id:9,
     image:property9,
     price:'19,57,599',
     name:'Sea View Villa',
     details:'Lorem ipsum dolor sit amet. Aut vol up sunt suscipit qui Quis illo sed quam ipsum.',
     bedrooms:3,
     bathrooms:3,
     squarefeet:4780,
     agentImage:agent9,
     agentName:'Easmin Dehani',
     agentTitle:'Real Estate Agent'
    },


]
  



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



           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3  gap-x-[20px] gap-y-[50px] justify-items-center mt-20">

            
           {
            properties?.map(data => <PropertyCardTwo key={data._id} data={data}/>)
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

     //******************** property list two section end here **************************//
  //******************** ##########################  ********************************//
  )
}

export default PropertyListTwo
import PropertyCardTwo from "../../../components/PropertyCard/PropertyCardTwo";
import appointment from "../../../assets/Chose-us-image/appointment.svg";
import office from "../../../assets/Chose-us-image/office.svg";
import house from "../../../assets/Property-image/house.png";
import framHouse from "../../../assets/Chose-us-image/fram-house.svg";
import spece from "../../../assets/Chose-us-image/spece.svg";
import duplexHouse from "../../../assets/Chose-us-image/duplex-house.svg";
import singleHouse from "../../../assets/Chose-us-image/single-house.svg";

// import agent1 from '../../../assets/Agents-images/agent-v4.png'

import property1 from '../../../assets/Property-image/image1.png'
import property2 from '../../../assets/Property-image/image2.png'
import property3 from '../../../assets/Property-image/image3.png'
import property4 from '../../../assets/Property-image/image4.png'
import property5 from '../../../assets/Property-image/image5.png'
import property6 from '../../../assets/Property-image/image6.png'
import agent1 from '../../../assets/Agents-images/agent2.jpg'
import agent2 from '../../../assets/Agents-images/agent1.jpg'
import agent3 from '../../../assets/Agents-images/agent3.jpg'
import agent4 from '../../../assets/Agents-images/agent5.jpg'
import agent5 from '../../../assets/Agents-images/agent6.jpg'
import agent6 from '../../../assets/Agents-images/agent7.jpg'


const PropertyTwo = () => {


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


   ]
       
   





  return (
    //******************** property two section start here **************************//
    //******************** ##########################  ********************************//
    <div>
      <div className="max-w-container mx-auto lg:px-8 2xl:px-0 px-4 md:px-8 2xl:mt-32 lg:mt-[100px] md:mt-20 mt-16">
        <h1 className="lg:text-[82px] text-[32px] md:text-[56px] text-[#3E348F] font-bold font-Teko text-right ">
          <span className="text-[#181C21]">Ready Property</span> For Sale
        </h1>

        <div className="lg:flex 2xl:gap-[121px] lg:gap-20 mt-20">
          <div className="flex flex-col gap-10">
            <div className="lg:flex md:flex md:justify-center gap-x-10">
             
             
              <div
                className="2xl:w-[400px] lg:w-[350px] md:w-[350px] w-full h-[160px] flex justify-center items-center gap-8 bg-hoverColor hover:bg-white duration-500"
                style={{
                  boxShadow: "0px 4px 60px 0px rgba(185, 175, 175, 0.15)",
                }}
              >
                <span>
                  <img
                    className="w-[100px] h-[100px]"
                    src={appointment}
                    alt=""
                  />
                </span>
                <span>
                  <h1 className="text-[#3E348F] text-[32px] font-Teko font-medium">
                    Single Apartment
                  </h1>
                  <p className="text-[#181C21] text-[20px] font-Lato font-bold">
                    (135 Projects )
                  </p>
                </span>
              </div>

              <div
                className="2xl:w-[400px] lg:w-[350px] md:w-[350px] mt-8 md:mt-0 lg:mt-0 2xl:mt-0 w-full h-[160px] flex justify-center items-center gap-8 hover:bg-hoverColor duration-500"
                style={{
                  boxShadow: "0px 4px 60px 0px rgba(185, 175, 175, 0.15)",
                }}
              >
                <span>
                  <img className="w-[100px] h-[100px]" src={office} alt="" />
                </span>
                <span>
                  <h1 className="text-[#3E348F] text-[32px] font-Teko font-medium">
                    Office Space
                  </h1>
                  <p className="text-[#181C21] text-[20px] font-Lato font-bold">
                    (59 Projects )
                  </p>
                </span>
              </div>
            </div>

            <div className="lg:flex md:flex md:justify-center gap-x-10">
              <div
                className="2xl:w-[400px] lg:w-[350px] md:w-[350px] w-full h-[160px] flex justify-center items-center gap-8 hover:bg-hoverColor duration-500"
                style={{
                  boxShadow: "0px 4px 60px 0px rgba(185, 175, 175, 0.15)",
                }}
              >
                <span>
                  <img className="w-[100px] h-[100px]" src={framHouse} alt="" />
                </span>
                <span>
                  <h1 className="text-[#3E348F] text-[32px] font-Teko font-medium">
                    Farm House
                  </h1>
                  <p className="text-[#181C21] text-[20px] font-Lato font-bold">
                    (17 Projects )
                  </p>
                </span>
              </div>

              <div
                className="2xl:w-[400px] lg:w-[350px] md:w-[350px] mt-8 md:mt-0 lg:mt-0 2xl:mt-0 w-full h-[160px] flex justify-center items-center gap-8 hover:bg-hoverColor duration-500"
                style={{
                  boxShadow: "0px 4px 60px 0px rgba(185, 175, 175, 0.15)",
                }}
              >
                <span>
                  <img className="w-[100px] h-[100px]" src={spece} alt="" />
                </span>
                <span>
                  <h1 className="text-[#3E348F] text-[32px] font-Teko font-medium">
                    Commercial Space
                  </h1>
                  <p className="text-[#181C21] text-[20px] font-Lato font-bold">
                    (179 Projects )
                  </p>
                </span>
              </div>
            </div>

            <div className="lg:flex md:flex md:justify-center gap-x-10">
              <div
                className="2xl:w-[400px] lg:w-[350px] md:w-[350px] w-full h-[160px] flex justify-center items-center gap-8 hover:bg-hoverColor duration-500"
                style={{
                  boxShadow: "0px 4px 60px 0px rgba(185, 175, 175, 0.15)",
                }}
              >
                <span>
                  <img
                    className="w-[100px] h-[100px]"
                    src={duplexHouse}
                    alt=""
                  />
                </span>
                <span>
                  <h1 className="text-[#3E348F] text-[32px] font-Teko font-medium">
                    Duplex Home
                  </h1>
                  <p className="text-[#181C21] text-[20px] font-Lato font-bold">
                    (119 Projects )
                  </p>
                </span>
              </div>
              <div
                className="2xl:w-[400px] lg:w-[350px] md:w-[350px] mt-8 md:mt-0 lg:mt-0 2xl:mt-0 w-full h-[160px] flex justify-center items-center gap-8 hover:bg-hoverColor duration-500"
                style={{
                  boxShadow: "0px 4px 60px 0px rgba(185, 175, 175, 0.15)",
                }}
              >
                <span>
                  <img
                    className="w-[100px] h-[100px]"
                    src={singleHouse}
                    alt=""
                  />
                </span>
                <span>
                  <h1 className="text-[#3E348F] text-[32px] font-Teko font-medium">
                    Single Home
                  </h1>
                  <p className="text-[#181C21] text-[20px] font-Lato font-bold">
                    (139 Projects )
                  </p>
                </span>
              </div>
            </div>
          </div>

          <div>
            <img
              className="lg:w-[478px] w-full h-[560px] mt-20 md:mt-20 lg:mt-0 2xl:mt-0"
              src={house}
              alt=""
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3  gap-x-[20px] gap-y-[50px] justify-items-center mt-20">

           {
            properties?.map(data => <PropertyCardTwo key={data._id} data={data}/>)
           }

         
        </div>

        <div className="flex justify-center mt-20">
            <button className="bg-[#F90] text-white text-[16px] font-Lato font-bold w-[280px] h-[56px] rounded-full  hover:bg-primary transform ease-in-out duration-500 ">
            Load More Properties
            </button>
          </div>
          
      </div>
    </div>

    //******************** property two section start here **************************//
    //******************** ##########################  ********************************//
  );
};

export default PropertyTwo;

import { LiaBathSolid, LiaBedSolid, LiaSquare } from "react-icons/lia";
import property6 from "../../../src/assets/Property-image/Property-image6.jpg";
import { FiEye } from "react-icons/fi";
import { RiHeartAddLine } from "react-icons/ri";
import { CgPlayTrackNextR } from "react-icons/cg";
import { SlLocationPin } from "react-icons/sl";


const PropertyCardTwo = () => {
  return (
     //******************** property card two section start here **************************//
  //******************** ##########################  ********************************//
    <div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3  gap-x-[20px] gap-y-[50px] justify-items-center mt-20 mb-8">
       
       
       
       <div className="2xl:w-[467px] lg:w-[400px] md:w-[350px] w-full relative">
         <img
           className="2xl:w-[467px] lg:w-[400px] md:w-[467px] w-full h-[400px] "
           src={property6}
           alt=""
         />

          <span className="bg-secondaryColor  w-[140px] h-[60px] flex justify-center items-center absolute top-6">
           <p className="text-[20px] font-Lato font-bold leading-8 text-white"> FOR SALE</p>
          </span>

       <span className="flex gap-3 items-center absolute justify-center inset-0 pb-10">
          <SlLocationPin className="text-white text-xl"/>
           <p className="text-[16px] font-Lato font-normal text-white"> Belmonti Riverview, Newyork, USA.</p>
          </span>



         <div
           className="bg-white pt-6"
           style={{ boxShadow: "0px 4px 45px 0px rgba(180, 178, 178, 0.30)" }}
         >
           <p className="text-secondaryColor text-[32px]  font-bold font-Teko 2xl:pl-8 lg:pl-4 pl-2">
             $ 13,37, 269
           </p>
           <p className="text-black 2xl:text-[32px] text-[24px] font-bold font-Lato 2xl:pl-8 lg:pl-4 pl-2">
             Sweet Dream for Comfort
           </p>
           <p className="text-[#6B6969] text-[16px] font-normal leading-8 font-Lato 2xl:w-[394px] lg:w-[340px] w-full pt-2 pb-6 2xl:pl-8 lg:pl-4 pl-2">
             Lorem ipsum dolor sit amet. Aut vol up sunt suscipit qui Quis illo
             sed quam ipsum. At temporibus autem{" "}
           </p>

           <div className="flex lg:gap-4 2xl:gap-6 gap-3 border-b-[1px] pb-5">
             <div className="2xl:pl-8 lg:pl-4 pl-2">
               <span className="flex  gap-3">
                 <p className="text-black font-Teko font-bold text-[20px]">
                   3
                 </p>
                 <LiaBedSolid className="text-2xl" />
               </span>
               <h4 className="text-black lg:text-[20px] text-[16px] font-Lato font-normal leading-[20px] pt-1">
                 Bedrooms
               </h4>
             </div>
              <div className="border-r-[1px] border-r-[#181C21]">
              </div>
             <div className=" ">
               <span className="flex  gap-3">
                 <p className="text-black font-Teko font-bold text-[20px]">
                   3
                 </p>
                 <LiaBathSolid className="text-2xl" />
               </span>
               <h4 className="text-black lg:text-[20px] text-[16px] font-Lato font-normal leading-[20px] pt-1">
               Bathrooms
               </h4>
             </div>
             <div className="border-r-[1px] border-r-[#181C21]">
              </div>
             <div className="">
               <span className="flex  gap-3">
                 <p className="text-black font-Teko font-bold text-[20px]">
                 5765
                 </p>
                 <LiaSquare className="text-2xl" />
               </span>
               <h4 className="text-black lg:text-[20px] text-[16px] font-Lato font-normal leading-[20px] pt-1">
               Square Feet
               </h4>
             </div>
           </div>

              <div className="flex lg:gap-10 gap-5 items-center py-3 2xl:pl-8 lg:pl-4 pl-2">
                <div className="flex items-center gap-3">
                   <img className="w-12 h-12 rounded-full" src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.1166836568.1647150580&semt=sph" alt="" />

                   <span>
                       <h1 className="text-black lg:text-[20px] text-[14px] font-Lato font-bold leading-8">Water Smiths</h1> 
                       
                       <h1 className="text-[#263238] lg:text-[16px] text-[12px] font-Teko font-normal leading-8">Real Estate Agent</h1>
                   </span>
                </div>

                 <div className="flex gap-4 border">
                     <span className="w-10 h-10 rounded-[8px] bg-[#F7F2F2] flex justify-center items-center cursor-pointer hover:bg-secondaryColor duration-500 group">
                       <FiEye className="text-xl text-black group-hover:text-white"/>
                     </span>
                     
                      <span className="w-10 h-10 rounded-[8px] bg-[#F7F2F2] flex justify-center items-center cursor-pointer hover:bg-secondaryColor duration-500 group">
                       <RiHeartAddLine className="text-xl text-black group-hover:text-white"/>
                     </span>
                     
                      <span className="w-10 h-10 rounded-[8px] bg-[#F7F2F2] flex justify-center items-center cursor-pointer hover:bg-secondaryColor duration-500 group">
                       <CgPlayTrackNextR className="text-xl text-black group-hover:text-white"/>
                     </span>
                 </div>
              </div>

         </div>
       </div>




     
















     </div>
    </div>


     //******************** property card two section end here **************************//
  //******************** ##########################  ********************************//
  )
}

export default PropertyCardTwo
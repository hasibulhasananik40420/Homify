import { BiSearch, BiSolidDownArrow } from "react-icons/bi";


const SearchBar = () => {
  return (
    <div>
          <div className="mt-[140px]">
           <div className="flex gap-4 justify-center">
             <button className="text-white text-[20px] font-Lato font-medium leading-8 tracking-[2px] uppercase bg-[#3E348F] w-[186px] h-[70px]">BUY</button>
             <button className="text-black text-[20px] font-Lato font-medium leading-8 tracking-[2px] uppercase bg-white w-[186px] h-[70px]">sell</button>
           </div>


            <div className="bg-white h-[156px] 2xl:w-[1440px] lg:w-[1280px] rounded-lg relative ">
              <div className="grid grid-cols-3 gap-[30px] 2xl:w-[1100px] lg:w-[980px] justify-items-center items-center h-[156px] 2xl:ml-[84px] lg:ml-[50px]">

                 {/* item 1 */}
                <div>
                  <h1 className="text-black text-[20px] font-Teko font-medium leading-8 tracking-[2px] uppercase">Search Loaction</h1>

                   <div className="2xl:w-[340px] lg:w-[300px] w-full h-[60px] rounded-lg flex justify-between items-center px-[40px] cursor-pointer" style={{border:"1px solid rgba(162, 160, 160, 0.60)"}}>

                     <p className="text-[#263238] text-[14px] font-Lato font-normal leading-8  uppercase">select your location</p>

                     <BiSolidDownArrow className="text-[#375E97] text-2xl"/>

                   </div>
                </div>


              {/* item 2 */}
                <div>
                  <h1 className="text-black text-[20px] font-Teko font-medium leading-8 tracking-[2px] uppercase">Search Loaction</h1>

                   <div className="2xl:w-[340px] lg:w-[300px] w-full h-[60px] rounded-lg flex justify-between items-center px-[40px] cursor-pointer" style={{border:"1px solid rgba(162, 160, 160, 0.60)"}}>

                     <p className="text-[#263238] text-[14px] font-Lato font-normal leading-8  uppercase">select your location</p>

                     <BiSolidDownArrow className="text-[#375E97] text-2xl"/>

                   </div>
                </div>



              {/* item 3 */}
                <div>
                  <h1 className="text-black text-[20px] font-Teko font-medium leading-8 tracking-[2px] uppercase">Search Loaction</h1>

                   <div className="2xl:w-[340px] lg:w-[300px] w-full h-[60px] rounded-lg flex justify-between items-center px-[40px] cursor-pointer" style={{border:"1px solid rgba(162, 160, 160, 0.60)"}}>

                     <p className="text-[#263238] text-[14px] font-Lato font-normal leading-8  uppercase">select your location</p>

                     <BiSolidDownArrow className="text-[#375E97] text-2xl"/>

                   </div>
                </div>

              </div>


              {/* search bar */}
             <div className="bg-secondaryColor rounded-lg w-[198px] h-[149px] flex justify-center items-center gap-2 absolute right-[3px] top-[3px] cursor-pointer">
                    <BiSearch className="text-white text-2xl"/>
                   <p className="text-white text-[20px] font-Lato font-normal">search</p>
               </div>

               
            </div>

             


        </div>
    </div>
  )
}

export default SearchBar
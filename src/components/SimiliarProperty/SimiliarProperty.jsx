import { LiaBathSolid, LiaBedSolid } from "react-icons/lia";
import image1 from '../../../src/assets/Property-image/property-9.jpg'
import image2 from '../../assets/Property-image/blog-related-image1.jpg'
import image3 from '../../assets/Property-image/blog-related-image2.jpg'
import image4 from '../../assets/Property-image/image1.png'
import image5 from '../../assets/Property-image/image2.png'
import image6 from '../../assets/Property-image/property-6.jpg'


const SimiliarProperty = () => {
  return (
    <div className="">
       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3  gap-x-[20px] gap-y-[50px] justify-items-center mt-20">


      {/**************Similiar property card 1 start here ********************/}
      <div className="2xl:w-[467px] lg:w-[400px] md:w-[350px] w-full">
        <img
          className="2xl:w-[467px] lg:w-[400px] md:w-[467px] w-[350px] h-[400px] border custom-border-image"
          src={image1}
          alt=""
        />
        <div className="mt-[20px]">
          <div className="flex items-center gap-[50px]">
            <p className="text-black font-Lato font-normal md:text-[16px] text-[13px]">
              Property ID-007654
            </p>
            <p className="text-[#F90] font-Teko font-bold leading-[3.84px] md:text-[24px] text-[16px]">
              $ 10,0 0,0 0 0
            </p>
          </div>

          <div className="flex items-center gap-[50px] mt-2">
            <p className="text-[#504594] font-Teko font-bold md:text-[20px] text-[16px]">
              Southbreez Castle
            </p>
            <span className="flex items-center gap-3">
              <LiaBedSolid className="text-2xl" />
              <p className="text-black font-Lato font-normal md:text-[16px] text-[13px]">
                3 Bed Rooms
              </p>
            </span>
          </div>

          <div className="flex items-center gap-[35px] mt-2">
            <p className="text-black font-Lato font-normal md:text-[16px] text-[13px]">
              773/2, New york, USA
            </p>
            <span className="flex items-center gap-3">
              <LiaBathSolid className="text-2xl" />
              <p className="text-black font-Lato font-normal md:text-[16px] text-[13px]">
                3 Bath Rooms
              </p>
            </span>
          </div>

          <div className="flex items-center gap-[35px] mt-5">
            <button className="text-[#F90] text-[16px] font-Lato font-bold md:w-[170px] w-[140px] h-[56px] custom-border-property border-[2px] border-[#F90] hover:bg-[#F90] duration-500 hover:text-white">
              Book
            </button>

            <button className="bg-[#F90] text-white text-[16px] font-Lato font-bold md:w-[170px] w-[140px] h-[56px] custom-border-property hover:border-[2px] hover:border-[#F90] hover:bg-white duration-500 hover:text-[#F90]">
              View
            </button>
          </div>
        </div>
      </div>
      {/************** property card 1 end here ********************/}


      {/************** property card 2 start here ********************/}
      <div className="2xl:w-[467px] lg:w-[400px] md:w-[350px] w-full">
        <img
          className="2xl:w-[467px] lg:w-[400px] md:w-[467px] w-[350px] h-[400px] border custom-border-image"
          src={image2}
          alt=""
        />
        <div className="mt-[20px]">
          <div className="flex items-center gap-[50px]">
            <p className="text-black font-Lato font-normal md:text-[16px] text-[13px]">
              Property ID-007654
            </p>
            <p className="text-[#F90] font-Teko font-bold leading-[3.84px]  md:text-[24px] text-[16px]">
              $ 60,7 0,0 0 0
            </p>
          </div>

          <div className="flex items-center gap-[50px] mt-2">
            <p className="text-[#504594] font-Teko font-bold md:text-[20px] text-[16px]">
              Southbreez Castle
            </p>
            <span className="flex items-center gap-3">
              <LiaBedSolid className="text-2xl" />
              <p className="text-black font-Lato font-normal md:text-[16px] text-[13px]">
                3 Bed Rooms
              </p>
            </span>
          </div>

          <div className="flex items-center gap-[35px] mt-2">
            <p className="text-black font-Lato font-normal md:text-[16px] text-[13px]">
              773/2, New york, USA
            </p>
            <span className="flex items-center gap-3">
              <LiaBathSolid className="text-2xl" />
              <p className="text-black font-Lato font-normal md:text-[16px] text-[13px]">
                3 Bath Rooms
              </p>
            </span>
          </div>

          <div className="flex items-center gap-[35px] mt-5">
            <button className="text-[#F90] text-[16px] font-Lato font-bold w-[170px] h-[56px] custom-border-property border-[2px] border-[#F90] hover:bg-[#F90] duration-500 hover:text-white">
              Book
            </button>

            <button className="bg-[#F90] text-white text-[16px] font-Lato font-bold w-[170px] h-[56px] custom-border-property hover:border-[2px] hover:border-[#F90] hover:bg-white duration-500 hover:text-[#F90]">
              View
            </button>
          </div>
        </div>
      </div>
      {/************** property card 2 end here ********************/}

      {/************** property card 3 start here ********************/}
      <div className="2xl:w-[467px] lg:w-[400px] md:w-[350px] w-full">
        <img
          className="2xl:w-[467px] lg:w-[400px] md:w-[467px] w-[350px] h-[400px] border custom-border-image"
          src={image3}
          alt=""
        />
        <div className="mt-[20px]">
          <div className="flex items-center gap-[50px]">
            <p className="text-black font-Lato font-normal md:text-[16px] text-[13px]">
              Property ID-007654
            </p>
            <p className="text-[#F90] font-Teko font-bold leading-[3.84px]  md:text-[24px] text-[16px]">
              $ 30,0 0,0 0 0
            </p>
          </div>

          <div className="flex items-center gap-[50px] mt-2">
            <p className="text-[#504594] font-Teko font-bold md:text-[20px] text-[16px]">
              Southbreez Castle
            </p>
            <span className="flex items-center gap-3">
              <LiaBedSolid className="text-2xl" />
              <p className="text-black font-Lato font-normal md:text-[16px] text-[13px]">
                3 Bed Rooms
              </p>
            </span>
          </div>

          <div className="flex items-center gap-[35px] mt-2">
            <p className="text-black font-Lato font-normal md:text-[16px] text-[13px]">
              773/2, New york, USA
            </p>
            <span className="flex items-center gap-3">
              <LiaBathSolid className="text-2xl" />
              <p className="text-black font-Lato font-normal md:text-[16px] text-[13px]">
                3 Bath Rooms
              </p>
            </span>
          </div>

          <div className="flex items-center gap-[35px] mt-5">
            <button className="text-[#F90] text-[16px] font-Lato font-bold w-[170px] h-[56px] custom-border-property border-[2px] border-[#F90] hover:bg-[#F90] duration-500 hover:text-white">
              Book
            </button>

            <button className="bg-[#F90] text-white text-[16px] font-Lato font-bold w-[170px] h-[56px] custom-border-property hover:border-[2px] hover:border-[#F90] hover:bg-white duration-500 hover:text-[#F90]">
              View
            </button>
          </div>
        </div>
      </div>
      {/************** property card 3 end here ********************/}
    
     {/************** property card 4 start here ********************/}
      <div className="2xl:w-[467px] lg:w-[400px] md:w-[350px] w-full">
        <img
          className="2xl:w-[467px] lg:w-[400px] md:w-[467px] w-[350px] h-[400px] border custom-border-image"
          src={image4}
          alt=""
        />
        <div className="mt-[20px]">
          <div className="flex items-center gap-[50px]">
            <p className="text-black font-Lato font-normal md:text-[16px] text-[13px]">
              Property ID-007654
            </p>
            <p className="text-[#F90] font-Teko font-bold leading-[3.84px]  md:text-[24px] text-[16px]">
              $ 10,0 0,0 0 0
            </p>
          </div>

          <div className="flex items-center gap-[50px] mt-2">
            <p className="text-[#504594] font-Teko font-bold md:text-[20px] text-[16px]">
              Southbreez Castle
            </p>
            <span className="flex items-center gap-3">
              <LiaBedSolid className="text-2xl" />
              <p className="text-black font-Lato font-normal md:text-[16px] text-[13px]">
                3 Bed Rooms
              </p>
            </span>
          </div>

          <div className="flex items-center gap-[35px] mt-2">
            <p className="text-black font-Lato font-normal text-[16px]">
              773/2, New york, USA
            </p>
            <span className="flex items-center gap-3">
              <LiaBathSolid className="text-2xl" />
              <p className="text-black font-Lato font-normal md:text-[16px] text-[13px]">
                3 Bath Rooms
              </p>
            </span>
          </div>

          <div className="flex items-center gap-[35px] mt-5">
            <button className="text-[#F90] text-[16px] font-Lato font-bold w-[170px] h-[56px] custom-border-property border-[2px] border-[#F90] hover:bg-[#F90] duration-500 hover:text-white">
              Book
            </button>

            <button className="bg-[#F90] text-white text-[16px] font-Lato font-bold w-[170px] h-[56px] custom-border-property hover:border-[2px] hover:border-[#F90] hover:bg-white duration-500 hover:text-[#F90]">
              View
            </button>
          </div>
        </div>
      </div>
      {/************** property card 4 end here ********************/}
    
     {/************** property card 5 start here ********************/}
      <div className="2xl:w-[467px] lg:w-[400px] md:w-[350px] w-full">
        <img
          className="2xl:w-[467px] lg:w-[400px] md:w-[467px] w-[350px] h-[400px] border custom-border-image"
          src={image5}
          alt=""
        />
        <div className="mt-[20px]">
          <div className="flex items-center gap-[50px]">
            <p className="text-black font-Lato font-normal md:text-[16px] text-[13px]">
              Property ID-007654
            </p>
            <p className="text-[#F90] font-Teko font-bold leading-[3.84px]  md:text-[24px] text-[16px]">
              $ 17,0 0,0 0 0
            </p>
          </div>

          <div className="flex items-center gap-[50px] mt-2">
            <p className="text-[#504594] font-Teko font-bold md:text-[20px] text-[16px]">
              Southbreez Castle
            </p>
            <span className="flex items-center gap-3">
              <LiaBedSolid className="text-2xl" />
              <p className="text-black font-Lato font-normal md:text-[16px] text-[13px]">
                3 Bed Rooms
              </p>
            </span>
          </div>

          <div className="flex items-center gap-[35px] mt-2">
            <p className="text-black font-Lato font-normal md:text-[16px] text-[13px]">
              773/2, New york, USA
            </p>
            <span className="flex items-center gap-3">
              <LiaBathSolid className="text-2xl" />
              <p className="text-black font-Lato font-normal md:text-[16px] text-[13px]">
                3 Bath Rooms
              </p>
            </span>
          </div>

          <div className="flex items-center gap-[35px] mt-5">
            <button className="text-[#F90] text-[16px] font-Lato font-bold w-[170px] h-[56px] custom-border-property border-[2px] border-[#F90] hover:bg-[#F90] duration-500 hover:text-white">
              Book
            </button>

            <button className="bg-[#F90] text-white text-[16px] font-Lato font-bold w-[170px] h-[56px] custom-border-property hover:border-[2px] hover:border-[#F90] hover:bg-white duration-500 hover:text-[#F90]">
              View
            </button>
          </div>
        </div>
      </div>
      {/************** property card 5 end here ********************/}
    
    
     {/************** property card 6 start here ********************/}
      <div className="2xl:w-[467px] lg:w-[400px] md:w-[350px] w-full">
        <img
          className="2xl:w-[467px] lg:w-[400px] md:w-[467px] w-[350px] h-[400px] border custom-border-image"
          src={image6}
          alt=""
        />
        <div className="mt-[20px]">
          <div className="flex items-center gap-[50px]">
            <p className="text-black font-Lato font-normal md:text-[16px] text-[13px]">
              Property ID-007654
            </p>
            <p className="text-[#F90] font-Teko font-bold leading-[3.84px]  md:text-[24px] text-[16px]">
              $ 19,0 0,0 0 0
            </p>
          </div>

          <div className="flex items-center gap-[50px] mt-2">
            <p className="text-[#504594] font-Teko font-bold md:text-[20px] text-[16px]">
              Southbreez Castle
            </p>
            <span className="flex items-center gap-3">
              <LiaBedSolid className="text-2xl" />
              <p className="text-black font-Lato font-normal md:text-[16px] text-[13px]">
                3 Bed Rooms
              </p>
            </span>
          </div>

          <div className="flex items-center gap-[35px] mt-2">
            <p className="text-black font-Lato font-normal md:text-[16px] text-[13px]">
              773/2, New york, USA
            </p>
            <span className="flex items-center gap-3">
              <LiaBathSolid className="text-2xl" />
              <p className="text-black font-Lato font-normal md:text-[16px] text-[13px]">
                3 Bath Rooms
              </p>
            </span>
          </div>

          <div className="flex items-center gap-[35px] mt-5">
            <button className="text-[#F90] text-[16px] font-Lato font-bold w-[170px] h-[56px] custom-border-property border-[2px] border-[#F90] hover:bg-[#F90] duration-500 hover:text-white">
              Book
            </button>

            <button className="bg-[#F90] text-white text-[16px] font-Lato font-bold w-[170px] h-[56px] custom-border-property hover:border-[2px] hover:border-[#F90] hover:bg-white duration-500 hover:text-[#F90]">
              View
            </button>
          </div>
        </div>
      </div>
      {/************** property card 6 end here ********************/}
    
    </div>
   
      
    </div>
  );
};

export default SimiliarProperty;

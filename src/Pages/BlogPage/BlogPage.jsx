import CommonAction from "../../components/CommonAction/CommonAction";
import BlogCard from "../../components/BlogCard/BlogCard";
import image1 from "../../assets/Blog-image/Rectangle 1177.png";


const BlogPage = () => {
  return (
    //********************  Blog details section start here **************************//
    //******************** ##########################  ********************************//
    <div>
      <CommonAction title={"Blog "} subTitle={"Home> Blog  "} />

      {/******************* blog  part start here *******************/}

      <div className="max-w-container mx-auto lg:px-8 2xl:px-0 px-4 md:px-8 2xl:pt-32 lg:pt-[100px] md:pt-[40px] pt-0">
        {/******************* blog  part 1 start here *******************/}
        <div className="lg:flex lg:relative mb-[200px]">
          <div
            className=" lg:w-[694px] w-full h-[400px] md:h-[400px] mt-32 bg-[#3E348F] flex justify-center items-center z-30 hover:bg-secondaryColor duration-1000 group hover:cursor-pointer"
            style={{
              borderRadius: "60px 60px 60px 0px",
              boxShadow: "0px 4px 60px 0px rgba(68, 68, 68, 0.30",
            }}
          >
            <h1 className="lg:w-[530px] md:w-[530px] w-[250px] ">
              <span className="text-white lg:text-[56px] md:text-[56px] text-[32px] font-Lato font-bold lg:leading-[76px] md:leading-[70px] leading-[70px]">
                Boost
              </span>{" "}
              <span className="text-white lg:text-[56px] md:text-[56px] text-[32px] font-Lato font-light lg:leading-[76px] md:leading-[70px] leading-[70px]">
                Property Sales
              </span>{" "}
              <span className="text-[#C27D16] lg:text-[56px] md:text-[56px] text-[32px] font-Lato font-bold lg:leading-[76px] md:leading-[70px] leading-[70px] group-hover:text-primary duration-1000">
                with a Real Estate
              </span>{" "}
              <span className="text-white lg:text-[56px] md:text-[56px] text-[32px] font-Lato font-light lg:leading-[76px] md:leading-[70px] leading-[70px]">
                Photo
              </span>{" "}
              <span className="text-white lg:text-[56px] md:text-[56px] text-[32px] font-Lato font-extrabold lg:leading-[76px] md:leading-[70px] leading-[70px]">
                grapher
              </span>
            </h1>
          </div>

          <div className="2xl:w-[1071px] lg:w-[950px] lg:h-[650px] 2xl:h-[650px] md:h-[400px] h-[400px] lg:absolute lg:right-[20px] md:pt-20 pt-20 lg:pt-0 2xl:pt-0">
            <div
              className="relative 2xl:w-[1071px] lg:w-[950px] lg:h-[650px] 2xl:h-[650px] md:h-[400px] h-[400px] overflow-hidden "
              style={{ borderRadius: "60px 60px 60px 0px" }}
            >
              <img
                className="w-full h-full object-cover transition-transform duration-300 transform-gpu scale-100 hover:scale-105 hover:rotate-2"
                style={{ borderRadius: "60px 60px 60px 0px" }}
                src={image1}
                alt=""
              />
              <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
               
              </div>
            </div>
          </div>
        </div>
        {/******************* blog  part 1 end here *******************/}


        {/******************* blog card  start here *******************/}

        <BlogCard />
        {/******************* blog card  end here *******************/}

        

        {/******************* blog pagination start  here *******************/}
        <div className="flex justify-center items-center gap-5  mb-10">
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

        {/******************* blog pagination end  here *******************/}


       

      </div>

      {/******************* blog details part end here *******************/}
    </div>
    //********************  Blog details section start here **************************//
    //******************** ##########################  ********************************//
  );
};

export default BlogPage;

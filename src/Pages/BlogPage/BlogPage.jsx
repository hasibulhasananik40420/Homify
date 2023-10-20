import CommonAction from "../../components/CommonAction/CommonAction";
import BlogCard from "../../components/BlogCard/BlogCard";
// import image1 from "../../assets/Blog-image/Rectangle 1177.png";
import BlogSidebar from "./BlogSidebar";

const BlogPage = () => {
  return (
    //********************  Blog details section start here **************************//
    //******************** ##########################  ********************************//
    <div>
      <CommonAction title={"Blog "} subTitle={"Home> Blog  "} />

      {/******************* blog  part start here *******************/}

      <div className="max-w-container mx-auto lg:px-8 2xl:px-0 px-4 md:px-8 2xl:pt-32 lg:pt-[100px] md:pt-[40px] pt-0">
        {/******************* blog card  start here *******************/}
        <div className="grid justify-items-center gap-[121px] grid-cols-1 lg:grid-cols-3 lg:px-8 2xl:px-0 px-0 md:px-0 ">
          <div className=" lg:col-span-2 ">
            <BlogCard />
          </div>
          <div className=" lg:col-span-1 ">
            <BlogSidebar />
          </div>
        </div>

        {/******************* blog card  end here *******************/}
      </div>

            {/******************* blog pagination start  here *******************/}
            <div className="flex  justify-center items-center gap-5 2xl:my-32 lg:mb-[100px] md:mb-20 mb-16 mt-20 lg:px-0 2xl:px-0 px-4 md:px-0">
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
    //********************  Blog details section start here **************************//
    //******************** ##########################  ********************************//
  );
};

export default BlogPage;

import BlogCardTwo from "../../components/BlogCard/BlogCardTwo";
import CommonAction from "../../components/CommonAction/CommonAction";

const BlogVersionTwo = () => {
  return (
    //********************  Blog version two section start here **************************//
    //******************** ##########################  ********************************//

    <div>
      <CommonAction title={"Blog "} subTitle={"Home> Blog Version Two"} />

      <div className="max-w-container mx-auto lg:px-8 2xl:px-0 px-4 md:px-8 2xl:pt-32 lg:pt-[100px] md:pt-20 pt-16">
        <h1 className="text-[#3E348F] lg:text-[56px] md:text-[56px] text-[32px] font-Teko font-bold leading-[56px] text-center">
          Our News and Blogs
        </h1>
        <p className="text-black text-[20px] font-Lato font-normal leading-8 text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the-
        </p>

        <div>
          <BlogCardTwo />
        </div>
      </div>
    </div>

    //********************  Blog version two section end here **************************//
    //******************** ##########################  ********************************//
  );
};

export default BlogVersionTwo;

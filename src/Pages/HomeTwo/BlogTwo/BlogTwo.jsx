import BlogCardTwo from "../../../components/BlogCard/BlogCardTwo";
import blog1 from "../../../assets/Blog-image/blog-v1.png";
import blog2 from "../../../assets/Blog-image/blog-2.png";
import blog3 from "../../../assets/Blog-image/blog-3.png";
import blog4 from "../../../assets/Blog-image/blog-4.png";
import blog5 from "../../../assets/Blog-image/blog-5.png";
import blog6 from "../../../assets/Blog-image/blog-6.png";



const BlogTwo = () => {
  const products = [
    {
      _id: 1,
      image: blog1,
      name: "The most Inspiring Interior Design in 2023.",
      news: "Real Estate Trending News",
      publish: "February 27, 2023",
    },
    {
      _id: 2,
      image: blog2,
      name: "7 Home Trend That Will Shape your House 2023",
      news: "Real Estate Trending News",
      publish: "March 27, 2023",
    },

    {
      _id: 3,
      image: blog3,
      name: "Recent Commercial Real Estate Transaction",
      news: "Real Estate Trending News",
      publish: "March 21, 2023",
    },

    {
      _id: 4,
      image: blog4,
      name: "10 Brilliants Way to decorate your home ",
      news: "Real Estate Trending News",
      publish: "May 11, 2023",
    },

    {
      _id: 5,
      image: blog5,
      name: "Renovate your living room with expert help",
      news: "Real Estate Trending News",
      publish: "July 20, 2022",
    },

    {
      _id: 6,
      image: blog6,
      name: "how to make modern house at low cost",
      news: "Real Estate Trending News",
      publish: "July 20, 2022",
    },
  ];

  return (
    <div>
      <div className="max-w-container mx-auto lg:px-8 2xl:px-0 px-4 md:px-8 2xl:py-32 lg:py-[100px] md:py-20 py-16">
        <h1 className="text-[#3E348F] lg:text-[82px] md:text-[56px] text-[32px] font-Teko font-bold leading-[56px] text-right">
          <span className="text-[#181C21]">Our News </span> and Blogs
        </h1>
        <p className="text-black text-[16px] font-Lato font-normal leading-8 text-right">
          {" "}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been .
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3  gap-x-[20px] gap-y-[50px] justify-items-center my-20">
          {products?.map((data) => (
            <BlogCardTwo key={data?._id} data={data} />
          ))}
        </div>

        <div className="flex justify-center mt-20">
            <button className="bg-[#F90] text-white text-[16px] font-Lato font-bold w-[280px] h-[56px] rounded-full  hover:bg-primary transform ease-in-out duration-500 ">
            Load More News and Blogs
            </button>
          </div>


      </div>
    </div>
  );
};

export default BlogTwo;

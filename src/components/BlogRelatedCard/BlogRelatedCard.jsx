import { FiUser } from "react-icons/fi";
import image1 from '../../assets/Property-image/blog-related-image1.jpg'
import image2 from '../../assets/Property-image/blog-related-image2.jpg'
import image3 from '../../assets/Property-image/image1.png'
import image4 from '../../assets/Property-image/image2.png'
import image5 from '../../assets/Property-image/image3.png'
import image6 from '../../assets/Property-image/image4.png'
import { Fade } from "react-reveal";

const BlogRelatedCard = () => {
  return (
    <div>
     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3  gap-x-[20px] gap-y-[50px] justify-items-center mt-10">
      
      <Fade bottom cascade>
        {/******************* blog releted card 1 start here *******************/}
        <div className="2xl:w-[466px] lg:w-[400px] w-full">
          <img
            className="2xl:w-[466px] lg:w-[400px] w-full h-[400px] "
            src={image1}
            style={{
              borderRadius: "60px 60px 60px 0px",
              boxShadow: "0px 4px 60px 0px rgba(221, 219, 219, 0.30)",
            }}
            alt=""
          />

          <div>
            <h5 className="text-[#3E348F] text-[16px] font-Lato font-bold mt-10">
              Last updated June 9, 2023
            </h5>

            <h1 className="text-[#263238] text-[32px] font-Teko font-bold 2xl:w-[404px] w-full mt-1">
              4 Ways to Boost Your Marketing in a Down Market
            </h1>

            <p className="text-[#3E348F] text-[20px] font-Lato font-bold mt-2">
              Continue Reading
            </p>

            <span className="flex items-center gap-3 mt-2">
              <FiUser className="text-[30px]" />
              <p className="text-[#545759] text-[16px] font-Lato font-normal">
                By Water Loo Smith
              </p>
            </span>
          </div>
        </div>
        {/******************* blog releted card 1 end here *******************/}
     
       {/******************* blog releted card 2 start here *******************/}
        <div className="2xl:w-[466px] lg:w-[400px] w-full">
          <img
            className="2xl:w-[466px] lg:w-[400px] w-full h-[400px] "
            src={image2}
            style={{
              borderRadius: "60px 60px 60px 0px",
              boxShadow: "0px 4px 60px 0px rgba(221, 219, 219, 0.30)",
            }}
            alt=""
          />

          <div>
            <h5 className="text-[#3E348F] text-[16px] font-Lato font-bold mt-10">
              Last updated June 19, 2023
            </h5>

            <h1 className="text-[#263238] text-[32px] font-Teko font-bold 2xl:w-[404px] w-full mt-1">
            15% Discount for those customers who buy two home
            </h1>

            <p className="text-[#3E348F] text-[20px] font-Lato font-bold mt-2">
              Continue Reading
            </p>

            <span className="flex items-center gap-3 mt-2">
              <FiUser className="text-[30px]" />
              <p className="text-[#545759] text-[16px] font-Lato font-normal">
                By Water Loo Smith
              </p>
            </span>
          </div>
        </div>
        {/******************* blog releted card 2 end here *******************/}

     
       {/******************* blog releted card 3 start here *******************/}
        <div className="2xl:w-[466px] lg:w-[400px] w-full">
          <img
            className="2xl:w-[466px] lg:w-[400px] w-full h-[400px] "
            src={image3}
            style={{
              borderRadius: "60px 60px 60px 0px",
              boxShadow: "0px 4px 60px 0px rgba(221, 219, 219, 0.30)",
            }}
            alt=""
          />

          <div>
            <h5 className="text-[#3E348F] text-[16px] font-Lato font-bold mt-10">
              Last updated July 27, 2023
            </h5>

            <h1 className="text-[#263238] text-[32px] font-Teko font-bold 2xl:w-[404px] w-full mt-1">
            10 Ways to Boost Your Marketing 
             in a Down Market
            </h1>

            <p className="text-[#3E348F] text-[20px] font-Lato font-bold mt-2">
              Continue Reading
            </p>

            <span className="flex items-center gap-3 mt-2">
              <FiUser className="text-[30px]" />
              <p className="text-[#545759] text-[16px] font-Lato font-normal">
                By Water Loo Smith
              </p>
            </span>
          </div>
        </div>
        {/******************* blog releted card 3 end here *******************/}

     
       {/******************* blog releted card 4 start here *******************/}
        <div className="2xl:w-[466px] lg:w-[400px] w-full">
          <img
            className="2xl:w-[466px] lg:w-[400px] w-full h-[400px]"
            src={image4}
            style={{
              borderRadius: "60px 60px 60px 0px",
              boxShadow: "0px 4px 60px 0px rgba(221, 219, 219, 0.30)",
            }}
            alt=""
          />

          <div>
            <h5 className="text-[#3E348F] text-[16px] font-Lato font-bold mt-10">
              Last updated January 03, 2023
            </h5>

            <h1 className="text-[#263238] text-[32px] font-Teko font-bold 2xl:w-[404px] w-full mt-1">
            Purchase your Dream Home with Reasonable Cost 
            </h1>

            <p className="text-[#3E348F] text-[20px] font-Lato font-bold mt-2">
              Continue Reading
            </p>

            <span className="flex items-center gap-3 mt-2">
              <FiUser className="text-[30px]" />
              <p className="text-[#545759] text-[16px] font-Lato font-normal">
                By Water Loo Smith
              </p>
            </span>
          </div>
        </div>
        {/******************* blog releted card 4 end here *******************/}
     
       {/******************* blog releted card 5 start here *******************/}
        <div className="2xl:w-[466px] lg:w-[400px] w-full">
          <img
            className="2xl:w-[466px] lg:w-[400px] w-full h-[400px] "
            src={image5}
            style={{
              borderRadius: "60px 60px 60px 0px",
              boxShadow: "0px 4px 60px 0px rgba(221, 219, 219, 0.30)",
            }}
            alt=""
          />

          <div>
            <h5 className="text-[#3E348F] text-[16px] font-Lato font-bold mt-10">
              Last updated May 9, 2023
            </h5>

            <h1 className="text-[#263238] text-[32px] font-Teko font-bold 2xl:w-[404px] w-full mt-1">
            Buy A Dream home at Sea Facing Beach Area
            </h1>

            <p className="text-[#3E348F] text-[20px] font-Lato font-bold mt-2">
              Continue Reading
            </p>

            <span className="flex items-center gap-3 mt-2">
              <FiUser className="text-[30px]" />
              <p className="text-[#545759] text-[16px] font-Lato font-normal">
                By Water Loo Smith
              </p>
            </span>
          </div>
        </div>
        {/******************* blog releted card 5 end here *******************/}
     
       {/******************* blog releted card 6 start here *******************/}
        <div className="2xl:w-[466px] lg:w-[400px] w-full">
          <img
            className="2xl:w-[466px] lg:w-[400px] w-full h-[400px] "
            src={image6}
            style={{
              borderRadius: "60px 60px 60px 0px",
              boxShadow: "0px 4px 60px 0px rgba(221, 219, 219, 0.30)",
            }}
            alt=""
          />

          <div>
            <h5 className="text-[#3E348F] text-[16px] font-Lato font-bold mt-10">
              Last updated April 22, 2023
            </h5>

            <h1 className="text-[#263238] text-[32px] font-Teko font-bold 2xl:w-[404px] w-full mt-1">
            Buy a Eco Friendly Home at Sea Beach Area with Low Cost
            </h1>

            <p className="text-[#3E348F] text-[20px] font-Lato font-bold mt-2">
              Continue Reading
            </p>

            <span className="flex items-center gap-3 mt-2">
              <FiUser className="text-[30px]" />
              <p className="text-[#545759] text-[16px] font-Lato font-normal">
                By Water Loo Smith
              </p>
            </span>
          </div>
        </div>
        {/******************* blog releted card 6 end here *******************/}
        </Fade>
     
      </div>
      

     <div className="flex justify-center mt-14">
     <button className="bg-[#F90] text-white text-[16px] font-Lato font-normal w-[170px] h-[56px] custom-border-property  hover:bg-primary transform ease-in-out duration-500 ">
      Load More
    </button>
     </div>



    </div>
  );
};

export default BlogRelatedCard;

import CommonAction from "../../components/CommonAction/CommonAction";
import BlogCard from "../../components/BlogCard/BlogCard";
import manImage from "../../assets/Blog-image/man1.png";
import womenImage from "../../assets/Blog-image/women1.png";
import image1 from "../../assets/Blog-image/Rectangle 1177.png";
import agent1 from '../../assets/Agents-images/agent5.jpg'
import agent2 from '../../assets/Agents-images/agent2.jpg'
import agent3 from '../../assets/Agents-images/agent6.jpg'
import agent4 from '../../assets/Agents-images/agent4.jpg'
import agent5 from '../../assets/Agents-images/agent7.jpg'
import agent6 from '../../assets/Agents-images/agent8.jpg'
import BlogRelatedCard from "../../components/BlogRelatedCard/BlogRelatedCard";

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
        <div className="flex justify-center items-center gap-5 ">
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



        {/******************* blog related section start  here *******************/}

         <div className="2xl:pt-32 lg:pt-[100px] md:pt-[80px] pt-16">
           <h1 className="lg:text-[56px] md:text-[56px] text-[32px] mt-20 text-[#3E348F] font-Teko font-bold ">See  Related Post</h1>

            <BlogRelatedCard/>
         </div>

        {/******************* blog related section end  here *******************/}


         

       

        {/******************* blog comments part start here *******************/}
        <div>
          <h3 className="text-[#3E348F] text-[56px] font-bold leading-[70px]">
            Commnts
          </h3>

          <div className="lg:flex 2xl:flex items-center lg:gap-80 2xl:gap-[120px] mt-10">
            <div>
              <div className="lg:flex">
                <img
                  className="lg:w-[246px] lg:h-[236px] md:w-[140px] md:h-[140px] w-[100px] h-[100px] mx-auto rounded-full lg:rounded-[15px] lg:mt-8 z-30"
                  src={manImage}
                  alt=""
                />

                <div className="lg:w-[744px] w-full lg:h-[300px] md:h-[300px] h-[400px] bg-[#3E348F] rounded-[15px]  lg:ml-[-90px] mt-[-50px] md:mt-[-60px] lg:mt-0 hover:bg-secondaryColor duration-500 hover:cursor-pointer group ">
                  <div className="lg:pl-36 lg:pt-10 pt-16 px-6">
                    <h2>
                      <span className="text-white text-[20px] font-Lato font-bold leading-8">
                        Paul Jones,
                      </span>{" "}
                      <span className="text-white text-[16px] font-Lato font-normal leading-8">
                        August 29, 2017
                      </span>
                    </h2>

                    <p className="text-[#FFF] text-[16px] font-Lato font-normal leading-8 lg:w-[494px] w-full mt-4">
                      Cosmic ocean science Tunguska event the only home we’ve
                      ever known Orion’s sword, concept of the one billions upon
                      billions paroxysm concept of the one billions upon
                      billions concept of the.
                    </p>

                    <button className="w-[146px] h-[56px] bg-[#F90] text-white font-Lato font-normal text-[16px] text-center custom-border-button flex-shrink-0 mt-[20px] group-hover:bg-[#504594] border border-[#F90] transform duration-500 ">
                      Reply
                    </button>
                  </div>
                </div>
              </div>

              <div className="lg:flex mt-20">
                <img
                  className="lg:w-[246px] lg:h-[236px] md:w-[140px] md:h-[140px] w-[100px] h-[100px] mx-auto rounded-full lg:rounded-[15px] lg:mt-8 z-30"
                  src={womenImage}
                  alt=""
                />

                <div className="lg:w-[744px] w-full lg:h-[300px] md:h-[300px] h-[400px] bg-[#3E348F] rounded-[15px]  lg:ml-[-90px] mt-[-50px] md:mt-[-60px] lg:mt-0 hover:bg-secondaryColor duration-500 hover:cursor-pointer group ">
                  <div className="lg:pl-36 lg:pt-10 pt-16 px-6">
                    <h2>
                      <span className="text-white text-[20px] font-Lato font-bold leading-8">
                        Paul Jones,
                      </span>{" "}
                      <span className="text-white text-[16px] font-Lato font-normal leading-8">
                        August 29, 2017
                      </span>
                    </h2>

                    <p className="text-[#FFF] text-[16px] font-Lato font-normal leading-8 lg:w-[494px] w-full mt-4">
                      Cosmic ocean science Tunguska event the only home we’ve
                      ever known Orion’s sword, concept of the one billions upon
                      billions paroxysm concept of the one billions upon
                      billions concept of the.
                    </p>

                    <button className="w-[146px] h-[56px] bg-[#F90] text-white font-Lato font-normal text-[16px] text-center custom-border-button flex-shrink-0 mt-[20px] group-hover:bg-[#504594] border border-[#F90] transform duration-500 ">
                      Reply
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-[391px] w-full mt-16 md:mt-16 lg:mt-0 2xl:mt-0">
              <h1 className="text-black text-[32px] font-Lato font-bold leading-8">
                Meta Tag
              </h1>

              <div
                className="flex flex-col mt-10"
                style={{
                  boxShadow: "0px 4px 60px 0px rgba(208, 202, 202, 0.30)",
                }}
              >
                <div className=" border border-[#D4D1D1] pl-4 py-3 hover:bg-primary duration-500 hover:cursor-pointer group">
                  <h3 className="text-[#676565] text-[20px] font-Lato font-normal leading-8 group-hover:text-white">
                    Sign In
                  </h3>
                </div>

                <div className=" border border-[#D4D1D1] border-t-0 pl-4 py-3 hover:bg-primary duration-500 hover:cursor-pointer group">
                  <h3 className="text-[#676565] text-[20px] font-Lato font-normal leading-8 group-hover:text-white">
                    Sign Out
                  </h3>
                </div>

                <div className=" border border-[#D4D1D1] border-t-0 pl-4 py-3 hover:bg-primary duration-500 hover:cursor-pointer group">
                  <h3 className="text-[#676565] text-[20px] font-Lato font-normal leading-8 group-hover:text-white">
                    Registration
                  </h3>
                </div>

                <div className=" border border-[#D4D1D1] border-t-0 pl-4 py-3 hover:bg-primary duration-500 hover:cursor-pointer group">
                  <h3 className="text-[#676565] text-[20px] font-Lato font-normal leading-8 group-hover:text-white">
                    Comments Feedback
                  </h3>
                </div>

                <div className=" border border-[#D4D1D1] border-t-0 pl-4 py-3 hover:bg-primary duration-500 hover:cursor-pointer group">
                  <h3 className="text-[#676565] text-[20px] font-Lato font-normal leading-8 group-hover:text-white">
                    Entries Feedback
                  </h3>
                </div>

                <div className=" border border-[#D4D1D1] border-t-0 pl-4 py-3 hover:bg-primary duration-500 hover:cursor-pointer group">
                  <h3 className="text-[#676565] text-[20px] font-Lato font-normal leading-8 group-hover:text-white">
                    Modern Duplex House
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/******************* blog comments part end here *******************/}

        {/******************* blog comments reply part start here *******************/}

        <div className="2xl:pt-32 lg:pt-[100px] md:pt-[80px] pt-16 2xl:pb-32 lg:pb-[100px] md:pb-[80px] pb-16">
          <h3 className="text-[#3E348F] text-[56px] font-bold leading-[70px]">
            Comment Here
          </h3>

          <div className="lg:flex lg:gap-20 2xl:gap-[120px]">
            <div className="lg:w-[820px] 2xl:w-[900px] md:w-full w-full">
              <div className="lg:flex gap-5 mt-[45px] lg:w-[820px] 2xl:w-[900px] md:w-full w-full">
                <div className="flex flex-col gap-5 ">
                  <label
                    className="text-black font-Teko font-normal text-[24px] leading-6"
                    htmlFor="name"
                  >
                    Your First Name
                  </label>
                  <input
                    className="lg:w-[400px] 2xl:w-[440px] md:w-full w-full h-[56px] pl-10 rounded-[60px] border-[1px] border-[#878383] text-[#2F2D2D] font-Lato text-[16px] font-normal leading-6 outline-none focus:border-primary focus:ring-primary focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-primary transition-all duration-700"
                    type="name"
                    placeholder="Write your first name here"
                  />
                </div>

                <div className="flex flex-col gap-5 mt-7 md:mt-7 lg:mt-0 2xl:mt-0">
                  <label
                    className="text-black font-Teko font-normal text-[24px] leading-6"
                    htmlFor="name"
                  >
                    Your Last Name
                  </label>
                  <input
                    className="lg:w-[400px] 2xl:w-[440px] md:w-full w-full h-[56px] pl-10 rounded-[60px] border-[1px] border-[#878383] text-[#2F2D2D] font-Lato text-[16px] font-normal leading-6 outline-none focus:border-primary focus:ring-primary focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-primary transition-all duration-700"
                    type="name"
                    placeholder="Write your last name here"
                  />
                </div>
              </div>

              <div className="lg:flex gap-5 mt-[45px]">
                <div className="flex flex-col gap-5  mt-7 md:mt-7 lg:mt-0 2xl:mt-0">
                  <label
                    className="text-black font-Teko font-normal text-[24px] leading-6"
                    htmlFor="name"
                  >
                    Your Email Address
                  </label>
                  <input
                    className="lg:w-[400px] 2xl:w-[440px] md:w-full w-full h-[56px] pl-10 rounded-[60px] border-[1px] border-[#878383] text-[#2F2D2D] font-Lato text-[16px] font-normal leading-6 outline-none focus:border-primary focus:ring-primary focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-primary transition-all duration-700"
                    type="name"
                    placeholder="Write your email address here"
                  />
                </div>
                <div className="flex flex-col gap-5 mt-7 md:mt-7 lg:mt-0 2xl:mt-0">
                  <label
                    className="text-black font-Teko font-normal text-[24px] leading-6"
                    htmlFor="name"
                  >
                    Your Subject
                  </label>
                  <input
                    className="lg:w-[400px] 2xl:w-[440px] md:w-full w-full h-[56px] pl-10 rounded-[60px] border-[1px] border-[#878383] text-[#2F2D2D] font-Lato text-[16px] font-normal leading-6 outline-none focus:border-primary focus:ring-primary focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-primary transition-all duration-700"
                    type="name"
                    placeholder="Write your subject here"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-5 mt-[45px]">
                <label
                  className="text-black font-Teko font-normal text-[24px] leading-6"
                  htmlFor="email"
                >
                  Your Message
                </label>
                <textarea
                  name=""
                  id=""
                  className="lg:w-full md:w-full w-full h-[140px] pl-10 rounded-[45px] border-[1px] pt-7 border-[#878383] text-[#2F2D2D] font-Lato text-[16px] font-normal leading-6 outline-none focus:border-primary focus:ring-primary focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-primary transition-all duration-700"
                  type="text"
                  placeholder="Write your message  here "
                ></textarea>
              </div>

              <button className="bg-[#F90] text-white text-[16px] font-Lato font-bold w-[210px] h-[56px] custom-border-property mt-10 hover:bg-primary duration-500">
                Post Comments
              </button>
            </div>

            <div className="mt-10 md:mt-10 lg:mt-0 2xl:mt-0">
              <h3 className="text-[#3E348F] text-[32px] font-bold leading-[70px]">
                Recent Comments
              </h3>

              <div className="flex flex-col gap-5 mt-10">
                <span className="flex gap-3">
                  <img
                    className="w-10 h-10 rounded-[8px]"
                    src={agent1}
                    alt=""
                  />
                  <p className="text-[#3E348F] 2xl:text-[20px] text-[16px] font-Lato font-normal">
                    Admin on Luxury Modern Duplex Home
                  </p>
                </span>

                <span className="flex gap-3">
                  <img
                    className="w-10 h-10 rounded-[8px]"
                    src={agent2}
                    alt=""
                  />
                  <p className="text-[#3E348F] 2xl:text-[20px] text-[16px] font-Lato font-normal">
                  Smiths on Luxury Modern Duplex Home
                  </p>
                </span>

                <span className="flex gap-3">
                  <img
                    className="w-10 h-10 rounded-[8px]"
                    src={agent3}
                    alt=""
                  />
                  <p className="text-[#3E348F] 2xl:text-[20px] text-[16px] font-Lato font-normal">
                  Waters Loo on Luxury Modern  Home
                  </p>
                </span>

                <span className="flex gap-3">
                  <img
                    className="w-10 h-10 rounded-[8px]"
                    src={agent4}
                    alt=""
                  />
                  <p className="text-[#3E348F] 2xl:text-[20px] text-[16px] font-Lato font-normal">
                  Bryan on Luxury Modern Duplex Home
                  </p>
                </span>

                <span className="flex gap-3">
                  <img
                    className="w-10 h-10 rounded-[8px]"
                    src={agent5}
                    alt=""
                  />
                  <p className="text-[#3E348F] 2xl:text-[20px] text-[16px] font-Lato font-normal">
                  Jesica on Luxury Modern Duplex Home
                  </p>
                </span>
                
                 <span className="flex gap-3">
                  <img
                    className="w-10 h-10 rounded-[8px]"
                    src={agent6}
                    alt=""
                  />
                  <p className="text-[#3E348F] 2xl:text-[20px] text-[16px] font-Lato font-normal">
                  Admin on Luxury Modern Duplex Home
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/******************* blog comments reply part end here *******************/}
      </div>

      {/******************* blog details part end here *******************/}
    </div>
    //********************  Blog details section start here **************************//
    //******************** ##########################  ********************************//
  );
};

export default BlogPage;

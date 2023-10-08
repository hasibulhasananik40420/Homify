/* eslint-disable no-unused-vars */
import React from 'react'
import manImage from "../../assets/Blog-image/man1.png";
import womenImage from "../../assets/Blog-image/women1.png";
import agent1 from '../../assets/Agents-images/agent5.jpg'
import agent2 from '../../assets/Agents-images/agent2.jpg'
import agent3 from '../../assets/Agents-images/agent6.jpg'
import agent4 from '../../assets/Agents-images/agent4.jpg'
import agent5 from '../../assets/Agents-images/agent7.jpg'
import agent6 from '../../assets/Agents-images/agent8.jpg'

const BlogComment = () => {
  return (
    <div>
         {/******************* blog comments part start here *******************/}
         <div className='2xl:pt-32 lg:pt-[100px] md:pt-20 pt-16'>
          <h3 className="text-[#3E348F] lg:text-[56px] text-[32px] md:text-[56px] font-bold leading-[70px]">
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

        <div className="2xl:pt-32 lg:pt-[100px] md:pt-[80px] pt-16 ">
          <h3 className="text-[#3E348F] lg:text-[56px] text-[32px] md:text-[56px] font-bold leading-[70px]">
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
                    Waters Loo on Luxury Modern Home
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
  )
}

export default BlogComment
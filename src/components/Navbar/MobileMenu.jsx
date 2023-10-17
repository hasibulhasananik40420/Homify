import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { HiMinusSm, HiPlusSm } from "react-icons/hi";
import { Link } from "react-router-dom";
import { Flip} from "react-reveal";
import logo from '../../assets/Common-image/logo (2).png'

const MobileMenu = (index) => {
  const [show, setShow] = useState(false);

  const [activeIndex, setActiveIndex] = useState(null);
  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


  const [activeSecondIndex, setActiveSecondIndex] = useState(null);

  const toggleSecondQuestion = (index) => {
    setActiveSecondIndex(activeSecondIndex === index ? null : index);
  };


  const [activeThirdIndex, setActiveThirdIndex] = useState(null);

  const toggleThirdQuestion = (index) => {
    setActiveThirdIndex(activeThirdIndex === index ? null : index);
  };


 const [activeForthIndex, setActiveForthIndex] = useState(null);

  const toggleForthQuestion = (index) => {
    setActiveForthIndex(activeForthIndex === index ? null : index);
  };


 const [activeFifthIndex, setActiveFifthIndex] = useState(null);

  const toggleFifthQuestion = (index) => {
    setActiveFifthIndex(activeFifthIndex === index ? null : index);
  };
  
  const [activeSixIndex, setActiveSixIndex] = useState(null);

  const toggleSixQuestion = (index) => {
    setActiveSixIndex(activeSixIndex === index ? null : index);
  };

  return (
    <div style={{ boxShadow: "0px 4px 45px 0px rgba(181, 179, 179, 0.30)" }}>
      <div className="flex justify-between items-center h-[80px] lg:px-8 2xl:px-0 px-4 md:px-8">
        <div>
        <img className="h-[45px] w-[128px]" src={logo} alt="" />
        </div>

        <div className="">
          <CiMenuFries
            onClick={() => setShow(true)}
            className="text-3xl cursor-pointer"
          />
        </div>
      </div>

      {show && (
        <>
          <div className="absolute  lg:hidden 2xl:hidden top-0 right-0 w-full h-screen  flex flex-col items-start">
            <div className="w-[100%]  customScrollbar overflow-y-scroll h-full  bg-[#112240] flex flex-col z-50 relative pt-20 px-8 md:px-12 pb-6">
              <IoMdClose
                onClick={() => setShow(false)}
                className="text-3xl cursor-pointer text-red-500 absolute top-4 right-4 duration-300"
              />


               {/********************* home section *********************/}

              <div
                onClick={() => toggleQuestion(index)}
                className="flex justify-between items-center w-full h-12 p-3 bg-secondaryColor cursor-pointer"
              >
                <div>
                  <span className="inline-flex  relative text-white font-Lato text-[20px] font-normal cursor-pointer h-7 overflow-x-hidden overflow-y-hidden group duration-500">
                    Home
                    <span className="absolute w-full h-[2px] bg-primary left-0 bottom-0 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
                  </span>
                </div>

                <div>
                  {activeIndex === index ? (
                    <div>
                      <HiMinusSm
                        onClick={() => toggleQuestion(index)}
                        className="text-2xl text-white cursor-pointer"
                      />
                    </div>
                  ) : (
                    <div>
                      <HiPlusSm
                        onClick={() => toggleQuestion(index)}
                        className="text-2xl text-white cursor-pointer"
                      />
                    </div>
                  )}
                </div>
              </div>

              {activeIndex === index && (
                <Flip top cascade>
                  <div className="flex  flex-col bg-primary text-white text-[16px] font-Lato font-normal">
                    <Link
                      onClick={() => setShow(false)}
                      className="text-white text-[16px] p-3 border-b font-Lato font-normal hover:bg-black duration-500 cursor-pointer"
                      to={"/"}
                    >
                      Home style One
                    </Link>
                    <Link
                      onClick={() => setShow(false)}
                      className="text-white text-[16px] p-3 border-b font-Lato font-normal hover:bg-black duration-500 cursor-pointer"
                      to={"/home-two"}
                    >
                      Home style Two
                    </Link>
                  </div>
                </Flip>
              )}


               {/********************* pages section *********************/}

              <div
                onClick={() => toggleSecondQuestion(index)}
                className="mt-4 flex justify-between items-center w-full h-12 p-3 bg-secondaryColor cursor-pointer"
              >
                <div>
                  <span className="inline-flex relative text-white font-Lato text-[20px] font-normal cursor-pointer h-7 overflow-x-hidden overflow-y-hidden group duration-500">
                    Pages
                    <span className="absolute w-full h-[2px] bg-primary left-0 bottom-0 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
                  </span>
                </div>

                <div >
                  {activeSecondIndex === index ? (
                    <div>
                      <HiMinusSm
                        onClick={() => toggleSecondQuestion(index)}
                        className="text-2xl text-white cursor-pointer"
                      />
                    </div>
                  ) : (
                    <div>
                      <HiPlusSm
                        onClick={() => toggleSecondQuestion(index)}
                        className="text-2xl text-white cursor-pointer"
                      />
                    </div>
                  )}
                </div>
              </div>

              {activeSecondIndex === index && (
                <Flip top cascade>
                  <div className="flex flex-col bg-primary text-white text-[16px] font-Lato font-normal">
                    <Link
                      onClick={() => setShow(false)}
                      to={"/about-us"}
                      className="text-white text-[16px] p-3 border-b font-Lato font-normal hover:bg-black duration-500 cursor-pointer"
                    >
                      About us
                    </Link>
                    <Link
                      onClick={() => setShow(false)}
                      to={"/login"}
                      className="text-white text-[16px] p-3 border-b font-Lato font-normal hover:bg-black duration-500 cursor-pointer"
                    >
                      Login
                    </Link>
                    <Link
                      onClick={() => setShow(false)}
                      to={"/sign-up"}
                      className="text-white text-[16px] p-3 border-b font-Lato font-normal hover:bg-black duration-500 cursor-pointer"
                    >
                      Signup
                    </Link>
                    <Link
                      onClick={() => setShow(false)}
                      to={"*"}
                      className="text-white text-[16px] p-3 border-b font-Lato font-normal hover:bg-black duration-500 cursor-pointer"
                    >
                      404
                    </Link>
                  </div>
                </Flip>
              )}


              {/********************* property section *********************/}

              <div
                onClick={() => toggleThirdQuestion(index)}
                className="mt-4 flex justify-between items-center w-full h-12 p-3 bg-secondaryColor cursor-pointer"
              >
                <div>
                  <span className="inline-flex relative text-white font-Lato text-[20px] font-normal cursor-pointer h-7 overflow-x-hidden overflow-y-hidden group duration-500">
                    Poperty
                    <span className="absolute w-full h-[2px] bg-primary left-0 bottom-0 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
                  </span>
                </div>

                <div>
                  {activeThirdIndex === index ? (
                    <div>
                      <HiMinusSm
                        onClick={() => toggleThirdQuestion(index)}
                        className="text-2xl text-white cursor-pointer"
                      />
                    </div>
                  ) : (
                    <div>
                      <HiPlusSm
                        onClick={() => toggleThirdQuestion(index)}
                        className="text-2xl text-white cursor-pointer"
                      />
                    </div>
                  )}
                </div>
              </div>

              {activeThirdIndex === index && (
                <Flip top cascade>
                  <div className="flex flex-col bg-primary text-white text-[16px] font-Lato font-normal">
                    <Link
                      onClick={() => setShow(false)}
                      to={"/property-grid"}
                      className="text-white text-[16px] p-3 border-b font-Lato font-normal hover:bg-black duration-500 cursor-pointer"
                    >
                      Property Grid
                    </Link>
                    <Link
                      onClick={() => setShow(false)}
                      to={"/property-grid-two"}
                      className="text-white text-[16px] p-3 border-b font-Lato font-normal hover:bg-black duration-500 cursor-pointer"
                    >
                      Property Grid Two
                    </Link>
                    <Link
                      onClick={() => setShow(false)}
                      to={"/property-details"}
                      className="text-white text-[16px] p-3 border-b font-Lato font-normal hover:bg-black duration-500 cursor-pointer"
                    >
                      Property Details
                    </Link>
                    <Link
                      onClick={() => setShow(false)}
                      to={"/add-property"}
                      className="text-white text-[16px] p-3 border-b font-Lato font-normal hover:bg-black duration-500 cursor-pointer"
                    >
                      Add Property
                    </Link>
                  </div>
                </Flip>
              )}




              {/********************* agent section *********************/}

              <div
                onClick={() => toggleForthQuestion(index)}
                className="mt-4 flex justify-between items-center w-full h-12 p-3 bg-secondaryColor cursor-pointer"
              >
                <div>
                  <span className="inline-flex relative text-white font-Lato text-[20px] font-normal cursor-pointer h-7 overflow-x-hidden overflow-y-hidden group duration-500">
                    Agents
                    <span className="absolute w-full h-[2px] bg-primary left-0 bottom-0 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
                  </span>
                </div>

                <div>
                  {activeForthIndex === index ? (
                    <div>
                      <HiMinusSm
                        onClick={() => toggleForthQuestion(index)}
                        className="text-2xl text-white cursor-pointer"
                      />
                    </div>
                  ) : (
                    <div>
                      <HiPlusSm
                        onClick={() => toggleForthQuestion(index)}
                        className="text-2xl text-white cursor-pointer"
                      />
                    </div>
                  )}
                </div>
              </div>

              {activeForthIndex === index && (
                <Flip top cascade>
                  <div className="flex flex-col bg-primary text-white text-[16px] font-Lato font-normal">
                    <Link
                      onClick={() => setShow(false)}
                      to={"/agents-list"}
                      className="text-white text-[16px] p-3 border-b font-Lato font-normal hover:bg-black duration-500 cursor-pointer"
                    >
                      Agents List One
                    </Link>
                    <Link
                      onClick={() => setShow(false)}
                      to={"/agents-list-two"}
                      className="text-white text-[16px] p-3 border-b font-Lato font-normal hover:bg-black duration-500 cursor-pointer"
                    >
                      Agents List Two
                    </Link>
                    <Link
                      onClick={() => setShow(false)}
                      to={"/agents-details"}
                      className="text-white text-[16px] p-3 border-b font-Lato font-normal hover:bg-black duration-500 cursor-pointer"
                    >
                      Agents Details
                    </Link>
                    
                  </div>
                </Flip>
              )}




          {/********************* blog section *********************/}

              <div
                onClick={() => toggleFifthQuestion(index)}
                className="mt-4 flex justify-between items-center w-full h-12 p-3 bg-secondaryColor cursor-pointer"
              >
                <div>
                  <span className="inline-flex relative text-white font-Lato text-[20px] font-normal cursor-pointer h-7 overflow-x-hidden overflow-y-hidden group duration-500">
                    Blogs
                    <span className="absolute w-full h-[2px] bg-primary left-0 bottom-0 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
                  </span>
                </div>

                <div>
                  {activeFifthIndex === index ? (
                    <div>
                      <HiMinusSm
                        onClick={() => toggleFifthQuestion(index)}
                        className="text-2xl text-white cursor-pointer"
                      />
                    </div>
                  ) : (
                    <div>
                      <HiPlusSm
                        onClick={() => toggleFifthQuestion(index)}
                        className="text-2xl text-white cursor-pointer"
                      />
                    </div>
                  )}
                </div>
              </div>

              {activeFifthIndex === index && (
                <Flip top cascade>
                  <div className="flex flex-col bg-primary text-white text-[16px] font-Lato font-normal">
                    <Link
                      onClick={() => setShow(false)}
                      to={"/blogs"}
                      className="text-white text-[16px] p-3 border-b font-Lato font-normal hover:bg-black duration-500 cursor-pointer"
                    >
                      Blog Style One
                    </Link>
                    <Link
                      onClick={() => setShow(false)}
                      to={"/blogs-v2"}
                      className="text-white text-[16px] p-3 border-b font-Lato font-normal hover:bg-black duration-500 cursor-pointer"
                    >
                     Blog Style Two
                    </Link>
                    <Link
                      onClick={() => setShow(false)}
                      to={"/blog-details"}
                      className="text-white text-[16px] p-3 border-b font-Lato font-normal hover:bg-black duration-500 cursor-pointer"
                    >
                      Blog Details
                    </Link>
                    
                  </div>
                </Flip>
              )}


                
                {/********************* contact us section *********************/}

                <div
                onClick={() => toggleSixQuestion(index)}
                className="mt-4 flex justify-between items-center w-full h-12 p-3 bg-secondaryColor cursor-pointer"
              >
                <div>
                  <span className="inline-flex relative text-white font-Lato text-[20px] font-normal cursor-pointer h-7 overflow-x-hidden overflow-y-hidden group duration-500">
                    Contact
                    <span className="absolute w-full h-[2px] bg-primary left-0 bottom-0 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
                  </span>
                </div>

                <div>
                  {activeSixIndex === index ? (
                    <div>
                      <HiMinusSm
                        onClick={() => toggleSixQuestion(index)}
                        className="text-2xl text-white cursor-pointer"
                      />
                    </div>
                  ) : (
                    <div>
                      <HiPlusSm
                        onClick={() => toggleSixQuestion(index)}
                        className="text-2xl text-white cursor-pointer"
                      />
                    </div>
                  )}
                </div>
              </div>


              {activeSixIndex === index && (
                <Flip top cascade>
                  <div className="flex flex-col bg-primary text-white text-[16px] font-Lato font-normal">
                    <Link
                      onClick={() => setShow(false)}
                      to={"/contact-us"}
                      className="text-white text-[16px] p-3 border-b font-Lato font-normal hover:bg-black duration-500 cursor-pointer"
                    >
                      Contact Us 
                    </Link>
                   
                    
                  </div>
                </Flip>
              )}








            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MobileMenu;

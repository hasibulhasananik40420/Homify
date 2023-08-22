import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { HiMinusSm, HiPlusSm } from "react-icons/hi";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

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

  return (
    <div style={{ boxShadow: "0px 4px 45px 0px rgba(181, 179, 179, 0.30)" }}>
      <div className="flex justify-between items-center h-[80px] lg:px-8 2xl:px-0 px-4 md:px-8">
        <div>logo</div>

        <div className="">
          <CiMenuFries
            onClick={() => setShow(true)}
            className="text-3xl cursor-pointer"
          />
        </div>
      </div>

      {show && (
        <>
          <div className="absolute lg:hidden 2xl:hidden top-0 right-0 w-full h-screen  flex flex-col items-start">
            <div className="w-[80%] h-full  bg-[#112240] flex flex-col z-50 relative pt-20 px-8 md:px-12">
              <IoMdClose
                onClick={() => setShow(false)}
                className="text-3xl cursor-pointer text-red-500 absolute top-4 right-4 duration-300"
              />

              <div
                onClick={() => toggleQuestion(index)}
                className="flex justify-between items-center w-full h-12 p-3 bg-secondaryColor cursor-pointer"
              >
                <Link to={"/"}>
                  <span className="inline-flex relative text-white font-Lato text-[20px] font-normal cursor-pointer h-7 overflow-x-hidden overflow-y-hidden group hover:text-secondaryColor duration-500">
                    Home
                    <span className="absolute w-full h-[2px] bg-secondaryColor left-0 bottom-0 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
                  </span>
                </Link>

                <div className="icon-container">
                  {activeIndex === index ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                    >
                      <HiMinusSm
                        onClick={() => toggleQuestion(index)}
                        className="text-2xl text-white cursor-pointer"
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                    >
                      <HiPlusSm
                        onClick={() => toggleQuestion(index)}
                        className="text-2xl text-white cursor-pointer"
                      />
                    </motion.div>
                  )}
                </div>
              </div>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col bg-primary text-white text-[16px] font-Lato font-normal"
                  >
                    <Link
                      onClick={() => setShow(false)}
                      className="text-white text-[16px] p-3 border-b font-Lato font-normal hover:bg-black duration-500 cursor-pointer"
                      to={"/"}
                    >
                      Home style two
                    </Link>
                    <Link
                      onClick={() => setShow(false)}
                      className="text-white text-[16px] p-3 border-b font-Lato font-normal hover:bg-black duration-500 cursor-pointer"
                      to={"/"}
                    >
                      Home style three
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>




              <div
                onClick={() => toggleSecondQuestion(index)}
                className="mt-4 flex justify-between items-center w-full h-12 p-3 bg-secondaryColor cursor-pointer"
              >
                <Link to={"/"}>
                  <span className="inline-flex relative text-white font-Lato text-[20px] font-normal cursor-pointer h-7 overflow-x-hidden overflow-y-hidden group duration-500">
                    Pages
                    <span className="absolute w-full h-[2px] bg-primary left-0 bottom-0 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
                  </span>
                </Link>

                <div className="icon-container">
                  {activeSecondIndex === index ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                    >
                      <HiMinusSm
                        onClick={() => toggleSecondQuestion(index)}
                        className="text-2xl text-white cursor-pointer"
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                    >
                      <HiPlusSm
                        onClick={() => toggleSecondQuestion(index)}
                        className="text-2xl text-white cursor-pointer"
                      />
                    </motion.div>
                  )}
                </div>
              </div>
              <AnimatePresence>
                {activeSecondIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col bg-primary text-white text-[16px] font-Lato font-normal"
                  >
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
                  </motion.div>
                )}
              </AnimatePresence>


















              
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MobileMenu;

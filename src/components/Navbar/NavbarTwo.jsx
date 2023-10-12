/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import logo from '../../assets/Common-image/logo (2).png'

const NavbarTwo = () => {

    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
      function handleScroll() {
        setScrollPosition(window.scrollY);
      }
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (
    <div className={`h-[86px] `}>
      <div
        className={`${scrollPosition > 0 ? 'navbar-bg' : 'primary-navbar'} fixed top-0 left-0 right-0 z-50  lg:px-8 2xl:px-8 px-4 md:px-8 lg:block 2xl:block hidden` }
        
      >
        <div className="flex justify-between items-center h-[86px] max-w-[1680px] mx-auto">
          <div className="">
          <img className="h-[45px] w-[128px]" src={logo} alt="" />
          </div>

          <div className="flex flex-row 2xl:gap-20 lg:gap-12 items-center">
          
            <div className="relative group">
              <Link
                to={"/"}
                className="inline-flex relative text-white uppercase font-Lato text-[20px] font-normal cursor-pointer h-7 overflow-x-hidden overflow-y-hidden group-hover:text-secondaryColor duration-500"
              >
                Home
                <span className="absolute w-full h-[2px] bg-secondaryColor left-0 bottom-0 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
              </Link>
              

             <div className="absolute left-0 bg-white shadow-lg opacity-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-100 group-hover:pointer-events-auto top-0 mt-7 w-[180px] h-auto flex flex-col">
                <Link
                  className="text-red-400 text-[16px] w-full p-3 border-b font-Lato font-normal duration-500 cursor-pointer"
                  to={"/"}
                >
                  Home style one
                </Link>
                <Link
                  className="text-red-400 text-[16px] w-full p-3 border-b font-Lato font-normal duration-500 cursor-pointer"
                  to={"/home-two"}
                >
                  Home style two
                </Link>
              </div>


            </div>




             <div className="relative group">
              <div
                className="inline-flex relative text-white uppercase font-Lato text-[20px] font-normal cursor-pointer h-7 overflow-x-hidden overflow-y-hidden group-hover:text-secondaryColor duration-500"
              >
                Pages
                <span className="absolute w-full h-[2px] bg-secondaryColor left-0 bottom-0 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
              </div>
             

             <div className="absolute left-0 bg-white shadow-lg opacity-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-100 group-hover:pointer-events-auto top-0 mt-7 w-[180px] h-auto flex flex-col">
                <Link
                  className="text-red-400 text-[16px] w-full p-3 border-b font-Lato font-normal duration-500 cursor-pointer"
                  to={"/about-us"}
                >
                 About us
                </Link>
                <Link
                  className="text-red-400 text-[16px] w-full p-3 border-b font-Lato font-normal duration-500 cursor-pointer"
                  to={"/login"}
                >
                  Login
                </Link> <Link
                  className="text-red-400 text-[16px] w-full p-3 border-b font-Lato font-normal duration-500 cursor-pointer"
                  to={"/sign-up"}
                >
                  SignUp
                </Link> 
                
                <Link
                  className="text-red-400 text-[16px] w-full p-3 border-b font-Lato font-normal duration-500 cursor-pointer"
                  to={"*"}
                >
                  404
                </Link>
              </div>

            </div>





              <div className="relative group">
              <div
                className="inline-flex relative text-white uppercase font-Lato text-[20px] font-normal cursor-pointer h-7 overflow-x-hidden overflow-y-hidden group-hover:text-secondaryColor duration-500"
              >
                Property
                <span className="absolute w-full h-[2px] bg-secondaryColor left-0 bottom-0 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
              </div>
             

             <div className="absolute left-0 bg-white shadow-lg opacity-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-100 group-hover:pointer-events-auto top-0 mt-7 w-[180px] h-auto flex flex-col">
                <Link
                  className="text-red-400 text-[16px] w-full p-3 border-b font-Lato font-normal duration-500 cursor-pointer"
                  to={"/property-grid"}
                >
                 Property Grid
                </Link>
                 <Link
                  className="text-red-400 text-[16px] w-full p-3 border-b font-Lato font-normal duration-500 cursor-pointer"
                  to={"/property-grid-two"}
                >
                 Property Grid Two
                </Link>
                <Link
                  className="text-red-400 text-[16px] w-full p-3 border-b font-Lato font-normal duration-500 cursor-pointer"
                  to={"/property-details"}
                >
                  Property Details
                </Link> 
                
                <Link
                  className="text-red-400 text-[16px] w-full p-3 border-b font-Lato font-normal duration-500 cursor-pointer"
                  to={"/add-property"}
                >
                 Add Property
                </Link> 
                
               
              </div>

            </div>


              <div className="relative group">
              <div
                className="inline-flex relative text-white uppercase font-Lato text-[20px] font-normal cursor-pointer h-7 overflow-x-hidden overflow-y-hidden group-hover:text-secondaryColor duration-500"
              >
                Agents
                <span className="absolute w-full h-[2px] bg-secondaryColor left-0 bottom-0 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
              </div>
             

             <div className="absolute left-0 bg-white shadow-lg opacity-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-100 group-hover:pointer-events-auto top-0 mt-7 w-[180px] h-auto flex flex-col">
                <Link
                  className="text-red-400 text-[16px] w-full p-3 border-b font-Lato font-normal duration-500 cursor-pointer"
                  to={"/agents-list"}
                >
                 Agents List One
                </Link>
                 <Link
                  className="text-red-400 text-[16px] w-full p-3 border-b font-Lato font-normal duration-500 cursor-pointer"
                  to={"/agents-list-two"}
                >
                 Agents List Two
                </Link>
                <Link
                  className="text-red-400 text-[16px] w-full p-3 border-b font-Lato font-normal duration-500 cursor-pointer"
                  to={"/agents-details"}
                >
                  Agents-Details
                </Link>  
                
               
              </div>

            </div>



            <div className="relative group">
              <div
                className="inline-flex relative text-white uppercase font-Lato text-[20px] font-normal cursor-pointer h-7 overflow-x-hidden overflow-y-hidden group-hover:text-secondaryColor duration-500"
              >
                Blogs
                <span className="absolute w-full h-[2px] bg-secondaryColor left-0 bottom-0 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
              </div>
             

             <div className="absolute left-0 bg-white shadow-lg opacity-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-100 group-hover:pointer-events-auto top-0 mt-7 w-[180px] h-auto flex flex-col">
                <Link
                  className="text-red-400 text-[16px] w-full p-3 border-b font-Lato font-normal duration-500 cursor-pointer"
                  to={"/blogs"}
                >
                Blogs Style One
                </Link> 
                <Link
                  className="text-red-400 text-[16px] w-full p-3 border-b font-Lato font-normal duration-500 cursor-pointer"
                  to={"/blogs-v2"}
                >
                Blogs Style Two
                </Link>
                <Link
                  className="text-red-400 text-[16px] w-full p-3 border-b font-Lato font-normal duration-500 cursor-pointer"
                  to={"/blog-details"}
                >
                  Blog Details
                </Link>  
                
               
              </div>

            </div>


             <div>
             <Link to={"/contact-us"}>
              <span className="inline-flex relative text-white uppercase font-Lato text-[20px] font-normal cursor-pointer h-7 overflow-x-hidden overflow-y-hidden  group hover:text-secondaryColor duration-500">
                Contacts
                <span className="absolute w-full h-[2px] bg-secondaryColor left-0 bottom-0 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
              </span>
            </Link>
             </div>

           

           





            <button className="w-[170px] h-[56px]  rounded-[60px] bg-secondaryColor text-white text-[20px] font-Lato hover:bg-primary duration-500 transform ease-in-out">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div className="2xl:hidden lg:hidden block fixed top-0 left-0 right-0 z-10 bg-[#626C96]">
        <MobileMenu />
      </div>
    </div>
  );
};

export default NavbarTwo;

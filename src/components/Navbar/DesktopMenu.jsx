import  { useState } from "react";
import { Link } from "react-router-dom";

// import dots from "../../assets/dots.svg";
import {MdOutlineArrowDropDown} from 'react-icons/md'
import {FaFacebookF, FaLinkedinIn} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
function DesktopMenu() {
  const [active, setActive] = useState("");

  return (
    <div onMouseLeave={() => setActive("")} className="lg:block hidden">
      {/************************ desktop menu start here *************************/}
      <ul className="flex gap-10 items-center  2xl:text-[16px] font-bold text-primary">
        <li className="relative hover:text-blue-300">
          <Link
            className="flex items-center w-[65px] uppercase font-Cuprum font-bold text-[16px] tracking-[0.02em] text-primary"
            onMouseEnter={() => setActive("home")}
            to={"/"}
          >
            Home{" "}
            <MdOutlineArrowDropDown className="w-8 h-8"/>
            
          </Link>
          {active == "home" && (
            <div className="w-48 p-2 bg-[#081e34]  z-50 min-h-max rounded-lg  shadow shadow-slate-900 absolute mt-3 transition-all duration-500">
              <ul className="" onMouseLeave={() => setActive("")}>
                <li>
                  <Link className="sub-menu-style block" to={"/"}>
                    Home 1
                  </Link>
                </li>
                <li>
                  <Link className="sub-menu-style block" to={"/home-two"}>
                    Home 2
                  </Link>
                </li>
                <li>
                  <Link className="sub-menu-style block" to={"/home-three"}>
                    Home 3
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </li>

        <li>
          <span
            className="flex items-center cursor-pointer w-[65px] uppercase font-Cuprum font-bold text-[16px] tracking-[0.02em] text-primary"
            onMouseEnter={() => setActive("pages")}
           
          >
            Pages
            <MdOutlineArrowDropDown className="w-8 h-8"/>
          </span>
          {active == "pages" && (
            <div className="min-w-48 max-w-max p-2 bg-[#081e34] z-50 min-h-max rounded-lg  shadow shadow-slate-900 absolute mt-3 transition-all duration-500">
              <ul onMouseLeave={() => setActive("")}>
                <li className="flex gap-4">
                  <div>
                    <li>
                      <Link className="sub-menu-style block" to={"/about-us"}>
                        AboutUs
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="sub-menu-style block"
                        to={"/property-list"}
                      >
                       Property List
                      </Link>
                    </li>
                   
                    <li>
                      <Link className="sub-menu-style block" to={"/property-details"}>
                      Property Details
                      </Link>
                    </li>
                    <li>
                      <Link className="sub-menu-style block" to={"/agents-list"}>
                      agents List
                      </Link>
                    </li>
                    <li>
                      <Link className="sub-menu-style block" to={"/agent-details"}>
                      Agents Details
                      </Link>
                    </li>
                  </div>
                  <div>
                    <li>
                      <Link
                        className="sub-menu-style block"
                        to={"/sign-up"}
                      >
                        SignUp
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="sub-menu-style block"
                        to={"/login"}
                      >
                       Login
                      </Link>
                    </li>
                  
                   
                    <li>
                      <Link className="sub-menu-style block" to={"*"}>
                        NotFoundPage
                      </Link>
                    </li>
                  </div>
                </li>
              </ul>
              <div className="z-50"></div>
            </div>
          )}
        </li>


           <li>
          <span
            className="flex items-center w-[65px] uppercase font-Cuprum font-bold text-[16px] tracking-[0.02em] text-primary"
            onMouseEnter={() => setActive("shop")}
           
          >
             Shop
            <MdOutlineArrowDropDown className="w-6 h-6"/>
          </span>
          {active == "shop" && (
            <div className="w-48 p-2 bg-[#081e34] z-50  min-h-max rounded-lg  shadow shadow-slate-900 absolute mt-3 transition-all duration-500 cursor-pointer">
              <ul onMouseLeave={() => setActive("")}>
                <li>
                  <Link className="sub-menu-style block" to={"/productlist"}>
                    Product List
                  </Link>
                </li>
                <li>
                  <Link className="sub-menu-style block" to={"/singleproduct"}>
                    Single Product
                  </Link>
                </li>
                
              </ul>
              <div className="z-50"></div>
            </div>
          )}
        </li>





        <li>
          <span
            className="flex items-center w-[65px] uppercase font-Cuprum font-bold text-[16px] tracking-[0.02em] text-primary"
            onMouseEnter={() => setActive("blog")}
           
          >
            Blog{" "}
            <MdOutlineArrowDropDown className="w-6 h-6"/>
          </span>
          {active == "blog" && (
            <div className="w-48 p-2 bg-[#081e34] z-50  min-h-max rounded-lg  shadow shadow-slate-900 absolute mt-3 transition-all duration-500 cursor-pointer">
              <ul onMouseLeave={() => setActive("")}>
                <li>
                  <Link className="sub-menu-style block" to={"/bloglist"}>
                    BlogList
                  </Link>
                </li>
                <li>
                  <Link className="sub-menu-style block" to={"/blogitem"}>
                    BlogsItem
                  </Link>
                </li>
                <li>
                  <Link className="sub-menu-style block" to={"/blogdetails"}>
                    BlogDetails
                  </Link>
                </li>
              </ul>
              <div className="z-50"></div>
            </div>
          )}
        </li>
        <li>
          <Link className=" w-[65px] uppercase font-Cuprum font-bold text-[16px] tracking-[0.02em] text-primary" to={"/contactus"}>Contact Us</Link>
        </li>

        <li>
          <ul className="flex gap-6 items-center cursor-pointer">
            <li>
             
              <FaFacebookF className="hover:text-[#64ffda] duration-300"/>
            </li>
            <li>
            <AiOutlineTwitter className="hover:text-[#64ffda] duration-300"/>
            </li>
            <li>
            <FaLinkedinIn className="hover:text-[#64ffda] duration-300"/>
            </li>
          </ul>
        </li>
       
      </ul>

      {/************************ desktop menu end here *************************/}
    </div>
  );
}

export default DesktopMenu;

import CommonAction from "../../components/CommonAction/CommonAction";
import contactImage from "../../assets/Contact-us-image/contact-us-image.png";
import {SlLocationPin} from 'react-icons/sl'
import {BsTelephone} from 'react-icons/bs'
import {AiOutlineMail,AiOutlineTwitter} from 'react-icons/ai'
import { FaFacebookF, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import Faq from "./Faq/Faq";


const ContactUsPage = () => {
  return (
    //********************  Contact us section start here **************************//
    //******************** ##########################  **************************//
    <div>
      <CommonAction
        title={"Contact With Us"}
        subTitle={"Home> Contact With Us"}
      />

      <div className="max-w-container mx-auto lg:px-8 2xl:px-0 px-4 md:px-4 pt-32">
        <div className="lg:flex gap-[123px]">
          <div className="w-[712px] h-[810px] relative" style={{background:'rgba(80, 69, 148, 0.90)',boxShadow:'0px 4px 4px 0px rgba(0, 0, 0, 0.57)'}}>
            <img className="w-[712px] h-[810px] opacity-25" src={contactImage}  alt="" />

              <div className="absolute top-[80px] ml-[80px]">
                <h1 className="text-white text-[56px] font-Teko font-medium mt-[72px]">Get In Touch With Us</h1>
            
                  <div className="flex items-center gap-5 mt-8">
                    <SlLocationPin className="text-white text-[40px]"/>
                    <h2 className=" text-white text-[20px] font-Lato font-normal">234/1/B, XYZ Ave. West Newyork,</h2>
                  </div>

                   <div className="flex items-center gap-5 mt-8">
                    <BsTelephone className="text-white text-[40px]"/>
                    <span>
                    <h2 className=" text-white text-[20px] font-Lato font-normal">+123 456 66778</h2> 
                    <h2 className=" text-white text-[20px] font-Lato font-normal">+123 467  56778</h2>
                    </span>
                  </div> 
                  
                  <div className="flex items-center gap-5 mt-8">
                    <AiOutlineMail className="text-white text-[40px]"/>
                    <span>
                    <h2 className=" text-white text-[20px] font-Lato font-normal">propertyadmin@gmail.com</h2> 
                    <h2 className=" text-white text-[20px] font-Lato font-normal">propertyceomail@gmail.com</h2>
                    </span>
                  </div>


                    <h3 className="text-white text-[20px] font-Teko font-bold tracking-[1.2px] mt-[80px]">Connect with  our social media</h3>

                     {/*********************** socal media icon start here *********************/}

                     <div className="flex gap-14 justify-start mt-5">
                <span className="w-[50px] h-[50px] rounded-full flex justify-center items-center bg-blue-600 hover:bg-secondaryColor duration-500 transform ease-in-out hover:translate-y-2 cursor-pointer">
                  <FaFacebookF className="text-white text-[30px]" />
                </span>

                <span className="w-[50px] h-[50px] rounded-full flex justify-center items-center bg-blue-600 hover:bg-secondaryColor duration-500 transform ease-in-out hover:translate-y-2 cursor-pointer">
                  <FaLinkedinIn className="text-white text-[30px]" />
                </span>

                <span className="w-[50px] h-[50px] rounded-full flex justify-center items-center bg-blue-600 hover:bg-secondaryColor duration-500 transform ease-in-out hover:translate-y-2 cursor-pointer">
                  <AiOutlineTwitter className="text-white text-[30px]" />
                </span>

                <span className="w-[50px] h-[50px] rounded-full flex justify-center items-center bg-blue-600 hover:bg-secondaryColor duration-500 transform ease-in-out hover:translate-y-2 cursor-pointer">
                  <FaTelegramPlane className="text-white text-[30px]" />
                </span>
              </div>


                     {/*********************** socal media icon end here ***********************/}

              </div>
              
          </div>

          <div className="w-[604px]">
            <p className="text-black text-[20px] font-Lato font-normal mt-10">
              Get in Touch
            </p>
            <h1 className="w-[514px]  text-primary text-[56px] font-Teko font-bold leading-[56px] mt-5">
              We are waiting To hear From You
            </h1>

            <div className="flex gap-5 mt-[45px]">
              <div className="flex flex-col gap-5 ">
                <label
                  className="text-black font-Teko font-normal text-[24px] leading-6"
                  htmlFor="name"
                >
                  Your First Name
                </label>
                <input
                  className="lg:w-[291px] md:w-[291px] w-full h-[56px] pl-10 rounded-[60px] border-[1px] border-[#878383] text-[#2F2D2D] font-Lato text-[16px] font-normal leading-6 outline-none focus:border-primary focus:ring-primary focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-primary transition-all duration-700"
                  type="name"
                  placeholder="Write your first name here"
                />
              </div> 
               <div className="flex flex-col gap-5">
                <label
                  className="text-black font-Teko font-normal text-[24px] leading-6"
                  htmlFor="name"
                >
                  Your Last Name
                </label>
                <input
                  className="lg:w-[291px] md:w-[291px] w-full h-[56px] pl-10 rounded-[60px] border-[1px] border-[#878383] text-[#2F2D2D] font-Lato text-[16px] font-normal leading-6 outline-none focus:border-primary focus:ring-primary focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-primary transition-all duration-700"
                  type="name"
                  placeholder="Write your last name here"
                />
              </div>
            </div>

             <div className="flex gap-5 mt-[45px]">
              <div className="flex flex-col gap-5 ">
                <label
                  className="text-black font-Teko font-normal text-[24px] leading-6"
                  htmlFor="name"
                >
                  Your Email
                </label>
                <input
                  className="lg:w-[291px] md:w-[291px] w-full h-[56px] pl-10 rounded-[60px] border-[1px] border-[#878383] text-[#2F2D2D] font-Lato text-[16px] font-normal leading-6 outline-none focus:border-primary focus:ring-primary focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-primary transition-all duration-700"
                  type="email"
                  placeholder="Write your Email ID here"
                />
              </div> 
               <div className="flex flex-col gap-5">
                <label
                  className="text-black font-Teko font-normal text-[24px] leading-6"
                  htmlFor="name"
                >
                  Your Phone Number
                </label>
                <input
                  className="lg:w-[291px] md:w-[291px] w-full h-[56px] pl-10 rounded-[60px] border-[1px] border-[#878383] text-[#2F2D2D] font-Lato text-[16px] font-normal leading-6 outline-none focus:border-primary focus:ring-primary focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-primary transition-all duration-700"
                  type="text"
                  placeholder="Write your phone number here"
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
                <textarea name="" id="" className="lg:w-[604px] md:w-[604px] w-full h-[140px] pl-10 rounded-[45px] border-[1px] pt-7 border-[#878383] text-[#2F2D2D] font-Lato text-[16px] font-normal leading-6 outline-none focus:border-primary focus:ring-primary focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-primary transition-all duration-700"
                type="text" placeholder="Write your message  here "></textarea>
              
            </div>

            <button className="bg-[#F90] text-white text-[16px] font-Lato font-bold w-[210px] h-[56px] custom-border-property mt-10 hover:bg-primary duration-500">
            Send Message
            </button>




          </div>
        </div>


            {/********************** Faq section start  here ****************************/}

                 <div>
                  <Faq/>
                 </div>

            {/********************** Faq section end  here ******************************/}


      </div>
    </div>

    //********************   Contact us section end here **************************//
    //******************** ##########################  **************************//
  );
};

export default ContactUsPage;

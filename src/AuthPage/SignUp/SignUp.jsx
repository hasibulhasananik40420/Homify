import CommonAction from "../../components/CommonAction/CommonAction";
import signUpImage from "../../assets/sign-up-image/signup.png";
import { Link } from "react-router-dom";
import { useState } from "react";
const SignUp = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="">
      {/********************** common action section start here ****************************/}
      <CommonAction title={"User Sign Up"} subTitle={" Home> User Sign In"} />
      {/********************** common action section end  here ****************************/}

      {/********************** login section start here ****************************/}

      <div className="lg:flex items-center gap-24 2xl:py-32 lg:py-[100px] md:py-20 py-16 max-w-container mx-auto lg:px-8 2xl:px-0 px-4 md:px-8 ">
        <div className="lg:w-[765px] md:w-[600px] md:h-[550px] md:mx-auto w-full h-[450px] lg:h-[748px]">
          <img
            className="lg:w-[765px] md:w-[600px]  md:h-[550px] md:mx-auto w-full h-[450px] lg:h-[748px]"
            src={signUpImage}
            alt=""
          />
        </div>

        <div className="flex flex-col md:mx-auto md:mt-10 lg:mt-0 mt-10 2xl:mt-0 md:w-[500px] w-full">
          <h1 className="text-primary text-[56px] font-Teko font-bold">
            User Sign Up
          </h1>
          <p className="text-textColor font-Lato text-[20px] font-normal mt-5">
            Hey, Enter your details to Sign up your Account
          </p>

          <form>
            <div className="flex flex-col gap-5 mt-[45px]">
              <label
                className="text-black font-Teko font-normal text-[24px] leading-6"
                htmlFor="email"
              >
                Your Name
              </label>
              <input
                className="lg:w-[429px] md:w-[500px] w-full h-[56px] pl-10 rounded-[60px] border-[1px] border-[#878383] text-[#2F2D2D] font-Lato text-[16px] font-normal leading-6 outline-none focus:border-primary focus:ring-primary focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-primary transition-all duration-700"
                type="text"
                placeholder="Write your name here"
              />
            </div>

            <div className="flex flex-col gap-5 mt-[45px]">
              <label
                className="text-black font-Teko font-normal text-[24px] leading-6"
                htmlFor="email"
              >
                Your Email
              </label>
              <input
                className="lg:w-[429px] md:w-[500px] w-full h-[56px] pl-10 rounded-[60px] border-[1px] border-[#878383] text-[#2F2D2D] font-Lato text-[16px] font-normal leading-6 outline-none focus:border-primary focus:ring-primary focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-primary transition-all duration-700"
                type="email"
                placeholder="Write your email id"
              />
            </div>

            <div className="flex flex-col gap-5 mt-[45px]">
              <label
                className="text-black font-Teko font-normal text-[24px] leading-6"
                htmlFor="email"
              >
                Your Mobile Number
              </label>
              <input
                className="lg:w-[429px] md:w-[500px] w-full h-[56px] pl-10 rounded-[60px] border-[1px] border-[#878383] text-[#2F2D2D] font-Lato text-[16px] font-normal leading-6 outline-none focus:border-primary focus:ring-primary focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-primary transition-all duration-700"
                type="text"
                placeholder="Write your mobile number here"
              />
            </div>

            <div className="flex flex-col gap-5 mt-[40px] relative">
              <label
                className="text-black font-Teko font-normal text-[24px] leading-6"
                htmlFor="password"
              >
                Your Password
              </label>
              <input
                className="lg:w-[429px] md:w-[500px] w-full h-[56px] pl-10 rounded-[60px] border-[1px] border-[#878383] text-[#2F2D2D] font-Lato text-[16px] font-normal leading-6 outline-none focus:border-primary focus:ring-primary focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-primary transition-all duration-700"
                type={showPassword ? "text" : "password"}
                placeholder="Write your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <span
                className="text-black font-Lato text-[16px] leading-6 underline font-normal cursor-pointer absolute 2xl:right-[100px] lg:right-[70px] md:right-[130px] right-[30px] top-[59px]"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? "Show" : "Hide"}
              </span>
            </div>

            <div className=" lg:w-[429px] md:w-[500px] w-full">
              <div className="mt-5">
                <div className="flex gap-4 items-center">
                  <input
                    className="w-6 h-6 border-[1px] !rounded-[6px] border-black transition-colors duration-300 ease-in-out"
                    type="checkbox"
                    name="checkbox"
                    id="checkbox"
                  />
                  <p className="text-[16px] font-Lato text-black font-normal leading-6">
                    I am agree your{" "}
                    <span className="text-[16px] font-Lato text-black font-bold leading-6">
                      Terms and Conditions
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <button className="bg-[#F90] text-white text-[16px] font-Lato font-bold w-[190px] h-[56px] custom-border-property mt-8 hover:bg-primary duration-500">
              Sign UP
            </button>
          </form>

          <Link
            className="text-black mt-[20px] text-[16px] font-Lato font-normal"
            to={"/login"}
          >
            If you already have an account ?{" "}
            <span className="text-black  text-[16px] font-Lato font-bold">
              Sign In{" "}
            </span>
          </Link>
        </div>
      </div>

      {/********************** login section end here ****************************/}
    </div>
  );
};

export default SignUp;

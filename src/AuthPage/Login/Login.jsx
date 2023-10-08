import CommonAction from "../../components/CommonAction/CommonAction";
import loginImage from "../../assets/Login-image/login.png";
import { AiOutlineApple, AiOutlineGoogle } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Fade, Zoom } from "react-reveal";

const Login = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="">
      {/********************** common action section start here ****************************/}
      <CommonAction title={"User Log In"} subTitle={" Home> User Log In"} />
      {/********************** common action section end  here ****************************/}

      {/********************** login section start here ****************************/}

      <div className="lg:flex items-center gap-24 2xl:py-32 lg:py-[100px] md:py-20 py-16 max-w-container mx-auto lg:px-8 2xl:px-0 px-4 md:px-8 ">
        <div className="lg:w-[765px] md:w-[600px] md:h-[550px] md:mx-auto w-full h-[450px] lg:h-[748px]">
        <Zoom>
          <img
            className="lg:w-[765px] md:w-[600px]  md:h-[550px] md:mx-auto w-full h-[450px] lg:h-[748px]"
            src={loginImage}
            alt=""
          />
          </Zoom>
        </div>
        <Fade bottom cascade>
        <div className="flex flex-col md:mx-auto md:mt-10 lg:mt-0 mt-10 2xl:mt-0 md:w-[600px] w-full">
          <h1 className="text-primary text-[56px] font-Teko font-bold">
            User Sign In
          </h1>
          <p className="text-textColor font-Lato text-[20px] font-normal mt-5">
            Hey, Enter your details to e Sign n to you Account
          </p>

          <form>
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

            {/* <div className="flex flex-col gap-5 mt-[40px] relative">
              <label
                className="text-black font-Teko font-normal text-[24px] leading-6"
                htmlFor="password"
              >
                Your Password
              </label>
              <input
                className="lg:w-[429px] md:w-[500px] w-full h-[56px] pl-10 rounded-[60px] border-[1px] border-[#878383] text-[#2F2D2D] font-Lato text-[16px] font-normal leading-6 outline-none focus:border-primary focus:ring-primary focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-primary transition-all duration-700"
                type="password"
                placeholder="Write your password"
              />

              <span className="text-black font-Lato text-[16px] leading-6 underline font-normal cursor-pointer absolute 2xl:right-[190px] lg:right-[120px] md:right-[130px] right-[30px] top-[59px]">
                Hide
              </span>
            </div> */}

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
                className="text-black font-Lato text-[16px] leading-6 underline font-normal cursor-pointer absolute 2xl:right-[190px] lg:right-[120px] md:right-[130px] right-[30px] top-[59px]"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? "Show" : "Hide"}
              </span>
            </div>

            <div className="flex justify-between items-center lg:w-[429px] md:w-[500px] w-full">
              <div className="mt-5">
                <div className="flex gap-4 items-center">
                  <input
                    className="w-6 h-6 border-[1px] !rounded-[6px] border-black transition-colors duration-300 ease-in-out"
                    type="checkbox"
                    name="checkbox"
                    id="checkbox"
                  />
                  <p className="text-[16px] font-Lato text-[#6F6E6E] font-normal leading-6">
                    Remember Me
                  </p>
                </div>
              </div>

              <div>
                <p className="text-[16px] font-Lato text-[#6F6E6E] font-normal leading-6 underline mt-4 cursor-pointer">
                  Forget Password ?
                </p>
              </div>
            </div>

            <button className="bg-[#F90] text-white text-[16px] font-Lato font-bold w-[190px] h-[56px] custom-border-property mt-8 hover:bg-primary duration-500">
              Sign In
            </button>

            <h1 className="text-black font-Lato font-bold text-[20px] leading-6 text-center mt-[60px]">
              Or Sign In with
            </h1>

            <div className="flex gap-5">
              <button className="bg-white text-black lg:text-[16px] md:text-[16px] text-[12px] font-Lato font-bold w-[150px] h-[56px] border-[1px] border-primary custom-border-property mt-8 flex gap-1 items-center justify-center hover:bg-primary hover:text-white duration-500">
                <AiOutlineGoogle className="text-[24px]" /> <span>Sign In</span>
              </button>

              <button className="bg-primary text-white lg:text-[16px] md:text-[16px] text-[12px]  font-Lato font-bold w-[150px] h-[56px] custom-border-property mt-8 flex gap-1 items-center justify-center hover:bg-secondaryColor hover:text-white duration-500">
                <AiOutlineApple className="text-[24px]" /> <span>Apple ID</span>
              </button>

              <button className="bg-white text-black lg:text-[16px] md:text-[16px] text-[12px]  font-Lato font-bold w-[150px] h-[56px] border-[1px] border-primary custom-border-property mt-8 flex gap-1 items-center justify-center hover:bg-primary hover:text-white duration-500">
                <FiFacebook className="text-[24px]" /> <span>Facebok</span>
              </button>
            </div>
          </form>

          <Link
            className="text-black text-center mt-[40px] text-[16px] font-Lato font-normal"
            to={"/sign-up"}
          >
            Don’t have any account ?{" "}
            <span className="text-black  text-[16px] font-Lato font-bold">
              Sign Up now
            </span>
          </Link>
        </div>
        </Fade>
      </div>

      {/********************** login section end here ****************************/}
    </div>
  );
};

export default Login;

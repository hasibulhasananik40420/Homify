import CommonAction from "../../components/CommonAction/CommonAction";
import aboutHero from "../../assets/About-us-image/about-hero.png";
import certified1 from "../../assets/About-us-image/certified1.png";
import { BsBagDash } from "react-icons/bs";
const AboutPage = () => {
  return (
    //********************  About us section end here **************************//
    <div>
      <CommonAction title={"About us"} subTitle={"Home> About us "} />

      <div className="max-w-container mx-auto lg:px-8 2xl:px-0 px-4 md:px-4 pb-32">
        <div className="lg:flex gap-[74px] py-32">
          <div className="lg:w-[663px]">
            <h1 className="lg:w-[663px] text-primary lg:text-[56px] md:text-[56px] text-[30px] font-Teko font-bold lg:leading-[70px] mb-24">
              We are Best and Most Trusted Real Estate Agent
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 md:justify-items-center lg:gap-20 md:gap-20 gap-14">
              <div className="lg:flex gap-5">
                <div className="w-[120px] h-[120px] rounded-md bg-primary flex justify-center items-center">
                  <BsBagDash className="text-white text-[75px]" />
                </div>

                <div>
                  <h1 className="lg:text-[20px] md:text-[40px] text-[30px] text-primary font-Teko font-bold leading-10 tracking-[2px] mt-4 md:mt-8 lg:mt-0">
                    Buy Property
                  </h1>

                  <p className="text-black text-[16px] md:text-[20px] lg:text-[16px] mt-3 md:mt-3 lg:mt-0 font-Lato font-normal leading-8 lg:w-[469px]  md:w-[300px] w-full ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec miet, placerat vitae tristique ac, venenatis quis
                    massa. Proin aliquam,{" "}
                  </p>
                </div>
              </div>

              <div className="lg:flex gap-5">
                <div className="w-[120px] h-[120px] rounded-md bg-primary flex justify-center items-center">
                  <BsBagDash className="text-white text-[75px]" />
                </div>

                <div>
                  <h1 className="lg:text-[20px] md:text-[40px] text-[30px] text-primary font-Teko font-bold leading-10 tracking-[2px] mt-4 md:mt-8 lg:mt-0">
                    Buy Property
                  </h1>

                  <p className="text-black text-[16px] md:text-[20px] lg:text-[16px] mt-3 md:mt-3 lg:mt-0 font-Lato font-normal leading-8 lg:w-[469px]  md:w-[300px] w-full ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec miet, placerat vitae tristique ac, venenatis quis
                    massa. Proin aliquam,{" "}
                  </p>
                </div>
              </div>

              <div className="lg:flex gap-5">
                <div className="w-[120px] h-[120px] rounded-md bg-primary flex justify-center items-center">
                  <BsBagDash className="text-white text-[75px]" />
                </div>

                <div>
                  <h1 className="lg:text-[20px] md:text-[40px] text-[30px] text-primary font-Teko font-bold leading-10 tracking-[2px] mt-4 md:mt-8 lg:mt-0">
                    Buy Property
                  </h1>

                  <p className="text-black text-[16px] md:text-[20px] lg:text-[16px] mt-3 md:mt-3 lg:mt-0 font-Lato font-normal leading-8 lg:w-[469px]  md:w-[300px] w-full ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec miet, placerat vitae tristique ac, venenatis quis
                    massa. Proin aliquam,{" "}
                  </p>
                </div>
              </div>

              <div className="lg:flex gap-5">
                <div className="w-[120px] h-[120px] rounded-md bg-primary flex justify-center items-center">
                  <BsBagDash className="text-white text-[75px]" />
                </div>

                <div>
                  <h1 className="lg:text-[20px] md:text-[40px] text-[30px] text-primary font-Teko font-bold leading-10 tracking-[2px] mt-4 md:mt-8 lg:mt-0">
                    Buy Property
                  </h1>

                  <p className="text-black text-[16px] md:text-[20px] lg:text-[16px] mt-3 md:mt-3 lg:mt-0 font-Lato font-normal leading-8 lg:w-[469px]  md:w-[300px] w-full ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec miet, placerat vitae tristique ac, venenatis quis
                    massa. Proin aliquam,{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <img
              className="lg:w-[700px] lg:h-[980px] md:w-[550px] mt-16 md:mt-24 lg:mt-0 md:h-[550px] md:mx-auto w-full h-[450px] custom-border"
              src={aboutHero}
              alt=""
            />
          </div>
        </div>

        {/***************** Certification and Achievemt section start here *******************/}

        <div>
          <h1 className="text-[#5B519B] text-[56px] font-Teko font-bold leading-[60px] lg:leading-8 md:leading-8 2xl::leading-8 text-center">
            Certification and Achievemt
          </h1>

          <p className="text-black text-[16px] font-Lato font-normal leading-8 lg:w-[987px] w-full mx-auto mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mi
            est, placerat vitae tristique ac, venenatis quis massa. Proin
            aliquam, lectus in ultrcies luctus, leo ante posuere nibh, vel
            lacinia lorem libero augue. Duis dictum purus vitae mauris posuere
            consequat. Donec nec ligula porta, efficitur est non, finibus magna.
            Curabitur vestibulum pretium turpis, non ullamcorper nunc imperdiet
            quis. Aliquam dignissim ante nec rhoncus porta. Maecenas ut augue
            sem. Nulla rutrum aliquam purus, id viverra metus aliquet a. Vivamus
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 2xl:gap-10 md:gap-10 gap-y-28 md:justify-items-center mt-20">
            <div className="2xl:w-[466px] 2xl:h-[506px] lg:w-[400px] lg:h-[500px] md:w-[350px] md:h-[450px] w-full h-full">
              <img
                className="2xl:w-[466px] 2xl:h-[416px] lg:w-[400px] lg:h-[400px] md:w-[350px] md:h-[350px] w-full h-full"
                src={certified1}
                alt=""
              />
              <h1 className="text-black text-[20px] font-Teko font-medium leading-8 mt-5">
                Certificate for
              </h1>

              <p className="text-black font-Lato font-normal text-[20px] leading-8">
                Organization from
              </p>
            </div>
            <div className="2xl:w-[466px] 2xl:h-[506px] lg:w-[400px] lg:h-[500px] md:w-[350px] md:h-[450px] w-full h-full">
              <img
                className="2xl:w-[466px] 2xl:h-[416px] lg:w-[400px] lg:h-[400px] md:w-[350px] md:h-[350px] w-full h-full"
                src={certified1}
                alt=""
              />
              <h1 className="text-black text-[20px] font-Teko font-medium leading-8 mt-5">
                Certificate for
              </h1>

              <p className="text-black font-Lato font-normal text-[20px] leading-8">
                Organization from
              </p>
            </div>
            <div className="2xl:w-[466px] 2xl:h-[506px] lg:w-[400px] lg:h-[500px] md:w-[350px] md:h-[450px] w-full h-full">
              <img
                className="2xl:w-[466px] 2xl:h-[416px] lg:w-[400px] lg:h-[400px] md:w-[350px] md:h-[350px] w-full h-full"
                src={certified1}
                alt=""
              />
              <h1 className="text-black text-[20px] font-Teko font-medium leading-8 mt-5">
                Certificate for
              </h1>

              <p className="text-black font-Lato font-normal text-[20px] leading-8">
                Organization from
              </p>
            </div>

            <div className="2xl:w-[466px] 2xl:h-[506px] lg:w-[400px] lg:h-[500px] md:w-[350px] md:h-[450px] w-full h-full">
              <img
                className="2xl:w-[466px] 2xl:h-[416px] lg:w-[400px] lg:h-[400px] md:w-[350px] md:h-[350px] w-full h-full"
                src={certified1}
                alt=""
              />
              <h1 className="text-black text-[20px] font-Teko font-medium leading-8 mt-5">
                Certificate for
              </h1>

              <p className="text-black font-Lato font-normal text-[20px] leading-8">
                Organization from
              </p>
            </div>

            <div className="2xl:w-[466px] 2xl:h-[506px] lg:w-[400px] lg:h-[500px] md:w-[350px] md:h-[450px] w-full h-full">
              <img
                className="2xl:w-[466px] 2xl:h-[416px] lg:w-[400px] lg:h-[400px] md:w-[350px] md:h-[350px] w-full h-full"
                src={certified1}
                alt=""
              />
              <h1 className="text-black text-[20px] font-Teko font-medium leading-8 mt-5">
                Certificate for
              </h1>

              <p className="text-black font-Lato font-normal text-[20px] leading-8">
                Organization from
              </p>
            </div>

            <div className="2xl:w-[466px] 2xl:h-[506px] lg:w-[400px] lg:h-[500px] md:w-[350px] md:h-[450px] w-full h-full">
              <img
                className="2xl:w-[466px] 2xl:h-[416px] lg:w-[400px] lg:h-[400px] md:w-[350px] md:h-[350px] w-full h-full"
                src={certified1}
                alt=""
              />
              <h1 className="text-black text-[20px] font-Teko font-medium leading-8 mt-5">
                Certificate for
              </h1>

              <p className="text-black font-Lato font-normal text-[20px] leading-8">
                Organization from
              </p>
            </div>
          </div>
        </div>

        {/***************** Certification and Achievemt section end here *******************/}
      </div>
    </div>

    //********************  About us section end here **************************//
  );
};

export default AboutPage;

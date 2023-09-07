import about from "../../../assets/About-hero-image/about.png";
import house1 from "../../../assets/About-hero-image/about-2-house.svg";
import house2 from "../../../assets/About-hero-image/about-2.svg";
import house3 from "../../../assets/About-hero-image/about-3.svg";
const About = () => {
  return (
    //********************  About hero section start here **************************//
    //******************** ##########################  **************************//

    // <div className="max-w-container mx-auto lg:px-8 2xl:px-0 px-4 md:px-8 2xl:pt-32 lg:pt-[100px] md:pt-[80px] pt-16">
    //   <div className="lg:flex 2xl:flex lg:gap-[50px] 2xl:gap-[50px] justify-between">
    //     <div className="2xl:w-[603px] lg:w-[603px] w-full">
    //       <img
    //         className="2xl:w-[603px] lg:w-[603px] w-full 2xl:h-[479px] lg:[479px] md:h-[479px] h-full"
    //         src={about}
    //         alt=""
    //       />
    //     </div>

    //     <div className="2xl:w-[717px] lg:w-[660px] w-full">
    //       <h1 className="lg:text-[56px] md:text-[56px] text-[32px] font-Teko font-bold text-[#375E97] mt-16 md:mt-16 lg:mt-0 2xl:mt-0">
    //         About US
    //       </h1>
    //       <p className="2xl:w-[717px] lg:w-[660px] font-Lato text-[16px] font-normal text-black leading-8 pt-[20px]">
    //         Lorem ipsum dolor sit amet. Aut voluptatum unde aut odit reiciendis
    //         autsunt suscipit qui Quis illo sed q quisquam et consequatur ipsum.
    //         At temporibus autem sed eveniet cupiditate etmodi laborio sam aut
    //         quia delectus qui nihil doloruma tenetur totam 33 ratione
    //         praesentium. Ea enim aliquid ex accusamus omnis ut necessitatibus
    //         consequatur aut facere iste id illo omnis eum assumenda doloremque
    //         aut aliquid ratione. sam aut quia delectus qui nihil doloruma
    //         tenetur totam 33 ratione praesentium. Ea enim aliquid ex accusamus
    //         omnis ut necessitatibus consequatur aut facere iste id illo omnis
    //         eum assumenda sam aut quia delectus qui nihil doloruma tenetur totam
    //         33 ratione praesentium. Ea enim aliquid ex
    //       </p>

    //       <button className="bg-[#F90] text-white text-[16px] mt-[35px] font-Lato font-bold w-[170px] h-[56px] custom-border-property  hover:bg-[#375E97] duration-500">
    //         Read More
    //       </button>
    //     </div>
    //   </div>
    // </div>


    <div className="max-w-container mx-auto lg:px-8 2xl:px-0 px-4 md:px-8 2xl:pt-32 lg:pt-[100px] md:pt-[80px] pt-16">
    <div>
      <h1 className="lg:text-[56px] md:text-[56px] text-[32px] font-Teko font-bold text-[#375E97] mt-16 md:mt-16 lg:mt-0 2xl:mt-0 text-center mb-20">
        About US
      </h1>

      <div className="lg:flex 2xl:gap-[121px] lg:gap-20">
        <div>
          <img
            className="lg:w-[583px] lg:h-[760px] w-full h-full"
            src="https://img.freepik.com/premium-photo/ai-image-contemporary-luxury-residential-house-with-windows-balcony-surrounded-by-trees-flowers_501669-26503.jpg?size=626&ext=jpg&ga=GA1.1.1166836568.1647150580&semt=ais"
            alt=""
          />
        </div>

        <div className="2xl:w-[735px] lg:w-[670px] w-full">
          <h1 className="text-black text-[32px] font-Teko font-bold mt-10 lg:mt-0 2xl:mt-0">
            Dream Living Spaces Setting for New Build
          </h1>

          <p className="text-black text-justify text-[16px] font-Lato font-normal leading-8 mt-2 lg:mt-0 2xl:mt-0">
            Over 39,000 people work for us in more than 70 countries all over
            the This breadth of global coverage combined with specialist
            services.
          </p>

          <div
            className="2xl:w-[735px] lg:w-[670px] w-full h-full lg:h-[148px] bg-white mt-10 hover:bg-secondaryColor duration-500 hover:cursor-pointer group"
            style={{
              boxShadow: "0px 4px 45px 0px rgba(151, 150, 150, 0.30)",
            }}
          >
            <div className="lg:flex items-center gap-8 2xl:p-7 lg:p-4 md:p-6 p-4">
              <img
                className="lg:w-[60px] lg:h-[60px] w-20 h-20 md:w-24 md:h-24 mx-auto md:mx-0 lg:mx-0"
                src={house1}
                alt=""
              />

              <span>
                <h1 className="text-black text-[32px] font-Teko font-medium leading-8 mt-4 md:mt-4 lg:mt-0 2xl:mt-0 group-hover:text-white">
                  The Modern and Latest House
                </h1>
                <p className="text-[#263238] text-justify text-[16px] font-Lato font-normal leading-8 mt-3 md:mt-3 lg:mt-0 2xl:mt-0 group-hover:text-white">
                  Lorem ipsum dolor sit amet, consectetur adipisic do eiusmod
                  tempor incididunt ut labo et sit amet, consectetur adipisic
                  do eiusmod consectetur adipisic do eiusmod
                </p>
              </span>
            </div>
          </div>

          <div
            className="2xl:w-[735px] lg:w-[670px] w-full h-full lg:h-[148px] bg-white mt-10 hover:bg-secondaryColor duration-500 hover:cursor-pointer group"
            style={{
              boxShadow: "0px 4px 45px 0px rgba(151, 150, 150, 0.30)",
            }}
          >
            <div className="lg:flex items-center gap-8 2xl:p-7 lg:p-4 md:p-6 p-4">
              <img
                className="lg:w-[60px] lg:h-[60px] w-20 h-20 md:w-24 md:h-24 mx-auto md:mx-0 lg:mx-0"
                src={house2}
                alt=""
              />

              <span>
                <h1 className="text-black text-[32px] font-Teko font-medium leading-8 mt-4 md:mt-4 lg:mt-0 2xl:mt-0 group-hover:text-white">
                Perfect Location with stunning views
                </h1>
                <p className="text-[#263238] text-justify text-[16px] font-Lato font-normal leading-8 mt-3 md:mt-3 lg:mt-0 2xl:mt-0 group-hover:text-white">
                  Lorem ipsum dolor sit amet, consectetur adipisic do eiusmod
                  tempor incididunt ut labo et sit amet, consectetur adipisic
                  do eiusmod consectetur adipisic do eiusmod
                </p>
              </span>
            </div>
          </div>

          <div
            className="2xl:w-[735px] lg:w-[670px] w-full h-full lg:h-[148px] bg-white mt-10 hover:bg-secondaryColor duration-500 hover:cursor-pointer group"
            style={{
              boxShadow: "0px 4px 45px 0px rgba(151, 150, 150, 0.30)",
            }}
          >
            <div className="lg:flex items-center gap-8 2xl:p-7 lg:p-4 md:p-6 p-4">
              <img
                className="lg:w-[60px] lg:h-[60px] w-20 h-20 md:w-24 md:h-24 mx-auto md:mx-0 lg:mx-0"
                src={house3}
                alt=""
              />

              <span>
                <h1 className="text-black text-[32px] font-Teko font-medium leading-8 mt-4 md:mt-4 lg:mt-0 2xl:mt-0 group-hover:text-white">
                Recent Real Estate Commercial Transaction
                </h1>
                <p className="text-[#263238] text-justify text-[16px] font-Lato font-normal leading-8 mt-3 md:mt-3 lg:mt-0 2xl:mt-0 group-hover:text-white">
                  Lorem ipsum dolor sit amet, consectetur adipisic do eiusmod
                  tempor incididunt ut labo et sit amet, consectetur adipisic
                  do eiusmod consectetur adipisic do eiusmod
                </p>
              </span>
            </div>
          </div>

          <button className="bg-[#F90] text-white text-[16px] mt-[32px] font-Lato font-normal w-[170px] h-[56px] custom-border-property hover:bg-[#375E97] duration-500">
          Read More
        </button>
        </div>

       


      </div>

     
    </div>
  </div>





    //********************  About hero section end here **************************//
    //******************** ########################  **************************//
  );
};

export default About;

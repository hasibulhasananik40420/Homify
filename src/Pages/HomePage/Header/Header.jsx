const Header = () => {
  //********************  Header section start here **************************//
  //******************** ##########################  **************************//

  return (
    // <div className="max-w-[1680px] mx-auto lg:px-8 2xl:px-0 px-4 md:px-4 ">
    //   <div className="2xl:flex 2xl:gap-[120px] lg:flex lg:gap-[50px]">
    //     <div className="2xl:mt-[200px] mt-20">
    //       <h1 className="text-secondaryColor 2xl:text-[82px] lg:text-[75px] font-Teko font-bold 2xl:leading-[110px] lg:leading-[90px] tracking-[2.46px] 2xl:w-[719px] lg:w-[650px]">
    //         The Real{" "}
    //         <span className="text-primary 2xl:text-[82px] lg:text-[75px] font-Teko font-bold 2xl:leading-[110px] lg:leading-[90px] tracking-[2.46px]">
    //           Destination to Buy and
    //         </span>{" "}
    //         Sell your Properties
    //       </h1>

    //       <p className="text-[#2E2D2D] text-[16px] font-Lato font-normal leading-8 2xl:w-[738px] lg:w-[600px] mt-1">
    //         Many Landlords and Property owners wants to Lend their property safe
    //         and secured via online platform but most of the online platform made
    //         by Real Estate Company or brokers party. Those who want to rent and
    //         want to lend both parties will get online platform. Many Landlords
    //         and Property owners wants. but most of the online platform made by
    //         Real Estate or broker party.
    //       </p>

    //       <button className="bg-[#F90] text-white text-[16px] font-Lato font-bold mt-10 w-[190px] h-[56px] custom-border-property hover:border-[2px] hover:border-[#F90] hover:bg-white duration-500 hover:text-[#F90]">
    //         Read More
    //       </button>

    //       <div className="flex justify-center items-center gap-5 mt-[72px]">
    //         <div
    //           className="w-[150px] h-[150px] bg-primary px-10 py-6"
    //           style={{
    //             borderRadius: "45px 45px 45px 0px",
    //             boxShadow: "0px 4px 60px 0px rgba(0, 0, 0, 0.23)",
    //           }}
    //         >
    //           <h1 className="text-[30px] text-white font-Lato font-bold">
    //             500+
    //           </h1>
    //           <h1 className="text-[16px] text-white font-Lato font-normal leading-6 w-[72px]">
    //             Home for Sale
    //           </h1>
    //         </div>

    //         <div
    //           className="w-[150px] h-[150px] bg-primary px-10 py-6"
    //           style={{
    //             borderRadius: "45px 45px 45px 0px",
    //             boxShadow: "0px 4px 60px 0px rgba(0, 0, 0, 0.23)",
    //           }}
    //         >
    //           <h1 className="text-[30px] text-white font-Lato font-bold">
    //             20+
    //           </h1>
    //           <h1 className="text-[16px] text-white font-Lato font-normal leading-6 w-[72px]">
    //             Skilled Agents
    //           </h1>
    //         </div>

    //         <div
    //           className="w-[150px] h-[150px] bg-primary px-10 py-6"
    //           style={{
    //             borderRadius: "45px 45px 45px 0px",
    //             boxShadow: "0px 4px 60px 0px rgba(0, 0, 0, 0.23)",
    //           }}
    //         >
    //           <h1 className="text-[30px] text-white font-Lato font-bold">
    //             100%
    //           </h1>
    //           <h1 className="text-[16px] text-white font-Lato font-normal leading-6 w-[72px]">
    //             Customers Satisfaction
    //           </h1>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="2xl:w-[785px] lg:w-[600px] 2xl:h-[933px] lg:h-[600px] 2xl:mt-[95px] lg:mt-16">
    //       <img
    //         className="2xl:w-[785px] lg:w-[600px] 2xl:h-[933px] lg:h-[600px] bg-red-500"
    //         style={{
    //           borderRadius: "100px 100px 100px 0px",
    //           boxShadow: "0px 4px 60px 0px rgba(215, 209, 209, 0.25)",
    //         }}
    //         src={headerImage}
    //         alt=""
    //       />
    //     </div>
    //   </div>

    // </div>

    <div>
      <div className="herader-image h-[120vh] bg-cover bg-no-repeat bg-center flex justify-center items-center">
        <div className="text-center">
          <h1 className="stoke-design text-[82px] font-extrabold font-Lato  w-[1138px] mx-auto text-center">
            The Real Destination to Buy and Sell your Properties
          </h1>

          <p className="text-[#FAFAFA] 2xl:text-[20px] lg:text-[16px] font-Lato font-normal leading-8   w-[900px] mx-auto mt-10 mb-5">
            Many Landlords and Property owners wants to Lend their property safe
            and securedvia online platform but most of the online platform made
            by Real Estate Company or brokers party. Those who want to rent and
            want to lend both parties will get online platform. Many Landlords
            and Property owners wants. but most of the online platform made by
            Real Estate or broker party.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center gap-5 mt-[-80px]">
        <div
          className="w-[150px] h-[150px] bg-primary px-10 py-6 hover:bg-secondaryColor hover:cursor-pointer duration-500"
          style={{
            borderRadius: "45px 45px 45px 0px",
            boxShadow: "0px 4px 60px 0px rgba(0, 0, 0, 0.23)",
          }}
        >
          <h1 className="text-[30px] text-white font-Lato font-bold">500+</h1>
          <h1 className="text-[16px] text-white font-Lato font-normal leading-6 w-[72px]">
            Home for Sale
          </h1>
        </div>

        <div
          className="w-[150px] h-[150px] bg-primary px-10 py-6 hover:bg-secondaryColor hover:cursor-pointer duration-500"
          style={{
            borderRadius: "45px 45px 45px 0px",
            boxShadow: "0px 4px 60px 0px rgba(0, 0, 0, 0.23)",
          }}
        >
          <h1 className="text-[30px] text-white font-Lato font-bold">20+</h1>
          <h1 className="text-[16px] text-white font-Lato font-normal leading-6 w-[72px]">
            Skilled Agents
          </h1>
        </div>

        <div
          className="w-[150px] h-[150px] bg-primary px-10 py-6 hover:bg-secondaryColor hover:cursor-pointer duration-500"
          style={{
            borderRadius: "45px 45px 45px 0px",
            boxShadow: "0px 4px 60px 0px rgba(0, 0, 0, 0.23)",
          }}
        >
          <h1 className="text-[30px] text-white font-Lato font-bold">100%</h1>
          <h1 className="text-[16px] text-white font-Lato font-normal leading-6 w-[72px]">
            Customers Satisfaction
          </h1>
        </div>
      </div>
    </div>

    //********************  Header section end here **************************//
    //******************** ##########################  **************************//
  );
};

export default Header;

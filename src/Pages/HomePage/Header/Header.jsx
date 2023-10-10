const Header = () => {
  return (
    <div>
      <div className="herader-image h-[120vh] bg-cover bg-fixed bg-no-repeat bg-center flex justify-center items-center">
        <div className="text-center">
          <h1 className="stoke-design text-[82px] font-bold font-Lato  w-[1138px] mx-auto text-center">
            The Real Destination to Buy and Sell your Properties
          </h1>

          <p className="text-[#FAFAFA] 2xl:text-[20px] lg:text-[16px] font-Lato font-normal leading-8   w-[900px] mx-auto mt-10 mb-5">
            Many Landlords and Property owners want to lend their property
            safely and securely via an online platform, but most of the online
            platforms are made by Real Estate Companies or broker parties. Those
            who want to rent and want to lend, both parties will get an online
            platform. Many Landlords and Property owners want this, but most of
            the online platforms are made by Real Estate or broker parties.
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
  );
};

export default Header;

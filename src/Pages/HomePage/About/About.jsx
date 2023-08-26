import about from "../../../assets/About-hero-image/about.png";
const About = () => {
  return (
    //********************  About hero section start here **************************//
    //******************** ##########################  **************************//

    <div className="max-w-container mx-auto lg:px-8 2xl:px-0 px-4 md:px-8 2xl:pt-32 lg:pt-[100px] md:pt-[80px] pt-16">
      <div className="lg:flex 2xl:flex lg:gap-[50px] 2xl:gap-[50px] justify-between">
        <div className="2xl:w-[603px] lg:w-[603px] w-full">
          <img
            className="2xl:w-[603px] lg:w-[603px] w-full 2xl:h-[479px] lg:[479px] md:h-[479px] h-full"
            src={about}
            alt=""
          />
        </div>

        <div className="2xl:w-[717px] lg:w-[660px] w-full">
          <h1 className="lg:text-[56px] md:text-[56px] text-[32px] font-Teko font-bold text-[#375E97] mt-16 md:mt-16 lg:mt-0 2xl:mt-0">
            About US
          </h1>
          <p className="2xl:w-[717px] lg:w-[660px] font-Lato text-[16px] font-normal text-black leading-8 pt-[20px]">
            Lorem ipsum dolor sit amet. Aut voluptatum unde aut odit reiciendis
            autsunt suscipit qui Quis illo sed q quisquam et consequatur ipsum.
            At temporibus autem sed eveniet cupiditate etmodi laborio sam aut
            quia delectus qui nihil doloruma tenetur totam 33 ratione
            praesentium. Ea enim aliquid ex accusamus omnis ut necessitatibus
            consequatur aut facere iste id illo omnis eum assumenda doloremque
            aut aliquid ratione. sam aut quia delectus qui nihil doloruma
            tenetur totam 33 ratione praesentium. Ea enim aliquid ex accusamus
            omnis ut necessitatibus consequatur aut facere iste id illo omnis
            eum assumenda sam aut quia delectus qui nihil doloruma tenetur totam
            33 ratione praesentium. Ea enim aliquid ex
          </p>

          <button className="bg-[#F90] text-white text-[16px] mt-[35px] font-Lato font-bold w-[170px] h-[56px] custom-border-property  hover:bg-[#375E97] duration-500">
            Read More
          </button>
        </div>
      </div>
    </div>

    //********************  About hero section end here **************************//
    //******************** ########################  **************************//
  );
};

export default About;

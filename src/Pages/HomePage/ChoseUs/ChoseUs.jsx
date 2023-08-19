import choseimage from '../../../../src/assets/Chose-us-image/chose-vector.svg'
const ChoseUs = () => {

  return (
    //********************  Chose us section start here **************************//
    //******************** ##########################  **************************//

    <div className="max-w-container mx-auto lg:px-8 2xl:px-0 px-4 md:px-4 pt-32">
      <div className="lg:flex 2xl:flex lg:gap-[50px] 2xl:gap-[50px] justify-between">
        <div className="2xl:w-[607px] lg:w-[607px] md:[500px] w-full md:mx-auto">
          <img className="2xl:w-[607px] lg:w-[607px] md:[500px] w-full md:mx-auto h-[460px]" src={choseimage} alt="" />
        </div>

        <div className="2xl:w-[717px] lg:w-[660px]">
          <h1 className="text-[56px] font-Teko font-bold text-[#375E97]">
            Why Chose us?
          </h1>
          <p className="2xl:w-[717px] lg:w-[660px] font-Lato text-[16px] font-normal text-black leading-8 pt-[20px]">
            Lorem ipsum dolor sit amet. Aut voluptatum unde aut odit reiciendis
            aut a sunt suscipit qui Quis illo sed quam quisquam et consequatur
            ipsum. At temporibus autem sed eveniet cupiditate etmodi laborio sam
            aut quia delectus qui nihil doloruma tenetur totam 33 ratione
            praesentium. Ea enim aliquid ex accusamus omnis ut necessitatibus
            consequatur aut facere iste id illo omnis eum assumenda doloremque
            aut aliquid ratione. Quis illo sed quam quisquam et consequatur
            ipsum. At temporibus autem sed eveniet Quis illo sed quam quisquam
            et consequatur ipsum. At temporibus autem sed eveniet Quis illo sed
            quam quisquam et consequatur ipsum. At temporibus autem sed eveniet
            seed quim
          </p>

          <button className="bg-[#F90] text-white text-[16px] mt-[35px] font-Lato font-bold w-[170px] h-[56px] custom-border-property  hover:bg-[#375E97] duration-500">
          Read More
            </button>
        </div>
      </div>
    </div>

    //********************  Chose us section end here **************************//
    //******************** ########################  **************************//
  );
};

export default ChoseUs;

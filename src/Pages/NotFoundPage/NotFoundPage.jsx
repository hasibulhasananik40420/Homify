import CommonAction from "../../components/CommonAction/CommonAction";
import errorImage from '../../assets/Error-image/error-image.svg'
const NotFoundPage = () => {
  return (
    //********************  Error section start here **************************//
    <div>
      <CommonAction title={"Error 404"} subTitle={"Home> 404"} />

      <div className="max-w-container mx-auto lg:px-8 2xl:px-0 px-4 md:px-4">
        <div className="2xl:flex 2xl:gap-[122px] lg:flex lg:gap-2 py-32">
          <div>
            <h1 className="text-[#008DA2] 2xl:text-[194px] lg:text-[150px] md:text-[194px] text-[100px] font-Lato font-extrabold leading-[147px]">
              O
              <span className="text-[#008DA2] 2xl:text-[150px] lg:text-[120px] md:text-[150px] text-[100px] font-Lato font-extrabold leading-[147px]">
                OPS!
              </span>
            </h1>

            <p className="text-[#3E348F] 2xl:text-[72px] lg:text-[56px] md:text-[56px] text-[30px] font-Lato font-bold mt-3 md:mt-10">
              PAGE NOT FOUND
            </p>
            <p className="text-black 2xl:text-[56px] lg:text-[40px] md:text-[56px] text-[30px] font-Lato font-bold mt-4 2xl:w-[628px] lg:w-[628px]  w-full 2xl:leading-[60px] lg:leading-[50px]">
              We can’t seem to find the Page you’re looking for
            </p>

            <p className="text-[#7885FF] 2xl:text-[56px] lg:text-[40px] md:text-[56px] text-[30px] font-Lato font-bold mt-[55px] leading-[60px]">
            Error Code-404
            </p>

            <button className="bg-[#F90] text-white text-[16px] font-Lato font-bold w-[234px] h-[56px] mt-8 md:mt-16 custom-border-property hover:bg-primary duration-500 ">
            Go Home Back
               </button>

          </div>

          <div>
            <img className="2xl:w-[689px] 2xl:h-[664px] lg:w-[689px] lg:h-[664px] md:w-[689px] md:h-[664px] w-full h-[500px] md:mt-24 mt-6 lg:mt-0 2xl:mt-0" src={errorImage} alt="" />
          </div>
        </div>
      </div>
    </div>

    //********************  Error section start here **************************//
  );
};

export default NotFoundPage;

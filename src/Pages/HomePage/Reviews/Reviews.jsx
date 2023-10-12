import ReviewsSlider from "../../HomeTwo/Reviews/ReviewsSlider";



const Reviews = () => {
  return (
    //******************** reviews section start here **************************//
    //******************** ##########################  **************************//
    <div className="max-w-container mx-auto lg:px-8 2xl:px-0 px-4 md:px-8 2xl:pt-32 lg:pt-[100px] md:pt-[80px] pt-16">

      <div className="">
      <h1 className="text-[#504594] lg:text-[56px] md:text-[56px] text-[32px] font-Teko font-bold text-center">
          Meet our Happy Customer
        </h1>

        <p className="text-[#737373] text-[20px] font-Lato font-normal text-center">
          There are thousands of satisfied customers. Here are some happy
          customers open feedback.
        </p>
         
          {/************* slider component here ***************/}
         <div className="mt-20">
         <ReviewsSlider/>
         </div>
           {/************* slider component here ***************/}
     
      </div>
    </div>

    //******************** reviews section end here **************************//
    //******************** ##########################  **************************//
  );
};

export default Reviews;

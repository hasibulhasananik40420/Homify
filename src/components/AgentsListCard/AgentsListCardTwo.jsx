import { FaFacebookF, FaLinkedinIn, FaTelegramPlane } from 'react-icons/fa'
import agents1 from '../../assets/Agents-images/agent-v2.png'
import agents2 from '../../assets/Agents-images/agent-v2-2.png'
import agents3 from '../../assets/Agents-images/agent-v2-3.png'
import { AiOutlineTwitter } from 'react-icons/ai'

const AgentsListCardTwo = () => {
  return (
    <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3  gap-x-[20px] gap-y-[50px] justify-items-center my-20">



           
      {/******************* agent card 1 start here *******************/}
      <div className="2xl:w-[466px] lg:w-[400px] md:w-[350px] w-full relative">
        <img
          className="2xl:w-[466px] lg:w-[400px] md:w-[350px] w-full h-[420px]"
          src={agents1}
          alt=""
        />

          {/********************** socal media icon start here *************************/}

          <div className="flex gap-5 justify-center absolute inset-0 pt-20 items-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-500 cursor-pointer">
              <span className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-blue-600 hover:bg-secondaryColor duration-500 transform ease-in-out hover:translate-y-2 cursor-pointer">
                <FaFacebookF className="text-white text-[25px]" />
              </span>

              <span className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-blue-600 hover:bg-secondaryColor duration-500 transform ease-in-out hover:translate-y-2 cursor-pointer">
                <FaLinkedinIn className="text-white text-[25px]" />
              </span>

              <span className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-blue-600 hover:bg-secondaryColor duration-500 transform ease-in-out hover:translate-y-2 cursor-pointer">
                <AiOutlineTwitter className="text-white text-[25px]" />
              </span>

              <span className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-blue-600 hover:bg-secondaryColor duration-500 transform ease-in-out hover:translate-y-2 cursor-pointer">
                <FaTelegramPlane className="text-white text-[25px]" />
              </span>
            </div>

            {/********************** socal media icon end here *************************/}


        <div
          className="bg-white pt-6 lg:pl-12 2xl:pl-20 md:pl-6 pl-6 pb-8"
          style={{ boxShadow: "0px 4px 45px 0px rgba(155, 153, 153, 0.30)" }}
        >

             <h1 className='text-primary text-[32px] font-Teko font-bold'>Water Smith</h1>
             <p className='text-black text-[20px] font-Lato font-bold '>Real Estate Agent</p>
             <p className='text-black text-[20px] font-Lato font-bold pt-[2px]'>Email: watersmiths@gmail.com</p>
             <p className='text-black text-[20px] font-Lato font-bold pt-[2px]'>Phone: +12343 896 678</p>
         
        </div>
      </div>
      {/******************* agent card 1 end here *******************/}



  {/******************* agent card 1 start here *******************/}
      <div className="2xl:w-[466px] lg:w-[400px] md:w-[350px] w-full relative">
        <img
          className="2xl:w-[466px] lg:w-[400px] md:w-[350px] w-full h-[420px]"
          src={agents2}
          alt=""
        />

          {/********************** socal media icon start here *************************/}

          <div className="flex gap-5 justify-center absolute inset-0 pt-20 items-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-500 cursor-pointer">
              <span className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-blue-600 hover:bg-secondaryColor duration-500 transform ease-in-out hover:translate-y-2 cursor-pointer">
                <FaFacebookF className="text-white text-[25px]" />
              </span>

              <span className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-blue-600 hover:bg-secondaryColor duration-500 transform ease-in-out hover:translate-y-2 cursor-pointer">
                <FaLinkedinIn className="text-white text-[25px]" />
              </span>

              <span className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-blue-600 hover:bg-secondaryColor duration-500 transform ease-in-out hover:translate-y-2 cursor-pointer">
                <AiOutlineTwitter className="text-white text-[25px]" />
              </span>

              <span className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-blue-600 hover:bg-secondaryColor duration-500 transform ease-in-out hover:translate-y-2 cursor-pointer">
                <FaTelegramPlane className="text-white text-[25px]" />
              </span>
            </div>

            {/********************** socal media icon end here *************************/}


        <div
          className="bg-white pt-6 lg:pl-12 2xl:pl-20 md:pl-6 pl-6 pb-8"
          style={{ boxShadow: "0px 4px 45px 0px rgba(155, 153, 153, 0.30)" }}
        >

             <h1 className='text-primary text-[32px] font-Teko font-bold'>Lilly Little</h1>
             <p className='text-black text-[20px] font-Lato font-bold '>Real Estate Agent</p>
             <p className='text-black text-[20px] font-Lato font-bold pt-[2px]'>Email: watersmiths@gmail.com</p>
             <p className='text-black text-[20px] font-Lato font-bold pt-[2px]'>Phone: +12343 896 678</p>
         
        </div>
      </div>
      {/******************* agent card 1 end here *******************/}



  {/******************* agent card 1 start here *******************/}
      <div className="2xl:w-[466px] lg:w-[400px] md:w-[350px] w-full relative">
        <img
          className="2xl:w-[466px] lg:w-[400px] md:w-[350px] w-full h-[420px]"
          src={agents3}
          alt=""
        />

          {/********************** socal media icon start here *************************/}

          <div className="flex gap-5 justify-center absolute inset-0 pt-20 items-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-500 cursor-pointer">
              <span className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-blue-600 hover:bg-secondaryColor duration-500 transform ease-in-out hover:translate-y-2 cursor-pointer">
                <FaFacebookF className="text-white text-[25px]" />
              </span>

              <span className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-blue-600 hover:bg-secondaryColor duration-500 transform ease-in-out hover:translate-y-2 cursor-pointer">
                <FaLinkedinIn className="text-white text-[25px]" />
              </span>

              <span className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-blue-600 hover:bg-secondaryColor duration-500 transform ease-in-out hover:translate-y-2 cursor-pointer">
                <AiOutlineTwitter className="text-white text-[25px]" />
              </span>

              <span className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-blue-600 hover:bg-secondaryColor duration-500 transform ease-in-out hover:translate-y-2 cursor-pointer">
                <FaTelegramPlane className="text-white text-[25px]" />
              </span>
            </div>

            {/********************** socal media icon end here *************************/}


        <div
          className="bg-white pt-6 lg:pl-12 2xl:pl-20 md:pl-6 pl-6 pb-8"
          style={{ boxShadow: "0px 4px 45px 0px rgba(155, 153, 153, 0.30)" }}
        >

             <h1 className='text-primary text-[32px] font-Teko font-bold'>Jellah Herman</h1>
             <p className='text-black text-[20px] font-Lato font-bold '>Real Estate Agent</p>
             <p className='text-black text-[20px] font-Lato font-bold pt-[2px]'>Email: watersmiths@gmail.com</p>
             <p className='text-black text-[20px] font-Lato font-bold pt-[2px]'>Phone: +12343 896 678</p>
         
        </div>
      </div>
      {/******************* agent card 1 end here *******************/}



  {/******************* agent card 1 start here *******************/}
      <div className="2xl:w-[466px] lg:w-[400px] md:w-[350px] w-full relative">
        <img
          className="2xl:w-[466px] lg:w-[400px] md:w-[350px] w-full h-[420px]"
          src={agents1}
          alt=""
        />

          {/********************** socal media icon start here *************************/}

          <div className="flex gap-5 justify-center absolute inset-0 pt-20 items-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-500 cursor-pointer">
              <span className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-blue-600 hover:bg-secondaryColor duration-500 transform ease-in-out hover:translate-y-2 cursor-pointer">
                <FaFacebookF className="text-white text-[25px]" />
              </span>

              <span className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-blue-600 hover:bg-secondaryColor duration-500 transform ease-in-out hover:translate-y-2 cursor-pointer">
                <FaLinkedinIn className="text-white text-[25px]" />
              </span>

              <span className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-blue-600 hover:bg-secondaryColor duration-500 transform ease-in-out hover:translate-y-2 cursor-pointer">
                <AiOutlineTwitter className="text-white text-[25px]" />
              </span>

              <span className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-blue-600 hover:bg-secondaryColor duration-500 transform ease-in-out hover:translate-y-2 cursor-pointer">
                <FaTelegramPlane className="text-white text-[25px]" />
              </span>
            </div>

            {/********************** socal media icon end here *************************/}


        <div
          className="bg-white pt-6 lg:pl-12 2xl:pl-20 md:pl-6 pl-6 pb-8"
          style={{ boxShadow: "0px 4px 45px 0px rgba(155, 153, 153, 0.30)" }}
        >

             <h1 className='text-primary text-[32px] font-Teko font-bold'>Water Smith</h1>
             <p className='text-black text-[20px] font-Lato font-bold '>Real Estate Agent</p>
             <p className='text-black text-[20px] font-Lato font-bold pt-[2px]'>Email: watersmiths@gmail.com</p>
             <p className='text-black text-[20px] font-Lato font-bold pt-[2px]'>Phone: +12343 896 678</p>
         
        </div>
      </div>
      {/******************* agent card 1 end here *******************/}



  {/******************* agent card 1 start here *******************/}
      <div className="2xl:w-[466px] lg:w-[400px] md:w-[350px] w-full relative">
        <img
          className="2xl:w-[466px] lg:w-[400px] md:w-[350px] w-full h-[420px]"
          src={agents1}
          alt=""
        />

          {/********************** socal media icon start here *************************/}

          <div className="flex gap-5 justify-center absolute inset-0 pt-20 items-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-500 cursor-pointer">
              <span className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-blue-600 hover:bg-secondaryColor duration-500 transform ease-in-out hover:translate-y-2 cursor-pointer">
                <FaFacebookF className="text-white text-[25px]" />
              </span>

              <span className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-blue-600 hover:bg-secondaryColor duration-500 transform ease-in-out hover:translate-y-2 cursor-pointer">
                <FaLinkedinIn className="text-white text-[25px]" />
              </span>

              <span className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-blue-600 hover:bg-secondaryColor duration-500 transform ease-in-out hover:translate-y-2 cursor-pointer">
                <AiOutlineTwitter className="text-white text-[25px]" />
              </span>

              <span className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-blue-600 hover:bg-secondaryColor duration-500 transform ease-in-out hover:translate-y-2 cursor-pointer">
                <FaTelegramPlane className="text-white text-[25px]" />
              </span>
            </div>

            {/********************** socal media icon end here *************************/}


        <div
          className="bg-white pt-6 lg:pl-12 2xl:pl-20 md:pl-6 pl-6 pb-8"
          style={{ boxShadow: "0px 4px 45px 0px rgba(155, 153, 153, 0.30)" }}
        >

             <h1 className='text-primary text-[32px] font-Teko font-bold'>Water Smith</h1>
             <p className='text-black text-[20px] font-Lato font-bold '>Real Estate Agent</p>
             <p className='text-black text-[20px] font-Lato font-bold pt-[2px]'>Email: watersmiths@gmail.com</p>
             <p className='text-black text-[20px] font-Lato font-bold pt-[2px]'>Phone: +12343 896 678</p>
         
        </div>
      </div>
      {/******************* agent card 1 end here *******************/}



  {/******************* agent card 1 start here *******************/}
      <div className="2xl:w-[466px] lg:w-[400px] md:w-[350px] w-full relative">
        <img
          className="2xl:w-[466px] lg:w-[400px] md:w-[350px] w-full h-[420px]"
          src={agents1}
          alt=""
        />

          {/********************** socal media icon start here *************************/}

          <div className="flex gap-5 justify-center absolute inset-0 pt-20 items-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-500 cursor-pointer">
              <span className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-blue-600 hover:bg-secondaryColor duration-500 transform ease-in-out hover:translate-y-2 cursor-pointer">
                <FaFacebookF className="text-white text-[25px]" />
              </span>

              <span className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-blue-600 hover:bg-secondaryColor duration-500 transform ease-in-out hover:translate-y-2 cursor-pointer">
                <FaLinkedinIn className="text-white text-[25px]" />
              </span>

              <span className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-blue-600 hover:bg-secondaryColor duration-500 transform ease-in-out hover:translate-y-2 cursor-pointer">
                <AiOutlineTwitter className="text-white text-[25px]" />
              </span>

              <span className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-blue-600 hover:bg-secondaryColor duration-500 transform ease-in-out hover:translate-y-2 cursor-pointer">
                <FaTelegramPlane className="text-white text-[25px]" />
              </span>
            </div>

            {/********************** socal media icon end here *************************/}


        <div
          className="bg-white pt-6 lg:pl-12 2xl:pl-20 md:pl-6 pl-6 pb-8"
          style={{ boxShadow: "0px 4px 45px 0px rgba(155, 153, 153, 0.30)" }}
        >

             <h1 className='text-primary text-[32px] font-Teko font-bold'>Water Smith</h1>
             <p className='text-black text-[20px] font-Lato font-bold '>Real Estate Agent</p>
             <p className='text-black text-[20px] font-Lato font-bold pt-[2px]'>Email: watersmiths@gmail.com</p>
             <p className='text-black text-[20px] font-Lato font-bold pt-[2px]'>Phone: +12343 896 678</p>
         
        </div>
      </div>
      {/******************* agent card 1 end here *******************/}



  {/******************* agent card 1 start here *******************/}
      <div className="2xl:w-[466px] lg:w-[400px] md:w-[350px] w-full relative">
        <img
          className="2xl:w-[466px] lg:w-[400px] md:w-[350px] w-full h-[420px]"
          src={agents1}
          alt=""
        />

          {/********************** socal media icon start here *************************/}

          <div className="flex gap-5 justify-center absolute inset-0 pt-20 items-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-500 cursor-pointer">
              <span className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-blue-600 hover:bg-secondaryColor duration-500 transform ease-in-out hover:translate-y-2 cursor-pointer">
                <FaFacebookF className="text-white text-[25px]" />
              </span>

              <span className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-blue-600 hover:bg-secondaryColor duration-500 transform ease-in-out hover:translate-y-2 cursor-pointer">
                <FaLinkedinIn className="text-white text-[25px]" />
              </span>

              <span className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-blue-600 hover:bg-secondaryColor duration-500 transform ease-in-out hover:translate-y-2 cursor-pointer">
                <AiOutlineTwitter className="text-white text-[25px]" />
              </span>

              <span className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-blue-600 hover:bg-secondaryColor duration-500 transform ease-in-out hover:translate-y-2 cursor-pointer">
                <FaTelegramPlane className="text-white text-[25px]" />
              </span>
            </div>

            {/********************** socal media icon end here *************************/}


        <div
          className="bg-white pt-6 lg:pl-12 2xl:pl-20 md:pl-6 pl-6 pb-8"
          style={{ boxShadow: "0px 4px 45px 0px rgba(155, 153, 153, 0.30)" }}
        >

             <h1 className='text-primary text-[32px] font-Teko font-bold'>Water Smith</h1>
             <p className='text-black text-[20px] font-Lato font-bold '>Real Estate Agent</p>
             <p className='text-black text-[20px] font-Lato font-bold pt-[2px]'>Email: watersmiths@gmail.com</p>
             <p className='text-black text-[20px] font-Lato font-bold pt-[2px]'>Phone: +12343 896 678</p>
         
        </div>
      </div>
      {/******************* agent card 1 end here *******************/}



  {/******************* agent card 1 start here *******************/}
      <div className="2xl:w-[466px] lg:w-[400px] md:w-[350px] w-full relative">
        <img
          className="2xl:w-[466px] lg:w-[400px] md:w-[350px] w-full h-[420px]"
          src={agents1}
          alt=""
        />

          {/********************** socal media icon start here *************************/}

          <div className="flex gap-5 justify-center absolute inset-0 pt-20 items-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-500 cursor-pointer">
              <span className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-blue-600 hover:bg-secondaryColor duration-500 transform ease-in-out hover:translate-y-2 cursor-pointer">
                <FaFacebookF className="text-white text-[25px]" />
              </span>

              <span className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-blue-600 hover:bg-secondaryColor duration-500 transform ease-in-out hover:translate-y-2 cursor-pointer">
                <FaLinkedinIn className="text-white text-[25px]" />
              </span>

              <span className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-blue-600 hover:bg-secondaryColor duration-500 transform ease-in-out hover:translate-y-2 cursor-pointer">
                <AiOutlineTwitter className="text-white text-[25px]" />
              </span>

              <span className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-blue-600 hover:bg-secondaryColor duration-500 transform ease-in-out hover:translate-y-2 cursor-pointer">
                <FaTelegramPlane className="text-white text-[25px]" />
              </span>
            </div>

            {/********************** socal media icon end here *************************/}


        <div
          className="bg-white pt-6 lg:pl-12 2xl:pl-20 md:pl-6 pl-6 pb-8"
          style={{ boxShadow: "0px 4px 45px 0px rgba(155, 153, 153, 0.30)" }}
        >

             <h1 className='text-primary text-[32px] font-Teko font-bold'>Water Smith</h1>
             <p className='text-black text-[20px] font-Lato font-bold '>Real Estate Agent</p>
             <p className='text-black text-[20px] font-Lato font-bold pt-[2px]'>Email: watersmiths@gmail.com</p>
             <p className='text-black text-[20px] font-Lato font-bold pt-[2px]'>Phone: +12343 896 678</p>
         
        </div>
      </div>
      {/******************* agent card 1 end here *******************/}



  {/******************* agent card 1 start here *******************/}
      <div className="2xl:w-[466px] lg:w-[400px] md:w-[350px] w-full relative">
        <img
          className="2xl:w-[466px] lg:w-[400px] md:w-[350px] w-full h-[420px]"
          src={agents1}
          alt=""
        />

          {/********************** socal media icon start here *************************/}

          <div className="flex gap-5 justify-center absolute inset-0 pt-20 items-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-500 cursor-pointer">
              <span className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-blue-600 hover:bg-secondaryColor duration-500 transform ease-in-out hover:translate-y-2 cursor-pointer">
                <FaFacebookF className="text-white text-[25px]" />
              </span>

              <span className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-blue-600 hover:bg-secondaryColor duration-500 transform ease-in-out hover:translate-y-2 cursor-pointer">
                <FaLinkedinIn className="text-white text-[25px]" />
              </span>

              <span className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-blue-600 hover:bg-secondaryColor duration-500 transform ease-in-out hover:translate-y-2 cursor-pointer">
                <AiOutlineTwitter className="text-white text-[25px]" />
              </span>

              <span className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-blue-600 hover:bg-secondaryColor duration-500 transform ease-in-out hover:translate-y-2 cursor-pointer">
                <FaTelegramPlane className="text-white text-[25px]" />
              </span>
            </div>

            {/********************** socal media icon end here *************************/}


        <div
          className="bg-white pt-6 lg:pl-12 2xl:pl-20 md:pl-6 pl-6 pb-8"
          style={{ boxShadow: "0px 4px 45px 0px rgba(155, 153, 153, 0.30)" }}
        >

             <h1 className='text-primary text-[32px] font-Teko font-bold'>Water Smith</h1>
             <p className='text-black text-[20px] font-Lato font-bold '>Real Estate Agent</p>
             <p className='text-black text-[20px] font-Lato font-bold pt-[2px]'>Email: watersmiths@gmail.com</p>
             <p className='text-black text-[20px] font-Lato font-bold pt-[2px]'>Phone: +12343 896 678</p>
         
        </div>
      </div>
      {/******************* agent card 1 end here *******************/}








        </div>

        <div className="flex justify-center 2xl:pb-32 lg:pb-[100px] md:pb-20 pb-16">
            <button className="bg-[#F90] text-white text-[16px] font-Lato font-bold w-[170px] h-[56px] custom-border-property  hover:bg-primary transform ease-in-out duration-500 ">
            Load More
            </button>
          </div>
    </div>
  )
}

export default AgentsListCardTwo
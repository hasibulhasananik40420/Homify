import videoIcon from '../../../assets/Header/video-icon.svg'
const Video = () => {
  return (
     //******************** video section start here **************************//
  //******************** ##########################  ********************************//
    <div className="max-w-container mx-auto lg:px-8 2xl:px-0 px-4 md:px-8 2xl:mt-32 lg:mt-[100px] md:mt-20 mt-16">
       <div className="relative">
  <img className="2xl:h-[512px] lg:h-[450px] w-full h-full" src="https://img.freepik.com/free-photo/bangkok-thailand-august-12-2016-beautiful-luxury-living-room_1203-2867.jpg?size=626&ext=jpg&ga=GA1.1.1166836568.1647150580&semt=ais" alt="" />
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
    <img className="h-[120px] w-[120px] rounded-full cursor-pointer" src={videoIcon} alt="" />
  </div>
</div>

    </div>

     //******************** video section start here **************************//
  //******************** ##########################  ********************************//
  )
}

export default Video
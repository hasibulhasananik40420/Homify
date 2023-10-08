// import AboutUsTwo from "./AboutUsTwo/AboutUsTwo"
import AgentsTwo from "./AgentsTwo/AgentsTwo"
import Available from "./Available/Available"
import BlogTwo from "./BlogTwo/BlogTwo"
import ChooseUsToo from "./ChooseUsToo/ChooseUsToo"
import CoreServiceTwo from "./CoreServiceTwo/CoreServiceTwo"
import HeaderTwo from "./HeaderTwo/HeaderTwo"
import OurPartner from "./OurPartner/OurPartner"
import PropertyTwo from "./PropertyTwo/PropertyTwo"
import Reviews from "./Reviews/Reviews"
import SellPropertyTwo from "./SellPropertyTwo/SellPropertyTwo"
// import Video from "./Video/Video"

const HomeTwo = () => {
  return (
    <div>
        
        <HeaderTwo/>
        <ChooseUsToo/>
        {/* <Count/> */}
        {/* <AboutUsTwo/> */}
        <CoreServiceTwo/>
        <PropertyTwo/>
        <SellPropertyTwo/>
        <Available/>
        <Reviews/>
        {/* <Video/> */}
        <OurPartner/>
        <AgentsTwo/>
        <BlogTwo/>
        
    </div>
  )
}

export default HomeTwo
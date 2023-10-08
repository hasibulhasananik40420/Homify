import About from "./About/About"
import ChoseUs from "./ChoseUs/ChoseUs"
import CoreService from "./CoreService/CoreService"
import Header from "./Header/Header"
import Newsletter from "./Newsletter/Newsletter"
import OurAgents from "./OurAgents/OurAgents"
import Property from "./Property/Property"
import Reviews from "./Reviews/Reviews"
import SellProperty from "./SellProperty/SellProperty"

const HomePage = () => {
  return (
    <div>
      <Header/>
      <About/>
      <CoreService/>
      <ChoseUs/>
      <Property/>
      <SellProperty/>
      <OurAgents/>
      <Reviews/>
      <Newsletter/>
    </div>
  )
}

export default HomePage
import About from "./About/About"
import ChoseUs from "./ChoseUs/ChoseUs"
import CoreService from "./CoreService/CoreService"
import Header from "./Header/Header"
import OurAgents from "./OurAgents/OurAgents"
import Property from "./Property/Property"

const HomePage = () => {
  return (
    <div>
      <Header/>
      <About/>
      <CoreService/>
      <ChoseUs/>
      <Property/>
     <OurAgents/>
    </div>
  )
}

export default HomePage
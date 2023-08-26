import { Outlet, useLocation } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"

const Main = () => {
   const location = useLocation()

  return (
    <div>
         {/*************** main page start here  ****************/}
         {
          location.pathname =='/home-two'? (
            ''   ) :
            (
              <Navbar/>
            )
        
         }
        
        
        <Outlet/>
        <Footer/>

         {/*************** main page end here  ****************/}
    </div>
  )
}

export default Main
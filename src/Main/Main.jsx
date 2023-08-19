import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"

const Main = () => {
  return (
    <div>
         {/*************** main page start here  ****************/}

        <Navbar/>
        <Outlet/>
        <Footer/>

         {/*************** main page end here  ****************/}
    </div>
  )
}

export default Main
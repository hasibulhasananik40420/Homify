import {useEffect} from "react";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import { RouterProvider } from 'react-router-dom'
import routes from './Routes/routes'

const App = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>

       {/*************** app page start here  ****************/}
      <RouterProvider router={routes} />

       {/*************** app page end here  ****************/}
    </div>
  )
}

export default App
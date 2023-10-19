import { RouterProvider } from 'react-router-dom'
import routes from './Routes/routes'
import Preloader from './components/Preloader/Preloader'

const App = () => {

  return (
    <div>
      <Preloader/>
       {/*************** app page start here  ****************/}
      <RouterProvider router={routes} />

       {/*************** app page end here  ****************/}
    </div>
  )
}

export default App
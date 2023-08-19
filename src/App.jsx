/* eslint-disable no-unused-vars */
import React from 'react'
import { RouterProvider } from 'react-router-dom'
import routes from './Routes/routes'

const App = () => {
  return (
    <div>
       {/*************** app page start here  ****************/}
      <RouterProvider router={routes} />

       {/*************** app page end here  ****************/}
    </div>
  )
}

export default App
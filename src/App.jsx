/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/routes";
import Preloader from "./components/Preloader/Preloader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to show the loader for a brief period
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // Change the delay as needed

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div>
      {loading ? (
        <Preloader />
      ) : (
        <div>
          {/* Your main content goes here */}
          <RouterProvider router={routes} />
        </div>
      )}
    </div>
  );
};

export default App;




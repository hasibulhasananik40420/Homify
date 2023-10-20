import React, { useState, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/routes";
import Preloader from "./components/Preloader/Preloader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.onload = () => {
      // Page has fully loaded
      setLoading(false);
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

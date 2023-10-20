import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import { useEffect } from "react";

const Main = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);



  return (
    <div>
     
      {/*************** main page start here  ****************/}
      {pathname === '/' || pathname === '/home-two' ? "" : <Navbar />}

      <Outlet />
      <ScrollToTop/>
      <Footer />

      {/*************** main page end here  ****************/}
     
    </div>
  );
};

export default Main;

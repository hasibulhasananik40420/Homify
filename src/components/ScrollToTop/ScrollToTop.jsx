import React, { useState, useEffect } from "react";
import { FaArrowAltCircleUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 550) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={handleScrollToTop}
      className={`px-4 sticky bottom-6 float-right right-6 py-2  ${
        isVisible ? "visible" : "hidden"
      }`}
    >
      <FaArrowAltCircleUp className="w-12 h-12"/>
    </button>
  );
};

export default ScrollToTop;

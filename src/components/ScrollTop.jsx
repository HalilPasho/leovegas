import React, { useState, useEffect } from "react";
import "../css/ScrollTop.css";

const ScrollTop = () => {
  const [scrollTopButton, setScrollTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setScrollTopButton(true);
      } else {
        setScrollTopButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };
  return (
    <div>
      {scrollTopButton && (
        <button onClick={scrollToTop} className="back-to-top">
          &#8679;
        </button>
      )}
      {/* &#8679; is used to create the upward arrow */}
    </div>
  );
};

export default ScrollTop;

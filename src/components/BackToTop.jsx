import { useState, useEffect } from "react";
import { TopArrow } from "./common/Icon";
const BackToTop = () => {
  const [isBackToTopVisible, setIsBackToTopVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsBackToTopVisible(true);
      } else {
        setIsBackToTopVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {isBackToTopVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-12 sm:bottom-7 sm:right-7 right-5 sm:w-[54px] sm:h-[54px] w-[48px] h-[48px] shadow-video animate-bounce bg-light-green text-white flex justify-center items-center  rounded-full z-50 transition-all duration-300 ease-linear"
        >
          <TopArrow />
        </button>
      )}
    </>
  );
};
export default BackToTop;

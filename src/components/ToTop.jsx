import { useEffect, useState } from "react";

const ToTop = () => {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 300) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      {showTopButton && (
        <button
          onClick={() => scrollToTop()}
          className="fixed bottom-4 right-4 p-3 rounded-full bg-soft_blue text-white shadow-lg z-30 text-xs"
        >
          &#8593;Top
        </button>
      )}
    </>
  );
};

export default ToTop;

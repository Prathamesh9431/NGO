import { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisible);

    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    visible && (
      <button
        className="scroll-top-btn"
        onClick={scrollToTop}
      >
        <FaChevronUp />
      </button>
    )
  );
}

export default ScrollToTop;